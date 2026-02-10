# El Retiro Land Development Platform

Production-ready full-stack platform for marketing, parcel discovery, and construction progress tracking for a 90,000 m² land project in El Retiro, Antioquia.

## Included features
- Public pages: Home, Project Overview, Interactive Parcels, Construction Progress, Contact.
- Interactive parcel selection map with 15 lots (all seeded as available, 5,000 m², COP 500,000,000).
- Construction progress timeline + media gallery from database.
- Next.js API routes serving parcel and progress data.
- Prisma ORM + SQLite local seed for quick bootstrapping.

## Tech stack recommendation (production)
- **Frontend**: Next.js + TypeScript (SSR, SEO, scalable routing, strong DX).
- **Backend**: Next.js Route Handlers + Prisma (single deployment unit, typed DB access).
- **Database**: PostgreSQL managed service (Neon/Supabase/RDS) for reliability and backups.
- **Media storage**: S3/Cloudinary for progress photos/videos + CDN delivery.
- **Infra**: Vercel for app hosting + managed DB; or Dockerized deployment on AWS/GCP.
- **Security**:
  - HTTP-only secure cookies if adding auth.
  - Zod validation for POST endpoints.
  - Rate limiting on contact/lead forms.
  - CSP headers and WAF at edge.

## Architecture overview
- **Presentation**: App Router pages render marketing and project views.
- **Domain/API**: `/api/parcels` and `/api/progress` expose structured data.
- **Data**: Prisma models (`Parcel`, `ConstructionProgress`) persisted in SQL.
- **Media**: URLs stored in DB and rendered in timeline/gallery.

## Frontend interactive parcel logic
1. Client component fetches parcel list from `/api/parcels`.
2. Parcels are drawn as clickable polygons on an SVG master map.
3. Clicking a polygon updates selected parcel state.
4. Side panel shows area, price, and status dynamically.

## Suggested folder structure
```txt
app/
  api/
    parcels/route.ts
    progress/route.ts
  contact/page.tsx
  parcels/page.tsx
  progress/page.tsx
  project/page.tsx
  page.tsx
components/
  Footer.tsx
  NavBar.tsx
  ParcelsInteractive.tsx
lib/
  prisma.ts
  format.ts
prisma/
  schema.prisma
  seed.js
public/images/
README.md
```

## Quick start (non-technical friendly)
```bash
npm install
npm run prisma:generate
npx prisma db push
npm run db:seed
npm run dev
```
Open: `http://localhost:3000`

## Deployment considerations
1. Switch `DATABASE_URL` to managed PostgreSQL before production.
2. Run migrations in CI/CD: `prisma migrate deploy`.
3. Configure backups and point-in-time restore for DB.
4. Store media in object storage (not repository).
5. Add monitoring (Sentry), uptime checks, and audit logs.
6. Add role-based admin module for updating parcels/progress entries.

