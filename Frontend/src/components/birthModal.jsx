import React, { useState } from "react";
import "./css/BirthModal.css";

const Modal = ({ showModal, closeModal }) => {
    //   if (!showModal) return null; // Don't render if showModal is false

    return (
        <div className="popup-overlay">
            <div className="popup">
                <h2>Enter your Date of Birth</h2>
                <div className="dob-inputs">
                <div className="input-group">
                    <label>Day</label>
                    <input type="text" placeholder="DD" />
                </div>
                <div className="input-group">
                    <label>Month</label>
                    <input type="text" placeholder="MM" />
                </div>
                <div className="input-group">
                    <label>Year</label>
                    <input type="text" placeholder="YYYY" />
                </div>
                </div>
                <h2>Specify Your Gender</h2>
                <div className="gender-input">
                <select>
                    <option value="" disabled selected>Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
                </div>
                <button  className="close-btn">Next</button>
            </div>
        </div>
    );
};

export default Modal;