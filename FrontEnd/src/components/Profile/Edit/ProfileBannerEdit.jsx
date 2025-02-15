import React, { useState } from "react";
import Modal from "react-modal";
import styles from "./css/ProfileBannerEdit.module.css";
import { FaCamera } from "react-icons/fa";

Modal.setAppElement("#root"); // Ensure accessibility

const ProfileBannerEdit = ({ isOpen, onClose }) => {
  const [profileImage, setProfileImage] = useState(null);
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file));
    }
  };

  const handleSave = () => {
    console.log("Profile Updated:", { profileImage, location, description });
    onClose(); // Close modal after saving
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} className={styles.modal} overlayClassName={styles.overlay}>
      <div className={styles.container}>
        <h2 className={styles.title}>Edit Profile</h2>

        {/* Profile Photo Section */}
        <div className={styles.imageUpload}>
          <label htmlFor="fileInput" className={styles.imageLabel}>
            {profileImage ? (
              <img src={profileImage} alt="Profile" className={styles.profileImage} />
            ) : (
              <FaCamera className={styles.cameraIcon} />
            )}
          </label>
          <input id="fileInput" type="file" accept="image/*" onChange={handleImageChange} className={styles.fileInput} />
        </div>

        {/* Location Input */}
        <input
          type="text"
          placeholder="Add Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className={styles.input}
        />

        {/* Description Input */}
        <textarea
          placeholder="Add a short description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className={styles.textarea}
        />

        {/* Save Button */}
        <button className={styles.saveButton} onClick={handleSave}>
          Save
        </button>
      </div>
    </Modal>
  );
};

export default ProfileBannerEdit;
