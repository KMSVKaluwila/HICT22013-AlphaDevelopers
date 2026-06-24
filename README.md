# CarePulse — All-in-One Health Ecosystem

CarePulse is a modern web application designed for **Chronic Disease Management, Pill Reminders, and Doctor Appointment Booking**. It provides a sleek, user-friendly interface tailored for patients suffering from long-term illnesses, elderly individuals who need support managing their medications, and doctors who monitor patient health.

---

## 📖 Project Overview

CarePulse is designed to help patients suffering from chronic diseases (e.g., Diabetes, Hypertension) easily log their vitals, receive timely medication reminders, and schedule appointments with specialist doctors. It also allows doctors to view their patients' historical vitals logs (with patient consent) to provide better clinical advice and treatment.

---

## 👥 Target Audience

*   **Chronic Disease Patients**: Individuals managing conditions like Diabetes or Hypertension (High Blood Pressure) who need to track health metrics daily.
*   **Elderly Individuals**: Those who find it difficult or forget to take their daily medications on schedule.
*   **Specialist Doctors**: Doctors who require continuous monitoring of their patients' health trends and vitals history to make informed clinical decisions.

---

## 🌟 Core Features

### A. Patient Dashboard & Tracking
*   **Secure Registration & Login**: Login via Email/Password or Social Authentication (e.g., Google Auth).
*   **Vitals Tracker (Health Log)**: Daily logging of vital signs including Blood Sugar, Blood Pressure, Heart Rate, and Body Weight.
*   **Data Visualization**: Colorful, interactive charts showing health metric trends over time.

### B. Smart Pill Reminder
*   **Pill Scheduler**: Input medication name, dosage, frequency, and specific times.
*   **Interactive Reminders**: In-app notifications and email alerts when it's time to take medication.

### C. Doctor Discovery & Appointment Booking
*   **Smart Filter & Search**: Search and filter specialist doctors by their specialization.
*   **Interactive Calendar Booking**: View doctor availability (slots) and book convenient time slots.
*   **My Appointments**: Access booked appointments with options to reschedule or cancel.

### D. Doctor Dashboard
*   **Appointment Management**: View lists of patients who have booked appointments.
*   **Patient Health History Access**: Access and analyze patient vitals logs and graphs (upon patient authorization) to tailor treatment plans.

---

## 🛠️ Technology Stack

The project leverages a modern web development stack:

### Frontend
*   **Framework**: [React.js](https://react.dev/) (Vite for fast tooling and HMR)
*   **Styling**: Custom CSS Variables & Layouts (Tailwind CSS suggested for future styling enhancements)
*   **Routing**: [React Router Dom](https://reactrouter.com/) for page navigation
*   **Charts**: [Recharts](https://recharts.org/) / Chart.js for data visualization

### Backend & Database (Planned)
*   **Server/API**: [Node.js](https://nodejs.org/) with Express.js (or [Firebase](https://firebase.google.com/) for rapid serverless implementation)
*   **Database**: [MongoDB](https://www.mongodb.com/) (MERN Stack) or Firebase Firestore for secure, real-time database and authentication.

---

## 📁 Application Architecture & Pages

The application consists of **8–10 key pages** matching the proposed structure:

1.  **Landing Page**: Elegant introduction to CarePulse, features, and patient testimonials.
2.  **Login / Signup Page**: Separated onboarding flows for patients and doctors.
3.  **Patient Dashboard**: Main dashboard displaying vitals graphs, logs, and upcoming medications.
4.  **Pill Scheduler Page**: Interface to add, update, and manage medication schedules.
5.  **Doctor Search (Discovery) Page**: Filter and locate specialist doctors.
6.  **Booking Page**: Selection of time slots and appointment submission.
7.  **Doctor Dashboard**: View appointments, handle requests, and review patient histories.
8.  **User Profile & Reports Page**: Profile management and PDF medical report uploads.

---

## 🚀 How to Get Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your computer.

### Installation

1. Navigate to the project directory:
   ```bash
   cd d:/CarePulse
   ```

2. Install all dependencies:
   ```bash
   npm install
   ```

### Running Locally

To run the Vite development server:
```bash
npm run dev
```
Open your browser and navigate to the link shown in the terminal (usually [http://localhost:5173](http://localhost:5173)).

### Building for Production

To compile optimized production assets:
```bash
npm run build
```

To preview the production build locally:
```bash
npm run preview
```
