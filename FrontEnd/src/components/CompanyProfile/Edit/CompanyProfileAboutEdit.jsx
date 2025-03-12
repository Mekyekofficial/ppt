import { useState } from "react";
import styles from "./css/CompanyProfileAboutEdit.module.css";
import API from "../../../api";
import { toast } from "react-toastify";

const CompanyProfileAboutEdit = ({ onClose, onSave, initialText = "", userId }) => {
  const [aboutText, setAboutText] = useState(initialText);

  const handleSave = async () => {
    const formData = new FormData();
    formData.append("userId", userId);
    formData.append("about", aboutText);

    // const response = await API.post("/profile/update", formData, {
    //   headers: {
    //     "Content-Type": "multipart/form-data",
    //   },
    // });

    if (response.status === 201) {
      window.location.reload();
    } else {
      toast.error("Failed to update profile", response.data);
    }

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

export default CompanyProfileAboutEdit;
