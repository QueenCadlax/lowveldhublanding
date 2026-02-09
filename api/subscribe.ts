
import { PrismaClient } from '@prisma/client';
import { Resend } from 'resend';
import { validateEnv, getEnv } from '../lib/env';
import { successResponse, errorResponse, HTTP_STATUS } from '../lib/api-response';
import { validateEmail, normalizeEmail } from '../lib/validation';

const prisma = new PrismaClient();

// Validate environment on module load
let resend: InstanceType<typeof Resend>;
try {
  const env = validateEnv();
  resend = new Resend(env.RESEND_API_KEY);
} catch (error) {
  console.error('Environment validation failed:', error);
  throw error;
}

const ADMIN_EMAIL = getEnv('ADMIN_EMAIL', 'INFO@LOWVELDHUB.CO.ZA');

/**
 * Email Validation using utility function
 */
function isValidEmail(email: string): boolean {
  return validateEmail(email);
}

/**
 * Handler for early access signup
 * POST endpoint for newsletter subscription
 */
export default async function handler(req: any, res: any) {
  // Only accept POST requests
  if (req.method !== 'POST') {
    return res.status(HTTP_STATUS.BAD_REQUEST).json(
      errorResponse('Method not allowed. Use POST.')
    );
  }

  const { email } = req.body;

  // Validate email
  if (!email || typeof email !== 'string' || !isValidEmail(email)) {
    return res.status(HTTP_STATUS.BAD_REQUEST).json(
      errorResponse('Please provide a valid email address.')
    );
  }

  try {
    // Check if email already exists
    const existingSignup = await pri (normalized)
    const normalizedEmail = normalizeEmail(email);
    const existingSignup = await prisma.earlyAccessSignup.findUnique({
      where: { email: normalizedEmail

    if (existingSignup) {
      return res.status(HTTP_STATUS.CONFLICT).json(
        successResponse('This email is already on our exclusive list.')
      );
    }
 (normalized)
    const signup = await prisma.earlyAccessSignup.create({
      data: { email: normalizedEmailessSignup.create({
      data: { email: email.toLowerCase() },
    });

    // Send notification email to admin
    try {
      await resend.emails.send({
        from: 'noreply@lowveldhub.co.za',
        to: ADMIN_EMAIL,
        subject: '✨ New Early Access Signup - LowveldHub',
        html: `
          <div style="font-family: 'Segoe UI', sans-serif; padding: 40px; background-color: #000; color: #fff; border: 1px solid #D4AF37; max-width: 600px;">
            <h1 style="color: #D4AF37; font-weight: 300; font-size: 32px; letter-spacing: 0.3em; margin: 0 0 30px 0;">LOWVELDHUB</h1>
            <p style="font-size: 16px; color: #ccc; margin: 0 0 20px 0;">A new visionary has requested early access.</p>
            
            <div style="margin: 30px 0; padding: 20px; border-left: 3px solid #D4AF37; background: #0A0A0A;">
              <p style="margin: 0; color: #D4AF37; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em;">Email Address</p>
              <p style="margin: 10px 0 0 0; font-size: 18px; color: #fff;">${email}</p>
            </div>

            <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #D4AF37/30;">
              <p style="font-size: 12px; color: #666; letter-spacing: 0.1em; text-transform: uppercase; margin: 0;">Mpumalanga's Premium Digital Ecosystem</p>
              <p style="font-size: 11px; color: #555; margin: 10px 0 0 0;">Launching May 2026</p>
            </div>
          </div>
        `,
      });
    } catch (emailError) {
      console.error('Failed to send admin notification:', emailError);
      // Don't fail the request if admin email fails
    }

    // Send confirmation email to user
    try {
      await resend.emails.send({
        from: 'LowveldHub <noreply@lowveldhub.co.za>',
        to: email,
        subject: '✨ Welcome to LowveldHub Early Access',
        html: `
          <div style="font-family: 'Segoe UI', sans-serif; padding: 40px; background-color: #000; color: #fff; border: 1px solid #D4AF37; max-width: 600px;">
            <h1 style="color: #D4AF37; font-weight: 300; font-size: 32px; letter-spacing: 0.3em; margin: 0 0 30px 0;">LOWVELDHUB</h1>
            
            <h2 style="color: #fff; font-weight: 300; font-size: 22px; margin: 0 0 20px 0;">Welcome to the Elite</h2>
            
            <p style="font-size: 16px; color: #ccc; line-height: 1.6; margin: 0 0 20px 0;">
              Thank you for joining LowveldHub's exclusive early access list. You're among the first to experience <strong>Mpumalanga's most premium digital ecosystem.</strong>
            </p>

            <div style="margin: 30px 0; padding: 20px; border-left: 3px solid #D4AF37; background: #0A0A0A;">
              <p style="margin: 0; color: #D4AF37; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em;">What's Coming</p>
              <ul style="margin: 15px 0 0 0; padding-left: 20px; color: #ccc; font-size: 14px;">
                <li style="margin: 8px 0;">Verified Businesses</li>
                <li style="margin: 8px 0;">Luxury Stays</li>
                <li style="margin: 8px 0;">Exclusive Vehicles</li>
                <li style="margin: 8px 0;">Real Estate Listings</li>
                <li style="margin: 8px 0;">Curated Experiences</li>
              </ul>
            </div>

            <div style="margin: 30px 0; text-align: center;">
              <p style="color: #D4AF37; font-size: 24px; letter-spacing: 0.2em; margin: 0;">LAUNCHING MAY 2026</p>
            </div>

            <p style="font-size: 14px; color: #999; line-height: 1.6; margin-top: 30px;">
              We'll notify you as soon as we launch. Expect exclusive previews and VIP access opportunities coming your way.
            </p>

            <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #D4AF37/30;">
              <p style="font-size: 12px; color: #666; letter-spacing: 0.1em; text-transform: uppercase; margin: 0;">Mpumalanga's Premium Digital Ecosystem</p>
              <p style="font-size: 11px; color: #999; margin: 10px 0 0 0;">© 2026 LowveldHub. All rights reserved.</p>
            </div>
          </div>
        `,
      });
    } catch (emailError) {
      console.error('Failed to send user confirmation:', emailError);
      // Don't fail the request if user email fails
    }

    return res.status(HTTP_STATUS.CREATED).json(
      successResponse('Your seat among the elite is reserved. Check your email for confirmation.', {
        id: signup.id,
        email: signup.email,
      })
    );
  } catch (error: any) {
    console.error('Subscription error:', error.message || error);
    
    // Don't expose internal errors to client
    return res.status(HTTP_STATUS.INTERNAL_ERROR).json(
      errorResponse(
        'Our systems are experiencing high demand. Please try again shortly.',
        process.env.NODE_ENV === 'development' ? error.message : undefined
      )
    );
  } finally {
    await prisma.$disconnect();
  }
}
