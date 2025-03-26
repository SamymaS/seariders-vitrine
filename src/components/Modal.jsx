import { useEffect } from 'react';
import '../css/Modal.css';

const Modal = ({ isOpen, onClose, title, message, buttonText = "OK", onConfirm = null, type = "success" }) => {
  useEffect(() => {
    if (isOpen) {
      // Empêche le défilement du corps lorsque la modale est ouverte
      document.body.style.overflow = 'hidden';
    } else {
      // Réactive le défilement lorsque la modale est fermée
      document.body.style.overflow = 'auto';
    }

    // Nettoyage lors du démontage
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleConfirm = () => {
    if (onConfirm) {
      onConfirm();
    }
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className={`modal-container ${type}`} onClick={e => e.stopPropagation()}>
        <div className="modal-icon">
          {type === "success" && (
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="10" fill="currentColor" opacity="0.1" />
              <path 
                d="M9 12l2 2 4-4" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
              />
            </svg>
          )}
          {type === "error" && (
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="10" fill="currentColor" opacity="0.1" />
              <path 
                d="M15 9l-6 6m0-6l6 6" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
              />
            </svg>
          )}
          {type === "info" && (
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="10" fill="currentColor" opacity="0.1" />
              <path 
                d="M12 8v4m0 4h.01" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
              />
            </svg>
          )}
        </div>
        
        <h2>{title}</h2>
        <p>{message}</p>
        
        <button className="modal-button" onClick={handleConfirm}>
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default Modal; 