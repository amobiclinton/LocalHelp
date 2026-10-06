# LocalHelp 🏘️

A mobile-first community help app for local recommendations, answers, and trusted community support.

## MVP Scope

- User registration and login
- Ask questions by text or voice
- Nearby community recommendations
- Text and voice-note replies
- Photo attachments and location pins
- Helpful voting and reputation
- User profiles and reporting
- Pilot community: Karu, Abuja, Nigeria

## Free Stack

- Mobile: React Native + Expo
- Backend: Node.js + Express
- Database: PostgreSQL + PostGIS
- Storage: MinIO or Supabase Storage
- Maps: OpenStreetMap / MapLibre
- Auth: JWT
- Notifications: Expo Push or Firebase Cloud Messaging

## Repo Structure

```
LocalHelp/
├── backend/
│   ├── src/
│   ├── package.json
│   ├── .env.example
│   └── ...
├── mobile/
│   ├── src/
│   ├── App.js
│   ├── app.json
│   └── package.json
├── docs/
│   └── SETUP.md
├── .gitignore
├── README.md
└── LICENSE
```

## Quick Start

### Backend

```bash
cd backend
npm install
cp .env.example .env
npm run dev
```

### Mobile app

```bash
cd mobile
npm install
npx expo start
```

## Pilot Community

This MVP is designed for Karu, Abuja, Nigeria, with location-aware search and geospatial queries that can later expand to other cities and countries.

## Future-ready

This scaffold is designed to support future enhancements like:

- AI-powered question matching
- Verified business listings
- Community ambassador features
- Referral rewards
- Sponsored business listings

## License

MIT
