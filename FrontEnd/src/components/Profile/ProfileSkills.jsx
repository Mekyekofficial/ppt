import React from "react";
import styles from "./css/ProfileSkills.module.css";
import { FaStar } from "react-icons/fa";
import { FiEdit2 } from "react-icons/fi";

const ProfileSkills = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.title}>
          Skills <FaStar className={styles.icon} />
        </div>
        <div className={styles.editIcon}>
          <svg className={styles.editIcon} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M41.6667 158.333H53.5417L135 76.875L123.125 65L41.6667 146.458V158.333ZM25 175V139.583L146.875 18.125L181.667 53.75L60.4167 175H25ZM128.958 71.0417L123.125 65L135 76.875L128.958 71.0417Z" fill="black"/>
                  </svg>
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
      <div className={styles.showMore}>
              Show More 
              <svg viewBox="0 0 227 227" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M66.2109 94.5835L113.503 141.875L160.794 94.5835" stroke="black" stroke-width="22.67" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
      </div>
    </div>
  );
};

export default ProfileSkills;
