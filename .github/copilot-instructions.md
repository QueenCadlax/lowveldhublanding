# LowveldHub Luxury Landing - AI Coding Guide

## Architecture Overview

This is a React + TypeScript luxury brand landing page with early access signup functionality.

**Tech Stack**: Vite (build), React 19, TypeScript, Prisma ORM, Resend (emails), SQLite (dev)

**Key Directories**:
- `pages/` - Full page components (Home, Vision, Ecosystem, etc.)
- `components/` - Reusable UI components (Navbar, Footer, Hero, etc.)
- `api/` - Backend handlers (subscribe.ts for signup)
- `lib/` - Shared utilities (validation, environment, API responses)
- `prisma/` - Database schema and migrations

**Data Flow**: React components → form submissions → `api/subscribe.ts` → Prisma → Database + Resend email service

## Critical Build & Deployment

**Development Workflow**:
```bash
npm run dev          # Start Vite dev server on :3000
npm run build        # Build: runs 'prisma generate' then 'vite build'
npm run lint         # ESLint on .ts/.tsx files
npm run format       # Prettier formatting
```

**Database Management**:
```bash
npx prisma generate      # Generate Prisma Client (required before build)
npx prisma migrate dev   # Create migrations after schema changes
npx prisma studio       # View/edit database
```

**Environment Setup** (see SETUP_GUIDE.md):
- Copy `.env.example` → `.env.local`
- Requires: `DATABASE_URL` (SQLite path), `RESEND_API_KEY`, `ADMIN_EMAIL`
- Environment validation occurs on app startup via `lib/env.ts`

## Code Patterns & Conventions

### API Response Standardization
All API handlers return responses via [lib/api-response.ts](lib/api-response.ts) utilities:
- `successResponse(message)` / `errorResponse(message)`
- HTTP status constants: `HTTP_STATUS.OK`, `HTTP_STATUS.BAD_REQUEST`, etc.
- Example in [api/subscribe.ts](api/subscribe.ts#L32-L55)

### Input Validation
Use [lib/validation.ts](lib/validation.ts) utilities:
- `validateEmail()` - RFC 5322 simplified pattern, max 254 chars
- `normalizeEmail()` - Case normalization (prevents duplicate emails)
- `validatePhone()`, `validateUrl()` for other inputs

### Environment Handling
[lib/env.ts](lib/env.ts) provides:
- `validateEnv()` - Throws on startup if required vars missing
- `getEnv(key, defaultValue)` - Runtime access with optional defaults
- Reduces boilerplate error handling across API handlers

### Page Navigation
[App.tsx](App.tsx#L37-L49) uses simple state-based routing:
- `currentPage` state controls `renderPage()` switch statement
- Components call `onNavigate(pageName)` to trigger page changes
- Auto-scrolls to top on page change

### Styling with Tailwind
- Custom color scheme: `luxury-black`, `luxury-gold` (defined in Tailwind config, not shown)
- Uses Tailwind utilities throughout components
- Dynamic background accents via animated blur effects ([App.tsx](App.tsx#L44-L47))

## Early Access Signup Flow

1. User fills form in [components/EarlyAccess.tsx](components/EarlyAccess.tsx) or [pages/EarlyAccess.tsx](pages/EarlyAccess.tsx)
2. POST to `api/subscribe` with `{ email }`
3. [api/subscribe.ts](api/subscribe.ts) handler:
   - Validates email format via `validateEmail()`
   - Normalizes email (lowercase) to prevent duplicates
   - Queries Prisma for existing signup
   - Creates DB record if new
   - Sends admin notification via Resend email service
   - Returns `HTTP_STATUS.CONFLICT` if duplicate
4. Database model: `EarlyAccessSignup` (id, email unique, createdAt)

## Development Priorities

**Setup First**:
1. `npm install`
2. Copy `.env.example` → `.env.local`, fill required vars
3. `npx prisma generate && npx prisma migrate dev --name init`
4. `npm run dev` to verify

**Before Making Changes**:
- Run `npm run lint` and `npm run format` frequently
- Always run `prisma generate` before `npm run build`
- Test form handlers with invalid inputs (empty email, duplicates, invalid format)

**When Adding Features**:
- Use existing validation utilities rather than inline regex
- Follow API response pattern (use `lib/api-response.ts`)
- Update database schema → run `prisma migrate dev --name description`
- Add environment vars to `.env.example` template

## Common Pitfalls to Avoid

- **Prisma Client not generated**: Must run `npx prisma generate` after schema changes or before build
- **Duplicates in signup**: Always use `normalizeEmail()` before DB queries
- **Exposing errors to clients**: Use `errorResponse()` which masks internal details
- **Missing env vars**: Crashes silently without running `validateEnv()` at startup
- **Stale Tailwind styles**: Rebuild/restart dev server if new Tailwind classes don't appear
