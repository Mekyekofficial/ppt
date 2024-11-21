import React from "react";
import styles from "./css/NameModal.module.css";

const Modal = ({ onSubmit, onClose }) => {
//   if (!showModal) return null; // Don't render if showModal is false

  return (
    <div className={styles["modal-overlay"]}>
      <div className={styles["modal-content"]} onClick={(e) => e.stopPropagation()}>
        <h2>Make Your Life Easy Too...</h2>
        <div className={styles["form-group"]}>
          <label>First Name</label>
          <input
              type="text"
              placeholder="First Name"
              className={styles["first-name-input"]}
              onKeyDown={(event) => {
                if (event.key === 'Enter') {
                  onSubmit();
                }
              }}
            />
        </div>
        <div className={styles["form-group"]}>
          <label>Surname</label>
          <input
              type="text"
              placeholder="Surname"
              className={styles["surname-input"]}
              onKeyDown={(event) => {
                if (event.key === 'Enter') {
                  onSubmit();
                }
              }}
            />
        </div>
        <button onClick={onSubmit} className={styles["next-btn"]}>Next</button>
      </div>
    </div>
  );
};

export default Modal;
