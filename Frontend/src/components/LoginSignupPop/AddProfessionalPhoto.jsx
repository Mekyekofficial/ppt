import React from 'react';
import GeminiIcon from '../../assets/gemini-icon.png';
import CameraIcon from '../../assets/camera-icon.jpg';
import styles from "./css/AddProfessionalPhoto.module.css"; 

const AddProfessionalPhoto = () => {
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
          <span>Or</span>
        </div>
        <button className={styles["create-with-ai-btn"]}><img src={GeminiIcon} alt="gemini-icon" className='gemini-icon'/>Create With AI</button>
      </div>
    </div>
  );
};

export default AddProfessionalPhoto;
