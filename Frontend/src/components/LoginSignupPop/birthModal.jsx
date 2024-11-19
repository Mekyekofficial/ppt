import React, { useState } from "react";
import styles from "./css/BirthModal.module.css";

const Modal = ({ onSubmit, closeModal }) => {
    //   if (!showModal) return null; // Don't render if showModal is false

    return (
        <div className={styles["popup-overlay"]}>
            <div className={styles.popup}>
                <h2>Enter your Date of Birth</h2>
                <div className={styles["dob-inputs"]}>
                <div className={styles["input-group"]}>
                    <label>Day</label>
                    <input type="text" placeholder="DD" />
                </div>
                <div className={styles["input-group"]}>
                    <label>Month</label>
                    <input type="text" placeholder="MM" />
                </div>
                <div className={styles["input-group"]}>
                    <label>Year</label>
                    <input type="text" placeholder="YYYY" />
                </div>
                </div>
                <h2>Specify Your Gender</h2>
                <div className={styles["gender-input"]}>
                <select>
                    <option value="" disabled selected>Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
                </div>
                <button  className={styles["close-btn"]} onClick={onSubmit}>Next</button>
            </div>
        </div>
    );
};

export default Modal;