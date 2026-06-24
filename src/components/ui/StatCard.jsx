import { TrendingUp, TrendingDown, Minus } from 'lucide-react';
import './ui.css';

export default function StatCard({ icon: Icon, label, value, unit, trend, trendValue, color = 'primary', className = '' }) {
  const colorMap = {
    primary: { bg: 'var(--primary-50)', icon: 'var(--primary-500)', border: 'var(--primary-200)' },
    accent: { bg: 'var(--accent-50)', icon: 'var(--accent-500)', border: 'var(--accent-200)' },
    coral: { bg: 'var(--coral-50)', icon: 'var(--coral-500)', border: 'var(--coral-200)' },
    amber: { bg: 'var(--amber-50)', icon: 'var(--amber-500)', border: 'var(--amber-200)' }
  };

  const colors = colorMap[color] || colorMap.primary;

  return (
    <div className={`stat-card ${className}`} style={{ '--stat-bg': colors.bg, '--stat-icon': colors.icon, '--stat-border': colors.border }}>
      <div className="stat-card__header">
        <div className="stat-card__icon-wrap" style={{ background: colors.bg }}>
          <Icon size={22} color={colors.icon} />
        </div>
        {trend && (
          <div className={`stat-card__trend stat-card__trend--${trend}`}>
            {trend === 'up' && <TrendingUp size={14} />}
            {trend === 'down' && <TrendingDown size={14} />}
            {trend === 'stable' && <Minus size={14} />}
            {trendValue && <span>{trendValue}</span>}
          </div>
        )}
      </div>
      <div className="stat-card__value">
        {value}
        {unit && <span className="stat-card__unit">{unit}</span>}
      </div>
      <div className="stat-card__label">{label}</div>
    </div>
  );
}
