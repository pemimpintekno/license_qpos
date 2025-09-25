import { Elysia, t } from 'elysia';
import { PrismaClient } from '@prisma/client';
import crypto from 'crypto';
import bcrypt from 'bcryptjs';

import { jwt } from '@elysiajs/jwt';
import { html } from '@elysiajs/html';
import { staticPlugin } from '@elysiajs/static';
import { sendLicenseEmail } from './email'; // Import the new email function


// --- INITIALIZATION ---
const prisma = new PrismaClient();
const app = new Elysia();

// --- HELPER FUNCTIONS ---
function generateUniqueKey(): string {
  const randomPart = crypto.randomBytes(15).toString('hex').toUpperCase();
  const chunks = [];
  for (let i = 0; i < randomPart.length; i += 5) {
    chunks.push(randomPart.substring(i, i + 5));
  }
  return chunks.slice(0, 4).join('-');
}


// --- PLUGINS & MIDDLEWARE ---
app
  .use(html())
  .use(staticPlugin())
  .use(
    jwt({
      name: 'jwt',
      secret: process.env.JWT_SECRET || 'your-super-secret-jwt-key-change-me-in-production',
      exp: '7d',
    })
  )
  // This is our authentication guard. It runs before any route in the /admin group.
  .derive(async ({ jwt, headers }) => {
    // Here we ensure profile is not null and has the expected shape
    const token = headers.authorization?.split(' ')[1];
    const profile = await jwt.verify(token);
    if (profile && typeof profile.userId === 'string') {
        return { profile };
    }
    return { profile: null };
  });

app.get('/', ()=> Bun.file('src/public.html'))

// --- PUBLIC API (for the licensed application) ---
app.post('/activate', async ({ body, set }) => {
    const { serialKey, deviceId } = body;
    const keyToActivate = await prisma.licenseKey.findUnique({ where: { serialKey } });

    if (keyToActivate && keyToActivate.status === 'UNUSED') {
      await prisma.licenseKey.update({
        where: { serialKey },
        data: { status: 'ACTIVATED', deviceId, activatedAt: new Date() },
      });
      console.log(`Key ${serialKey} activated for device ${deviceId}`);
      return { success: true, message: 'Application activated successfully.' };
    } else {
      console.warn(`Failed activation attempt for key: ${serialKey}`);
      set.status = 400;
      return { success: false, message: 'Invalid or already used serial key.' };
    }
  },
  {
    body: t.Object({
      serialKey: t.String({ minLength: 1 }),
      deviceId: t.String({ minLength: 1 }),
    }),
  }
);


// --- ADMIN SECTION (Website & Protected API) ---
app.group('/admin', (app) =>
  app
    // --- Admin Website ---
    .get('/', () => Bun.file('src/admin.html'))

    // --- Admin Authentication ---
    .post('/login', async ({ jwt, body, set }) => {
        const admin = await prisma.admin.findUnique({ where: { username: body.username } });
        if (!admin || !(await bcrypt.compare(body.password, admin.password))) {
            set.status = 401;
            return { success: false, message: 'Invalid credentials' };
        }
        const token = await jwt.sign({ userId: admin.id, username: admin.username });
        return { success: true, token };
    }, {
        body: t.Object({
            username: t.String(),
            password: t.String(),
        })
    })
    
    // This middleware protects all subsequent routes in this group
    .onBeforeHandle(({ profile, set }) => {
        if (!profile) {
            set.status = 401;
            return { success: false, message: 'Unauthorized' };
        }
    })

    // --- Protected Admin API Endpoints ---
    .get('/keys', async ({ query }) => {
        const { status } = query;
        const whereClause = status ? { status: status.toUpperCase() } : {};
        // Include the related admin's username when fetching keys
        return await prisma.licenseKey.findMany({ 
            where: whereClause, 
            orderBy: { createdAt: 'desc' },
            include: {
                createdBy: {
                    select: { username: true }
                }
            }
        });
    })

    .post('/keys', async ({ body, set, profile }) => {
        let createdKey;
        try {
            const newKey = generateUniqueKey();
            createdKey = await prisma.licenseKey.create({
                data: { 
                    serialKey: newKey, 
                    email: body.email,
                    // Link the key to the logged-in admin
                    createdById: profile!.userId 
                },
            });
            console.log(`Admin '${profile!.username}' generated new key for ${body.email}`);
        } catch (error: any) {
            if (error.code === 'P2002') {
                set.status = 409;
                return { success: false, message: 'A license key already exists for this email.' };
            }
            console.error("Error creating key:", error);
            set.status = 500;
            return { success: false, message: 'Internal server error during key creation.' };
        }

        // After successfully creating the key, try to send the email.
        try {
            await sendLicenseEmail(createdKey.email!, createdKey.serialKey);
            console.log(`Email sent successfully to ${createdKey.email}`);
            return { success: true, data: createdKey, message: "Key created and email sent successfully." };
        } catch (emailError) {
            console.error(`Failed to send email to ${createdKey.email}:`, emailError);
            return { success: true, data: createdKey, message: "Key created, but the email could not be sent. Please check server logs." };
        }

    }, { body: t.Object({ email: t.String({ format: 'email' }) }) })

    .post('/keys/:id/deactivate', async ({ params, set }) => {
        try {
            const updatedKey = await prisma.licenseKey.update({
                where: { id: params.id },
                data: { status: 'DEACTIVATED', deviceId: null, activatedAt: null },
            });
            return { success: true, data: updatedKey };
        } catch (error) {
            set.status = 404;
            return { success: false, message: 'Key not found.' };
        }
    })

    .delete('/keys/:id', async ({ params, set }) => {
        try {
            await prisma.licenseKey.delete({ where: { id: params.id } });
            return { success: true, message: 'Key deleted successfully.' };
        } catch (error) {
            set.status = 404;
            return { success: false, message: 'Key not found.' };
        }
    })
);


// --- START SERVER ---
app.listen(3000, ({ hostname, port }) => {
    console.log(`🚀 Licensing server running at http://${hostname}:${port}`);
    console.log(`🔑 Admin dashboard available at http://${hostname}:${port}/admin`);
});