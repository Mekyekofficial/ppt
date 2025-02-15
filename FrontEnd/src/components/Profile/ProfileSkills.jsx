import React from "react";
import styles from "./css/ProfileSkills.module.css";
import { FaStar } from "react-icons/fa";
import { FiEdit2 } from "react-icons/fi";

const ProfileSkills = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.title}>
          Skills
          <svg className={styles.icon} viewBox="0 0 335 284" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect width="335" height="284" fill="url(#pattern0_2646_4865)"/>
<defs>
<pattern id="pattern0_2646_4865" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_2646_4865" transform="matrix(0.02 0 0 0.0235915 0 -0.0897887)"/>
</pattern>
<image id="image0_2646_4865" width="50" height="50" xlink:href="data:image/png;base64,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"/>
</defs>
</svg>

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
