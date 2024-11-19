import React, { useState } from "react";
import styles from "./css/confirmEmailModal.module.css";

const Modal = ({ onSubmit, onClose }) => {
    //   if (!showModal) return null; // Don't render if showModal is false

    return (
        <div className={styles["popup-overlay"]}>
          <div className={styles.popup}>
            <h2>CONFIRM YOUR EMAIL</h2>
            <p className={styles.description}>
              Enter the 6-digit code we sent
              <span className={styles["edit-email"]}> Edit email</span>
            </p>
            <input
              type="text"
              placeholder="Enter verification code"
              className={styles["verification-input"]}
              onKeyDown={(event) => {
                if (event.key === 'Enter') {
                  onSubmit();
                }
              }}
            />
            <p className={styles.resend}>
              Haven't received??
              <span className={styles["get-again"]}> Get again</span>
            </p>
          </div>
        </div>
    );
};

export default Modal;