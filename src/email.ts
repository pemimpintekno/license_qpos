import nodemailer from 'nodemailer';

// Create a transporter object using SMTP transport.
// This configuration should be stored in environment variables for security.
const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: parseInt(process.env.EMAIL_PORT || '587', 10),
    secure: (process.env.EMAIL_PORT === '465'), // true for 465, false for other ports
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

/**
 * Sends a license key and a download link for the application to a recipient.
 * @param {string} to The recipient's email address.
 * @param {string} serialKey The license key to send.
 */
export async function sendLicenseEmail(to: string, serialKey: string) {
    // Get the application download link from environment variables.
    // Provide a placeholder if it's not set.
    const appDownloadLink = process.env.APP_DOWNLOAD_LINK || 'https://your-google-drive-link-here.com';

    const mailOptions = {
        from: `Your App Name <${process.env.EMAIL_FROM || process.env.EMAIL_USER}>`,
        to: to,
        subject: 'Your License Key and Download Link for Your App Name',
        html: `
            <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
                <h2 style="color: #444;">Thank you for your purchase!</h2>
                <p>Here is your license key to activate the application:</p>
                <p style="background-color: #f4f4f4; border-left: 5px solid #ccc; padding: 10px; font-size: 20px; font-family: monospace;">
                    <strong>${serialKey}</strong>
                </p>
                <p>Please click the button below to download the application:</p>
                <a href="${appDownloadLink}" style="display: inline-block; padding: 12px 24px; font-size: 16px; color: #ffffff; background-color: #28a745; text-decoration: none; border-radius: 5px;">
                    Download Application
                </a>
                <p style="margin-top: 20px;">Best regards,<br>The Your App Name Team</p>
            </div>
        `,
        // The attachments array is now removed.
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log('Message sent: %s', info.messageId);
    } catch (error) {
        console.error('Error sending email:', error);
        // Re-throw the error to be handled by the calling function in index.ts
        throw new Error('Failed to send license email.');
    }
}

