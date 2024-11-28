import React, { useEffect } from 'react';

interface ToastProps {
  msg: string;
  onClose: () => void;
}

const Toast: React.FC<ToastProps> = ({ msg, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 2500);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="toast-container">
      {msg}
      <div className="toast-progress-bar animate-progressBar"></div>
    </div>
  );
};

export default Toast;
