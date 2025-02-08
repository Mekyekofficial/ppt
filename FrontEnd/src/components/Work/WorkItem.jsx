import React from 'react';
import { FaMapMarkerAlt, FaRupeeSign, FaBriefcase, FaBookmark } from 'react-icons/fa';
import styles from './css/WorkItem.module.css';

const WorkItem = ({ job }) => {
  const {
    _id,
    role,
    location,
    salary,
    experience,
    company,
    employmentType,
  } = job;

  const handleJobDetailsClick = () => {
    window.location.href = `/Work/job-Details/${_id}`;
  };

  return (
    <div className={styles.workItem}>
      <div className={styles.header}>
        <img src={company.companyLogo} alt={`${company.companyName} logo`} className={styles.logo} />
        <div className={styles.jobTitle}>
          <h4>{role}</h4>
          <p>{company.companyName}</p>
        </div>
        <FaBookmark className={styles.bookmarkIcon} />
      </div>
      <div className={styles.details}>
        <FaMapMarkerAlt className={styles.icon} />
        <p>{location}</p>
      </div>
      <div className={styles.details}>
        <FaRupeeSign className={styles.icon} />
        <p>{salary}</p>
      </div>
      <div className={styles.details}>
        <FaBriefcase className={styles.icon} />
        <p>{experience}</p>
      </div>
      <div className={styles.details}>
        <p><strong>Employment Type:</strong> {employmentType}</p>
      </div>
      <button className={styles.detailsButton} onClick={handleJobDetailsClick}>Job Details</button>
    </div>
  );
};

export default WorkItem;
