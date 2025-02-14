import React from "react";
import styles from "./css/ProfileBanner.module.css";
import ProfileImage from "../../assets/profile-image.png";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import { MdVerified } from "react-icons/md";

const ProfileBanner = () => {
  return (
    <>
    <div className={styles.profileBanner}>
      <div className={styles.coverImage}></div>
      <div className={styles.profileContent}>
        <div className={styles.leftSection}>
          <img src={ProfileImage} alt="ProfileImage" className={styles.avatar}/>
          <div className={styles.info}>
            <h2>Alex Rosan</h2>
            <p className={styles.location}>
              <FaMapMarkerAlt className={styles.icon} /> New York, United States
            </p>
            <p className={styles.description}>
              Experienced [Your Job Title] specializing in [Key Skills]. Passionate about driving growth, innovation, and delivering impactful results.
            </p>
          </div>
        </div>
        <div className={styles.rightSection}>
          <div className={styles.options}>
            <svg className={styles.optionsIcon} viewBox="0 0 474 518" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M237.531 360.549C256.458 360.449 271.89 377.148 271.999 397.846C272.108 418.545 256.854 435.406 237.927 435.506C219 435.606 203.568 418.907 203.459 398.208C203.349 377.509 218.604 360.648 237.531 360.549Z" fill="#292556"/>
            <path d="M236.797 221.342C255.724 221.242 271.156 237.941 271.265 258.64C271.374 279.339 256.12 296.2 237.193 296.299C218.266 296.399 202.834 279.7 202.725 259.001C202.615 238.303 217.87 221.442 236.797 221.342Z" fill="#292556"/>
            <path d="M236.063 82.1357C254.99 82.0359 270.422 98.7348 270.531 119.434C270.64 140.133 255.385 156.993 236.458 157.093C217.531 157.193 202.1 140.494 201.99 119.795C201.881 99.0962 217.136 82.2355 236.063 82.1357Z" fill="#292556"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
    <div className={styles.tabs}>
        <span className={styles.tab}>Posts</span>
        <span className={styles.tab}>Achievement</span>
        <span className={styles.tab}>Education</span>
        <span className={styles.tab}>Credentials</span>
        <span className={styles.tab}>Analysis</span>
      </div>
    </>
  );
};

export default ProfileBanner;
