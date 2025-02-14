import React from "react";
import styles from "./css/ProfileAbout.module.css";
import { FiEdit2 } from "react-icons/fi";

const ProfileAbout = () => {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.aboutHeader}>
        <span className={styles.aboutTitle}>About</span>
        <svg className={styles.editIcon} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M41.6667 158.333H53.5417L135 76.875L123.125 65L41.6667 146.458V158.333ZM25 175V139.583L146.875 18.125L181.667 53.75L60.4167 175H25ZM128.958 71.0417L123.125 65L135 76.875L128.958 71.0417Z" fill="black"/>
        </svg>
      </div>
      <p className={styles.aboutText}>
        I am a dedicated <b>[Job Title]</b> with <b>[X] years</b> of experience in <b>[Industry/Field]</b>, 
        specializing in <b>[Key Skills or Areas of Expertise]</b>. My background has given me the opportunity 
        to work on diverse projects that have sharpened my ability to <b>[mention a few specific skills, e.g., 
        lead teams, create strategic plans, manage large-scale initiatives, etc.]</b>. I thrive in environments 
        that require both creativity and analytical thinking to drive tangible results.
        <br />
        Throughout my career, I’ve had the privilege of working with 
        <b>[mention industries, clients, or companies]</b>, where I’ve developed a track record of successfully 
        delivering solutions that align with both short-term objectives and long-term goals. I take pride in my 
        ability to adapt quickly to new challenges and continuously learn in order to stay ahead of industry trends.
      </p>
    </div>
  );
};

export default ProfileAbout;
