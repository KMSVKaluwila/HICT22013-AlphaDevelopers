// ============================================
// CarePulse — Mock Data
// ============================================

export const doctors = [
  {
    id: 'd1',
    name: 'Dr. Sarah Mitchell',
    specialty: 'Cardiologist',
    avatar: null,
    initials: 'SM',
    experience: 12,
    rating: 4.9,
    reviews: 248,
    bio: 'Specialist in heart disease management and preventive cardiology with over 12 years of clinical experience.',
    qualifications: ['MD Cardiology', 'FACC', 'Board Certified'],
    hospital: 'City Heart Center',
    fee: 75,
    availableDays: ['Mon', 'Wed', 'Fri'],
    timeSlots: {
      morning: ['08:00', '08:30', '09:00', '09:30', '10:00', '10:30', '11:00'],
      afternoon: ['13:00', '13:30', '14:00', '14:30', '15:00', '15:30'],
      evening: ['17:00', '17:30', '18:00']
    },
    isAvailable: true
  },
  {
    id: 'd2',
    name: 'Dr. James Rivera',
    specialty: 'Diabetologist',
    avatar: null,
    initials: 'JR',
    experience: 8,
    rating: 4.7,
    reviews: 186,
    bio: 'Expert in diabetes management, insulin therapy, and metabolic disorders.',
    qualifications: ['MD Endocrinology', 'CDE', 'Board Certified'],
    hospital: 'Metro Diabetes Clinic',
    fee: 65,
    availableDays: ['Tue', 'Thu', 'Sat'],
    timeSlots: {
      morning: ['09:00', '09:30', '10:00', '10:30', '11:00'],
      afternoon: ['14:00', '14:30', '15:00', '15:30', '16:00'],
      evening: ['18:00', '18:30']
    },
    isAvailable: true
  },
  {
    id: 'd3',
    name: 'Dr. Emily Chen',
    specialty: 'Endocrinologist',
    avatar: null,
    initials: 'EC',
    experience: 15,
    rating: 4.8,
    reviews: 312,
    bio: 'Leading endocrinologist specializing in thyroid disorders, hormonal imbalances, and adrenal conditions.',
    qualifications: ['MD Endocrinology', 'PhD', 'Fellow AACE'],
    hospital: 'Central Medical Institute',
    fee: 85,
    availableDays: ['Mon', 'Tue', 'Thu'],
    timeSlots: {
      morning: ['08:30', '09:00', '09:30', '10:00'],
      afternoon: ['13:00', '13:30', '14:00', '14:30', '15:00'],
      evening: ['17:00', '17:30']
    },
    isAvailable: true
  },
  {
    id: 'd4',
    name: 'Dr. Michael Thompson',
    specialty: 'General Physician',
    avatar: null,
    initials: 'MT',
    experience: 20,
    rating: 4.6,
    reviews: 520,
    bio: 'Experienced general physician with expertise in chronic disease management and preventive medicine.',
    qualifications: ['MBBS', 'MD Internal Medicine', 'Board Certified'],
    hospital: 'HealthFirst Medical Center',
    fee: 50,
    availableDays: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    timeSlots: {
      morning: ['08:00', '08:30', '09:00', '09:30', '10:00', '10:30', '11:00', '11:30'],
      afternoon: ['13:00', '13:30', '14:00', '14:30', '15:00'],
      evening: ['17:00', '17:30', '18:00', '18:30']
    },
    isAvailable: true
  },
  {
    id: 'd5',
    name: 'Dr. Aisha Patel',
    specialty: 'Cardiologist',
    avatar: null,
    initials: 'AP',
    experience: 10,
    rating: 4.8,
    reviews: 198,
    bio: 'Interventional cardiologist with a focus on minimally invasive cardiac procedures and heart failure management.',
    qualifications: ['MD Cardiology', 'DM', 'FSCAI'],
    hospital: 'Sunrise Heart Hospital',
    fee: 80,
    availableDays: ['Wed', 'Fri', 'Sat'],
    timeSlots: {
      morning: ['09:00', '09:30', '10:00', '10:30'],
      afternoon: ['14:00', '14:30', '15:00', '15:30', '16:00'],
      evening: ['17:30', '18:00']
    },
    isAvailable: false
  },
  {
    id: 'd6',
    name: 'Dr. Robert Kim',
    specialty: 'Neurologist',
    avatar: null,
    initials: 'RK',
    experience: 14,
    rating: 4.9,
    reviews: 275,
    bio: 'Neurologist specializing in headache disorders, epilepsy, and neurodegenerative diseases.',
    qualifications: ['MD Neurology', 'Board Certified', 'Fellow AAN'],
    hospital: 'NeuroHealth Institute',
    fee: 90,
    availableDays: ['Mon', 'Wed', 'Thu'],
    timeSlots: {
      morning: ['08:00', '09:00', '10:00', '11:00'],
      afternoon: ['13:00', '14:00', '15:00'],
      evening: ['17:00', '18:00']
    },
    isAvailable: true
  }
];

export const specialties = [
  'All',
  'Cardiologist',
  'Diabetologist',
  'Endocrinologist',
  'General Physician',
  'Neurologist',
  'Pulmonologist',
  'Nephrologist'
];

export const currentPatient = {
  id: 'p1',
  name: 'Alex Johnson',
  email: 'alex.johnson@email.com',
  initials: 'AJ',
  age: 45,
  gender: 'Male',
  phone: '+1 (555) 123-4567',
  conditions: ['Type 2 Diabetes', 'Hypertension'],
  bloodType: 'O+',
  emergencyContact: 'Maria Johnson — +1 (555) 987-6543',
  joinedDate: '2025-03-15'
};

export const currentDoctor = {
  id: 'd1',
  name: 'Dr. Sarah Mitchell',
  email: 'sarah.mitchell@cityheart.com',
  initials: 'SM',
  specialty: 'Cardiologist',
  hospital: 'City Heart Center'
};

export const medications = [
  {
    id: 'm1',
    name: 'Metformin',
    dosage: '500mg',
    frequency: 'Twice daily',
    times: ['08:00', '20:00'],
    days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    startDate: '2025-01-10',
    endDate: null,
    color: '#0ea5e9',
    taken: { '08:00': true, '20:00': false }
  },
  {
    id: 'm2',
    name: 'Lisinopril',
    dosage: '10mg',
    frequency: 'Once daily',
    times: ['09:00'],
    days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    startDate: '2025-02-01',
    endDate: null,
    color: '#14b8a6',
    taken: { '09:00': true }
  },
  {
    id: 'm3',
    name: 'Atorvastatin',
    dosage: '20mg',
    frequency: 'Once daily',
    times: ['21:00'],
    days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    startDate: '2025-01-15',
    endDate: null,
    color: '#f59e0b',
    taken: { '21:00': false }
  },
  {
    id: 'm4',
    name: 'Vitamin D3',
    dosage: '2000IU',
    frequency: 'Once daily',
    times: ['08:00'],
    days: ['Mon', 'Wed', 'Fri'],
    startDate: '2025-03-01',
    endDate: '2026-09-01',
    color: '#f43f5e',
    taken: { '08:00': true }
  }
];

export const vitalsData = [
  { date: 'Jun 1', bloodSugar: 128, systolic: 132, diastolic: 85, weight: 82.5 },
  { date: 'Jun 3', bloodSugar: 135, systolic: 128, diastolic: 82, weight: 82.3 },
  { date: 'Jun 5', bloodSugar: 122, systolic: 130, diastolic: 84, weight: 82.1 },
  { date: 'Jun 7', bloodSugar: 118, systolic: 126, diastolic: 80, weight: 81.9 },
  { date: 'Jun 9', bloodSugar: 125, systolic: 134, diastolic: 86, weight: 82.0 },
  { date: 'Jun 11', bloodSugar: 115, systolic: 124, diastolic: 78, weight: 81.7 },
  { date: 'Jun 13', bloodSugar: 120, systolic: 128, diastolic: 82, weight: 81.5 },
  { date: 'Jun 15', bloodSugar: 112, systolic: 122, diastolic: 76, weight: 81.3 },
  { date: 'Jun 17', bloodSugar: 130, systolic: 136, diastolic: 88, weight: 81.6 },
  { date: 'Jun 19', bloodSugar: 108, systolic: 120, diastolic: 78, weight: 81.2 },
  { date: 'Jun 21', bloodSugar: 116, systolic: 126, diastolic: 80, weight: 81.0 },
  { date: 'Jun 23', bloodSugar: 110, systolic: 118, diastolic: 76, weight: 80.8 },
  { date: 'Jun 24', bloodSugar: 105, systolic: 120, diastolic: 78, weight: 80.6 }
];

export const appointments = [
  {
    id: 'a1',
    patientId: 'p1',
    patientName: 'Alex Johnson',
    patientInitials: 'AJ',
    doctorId: 'd1',
    doctorName: 'Dr. Sarah Mitchell',
    doctorInitials: 'SM',
    specialty: 'Cardiologist',
    date: '2026-06-25',
    time: '10:00',
    status: 'upcoming',
    reason: 'Quarterly heart checkup',
    notes: 'Bring latest ECG report'
  },
  {
    id: 'a2',
    patientId: 'p1',
    patientName: 'Alex Johnson',
    patientInitials: 'AJ',
    doctorId: 'd2',
    doctorName: 'Dr. James Rivera',
    doctorInitials: 'JR',
    specialty: 'Diabetologist',
    date: '2026-06-28',
    time: '14:30',
    status: 'upcoming',
    reason: 'Blood sugar follow-up',
    notes: 'Fasting blood work required'
  },
  {
    id: 'a3',
    patientId: 'p1',
    patientName: 'Alex Johnson',
    patientInitials: 'AJ',
    doctorId: 'd4',
    doctorName: 'Dr. Michael Thompson',
    doctorInitials: 'MT',
    specialty: 'General Physician',
    date: '2026-06-15',
    time: '09:00',
    status: 'completed',
    reason: 'Annual physical exam',
    notes: ''
  },
  {
    id: 'a4',
    patientId: 'p2',
    patientName: 'Linda Park',
    patientInitials: 'LP',
    doctorId: 'd1',
    doctorName: 'Dr. Sarah Mitchell',
    doctorInitials: 'SM',
    specialty: 'Cardiologist',
    date: '2026-06-25',
    time: '11:00',
    status: 'upcoming',
    reason: 'Post-surgery follow up',
    notes: 'Check healing progress'
  },
  {
    id: 'a5',
    patientId: 'p3',
    patientName: 'Kevin Nguyen',
    patientInitials: 'KN',
    doctorId: 'd1',
    doctorName: 'Dr. Sarah Mitchell',
    doctorInitials: 'SM',
    specialty: 'Cardiologist',
    date: '2026-06-25',
    time: '14:00',
    status: 'upcoming',
    reason: 'Chest pain evaluation',
    notes: 'New patient referral'
  },
  {
    id: 'a6',
    patientId: 'p4',
    patientName: 'Diana Torres',
    patientInitials: 'DT',
    doctorId: 'd1',
    doctorName: 'Dr. Sarah Mitchell',
    doctorInitials: 'SM',
    specialty: 'Cardiologist',
    date: '2026-06-24',
    time: '09:30',
    status: 'completed',
    reason: 'Blood pressure management',
    notes: ''
  }
];

export const healthTips = [
  "💧 Stay hydrated! Aim for 8 glasses of water daily to help manage blood sugar levels.",
  "🚶 A 30-minute walk after meals can help lower blood sugar by up to 30%.",
  "🥗 Fill half your plate with non-starchy vegetables for better glucose control.",
  "😴 Poor sleep can raise blood sugar. Aim for 7-9 hours of quality rest.",
  "🧘 Stress raises cortisol and blood sugar. Try 5 minutes of deep breathing daily.",
  "🍎 Choose whole fruits over juice — the fiber helps slow sugar absorption."
];

export const doctorPatients = [
  {
    id: 'p1', name: 'Alex Johnson', initials: 'AJ', age: 45,
    condition: 'Type 2 Diabetes, Hypertension', lastVisit: '2026-06-15',
    status: 'stable', bloodSugar: 110, bloodPressure: '120/78'
  },
  {
    id: 'p2', name: 'Linda Park', initials: 'LP', age: 62,
    condition: 'Heart Failure', lastVisit: '2026-06-10',
    status: 'monitoring', bloodSugar: null, bloodPressure: '138/88'
  },
  {
    id: 'p3', name: 'Kevin Nguyen', initials: 'KN', age: 38,
    condition: 'Chest Pain (New)', lastVisit: null,
    status: 'new', bloodSugar: 95, bloodPressure: '125/82'
  },
  {
    id: 'p4', name: 'Diana Torres', initials: 'DT', age: 55,
    condition: 'Hypertension', lastVisit: '2026-06-24',
    status: 'stable', bloodSugar: 102, bloodPressure: '118/76'
  },
  {
    id: 'p5', name: 'Robert Chang', initials: 'RC', age: 70,
    condition: 'Atrial Fibrillation', lastVisit: '2026-06-08',
    status: 'critical', bloodSugar: 145, bloodPressure: '152/95'
  }
];
