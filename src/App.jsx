import { Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing/Landing';
import DoctorDashboard from './pages/DoctorDashboard/DoctorDashboard';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/doctor-dashboard" element={<DoctorDashboard />} />
    </Routes>
  );
}

export default App;
