import React from "react";
import styles from "./css/WorkAbout.module.css";
import StarIcon from "@mui/icons-material/Star";
import AddIcon from "@mui/icons-material/Add";

const WorkAbout = ({ job }) => {
  return (
    <div className={styles.container}>
      <h2>About The Job</h2>

      <div className={styles.section}>
        <h4>Skills</h4>
        <div className={styles.skills}>
          <div className={styles.skillItem}>
            <StarIcon style={{ color: "#FFD700" }} />
          </div>
          <div className={styles.skillItem}>
            <AddIcon />
          </div>
        </div>
      </div>

      <div className={styles.section}>
        <h4>Qualifications</h4>
        <p>{job.qualifications}</p>
      </div>

      <div className={styles.section}>
        <h4>Location</h4>
        <p>{job.location}</p>
      </div>

      <div className={styles.section}>
        <h4>Job Benefits</h4>
        <p>{job.jobBenefits}</p>
      </div>

      <div className={styles.section}>
        <h4>Job Description</h4>
        <p className={styles.description}>{job.jobDescription}</p>
      </div>

      <div className={styles.detailsSection}>
        <p><strong>Role:</strong> {job.role}</p>
        <p><strong>Industry Type:</strong> {job.industryType}</p>
        <p><strong>Department:</strong> {job.department}</p>
        <p><strong>Employment Type:</strong> {job.employmentType}</p>
        <p><strong>Role Category:</strong> {job.roleCategory}</p>
      </div>
    </div>
  );
};

export default WorkAbout;
