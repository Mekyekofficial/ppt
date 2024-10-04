import React, { useState } from "react";
import "./css/confirmEmailModal.css";

const Modal = ({ showModal, closeModal }) => {
    //   if (!showModal) return null; // Don't render if showModal is false

    return (
        <div className="popup-overlay">
          <div className="popup">
            <h2>CONFIRM YOUR EMAIL</h2>
            <p className="description">
              Enter the 6-digit code we sent
              <span className="edit-email"> Edit email</span>
            </p>
            <input
              type="text"
              placeholder="Enter verification code"
              className="verification-input"
            />
            <p className="resend">
              Haven't received??
              <span className="get-again"> Get again</span>
            </p>
            <button className="close-btn">Close</button>
          </div>
        </div>
    );
};

export default Modal;