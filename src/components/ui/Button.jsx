import './ui.css';

export default function Button({ children, variant = 'primary', size = 'md', icon: Icon, iconRight, fullWidth, disabled, onClick, type = 'button', className = '' }) {
  return (
    <button
      type={type}
      className={`cp-btn cp-btn--${variant} cp-btn--${size} ${fullWidth ? 'cp-btn--full' : ''} ${className}`}
      disabled={disabled}
      onClick={onClick}
    >
      {Icon && !iconRight && <Icon size={size === 'sm' ? 14 : size === 'lg' ? 20 : 16} />}
      {children && <span>{children}</span>}
      {Icon && iconRight && <Icon size={size === 'sm' ? 14 : size === 'lg' ? 20 : 16} />}
    </button>
  );
}
