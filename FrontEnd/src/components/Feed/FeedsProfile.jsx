import React from "react";
import styles from "./css/FeedsProfile.module.css";

const FeedsProfile = () => {
  return (
    <div className={styles.card}>
      <div className={styles.profileImage}>
        <img src="/profile-image.png" alt="Profile" />
      </div>
      <h2 className={styles.name}>Alax Rosan</h2>
      <p className={styles.role}>Product designer</p>
      <p className={styles.description}>
        Passionate about creating beautiful and functional user experience.
      </p>
      <hr className={styles.separator} />
      <div className={styles.stats}>
        <div className={styles.stat}>
          <span className={styles.statNumber}>200</span>
          <span className={styles.statLabel}>Post</span>
        </div>
        <div className={styles.stat}>
          <span className={styles.statNumber}>50.9M</span>
          <span className={styles.statLabel}>Followers</span>
        </div>
        <div className={styles.stat}>
          <span className={styles.statNumber}>800</span>
          <span className={styles.statLabel}>Following</span>
        </div>
      </div>
    </div>
  );
};

export default FeedsProfile;
