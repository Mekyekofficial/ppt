import React, { useState } from "react";
import styles from "./css/ConfirmEmailModal.module.css";
import { verifyEmail } from "../../api";

const Modal = ({ onSubmit, onClose }) => {
    //   if (!showModal) return null; // Don't render if showModal is false
    const [verificationCode, setVerificationCode] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        await verifyEmail(email, verificationCode);
        onSubmit(verificationCode); // Proceed to the next step
      } catch (err) {
        setError(err.response?.data?.message || 'Verification failed');
      }
    };
    return (
        <div className={styles["popup-overlay"]}>
          <div className={styles.popup}>
            <h2>CONFIRM YOUR EMAIL</h2>
            {error && <p className={styles.error}>{error}</p>}
            <p className={styles.description}>
              Enter the 6-digit code we sent
              <span className={styles["edit-email"]}> Edit email</span>
            </p>
            <form onSubmit={handleSubmit}></form>
            <input
              type="text"
              placeholder="Enter verification code"
              className={styles["verification-input"]}
              value={verificationCode}
              onChange={(e) => setVerificationCode(e.target.value)}
              required
            />
            <p className={styles.resend}>
              Haven't received??
              <span className={styles["get-again"]}> Get again</span>
            </p>
            <button type="submit" className={styles["confirm-button"]}>
              Confirm
            </button>
          </div>
        </div>
    );
};

export default Modal;