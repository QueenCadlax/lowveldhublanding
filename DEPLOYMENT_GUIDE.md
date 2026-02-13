# LowveldHub Deployment & Migration Guide

## Overview
This guide covers database migrations, deployment steps, and post-launch procedures.

## Local Development Setup

### Initial Setup
```bash
npm install
cp .env.example .env.local
# Fill in .env.local with your values
npx prisma generate
npx prisma migrate dev --name init
npm run dev
```

### Database Initialization
```bash
# Create/reset database
npx prisma migrate dev --name init

# View data visually
npx prisma studio
```

## Migrations

### Creating New Migrations
After modifying `prisma/schema.prisma`:
```bash
npx prisma migrate dev --name <description>
```

**Example:**
```bash
npx prisma migrate dev --name add_user_metadata
```

### Common Migration Scenarios

**Adding a new field:**
```prisma
model EarlyAccessSignup {
  // ... existing fields
  referralSource String?  // Optional field with default null
}
```
Then run: `npx prisma migrate dev --name add_referral_source`

**Renaming a field:**
```bash
npx prisma migrate dev --name rename_field
# Edit the migration file to use raw SQL
```

**Deleting a field:**
Simply remove from schema and migrate.

### Handling Failed Migrations
```bash
# Reset everything (⚠️ DELETES DATA)
npx prisma migrate reset --force

# Check migration status
npx prisma migrate status

# Resolve conflicts manually in prisma/migrations/
```

## Production Deployment

### Before Deployment
1. **Database**: Update `DATABASE_URL` to PostgreSQL connection string
2. **Environment Variables**: Set all required vars in hosting platform
3. **Build**: Run `npm run build` locally to verify
4. **Prisma Generate**: Required before deployment
   ```bash
   npx prisma generate
   npm run build
   ```

### Deploy Steps
1. Push code to repository
2. Hosting platform (Vercel, Netlify, etc.) automatically:
   - Installs dependencies
   - Runs migrations (if configured)
   - Builds the app
   - Deploys

### Post-Deployment
1. Verify environment variables are set
2. Test signup endpoint: `POST /api/subscribe`
3. Check Resend emails are sending
4. Monitor error logs

## Environment Configuration

### Development (.env.local)
```bash
DATABASE_URL="file:./dev.db"
RESEND_API_KEY="your_test_key"
ADMIN_EMAIL="dev@lowveldhub.co.za"
NODE_ENV="development"
```

### Production
```bash
DATABASE_URL="postgresql://..."
RESEND_API_KEY="your_production_key"
ADMIN_EMAIL="info@lowveldhub.co.za"
NODE_ENV="production"
ADMIN_EXPORT_TOKEN="secure_random_token_here"
```

## Backup & Recovery

### Database Backup (SQLite)
```bash
cp dev.db dev.db.backup
```

### Database Backup (PostgreSQL)
```bash
pg_dump YOUR_DB > backup.sql
psql YOUR_DB < backup.sql  # Restore
```

## Analytics & Monitoring

### Setup Google Analytics
1. Add `GOOGLE_ANALYTICS_ID` to `.env.local`
2. Analytics will auto-initialize on app startup
3. Track signups with: `Analytics.trackSignupEvent(email, success)`

### Monitor Signups
```bash
# Export CSV of all signups (requires ADMIN_EXPORT_TOKEN)
curl "http://localhost:3000/api/admin/export-signups?token=YOUR_TOKEN"
```

## Common Issues

### Prisma Client Not Generated
```bash
npx prisma generate
npm run build
```

### Database Locked (SQLite)
```bash
rm dev.db dev.db-journal
npx prisma migrate dev --name init
```

### Empty Database After Deploy
- Check `DATABASE_URL` is correct
- Run migrations on production: `npx prisma migrate deploy`

### Emails Not Sending
- Verify `RESEND_API_KEY` is valid
- Check spam folder
- Review Resend dashboard for errors

## Scaling Considerations

### When Ready to Scale:
1. **Upgrade Database**: PostgreSQL for better performance
2. **Add Caching**: Redis for rate limiting
3. **Implement Queue**: Bull/Bullmq for email jobs
4. **Add Monitoring**: Sentry for error tracking
5. **Analytics**: Full GA setup with Mixpanel

## Security Checklist

- [ ] All environment variables set securely
- [ ] Database backups configured
- [ ] ADMIN_EXPORT_TOKEN is strong (32+ chars)
- [ ] Rate limiting enabled on signup endpoint
- [ ] Input validation on all forms
- [ ] CORS configured if needed
- [ ] HTTPS enforced in production

## Support

For issues:
1. Check error logs
2. Review Prisma documentation: https://pris.ly/d
3. Contact: info@lowveldhub.co.za
