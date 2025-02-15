import { useState } from "react";
import styles from "./css/ProfileAboutEdit.module.css";

const ProfileAboutEdit = ({ onClose, onSave, initialText = "" }) => {
  const [aboutText, setAboutText] = useState(initialText);

  const handleSave = () => {
    onSave(aboutText);
    onClose();
  };

  return (
    <div className={styles.popupContainer}>
      <div className={styles.popup}>
        <label className={styles.label}>Write an about</label>
        <textarea
          className={styles.textarea}
          maxLength={300}
          value={aboutText}
          onChange={(e) => setAboutText(e.target.value)}
        />
        <div className={styles.footer}>
          <span className={styles.counter}>{aboutText.length}/300</span>
          <button className={styles.saveButton} onClick={handleSave}>Save</button>
        </div>
      </div>
      <div className={styles.overlay} onClick={onClose}></div>
    </div>
  );
};

export default ProfileAboutEdit;
