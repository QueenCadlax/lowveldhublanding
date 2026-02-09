
import nodemailer from 'nodemailer';

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { email } = req.body;

  if (!email || !email.includes('@')) {
    return res.status(400).json({ message: 'A valid email is required' });
  }

  try {
    // Configure the transporter
    // Note: For production, use a professional SMTP service like SendGrid, Postmark, or AWS SES
    let transporter = nodemailer.createTransport({
      service: 'Gmail', // or your preferred SMTP provider
      auth: {
        user: 'INFO@LOWVELDHUB.CO.ZA',
        pass: process.env.EMAIL_PASSWORD, // Vercel environment variable
      },
    });

    const mailOptions = {
      from: `"LowveldHub Launch" <INFO@LOWVELDHUB.CO.ZA>`,
      to: 'INFO@LOWVELDHUB.CO.ZA',
      subject: '✨ New Early Access Subscription',
      text: `New subscriber joining the elite: ${email}`,
      html: `
        <div style="font-family: serif; padding: 40px; background-color: #000; color: #fff; border: 1px solid #D4AF37;">
          <h1 style="color: #D4AF37; font-weight: 300; letter-spacing: 0.2em;">LOWVELDHUB</h1>
          <p style="font-size: 18px; color: #ccc;">A new visionary has requested early access.</p>
          <div style="margin-top: 30px; padding: 20px; border-left: 2px solid #D4AF37; background: #0A0A0A;">
            <strong style="color: #D4AF37;">Email:</strong> ${email}
          </div>
          <p style="margin-top: 40px; font-size: 12px; color: #666; letter-spacing: 0.1em; text-transform: uppercase;">Mpumalanga's Premium Digital Ecosystem</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return res.status(200).json({ message: 'Your seat among the elite is reserved.' });
  } catch (error) {
    console.error('Subscription error:', error);
    return res.status(500).json({ message: 'Our systems are experiencing high demand. Please try again shortly.' });
  }
}
