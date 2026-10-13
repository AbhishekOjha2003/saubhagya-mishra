# Advocate Saubhagya Mishra — Legal Portfolio & Consultation Portal ⚖️🏛️

A modern legal practice portfolio and appointment scheduling platform built for **Advocate Saubhagya Mishra** (Senior Counsel, Allahabad High Court) using **Next.js 16**, **React 19**, **Three.js / React Three Fiber**, **Prisma ORM**, and **Tailwind CSS v4**.

---

## Why I Built This & The Vision

Most law firm websites in India look like generic directories from 2005 with low-res stock photos of gavels and leather-bound books. I wanted to build something that feels prestigious, modern, and genuinely functional for both prospective clients and the advocate's chamber.

### Key Highlights & Engineering Decisions:

1. **Procedural 3D "Scales of Justice" (Three.js & R3F)**:
   Instead of using heavy 3D asset downloads or stock graphics, I built an interactive 3D Scales of Justice directly using `@react-three/fiber` and `@react-three/drei`. It uses real-time physics and procedural materials (brushed gold metalness and marble pedestal) with a gentle floating and swaying animation driven by `useFrame`.
2. **Automated Consultation Slot Engine (`_actions/booking.ts`)**:
   Lawyers have tight court schedules during the day. In this portal, appointments are restricted to chamber evening consultation hours (default `19:30 - 21:30 IST`). The booking engine dynamically calculates available 15-minute or 30-minute slots in Indian Standard Time (IST) and checks Prisma to prevent double-booking.
3. **End-to-End Client Intake**:
   Clients can pick their case type (Criminal Defense, High Court Writ Petitions, Civil & Property Disputes, Matrimonial, Commercial), write a brief summary of the matter, select their preferred mode (Online Video vs In-Chamber Meeting), and submit.
4. **Admin Management Dashboard (`/admin/dashboard`)**:
   A dedicated back-office view where the advocate or chamber clerk can view incoming consultation requests, review case notes, and update statuses (`PENDING`, `CONFIRMED`, `COMPLETED`, `CANCELLED`).
5. **Prisma ORM + Database Seeding**:
   The database models (`Doctor`/Advocate, `Appointment`, `Payment`) are managed cleanly with Prisma. I included a `prisma/seed.ts` script to immediately initialize the advocate's profile and default availability parameters.

---

## Tech Stack

- **Framework**: Next.js 16.1 (App Router), React 19, TypeScript
- **3D Graphics & Animations**: Three.js, `@react-three/fiber`, `@react-three/drei`, GSAP (`@gsap/react`), Framer Motion
- **Database & ORM**: Prisma ORM with SQLite (`dev.db` for local dev) or PostgreSQL for production
- **Styling & UI**: Tailwind CSS v4, Lucide React icons, date-fns
- **Backend Architecture**: Next.js Server Actions (`src/app/_actions/`)

---

## Pages & Routes

- **Home (`/`)**:
  - Immersive 3D interactive background with the Scales of Justice.
  - Practice areas overview, professional authority metrics (Allahabad High Court representation), and client testimonials.
- **Consultation Booking (`/consultation`)**:
  - Multi-step booking flow: Date picker, dynamic time slot calculation, 15m/30m duration selector, case category selection, and client contact details.
- **Practice Areas (`/practice-areas`)**:
  - Detailed breakdown of legal expertise: Criminal Law, Constitutional & Writ Petitions, Civil Litigation, Bail & Trial Advocacy, and Land/Property matters.
- **About (`/about`)**:
  - Background, High Court bar council credentials, litigation track record, and chamber philosophy.
- **Contact (`/contact`)**:
  - Chamber address, high court office directions, email, and consultation inquiry form.
- **Admin Portal (`/admin/login` & `/admin/dashboard`)**:
  - Secure administration dashboard to manage client bookings, filter by status, and review consultation schedules.

---

## Project Structure

```
saubhagya-mishra/
├── prisma/
│   ├── schema.prisma                # Database models (Doctor/Advocate, Appointment, Payment)
│   └── seed.ts                      # Seeds advocate profile & consultation hours
├── src/
│   ├── app/
│   │   ├── _actions/
│   │   │   ├── admin.ts             # Server actions for updating appointment status
│   │   │   └── booking.ts           # Server actions for slot calculation & booking creation
│   │   ├── admin/
│   │   │   ├── dashboard/page.tsx   # Chamber admin dashboard
│   │   │   └── login/page.tsx       # Admin authentication view
│   │   ├── consultation/page.tsx    # Client consultation booking wizard
│   │   ├── practice-areas/          # Practice areas listing & case pages
│   │   ├── about/page.tsx           # Advocate bio & credentials
│   │   ├── contact/page.tsx         # Chamber contact info & inquiries
│   │   ├── layout.tsx               # Root layout & font configurations
│   │   └── page.tsx                 # Home landing page with 3D canvas
│   ├── components/
│   │   ├── 3d/
│   │   │   ├── assets/ScalesOfJustice.tsx  # Procedural 3D Scales of Justice model
│   │   │   ├── GlobalScene.tsx             # 3D lighting, camera & stage setup
│   │   │   └── SceneWrapper.tsx            # Lazy-loaded canvas wrapper
│   │   ├── admin/
│   │   │   ├── AdminNavbar.tsx             # Admin top navigation
│   │   │   └── AppointmentActions.tsx      # Status toggles (Confirm, Cancel, etc.)
│   │   ├── home/                    # HeroSection, Authority, PracticeAreas, Testimonials
│   │   └── layout/                  # Navbar, Footer
│   └── lib/
│       ├── prisma.ts                # PrismaClient singleton instance
│       └── utils.ts                 # Classname & styling utilities
├── .env.example                     # Example environment variables template
├── package.json
└── tsconfig.json
```

---

## Getting Started

### 1. Clone & Install Dependencies

```bash
git clone https://github.com/AbhishekOjha2003/saubhagya-mishra.git
cd saubhagya-mishra
npm install
```

### 2. Configure Environment Variables

Create `.env` or `.env.local` based on `.env.example`:

```bash
cp .env.example .env.local
```

For local development with SQLite, keep:
```env
DATABASE_URL="file:./dev.db"
```

*(For production, you can point this to any PostgreSQL or MySQL connection string without changing the application code).*

### 3. Initialize & Seed the Database

Run Prisma migrations and seed the initial advocate profile:

```bash
# Push the schema to your SQLite database
npx prisma db push

# Seed the advocate profile & chamber consultation hours
npx prisma db seed
```

This creates the default profile for **Advocate Saubhagya Mishra** with consultation availability between `19:30` and `21:30 IST`.

### 4. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

- **Main Website**: [http://localhost:3000](http://localhost:3000)
- **Book Consultation**: [http://localhost:3000/consultation](http://localhost:3000/consultation)
- **Admin Dashboard**: [http://localhost:3000/admin/dashboard](http://localhost:3000/admin/dashboard)

---

## Notes & Engineering Takeaways

- **Timezone Handling in Slot Calculation**: Since legal clients in India book according to IST, server actions must compute day boundaries specifically in Indian Standard Time (`UTC +05:30`) rather than the server's local UTC clock, ensuring slots match real evening hours.
- **Three.js Performance & Hydration**: 3D canvases must never render on the server to prevent SSR hydration mismatches. The `SceneWrapper` uses Next.js dynamic imports with `ssr: false` to ensure silky-smooth client-side initialization.
- **Server Actions for Booking**: Using Next.js Server Actions allowed keeping the appointment scheduling logic colocated with database transactions, avoiding separate API route boilerplate while maintaining strict type safety.

---

## Author

Built by **Abhishek Ojha**
- GitHub: [@AbhishekOjha2003](https://github.com/AbhishekOjha2003)

Feel free to star the repo or connect if you find this project interesting!
