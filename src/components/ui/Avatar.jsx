import './ui.css';

export default function Avatar({ initials, src, size = 'md', status, color, className = '' }) {
  const sizeMap = { sm: 32, md: 40, lg: 52, xl: 72 };
  const fontSize = { sm: '0.7rem', md: '0.85rem', lg: '1rem', xl: '1.4rem' };
  const px = sizeMap[size] || 40;

  return (
    <div className={`cp-avatar cp-avatar--${size} ${className}`} style={{ width: px, height: px, minWidth: px, background: color || 'var(--primary-100)', fontSize: fontSize[size] }}>
      {src ? (
        <img src={src} alt="" className="cp-avatar__img" />
      ) : (
        <span className="cp-avatar__initials">{initials}</span>
      )}
      {status && <span className={`cp-avatar__status cp-avatar__status--${status}`} />}
    </div>
  );
}
