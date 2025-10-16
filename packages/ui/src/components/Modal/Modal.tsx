import React, { useEffect } from 'react';
import styles from './Modal.module.scss';

export interface ModalProps {
  isOpen: boolean;
  title?: string;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, title, onClose, children }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div className={styles.content}>
        {title && (
          <h2 id="modal-title" className={styles.title}>
            {title}
          </h2>
        )}
        <button className={styles.close} onClick={onClose} aria-label="Close modal">
          ×
        </button>
        <div className={styles.body}>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
