# LocalHelp Setup Guide

## Prerequisites

- Node.js 18+
- PostgreSQL 14+
- A package manager: `npm`
- Expo CLI if you want to run the mobile app locally

## 1. Backend Setup

```bash
cd backend
npm install
cp .env.example .env
```

Update `.env` with your database credentials.

Create the database in PostgreSQL:

```sql
CREATE DATABASE localhelp;
```

Then create the schema:

```bash
psql -d localhelp -f src/data/schema.sql
```

Run the API:

```bash
npm run dev
```

## 2. Mobile App Setup

```bash
cd mobile
npm install
npx expo start
```

Use the Expo Go app on your phone to scan the QR code.

## 3. Recommended production options

- Use Supabase or a managed PostgreSQL instance for the database
- Use MinIO or Supabase Storage for media uploads
- Use Render or Railway for the backend
- Use OpenStreetMap / MapLibre for map tiles

## 4. Pilot location

The app is intentionally designed for a pilot in Karu, Abuja, with location search radius logic that can be expanded to other cities.
