# CarePulse — All-in-One Health Ecosystem

A modern React SPA for chronic disease management, pill reminders, vitals tracking, and doctor appointment booking.

## Background

The team (5 members) wants to build **CarePulse** — a premium health management web app. The current scope is **UI development only** (no backend/database yet). The app targets two user roles: **Patients** and **Doctors**, with 8–10 pages total.

---

## User Review Required

> [!IMPORTANT]
> **Backend & Database:** Since you mentioned this is UI-only for now, all data will be **mocked with static JSON/state**. When you're ready for a backend, we can integrate Firebase, Supabase, or a MERN stack. Does this approach work?

> [!IMPORTANT]
> **Authentication:** For now, the Login/Signup pages will be purely visual (no real auth). We'll use React Context to simulate a logged-in user and switch between Patient/Doctor roles. Is this acceptable?

> [!IMPORTANT]
> **Pill Reminder Notifications:** Since this is a web app, we'll implement a **visual on-screen notification system** (toast/banner alerts) with sound. Real push notifications or SMS/Email would require a backend. OK?

## Open Questions

1. **Design Preference:** Do you prefer a **dark theme** (deep navy/charcoal with glowing accents) or a **light medical theme** (clean whites with soft blues/greens)? I'm leaning toward a **dark glassmorphism theme** for a premium feel — let me know.
2. **Language:** Should the UI text be in **English**, **Sinhala**, or **bilingual**?
3. **Responsiveness:** Should we prioritize **desktop-first** or **mobile-first** design? (For a dashboard-heavy app, desktop-first is typical.)

---

## Tech Stack

| Layer | Technology | Why |
|:---|:---|:---|
| **Build Tool** | Vite | Fastest React dev server, instant HMR |
| **Framework** | React 18+ with JavaScript | As requested (no TypeScript to keep it simple) |
| **Routing** | React Router v6 | Industry standard SPA routing |
| **Styling** | Vanilla CSS + CSS Variables | Full control, premium custom design |
| **Charts** | Recharts | Best React charting library for health data |
| **Icons** | Lucide React | Modern, consistent icon set |
| **Date Handling** | date-fns | Lightweight date utility |
| **Notifications** | Custom Toast System | In-app visual + sound alerts |
| **State** | React Context + useState | Simple, no external state library needed |

---

## Proposed Changes

### Project Scaffolding

#### [NEW] Vite React Project
Initialize with `npx create-vite@latest ./ --template react` in `d:\CarePulse`.

Install dependencies:
```
npm install react-router-dom recharts lucide-react date-fns
```

---

### Design System & Global Styles

#### [NEW] `src/index.css` — Global Design System
A comprehensive CSS design system with:
- **CSS Custom Properties**: Color palette, spacing, typography, shadows, border-radius tokens
- **Dark theme** (default) with glassmorphism effects
- **Color Palette**: Deep navy backgrounds (`#0a0e27`, `#131640`), vibrant teal/cyan accents (`#00d4aa`, `#00b4d8`), warm coral for alerts (`#ff6b6b`)
- **Typography**: Google Font — `Inter` (clean, medical-grade readability)
- **Glassmorphism**: `backdrop-filter: blur()` cards with subtle borders
- **Smooth micro-animations**: Fade-ins, hover lifts, pulse effects
- **Responsive breakpoints**: Desktop → Tablet → Mobile

#### [NEW] `src/App.css` — Layout scaffolding

---

### Core Layout Components

#### [NEW] `src/components/layout/Sidebar.jsx`
- Collapsible sidebar with navigation links
- Different menu items for Patient vs Doctor role
- Active route highlighting with animated indicator
- CarePulse logo + branding at top
- User avatar + role badge at bottom

#### [NEW] `src/components/layout/TopBar.jsx`
- Search bar (visual only)
- Notification bell with badge count
- User profile dropdown
- Greeting message with current date

#### [NEW] `src/components/layout/AppLayout.jsx`
- Wraps Sidebar + TopBar + main content area
- Handles responsive sidebar toggle for mobile

---

### Shared UI Components

#### [NEW] `src/components/ui/StatCard.jsx`
Glowing stat card with icon, label, value, and trend indicator (↑↓)

#### [NEW] `src/components/ui/Button.jsx`
Reusable button with variants: `primary`, `secondary`, `danger`, `ghost`

#### [NEW] `src/components/ui/Modal.jsx`
Glassmorphism modal overlay for forms and confirmations

#### [NEW] `src/components/ui/Toast.jsx`
Notification toast system for pill reminders and alerts

#### [NEW] `src/components/ui/Badge.jsx`
Status badges: `active`, `upcoming`, `completed`, `missed`

#### [NEW] `src/components/ui/Avatar.jsx`
User avatar with online/offline indicator

#### [NEW] `src/components/ui/Card.jsx`
Base glassmorphism card component

#### [NEW] `src/components/ui/Input.jsx`
Styled form input with label, validation state, and icons

#### [NEW] `src/components/ui/Select.jsx`
Custom styled select dropdown

---

### Page 1: Landing Page

#### [NEW] `src/pages/Landing/Landing.jsx`
#### [NEW] `src/pages/Landing/Landing.css`

Premium landing page with:
- **Hero section**: Animated gradient background, headline, CTA buttons
- **Features grid**: 3 feature cards (Pill Reminder, Vitals Tracker, Doctor Booking) with hover animations
- **How it works**: Step-by-step visual flow
- **Testimonials**: Carousel of patient reviews
- **Footer**: Links, social icons, copyright

---

### Page 2–3: Authentication Pages

#### [NEW] `src/pages/Auth/Login.jsx`
#### [NEW] `src/pages/Auth/Signup.jsx`
#### [NEW] `src/pages/Auth/Auth.css`

- Split-screen layout: illustration left, form right
- Email/password fields + "Login with Google" button (visual)
- Signup includes: Name, Email, Password, Role selector (Patient/Doctor), Chronic disease multi-select (for patients)
- Animated form transitions
- Form validation UI (visual only)

---

### Page 4: Patient Dashboard

#### [NEW] `src/pages/PatientDashboard/PatientDashboard.jsx`
#### [NEW] `src/pages/PatientDashboard/PatientDashboard.css`

The main hub for patients:
- **Top row**: 4 Stat Cards — Next Pill Time, Blood Sugar (latest), Blood Pressure (latest), Upcoming Appointment
- **Vitals Chart**: Interactive line chart (Recharts) showing Blood Sugar / BP trends over 7/30 days with toggle
- **Today's Medications**: List of pills with time, status (taken/upcoming/missed), and "Mark as Taken" button
- **Upcoming Appointments**: Next 2–3 appointments with doctor name, specialty, date/time
- **Health Tips**: Rotating motivational health tip card

---

### Page 5: Pill Scheduler

#### [NEW] `src/pages/PillScheduler/PillScheduler.jsx`
#### [NEW] `src/pages/PillScheduler/PillScheduler.css`

- **Add Medication Form**: Medicine name, dosage, frequency (daily/weekly), time picker, start/end date
- **Active Medications List**: Cards showing each medication with edit/delete actions
- **Weekly Schedule View**: Visual grid showing which pills on which days
- **Reminder Preview**: Shows what the notification will look like

---

### Page 6: Doctor Discovery

#### [NEW] `src/pages/DoctorDiscovery/DoctorDiscovery.jsx`
#### [NEW] `src/pages/DoctorDiscovery/DoctorDiscovery.css`

- **Search bar** with specialty filter dropdown
- **Filter chips**: Cardiologist, Diabetologist, Endocrinologist, General, etc.
- **Doctor Cards Grid**: Photo, name, specialty, rating (stars), experience years, availability status
- **Doctor Detail Modal**: Full profile with bio, qualifications, available time slots, "Book Appointment" CTA

---

### Page 7: Appointment Booking

#### [NEW] `src/pages/Booking/Booking.jsx`
#### [NEW] `src/pages/Booking/Booking.css`

- **Selected Doctor Card** at top
- **Calendar Widget**: Month view with available dates highlighted in accent color
- **Time Slot Grid**: Morning / Afternoon / Evening slots with availability
- **Booking Form**: Reason for visit, notes textarea
- **Confirmation Modal**: Summary of booking with animated checkmark

---

### Page 8: Doctor Dashboard

#### [NEW] `src/pages/DoctorDashboard/DoctorDashboard.jsx`
#### [NEW] `src/pages/DoctorDashboard/DoctorDashboard.css`

- **Top row**: Stat Cards — Today's Appointments, Total Patients, Pending Reviews, Rating
- **Today's Schedule**: Timeline view of appointments with patient names and times
- **Patient List**: Searchable table with patient name, condition, last visit, vitals summary
- **Patient Detail Panel**: Click a patient to see their vitals history charts

---

### Page 9: Profile & History

#### [NEW] `src/pages/Profile/Profile.jsx`
#### [NEW] `src/pages/Profile/Profile.css`

- **User Info Card**: Avatar, name, email, role, chronic conditions
- **Edit Profile Form** (modal)
- **Appointment History**: Table/list of past appointments with date, doctor, status
- **Vitals History**: Extended chart view with date range picker
- **Export option**: "Download Report" button (visual only)

---

### Mock Data & Context

#### [NEW] `src/data/mockData.js`
All mock data in one place:
- Sample patients, doctors, medications, appointments, vitals readings
- Realistic Sinhala/English names and medical data

#### [NEW] `src/context/AuthContext.jsx`
- Simulated auth state (logged in/out, current user, role)
- Toggle between Patient and Doctor views

#### [NEW] `src/context/AppContext.jsx`
- Medications state, appointments state, vitals state
- Add/edit/delete operations on mock data

---

### Routing

#### [NEW] `src/App.jsx`
```
/                  → Landing Page
/login             → Login
/signup            → Signup
/dashboard         → Patient Dashboard (protected)
/pills             → Pill Scheduler (protected)
/doctors           → Doctor Discovery (protected)
/booking/:doctorId → Appointment Booking (protected)
/doctor-dashboard  → Doctor Dashboard (protected, doctor role)
/profile           → Profile & History (protected)
```

---

## Project Structure
```
d:\CarePulse/
├── index.html
├── package.json
├── vite.config.js
├── public/
│   └── favicon.svg
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── App.css
    ├── index.css
    ├── components/
    │   ├── layout/
    │   │   ├── Sidebar.jsx
    │   │   ├── TopBar.jsx
    │   │   └── AppLayout.jsx
    │   └── ui/
    │       ├── StatCard.jsx
    │       ├── Button.jsx
    │       ├── Modal.jsx
    │       ├── Toast.jsx
    │       ├── Badge.jsx
    │       ├── Avatar.jsx
    │       ├── Card.jsx
    │       ├── Input.jsx
    │       └── Select.jsx
    ├── context/
    │   ├── AuthContext.jsx
    │   └── AppContext.jsx
    ├── data/
    │   └── mockData.js
    └── pages/
        ├── Landing/
        ├── Auth/
        ├── PatientDashboard/
        ├── PillScheduler/
        ├── DoctorDiscovery/
        ├── Booking/
        ├── DoctorDashboard/
        └── Profile/
```

---

## Development Phases

### Phase 1 — Foundation (This session)
1. Scaffold Vite project & install dependencies
2. Create design system (`index.css`)
3. Build shared UI components
4. Build layout components (Sidebar, TopBar)
5. Set up routing in `App.jsx`
6. Create mock data

### Phase 2 — Core Pages
7. Landing Page
8. Auth Pages (Login/Signup)
9. Patient Dashboard with charts

### Phase 3 — Features
10. Pill Scheduler with reminder UI
11. Doctor Discovery with search/filter
12. Appointment Booking with calendar

### Phase 4 — Doctor Side & Polish
13. Doctor Dashboard
14. Profile & History page
15. Toast notification system
16. Final animations & responsive polish

---

## Verification Plan

### Automated Tests
- Run `npm run dev` and verify all routes render without errors
- Check browser console for React warnings
- Test responsive breakpoints at 1440px, 1024px, 768px, 375px

### Visual Verification
- Navigate through all pages via browser
- Verify all animations and hover effects work smoothly
- Test role switching (Patient ↔ Doctor) to verify conditional UI
- Take screenshots of each page for review

### Browser Testing
- Use Chrome DevTools MCP to take snapshots and screenshots of each page
- Verify accessibility landmarks and semantic HTML
