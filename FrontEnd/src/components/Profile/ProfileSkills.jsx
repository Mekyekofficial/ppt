import React from "react";
import styles from "./css/ProfileSkills.module.css";
import { FaStar } from "react-icons/fa";
import { FiEdit2 } from "react-icons/fi";

const ProfileSkills = () => {
  return (
    <div className={styles.container}>
      {/* Edit Button at the top right */}
      <div className={styles.editIcon}>
        <FiEdit2 />
      </div>

      {/* Header with Skills Title and Star Icon */}
      <div className={styles.header}>
        <div className={styles.title}>
          Skills <FaStar className={styles.icon} />
        </div>
      </div>

      {/* Content Section */}
      <div className={styles.content}>
        <div className={styles.section}>
          <h3>Technical Knowledge</h3>
          <p><strong>Languages:</strong> C, JAVA, HTML/CSS</p>
          <p><strong>Frameworks:</strong> React, Redux, Typescript</p>
        </div>

        <div className={styles.section}>
          <h3>Core Knowledge</h3>
          <p>DBMS, Software Development Life Cycle</p>
        </div>

        <div className={styles.section}>
          <h3>Languages</h3>
          <p>English (Intermediate) &nbsp;&nbsp; Bengali (Beginner)</p>
        </div>
      </div>

      {/* Footer */}
      <div className={styles.footer}>
        <span className={styles.showMore}>Show More ▼</span>
      </div>
    </div>
  );
};

export default ProfileSkills;
