import React, { useState } from "react";
import styles from "./css/ProfileWorkExperience.module.css";
import ProfileExperienceEdit from "./Edit/ProfileExperienceEdit";
import { FiEdit2 } from "react-icons/fi";
import { HiDotsVertical } from "react-icons/hi";

const ProfileWorkExperience = () => {
  const [edit, setEdit] = useState(false);
      const handleEdit = () => {
        setEdit(!edit);
      }
  return (
    <div className={styles.workContainer}>
      <div className={styles.workHeader}>
        <span className={styles.workTitle}>Working Experience</span>
        <div className={styles.icons}>
        <svg className={styles.editIcon} onClick={handleEdit} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M41.6667 158.333H53.5417L135 76.875L123.125 65L41.6667 146.458V158.333ZM25 175V139.583L146.875 18.125L181.667 53.75L60.4167 175H25ZM128.958 71.0417L123.125 65L135 76.875L128.958 71.0417Z" fill="black"/>
        </svg>
        </div>
      </div>
      <div className={styles.workContent}>
        <p className={styles.jobTitle}><b>Job Title || Company Name</b></p>
        <p className={styles.jobDuration}><b>Month Year – Month Year</b></p>
        <ul className={styles.jobDetails}>
          <li>Led a team of [X] in the development and execution of [specific projects or initiatives].</li>
          <li>Managed [responsibility], resulting in [quantifiable achievement, e.g., a 20% increase in sales].</li>
          <li>Spearheaded process improvements that increased efficiency by [X]%.</li>
        </ul>
      </div>
      <div className={styles.showMore}>
        Show More 
        <svg viewBox="0 0 227 227" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M66.2109 94.5835L113.503 141.875L160.794 94.5835" stroke="black" stroke-width="22.67" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
       </div>
      {edit && <ProfileExperienceEdit isOpen={edit} onClose={handleEdit} />}
    </div>
  );
};

export default ProfileWorkExperience;
