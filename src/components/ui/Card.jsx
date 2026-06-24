import './ui.css';

export default function Card({ children, className = '', hover = false, padding = 'normal', onClick }) {
  return (
    <div
      className={`cp-card ${hover ? 'cp-card--hover' : ''} cp-card--${padding} ${className}`}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      {children}
    </div>
  );
}
