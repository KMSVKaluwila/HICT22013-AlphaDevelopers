import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import './ui.css';

export default function ToastContainer() {
  const { toasts, dismissToast } = useApp();

  const icons = {
    success: CheckCircle2,
    error: AlertCircle,
    info: Info,
    warning: AlertCircle
  };

  if (!toasts.length) return null;

  return (
    <div className="toast-container">
      {toasts.map(toast => {
        const IconComp = icons[toast.type] || Info;
        return (
          <div key={toast.id} className={`toast toast--${toast.type} animate-slide-in-right`}>
            <IconComp size={18} className="toast__icon" />
            <span className="toast__message">{toast.message}</span>
            <button className="toast__close" onClick={() => dismissToast(toast.id)}>
              <X size={14} />
            </button>
          </div>
        );
      })}
    </div>
  );
}
