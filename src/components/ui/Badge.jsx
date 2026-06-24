import './ui.css';

export default function Badge({ children, variant = 'default', size = 'sm', dot, className = '' }) {
  return (
    <span className={`cp-badge cp-badge--${variant} cp-badge--${size} ${className}`}>
      {dot && <span className="cp-badge__dot" />}
      {children}
    </span>
  );
}
