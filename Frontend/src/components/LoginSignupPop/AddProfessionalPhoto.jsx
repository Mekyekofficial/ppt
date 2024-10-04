import React from 'react';
import GeminiIcon from '../assets/gemini-icon.png';
import CameraIcon from '../assets/camera-icon.jpg';
import "./css/AddProfessionalPhoto.css"; 

const AddProfessionalPhoto = () => {
  return (
    <div className="popup-container">
      <div className="popup-content">
        <h2>ADD A PROFESSIONAL PHOTO</h2>
        <div className="image-placeholder">
          <img src={CameraIcon} alt="camera icon" className="camera-icon" />
        </div>
        <p>WELCOME TO MEKYEK</p>
        <p className="full-name">FULL NAME</p>
        <hr />
        <button className="add-image-btn">Skip</button>
        <div className="or-section">
          <span>Or</span>
        </div>
        <button className="create-with-ai-btn"><img src={GeminiIcon} alt="gemini-icon" className='gemini-icon'/>Create With AI</button>
      </div>
    </div>
  );
};

export default AddProfessionalPhoto;
