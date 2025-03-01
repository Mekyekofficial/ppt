import React, {useState} from "react";
import styles from "./css/NameModal.module.css";

const Modal = ({ onSubmit, onClose }) => {
//   if (!showModal) return null; // Don't render if showModal is false
  const [firstName, setFirstName] = useState('');
  const [lastName, setlastName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(firstName, lastName);
    onSubmit(firstName, lastName); // Pass data to parent component
  };

  return (
    <div className={styles["modal-overlay"]}>
      <div className={styles["modal-content"]} onClick={(e) => e.stopPropagation()}>
        <h2>Make Your Life Easy Too...</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles["form-group"]}>
            <label>First Name</label>
            <input
                type="text"
                placeholder="First Name"
                className={styles["first-name-input"]}
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
          </div>
          <div className={styles["form-group"]}>
            <label>lastName</label>
            <input
                type="text"
                placeholder="Last Name"
                className={styles["lastName-input"]}
                value={lastName}
                onChange={(e) => setlastName(e.target.value)}
                required
              />
          </div>
          <button type="submit" className={styles["next-btn"]}>Next</button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
