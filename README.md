# Formbridge 

**A Minimalist Developer Tool for Headless Form Backends.**

Formbridge provides developers with robust logic to handle headless form submissions securely and elegantly. Build your forms however you want, point them to our endpoint, and we handle the rest (spam filtering, database inserts, and notifications).

## 🚀 Architecture Overview

This project is built using modern web architecture focusing on a minimal, high-performance aesthetic:
- **Framework**: [Next.js](https://nextjs.org/) (App Router, React 19)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with a custom Slate/Zinc Dark Theme.
- **Component Library**: [shadcn/ui](https://ui.shadcn.com/) (accessible, headless component patterns).
- **Typography**: [Inter Font](https://fonts.google.com/specimen/Inter) paired with elegant contrast matching.

### Database Integration: Supabase
Formbridge utilizes **Supabase** (PostgreSQL) as its primary persistent layer.
- **Submissions**: Pushed to the `submissions` table instantly.
- **Auth**: Leverages Supabase Auth for Dashboard login capability.
- **RLS**: Row Level Security ensures users only see API submissions hitting their own unique API keys.

### Transactional Emails: Resend
Email routing is handled efficiently via **Resend**.
- Send confirmation emails to submitters instantly.
- Trigger low-latency webhook/email notifications to the user managing the endpoint upon a successful submission.

## 📂 Folder Structure

- `src/app/page.tsx` - Minimalist Landing Page emphasizing the developer tool vibe.
- `src/app/dashboard/` - Authenticated dashboard to manage endpoints and API keys.
- `src/app/api/submit/route.ts` - The core ingestion endpoint for all form payloads.
- `src/components/ui/` - Headless primitives via shadcn/ui.

## 💻 Getting Started

1. Clone the repository.
2. Install dependencies: `npm install`
3. Start the dev server: `npm run dev`
4. Access `http://localhost:3000`
