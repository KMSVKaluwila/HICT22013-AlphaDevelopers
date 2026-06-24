import { useEffect } from 'react';
import { X } from 'lucide-react';
import './ui.css';

export default function Modal({ isOpen, onClose, title, children, size = 'md' }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="cp-modal-overlay animate-fade-in" onClick={onClose}>
      <div className={`cp-modal cp-modal--${size} animate-scale-in`} onClick={e => e.stopPropagation()}>
        <div className="cp-modal__header">
          <h2 className="cp-modal__title">{title}</h2>
          <button className="cp-modal__close" onClick={onClose} aria-label="Close modal">
            <X size={20} />
          </button>
        </div>
        <div className="cp-modal__body">
          {children}
        </div>
      </div>
    </div>
  );
}
