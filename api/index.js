import { Elysia, t } from "elysia";
import { PrismaClient } from "@prisma/client";
import crypto from "crypto";
import bcrypt from "bcryptjs";
import { jwt } from "@elysiajs/jwt";
import { html } from "@elysiajs/html";
import { staticPlugin } from "@elysiajs/static";
import { Resend } from "resend";

//#region src/email.ts
const resend = new Resend(process.env.RESEND_API_KEY);
/**
* Sends a license key and a download link for the application to a recipient.
* @param {string} to The recipient's email address.
* @param {string} serialKey The license key to send.
*/
async function sendLicenseEmail(to, serialKey) {
	const appDownloadLink = process.env.APP_DOWNLOAD_LINK || "https://drive.google.com/drive/folders/1CUfgP0M_Rv2CdBIaR0Q7IjOC0irhlslh?usp=sharing";
	try {
		const { data, error } = await resend.emails.send({
			from: `QPOS: Kasir Lengkap & Offline <${process.env.EMAIL_FROM || "onboarding@resend.dev"}>`,
			to: [to],
			subject: "Kunci Lisensi dan Link Download QPOS Anda",
			html: `
            <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
                <h2 style="color: #444;">Terima kasih atas pembelian Anda!</h2>
                <p>Berikut adalah kunci lisensi untuk mengaktifkan aplikasi:</p>
                <p style="background-color: #f4f4f4; border-left: 5px solid #ccc; padding: 10px; font-size: 20px; font-family: monospace;">
                    <strong>${serialKey}</strong>
                </p>
                <p>Silakan klik tombol di bawah ini untuk mengunduh aplikasi:</p>
                <a href="${appDownloadLink}" style="display: inline-block; padding: 12px 24px; font-size: 16px; color: #ffffff; background-color: #28a745; text-decoration: none; border-radius: 5px;">
                    Unduh Aplikasi
                </a>
                <p style="margin-top: 20px;">Salam hormat,<br>Tim QPOS</p>
            </div>
        `
		});
		if (error) {
			console.error("Resend API error:", error);
			throw new Error("Failed to send license email.");
		}
		console.log("Message sent successfully. ID:", data?.id);
	} catch (error) {
		console.error("Error sending email:", error);
		throw new Error("Failed to send license email.");
	}
}

//#endregion
//#region src/index.ts
const prisma = new PrismaClient();
function generateUniqueKey() {
	const randomPart = crypto.randomBytes(15).toString("hex").toUpperCase();
	const chunks = [];
	for (let i = 0; i < randomPart.length; i += 5) chunks.push(randomPart.substring(i, i + 5));
	return chunks.slice(0, 4).join("-");
}
var src_default = new Elysia().use(html()).use(staticPlugin()).use(jwt({
	name: "jwt",
	secret: process.env.JWT_SECRET || "your-super-secret-jwt-key-change-me-in-production",
	exp: "7d"
})).derive(async ({ jwt: jwt$1, headers }) => {
	const token = headers.authorization?.split(" ")[1];
	const profile = await jwt$1.verify(token);
	if (profile && typeof profile.userId === "string") return { profile };
	return { profile: null };
}).get("/", () => Bun.file("public/public.html")).post("/activate", async ({ body, set }) => {
	const { serialKey, deviceId } = body;
	const keyToActivate = await prisma.licenseKey.findUnique({ where: { serialKey } });
	if (keyToActivate && keyToActivate.status === "UNUSED") {
		await prisma.licenseKey.update({
			where: { serialKey },
			data: {
				status: "ACTIVATED",
				deviceId,
				activatedAt: /* @__PURE__ */ new Date()
			}
		});
		console.log(`Key ${serialKey} activated for device ${deviceId}`);
		return {
			success: true,
			message: "Application activated successfully."
		};
	} else {
		console.warn(`Failed activation attempt for key: ${serialKey}`);
		set.status = 400;
		return {
			success: false,
			message: "Invalid or already used serial key."
		};
	}
}, { body: t.Object({
	serialKey: t.String({ minLength: 1 }),
	deviceId: t.String({ minLength: 1 })
}) }).group("/admin", (app) => app.get("/", () => Bun.file("public/admin.html")).post("/login", async ({ jwt: jwt$1, body, set }) => {
	const admin = await prisma.admin.findUnique({ where: { username: body.username } });
	if (!admin || !await bcrypt.compare(body.password, admin.password)) {
		set.status = 401;
		return {
			success: false,
			message: "Invalid credentials"
		};
	}
	return {
		success: true,
		token: await jwt$1.sign({
			userId: admin.id,
			username: admin.username
		})
	};
}, { body: t.Object({
	username: t.String(),
	password: t.String()
}) }).onBeforeHandle(({ profile, set }) => {
	if (!profile) {
		set.status = 401;
		return {
			success: false,
			message: "Unauthorized"
		};
	}
}).get("/keys", async ({ query }) => {
	const { status } = query;
	const whereClause = status ? { status: status.toUpperCase() } : {};
	return await prisma.licenseKey.findMany({
		where: whereClause,
		orderBy: { createdAt: "desc" },
		include: { createdBy: { select: { username: true } } }
	});
}).post("/keys", async ({ body, set, profile }) => {
	let createdKey;
	try {
		const newKey = generateUniqueKey();
		createdKey = await prisma.licenseKey.create({ data: {
			serialKey: newKey,
			email: body.email,
			createdById: profile.userId
		} });
		console.log(`Admin '${profile.username}' generated new key for ${body.email}`);
	} catch (error) {
		if (error.code === "P2002") {
			set.status = 409;
			return {
				success: false,
				message: "A license key already exists for this email."
			};
		}
		console.error("Error creating key:", error);
		set.status = 500;
		return {
			success: false,
			message: "Internal server error during key creation."
		};
	}
	try {
		await sendLicenseEmail(createdKey.email, createdKey.serialKey);
		console.log(`Email sent successfully to ${createdKey.email}`);
		return {
			success: true,
			data: createdKey,
			message: "Key created and email sent successfully."
		};
	} catch (emailError) {
		console.error(`Failed to send email to ${createdKey.email}:`, emailError);
		return {
			success: true,
			data: createdKey,
			message: "Key created, but the email could not be sent. Please check server logs."
		};
	}
}, { body: t.Object({ email: t.String({ format: "email" }) }) }).post("/keys/:id/deactivate", async ({ params, set }) => {
	try {
		return {
			success: true,
			data: await prisma.licenseKey.update({
				where: { id: params.id },
				data: {
					status: "DEACTIVATED",
					deviceId: null,
					activatedAt: null
				}
			})
		};
	} catch (error) {
		set.status = 404;
		return {
			success: false,
			message: "Key not found."
		};
	}
}).delete("/keys/:id", async ({ params, set }) => {
	try {
		await prisma.licenseKey.delete({ where: { id: params.id } });
		return {
			success: true,
			message: "Key deleted successfully."
		};
	} catch (error) {
		set.status = 404;
		return {
			success: false,
			message: "Key not found."
		};
	}
}));

//#endregion
export { src_default as default };