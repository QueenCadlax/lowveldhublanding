<div align="center">
  <h1>🏆 LowveldHub - Mpumalanga's Premium Digital Ecosystem</h1>
  <p><strong>Luxury Brand Landing Page with Early Access Signup</strong></p>
</div>

---

## Overview

LowveldHub is a premium luxury brand landing page built with **React 19**, **TypeScript**, **Vite**, and **Prisma ORM**. The site features an early access signup system integrated with email notifications via Resend.

**Tech Stack:**
- Frontend: React 19 + TypeScript + Tailwind CSS
- Build: Vite 6
- Backend: Node.js API handlers
- Database: Prisma ORM + SQLite (development) / PostgreSQL (production)
- Email: Resend
- Styling: Tailwind CSS with custom luxury theme

---

## Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone and install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment variables:**
   ```bash
   cp .env.example .env.local
   ```
   
   Required variables:
   - `DATABASE_URL` - SQLite path for dev: `file:./dev.db`
   - `RESEND_API_KEY` - Get from [resend.com](https://resend.com)
   - `ADMIN_EMAIL` - Admin notification email

3. **Initialize database:**
   ```bash
   npx prisma generate
   npx prisma migrate dev --name init
   ```

4. **Start development server:**
   ```bash
   npm run dev
   ```
   
   Open [http://localhost:3000](http://localhost:3000)

---

## Available Scripts

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start Vite dev server on port 3000 |
| `npm run build` | Build for production (runs `prisma generate` + `vite build`) |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint on all .ts/.tsx files |
| `npm run format` | Format code with Prettier |

---

## Project Structure

```
├── pages/              # Full page components (Home, Vision, Ecosystem, etc.)
├── components/         # Reusable UI components (Navbar, Footer, Hero, etc.)
├── api/               # Backend API handlers
│   └── subscribe.ts   # Early access signup endpoint
├── lib/               # Shared utilities
│   ├── validation.ts  # Input validation & sanitization
│   ├── env.ts         # Environment variable validation
│   └── api-response.ts # Standardized API responses
├── prisma/            # Database schema & migrations
├── public/            # Static assets
└── App.tsx            # Main app component with routing
```

---

## Database Management

### View Database
```bash
npx prisma studio
```
Opens Prisma Studio for visual database management at http://localhost:5555

### Create Migrations
After modifying `prisma/schema.prisma`:
```bash
npx prisma migrate dev --name <description>
```

### Reset Database (Development Only)
```bash
npx prisma migrate reset --force
```

---

## Features

### Early Access Signup
- Email validation and normalization
- Duplicate prevention
- Admin notification emails
- User confirmation emails
- Rate limiting to prevent abuse
- Input sanitization against injection attacks

### Pages
- **Home** - Hero section with value proposition
- **Vision** - LowveldHub's mission and goals
- **Ecosystem** - Platform features and services
- **Careers** - Job opportunities
- **Partners** - Business partnership info
- **Early Access** - Exclusive signup form
- **Privacy Policy** - Data privacy information
- **Terms of Excellence** - Terms of service

---

## Code Patterns

### API Responses
All API handlers use standardized response format from `lib/api-response.ts`:
```typescript
// Success
{ success: true, message: "...", data: {...} }

// Error
{ success: false, message: "...", error: "..." }
```

### Input Validation
Use utilities from `lib/validation.ts`:
```typescript
validateEmail(email)      // RFC 5322 simplified
validatePhoneNumber(phone) // International format
validateUrl(url)           // URL format
normalizeEmail(email)      // Lowercase & trim
```

### Environment Variables
Access via `lib/env.ts`:
```typescript
validateEnv()  // Throws if required vars missing
getEnv(key, defaultValue) // Runtime access with fallback
```

---

## Deployment

### Environment Setup
1. Set production environment variables in hosting platform
2. Build: `npm run build` 
3. The build output is in `dist/`

### Key Requirements for Production
- Update `DATABASE_URL` to PostgreSQL connection string
- Ensure Resend API key is valid
- Configure CORS if API is on different domain
- Set `NODE_ENV=production` for error masking

---

## Development Tips

**Before Committing:**
```bash
npm run lint      # Check for linting errors
npm run format    # Auto-format code
```

**After Schema Changes:**
```bash
npx prisma generate  # Required before build
npx prisma migrate dev --name description
```

**Common Issues:**
- Prisma Client not generated? Run `npx prisma generate`
- TypeScript errors? Run `npm install` to ensure dependencies
- New Tailwind classes not showing? Restart dev server
- Database locked? Delete `dev.db` and run migrations again

---

## Support & Contact

- **Inquiries:** INFO@LOWVELDHUB.CO.ZA
- **Launch Date:** July 2026

---

**© 2026 LowveldHub. All rights reserved.**
