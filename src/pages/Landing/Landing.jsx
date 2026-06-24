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
      

      {/* CTA */}
      

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
