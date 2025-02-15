import React from "react";
import styles from "./css/ProfileEducation.module.css";
import { FaGraduationCap } from "react-icons/fa";
import { FiEdit2 } from "react-icons/fi";

const ProfileEducation = () => {
  return (
    <div className={styles.educationCard}>
      <div className={styles.header}>
        <div className={styles.title}>Education</div>
        <FiEdit2 className={styles.editIcon} />
      </div>

      <div className={styles.content}>
        <div className={styles.timeline}>
          <div className={styles.item}>
            <svg className={styles.icon} viewBox="0 0 515 515" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M450.628 364.792V216.729L257.503 321.875L21.4609 193.125L257.503 64.375L493.544 193.125V364.792H450.628ZM257.503 450.625L107.294 369.083V261.792L257.503 343.333L407.711 261.792V369.083L257.503 450.625Z" fill="black"/>
            </svg>

            <div>
              <div className={styles.degree}>University Name</div>
              <div className={styles.field}>B.TECH in Computer Science</div>
            </div>
          </div>

          <div className={styles.line}></div>

          <div className={styles.item}>
          <svg className={styles.icon} viewBox="0 0 515 515" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M450.628 364.792V216.729L257.503 321.875L21.4609 193.125L257.503 64.375L493.544 193.125V364.792H450.628ZM257.503 450.625L107.294 369.083V261.792L257.503 343.333L407.711 261.792V369.083L257.503 450.625Z" fill="black"/>
            </svg>
            <div>
              <div className={styles.degree}>High School Name <span className={styles.smallText}>(12th)</span></div>
              <div className={styles.field}>PCM</div>
            </div>
          </div>
        </div>

        <div className={styles.passingYear}>
          <div className={styles.yearText}>Passing Year</div>
          <div className={styles.year}>2027</div>
          <div className={styles.year}>2022</div>
        </div>
      </div>

      <div className={styles.showMore}>
                    Show More 
                    <svg viewBox="0 0 227 227" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M66.2109 94.5835L113.503 141.875L160.794 94.5835" stroke="black" stroke-width="22.67" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
            </div>
    </div>
  );
};

export default ProfileEducation;
