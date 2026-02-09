# LowveldHub - Setup Guide

## Prerequisites
- Node.js v18+ 
- npm or yarn package manager
- A Resend account for email sending

## Installation Steps

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment Variables
Create a `.env.local` file in the project root by copying `.env.example`:

```bash
cp .env.example .env.local
```

Then update the values:

```env
# Database connection
DATABASE_URL="file:./prisma/dev.db"

# Resend Email Service
# Get your API key from: https://resend.com/api-keys
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxx

# Admin email for notifications
ADMIN_EMAIL=your-email@lowveldhub.co.za

# Gemini API (optional, for future features)
GEMINI_API_KEY=your_gemini_api_key
```

### 3. Initialize Database
Set up Prisma and create the SQLite database:

```bash
# Generate Prisma client
npx prisma generate

# Create database and run migrations
npx prisma migrate dev --name init
```

### 4. Start Development Server
```bash
npm run dev
```

The app will be available at `http://localhost:3000`

## Available Scripts

```bash
# Development
npm run dev        # Start dev server with hot reload

# Production
npm run build      # Build for production
npm run preview    # Preview production build locally

# Code Quality
npm run lint       # Run ESLint
npm run format     # Format code with Prettier
```

## Database Management

### View Database
```bash
# Open Prisma Studio to view/edit data
npx prisma studio
```

### Create Migrations
After modifying `prisma/schema.prisma`:

```bash
npx prisma migrate dev --name your_change_description
```

### Reset Database (Development Only)
```bash
npx prisma migrate reset
```

## Troubleshooting

### Missing Dependencies
If you see errors about missing packages after updates:
```bash
rm -rf node_modules package-lock.json
npm install
```

### Database Errors
If migrations fail:
```bash
# Check migration status
npx prisma migrate status

# Reset if stuck (development only!)
npx prisma migrate reset --force
```

### Port Already in Use
If port 3000 is busy, Vite will use the next available port (3001, 3002, etc.)

## Environment Variable Reference

| Variable | Required | Description |
|----------|----------|-------------|
| `DATABASE_URL` | Yes | SQLite database path |
| `RESEND_API_KEY` | Yes | API key for email service |
| `ADMIN_EMAIL` | Yes | Email to receive notifications |
| `GEMINI_API_KEY` | No | For future AI features |

## Build for Production

1. Build the application:
```bash
npm run build
```

2. Deploy the `dist` folder to your hosting service:
   - Vercel
   - Netlify
   - AWS S3 + CloudFront
   - GitHub Pages

## Security Notes

- Never commit `.env.local` to version control
- Use `.env.example` to document required variables
- Regenerate API keys if exposed
- Use environment-specific API keys for staging/production
