import { useNavigate } from 'react-router-dom';
import { Heart, Pill, Activity, CalendarCheck, Shield, ArrowRight, Star, ChevronRight, Clock, Users, Smartphone } from 'lucide-react';
import Button from '../../components/ui/Button';
import './Landing.css';

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="landing">
      {/* Navbar */}
      <nav className="landing__nav">
        <div className="landing__nav-inner">
          <div className="landing__brand">
            <div className="landing__logo-icon">
              <Heart size={22} color="white" fill="white" />
            </div>
            <span className="landing__logo-text">CarePulse</span>
          </div>
          <div className="landing__nav-links">
            <a href="#features">Features</a>
            <a href="#how-it-works">How it Works</a>
            <a href="#testimonials">Testimonials</a>
          </div>
          <div className="landing__nav-actions">
            <Button variant="primary" size="sm" icon={ArrowRight} iconRight onClick={() => navigate('/doctor-dashboard')}>Launch Demo</Button>
          </div>
        </div>
      </nav>
      
      {/* Hero */}
      
      

      {/* Testimonials */}
       <section className="landing__testimonials" id="testimonials">
        <div className="landing__section-inner">
          <div className="landing__section-header">
            <span className="landing__section-tag">Testimonials</span>
            <h2 className="landing__section-title">Loved by Patients & Doctors</h2>
          </div>
          <div className="landing__testimonials-grid">
            {[
              { name: 'Maria S.', role: 'Diabetes Patient', text: "CarePulse changed how I manage my diabetes. The pill reminders and blood sugar charts are incredibly helpful. I feel more in control of my health.", rating: 5 },
              { name: 'Dr. James R.', role: 'Cardiologist', text: "Being able to see my patients' vitals history before appointments saves time and improves care quality. The interface is clean and intuitive.", rating: 5 },
              { name: 'Kevin T.', role: 'Hypertension Patient', text: "The appointment booking is so smooth. I found a great cardiologist, booked a slot, and had my BP data ready for the visit. Amazing experience!", rating: 5 },
            ].map((t, i) => (
              <div key={i} className="landing__testimonial">
                <div className="landing__testimonial-stars">
                  {[...Array(t.rating)].map((_, j) => <Star key={j} size={16} fill="var(--amber-400)" color="var(--amber-400)" />)}
                </div>
                <p className="landing__testimonial-text">"{t.text}"</p>
                <div className="landing__testimonial-author">
                  <div className="landing__testimonial-avatar">{t.name[0]}</div>
                  <div>
                    <strong>{t.name}</strong>
                    <span>{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      

      {/* CTA */}
     <section className="landing__cta">
        <div className="landing__cta-inner">
          <h2 className="landing__cta-title">Ready to Take Control of Your Health?</h2>
          <p className="landing__cta-desc">Join thousands of patients and doctors who trust CarePulse for smarter health management.</p>
          <Button variant="primary" size="lg" icon={ArrowRight} iconRight onClick={() => navigate('/doctor-dashboard')}>
            View Doctor Dashboard
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="landing__footer">
        <div className="landing__footer-inner">
          <div className="landing__footer-brand">
            <Heart size={20} color="var(--primary-500)" fill="var(--primary-500)" />
            <span>CarePulse</span>
          </div>
          <p className="landing__footer-copy">© 2026 CarePulse. Built with ❤️ for better health.</p>
        </div>
      </footer>
    </div>
      

      {/* Footer */}
      <footer className="landing__footer">
        <div className="landing__footer-inner">
          <div className="landing__footer-brand">
            <Heart size={20} color="var(--primary-500)" fill="var(--primary-500)" />
            <span>CarePulse</span>
          </div>
          <p className="landing__footer-copy">© 2026 CarePulse. Built with ❤️ for better health.</p>
        </div>
      </footer>
    </div>
  );
}
