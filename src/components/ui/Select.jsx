import './ui.css';

export default function Select({ children, className = '', ...props }) {
  return (
    <select className={`cp-select ${className}`} {...props}>
      {children}
    </select>
  );
}
