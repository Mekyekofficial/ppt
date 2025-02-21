import React from "react";
import GeminiIcon from "../../assets/gemini-icon.png";
import CameraIcon from "../../assets/camera-icon.jpg";
import styles from "./css/AddProfessionalPhoto.module.css";
import { completeProfile } from "../../api";

const AddProfessionalPhoto = ({ userData, onComplete, onClose }) => {
  const handleSubmit = async () => {
    try {
      await completeProfile(userData);
      onComplete(); // End the process
    } catch (error) {
      console.error("Profile submission failed:", error);
    }
  };

  return (
    <div className={styles["popup-container"]}>
      <div className={styles["popup-content"]}>
        <h2>ADD A PROFESSIONAL PHOTO</h2>
        <div className={styles["image-placeholder"]}>
          <img src={CameraIcon} alt="camera icon" className="camera-icon" />
        </div>
        <p>WELCOME TO MEKYEK</p>
        <p className={styles["full-name"]}>FULL NAME</p>
        <hr />
        <button className={styles["add-image-btn"]}>Add Image</button>
        <div className={styles["or-section"]}>
          <div></div>
          <span>Or</span>
          <div></div>
        </div>
        <button className={styles["create-with-ai-btn"]}>
          <img src={GeminiIcon} alt="gemini-icon" className="gemini-icon" />
          Create With AI
        </button>
      </div>
      <div className={styles["popup-footer"]}>
        <button onClick={onClose} className={styles["skip-btn"]}>
          Skip
        </button>
        <button onClick={handleSubmit} className={styles["submit-btn"]}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default AddProfessionalPhoto;
