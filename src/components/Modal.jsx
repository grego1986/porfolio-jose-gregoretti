import React from 'react';
import '../styles/modal.css';

const Modal = ({ isOpen, onClose, titulo, descripcion }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h3>{titulo}</h3>
        <p>{descripcion}</p>
        <button onClick={onClose} className="modal-close">Cerrar</button>
      </div>
    </div>
  );
};

export default Modal;