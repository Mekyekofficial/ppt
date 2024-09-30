import React from "react";
import "./css/NameModal.css";

const Modal = ({ showModal, closeModal }) => {
//   if (!showModal) return null; // Don't render if showModal is false

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>Make Your Life Easy Too...</h2>
        <div className="form-group">
          <label>First Name</label>
          <input type="text" placeholder="First Name" />
        </div>
        <div className="form-group">
          <label>Surname</label>
          <input type="text" placeholder="Surname" />
        </div>
        <button className="close-btn" onClick={closeModal}>Next</button>
      </div>
    </div>
  );
};

export default Modal;
