import { useNavigate } from 'react-router-dom';
import { Heart, Pill, Activity, CalendarCheck, Shield, ArrowRight, Star, ChevronRight, Clock, Users, Smartphone } from 'lucide-react';
import Button from '../../components/ui/Button';
import './Landing.css';

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="landing">
      {/* Navbar */}
      
      {/* Hero */}
      
      {/* How It Works */}
      

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
