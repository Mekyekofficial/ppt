import React, { useState, useEffect } from "react";
import styles from "./css/CompanyProfileBanner.module.css";
import ProfileImage from "../../assets/profile-image.png";
import { FaMapMarkerAlt } from "react-icons/fa";
import API from "../../api";
import CompanyProfileBannerEdit from "./Edit/CompanyProfileBannerEdit";
import { toast } from "react-toastify";
import { use } from "react";

const CompanyProfileBanner = ({ user, profileOwner }) => {
  console.log(user);

    const [dot3Clicked, setDot3Clicked] = useState(false);
    const handleDot3Click = () => {
      setDot3Clicked(!dot3Clicked);
    };

    const [edit, setEdit] = useState(false);
    const handleEdit = () => {
      setDot3Clicked(false);
      setEdit(!edit);
    };

  return (
    <>
      <div className={styles.profileBanner}>
        <div className={styles.coverImage}></div>
        <div className={styles.profileContent}>
          <div className={styles.leftSection}>
            <img
              src={user?.companyLogo || ProfileImage}
              alt="ProfileImage"
              className={styles.avatar}
              onError={(e) => {
                e.target.onerror = null; // Prevents infinite loop if fallback fails
                e.target.src = ProfileImage;
              }}
            />
            <div className={styles.info}>
              <h2>
                {user?.companyName}
              </h2>
              <p className={styles.location}>
                <FaMapMarkerAlt className={styles.icon} />
                {user?.address || "Update your Location"}
              </p>
              <p className={styles.description}>
                {user?.profileBanner?.description || "Update your Bio"}
              </p>
            </div>
          </div>
          {profileOwner && (
            <div className={styles.rightSection}>
              <div className={styles.options} onClick={handleDot3Click}>
                <svg
                  className={styles.optionsIcon}
                  viewBox="0 0 474 518"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M237.531 360.549C256.458 360.449 271.89 377.148 271.999 397.846C272.108 418.545 256.854 435.406 237.927 435.506C219 435.606 203.568 418.907 203.459 398.208C203.349 377.509 218.604 360.648 237.531 360.549Z"
                    fill="#292556"
                  />
                  <path
                    d="M236.797 221.342C255.724 221.242 271.156 237.941 271.265 258.64C271.374 279.339 256.12 296.2 237.193 296.299C218.266 296.399 202.834 279.7 202.725 259.001C202.615 238.303 217.87 221.442 236.797 221.342Z"
                    fill="#292556"
                  />
                  <path
                    d="M236.063 82.1357C254.99 82.0359 270.422 98.7348 270.531 119.434C270.64 140.133 255.385 156.993 236.458 157.093C217.531 157.193 202.1 140.494 201.99 119.795C201.881 99.0962 217.136 82.2355 236.063 82.1357Z"
                    fill="#292556"
                  />
                </svg>
              </div>
              {dot3Clicked && (
                <div className={styles.optionsDropdown}>
                  <div className={styles.option} onClick={handleEdit}>
                    Edit Profile
                  </div>
                  <div className={styles.option}>Settings</div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      <div className={styles.tabs}>
        <span className={styles.tab}>News</span>
        <span className={styles.tab}>Feeds</span>
        <span className={styles.tab}>Event</span>
        <span className={styles.tab}>Credentials</span>
        <span className={styles.tab}>Analysis</span>
      </div>
      {edit && (
        <CompanyProfileBannerEdit
          isOpen={edit}
          onClose={handleEdit}
          userId={user?._id}
        />
      )}
    </>
  );
};

export default CompanyProfileBanner;
