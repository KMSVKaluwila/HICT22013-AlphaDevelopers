import { useState } from 'react';
import { 
  Users, Calendar as CalendarIcon, Star, TrendingUp, 
  Search, MessageSquare, ChevronRight, CheckCircle2, Clock
} from 'lucide-react';
import { doctorPatients, appointments as mockAppointments } from '../../data/mockData';
import Card from '../../components/ui/Card';
import StatCard from '../../components/ui/StatCard';
import Avatar from '../../components/ui/Avatar';
import Badge from '../../components/ui/Badge';
import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';
import './DoctorDashboard.css';

export default function DoctorDashboard() {
  const [searchQuery, setSearchQuery] = useState('');
  
  const todayAppts = mockAppointments.filter(a => a.doctorId === 'd1' && a.status === 'upcoming');
  const pastAppts = mockAppointments.filter(a => a.doctorId === 'd1' && a.status === 'completed');

  const filteredPatients = doctorPatients.filter(p => 
    p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    p.condition.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="doc-dash">
      <div className="doc-dash__header">
        <h1 className="doc-dash__title">Doctor Dashboard</h1>
        <p className="doc-dash__subtitle">Manage your patients and appointments.</p>
      </div>

      <div className="doc-dash__stats">
        <StatCard 
          icon={CalendarIcon} 
          label="Today's Appointments" 
          value={todayAppts.length} 
          color="primary"
        />
        <StatCard 
          icon={Users} 
          label="Total Patients" 
          value={doctorPatients.length + 12} 
          trend="up" 
          trendValue="+3 this week"
          color="accent"
        />
        <StatCard 
          icon={CheckCircle2} 
          label="Consultations Done" 
          value={pastAppts.length + 45} 
          color="coral"
        />
        <StatCard 
          icon={Star} 
          label="Average Rating" 
          value="4.9" 
          trend="stable"
          color="amber"
        />
      </div>

      <div className="doc-dash__grid">
        <Card padding="normal" className="doc-dash__schedule-card">
          <div className="doc-dash__card-header">
            <h2 className="doc-dash__card-title">Today's Schedule</h2>
            <Badge variant="primary">{new Date().toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric'})}</Badge>
          </div>
          
          <div className="doc-dash__timeline">
            {todayAppts.length === 0 ? (
              <p className="doc-dash__empty-text">No appointments today.</p>
            ) : (
              todayAppts.sort((a, b) => a.time.localeCompare(b.time)).map((appt, i) => (
                <div key={appt.id} className="doc-dash__timeline-item animate-fade-in-up" style={{ animationDelay: `${i * 100}ms` }}>
                  <div className="doc-dash__time">{appt.time}</div>
                  <div className="doc-dash__timeline-dot" />
                  <div className="doc-dash__timeline-content">
                    <div className="doc-dash__patient-info">
                      <Avatar initials={appt.patientInitials} size="sm" />
                      <div>
                        <h4>{appt.patientName}</h4>
                        <p>{appt.reason}</p>
                      </div>
                    </div>
                    <Button variant="secondary" size="sm">Start</Button>
                  </div>
                </div>
              ))
            )}
          </div>
        </Card>

        <Card padding="normal" className="doc-dash__patients-card">
          <div className="doc-dash__card-header">
            <h2 className="doc-dash__card-title">Patient Roster</h2>
            <div className="doc-dash__search">
              <Input 
                icon={Search} 
                placeholder="Search patients..." 
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          <div className="doc-dash__table-container">
            <table className="doc-dash__table">
              <thead>
                <tr>
                  <th>Patient Name</th>
                  <th>Condition</th>
                  <th>Last Visit</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredPatients.map(patient => (
                  <tr key={patient.id}>
                    <td>
                      <div className="doc-dash__table-patient">
                        <Avatar initials={patient.initials} size="sm" />
                        <div>
                          <strong>{patient.name}</strong>
                          <span>Age {patient.age}</span>
                        </div>
                      </div>
                    </td>
                    <td>{patient.condition}</td>
                    <td>{patient.lastVisit ? new Date(patient.lastVisit).toLocaleDateString() : 'New'}</td>
                    <td>
                      <Badge 
                        variant={patient.status === 'stable' ? 'success' : patient.status === 'critical' ? 'danger' : 'warning'}
                      >
                        {patient.status}
                      </Badge>
                    </td>
                    <td>
                      <button className="doc-dash__table-btn" title="View Patient Record">
                        <ChevronRight size={20} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </div>
  );
}
