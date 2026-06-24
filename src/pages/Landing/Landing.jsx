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
      
      <section className="landing__hero">
        <div className="landing__hero-bg">
          <div className="landing__hero-orb landing__hero-orb--1" />
          <div className="landing__hero-orb landing__hero-orb--2" />
          <div className="landing__hero-orb landing__hero-orb--3" />
        </div>
        <div className="landing__hero-content">
          <div className="landing__hero-badge">
            <Shield size={14} />
            <span>Trusted Health Companion</span>
          </div>
          <h1 className="landing__hero-title">
            Your Health, <br />
            <span className="landing__hero-gradient">One Pulse Away</span>
          </h1>
          <p className="landing__hero-desc">
            Manage chronic conditions, never miss a pill, track your vitals, and book doctor appointments — all in one beautiful, intelligent health ecosystem.
          </p>
          <div className="landing__hero-actions">
            <Button variant="primary" size="lg" icon={ArrowRight} iconRight onClick={() => navigate('/doctor-dashboard')}>
              View Doctor Dashboard
            </Button>
          </div>
          <div className="landing__hero-stats">
            <div className="landing__hero-stat">
              <span className="landing__hero-stat-value">10K+</span>
              <span className="landing__hero-stat-label">Active Users</span>
            </div>
            <div className="landing__hero-stat-divider" />
            <div className="landing__hero-stat">
              <span className="landing__hero-stat-value">50+</span>
              <span className="landing__hero-stat-label">Specialists</span>
            </div>
            <div className="landing__hero-stat-divider" />
            <div className="landing__hero-stat">
              <span className="landing__hero-stat-value">98%</span>
              <span className="landing__hero-stat-label">Satisfaction</span>
            </div>
          </div>
        </div>
        <div className="landing__hero-visual">
          <div className="landing__hero-card landing__hero-card--1 animate-fade-in-up stagger-1">
            <Pill size={20} color="var(--primary-500)" />
            <div>
              <strong>Metformin 500mg</strong>
              <span>Next dose in 2h 30m</span>
            </div>
          </div>
          <div className="landing__hero-card landing__hero-card--2 animate-fade-in-up stagger-3">
            <Activity size={20} color="var(--accent-500)" />
            <div>
              <strong>Blood Sugar</strong>
              <span>110 mg/dL — Normal ✓</span>
            </div>
          </div>
          <div className="landing__hero-card landing__hero-card--3 animate-fade-in-up stagger-5">
            <CalendarCheck size={20} color="var(--coral-400)" />
            <div>
              <strong>Dr. Sarah Mitchell</strong>
              <span>Tomorrow, 10:00 AM</span>
            </div>
          </div>
        </div>
      </section>

      
      

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
