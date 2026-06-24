import './ui.css';

export default function Input({ label, id, type = 'text', icon: Icon, error, helperText, className = '', ...props }) {
  return (
    <div className={`cp-input-group ${error ? 'cp-input-group--error' : ''} ${className}`}>
      {label && <label htmlFor={id} className="cp-input-group__label">{label}</label>}
      <div className="cp-input-group__wrapper">
        {Icon && <Icon size={18} className="cp-input-group__icon" />}
        <input
          id={id}
          type={type}
          className={`cp-input ${Icon ? 'cp-input--with-icon' : ''}`}
          {...props}
        />
      </div>
      {(error || helperText) && (
        <span className={`cp-input-group__helper ${error ? 'cp-input-group__helper--error' : ''}`}>
          {error || helperText}
        </span>
      )}
    </div>
  );
}
