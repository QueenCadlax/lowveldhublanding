# 🔧 Setup Instructions - Early Access Form

Your early access form is now fully configured with:
✅ Database (SQLite with Prisma)
✅ Email Service (Resend)
✅ Auto-reply emails to users
✅ Admin notifications
✅ Success/Error feedback

## 📋 Setup Steps

### 1. Install Dependencies (If Not Done)
```bash
npm install
```

### 2. Set Up Resend Email Service

Go to [Resend.com](https://resend.com) and:
- Sign up for a free account
- Create an API key
- Copy your API key

### 3. Update Environment Variables

Edit your `.env` file:

```env
# Database
DATABASE_URL="file:./dev.db"

# Email Service - Get your API key from https://resend.com
RESEND_API_KEY="re_YOUR_API_KEY_HERE"

# Admin email
ADMIN_EMAIL="INFO@LOWVELDHUB.CO.ZA"
```

### 4. Initialize the Database

Run Prisma Migration:
```bash
npx prisma migrate dev --name init
```

This will:
- Create the SQLite database
- Create the `early_access_signups` table
- Generate Prisma Client

### 5. Test Locally

```bash
npm run dev
```

Go to `http://localhost:5173` and test the form.

## 📧 What Happens When User Submits

1. **Email saved** to database (`early_access_signups` table)
2. **Admin notification** sent to `INFO@LOWVELDHUB.CO.ZA`
   - Includes: subscriber email, timestamp
3. **User confirmation** sent to subscriber's email
   - Welcome message
   - Lists all features coming
   - Launch date (May 2026)
4. **Success message** shown on form

## 🚀 Deploy to Vercel

### Prerequisites
- `vercel` CLI installed
- Resend API key ready

### Steps
1. Add Vercel environment variables:
   ```bash
   vercel env add RESEND_API_KEY
   ```
   Paste your API key when prompted

2. Update Vercel database (using Prisma Postgres or Neon):
   - For SQLite on Vercel: Use Prisma with Neon or Turso (serverless SQLite)
   - For production: Update `DATABASE_URL` in `.env`

3. Deploy:
   ```bash
   vercel deploy --prod
   ```

## 🗄️ Database Schema

```prisma
model EarlyAccessSignup {
  id        Int     @id @default(autoincrement())
  email     String  @unique
  createdAt DateTime @default(now())
}
```

To view database:
```bash
npx prisma studio
```

## 🐛 Troubleshooting

**"RESEND_API_KEY not found"**
- Make sure you've added the API key to `.env`
- Restart your dev server: `npm run dev`

**"Database locked"**
- Delete `prisma/dev.db` and re-run: `npx prisma migrate dev`

**Emails not sending**
- Verify Resend API key is correct
- Check email domain is verified in Resend dashboard
- Check console for error messages

## 📊 Monitor Form Submissions

View all subscribers in database:
```bash
npx prisma studio
```

## ✨ Email Customization

Edit `/api/subscribe.ts` to customize:
- Email subject lines
- Email HTML templates
- From address
- Admin notification content
- User confirmation content

Emails are premium-styled with luxury gold branding matching your site! 🔥
