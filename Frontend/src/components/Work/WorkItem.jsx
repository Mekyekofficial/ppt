import React from 'react';
import { FaMapMarkerAlt, FaRupeeSign, FaBriefcase, FaBookmark } from 'react-icons/fa';
import styles from './css/WorkItem.module.css';

const WorkItem = ({ company, title, logo, location, salary, experience }) => {
  const handleJobDetailsClick = () => {
    window.location.href = '/Work/job-Details';
  };

  return (
    <div className={styles.workItem}>
      <div className={styles.header}>
        <img src={logo} alt={`${company} logo`} className={styles.logo} />
        <div className={styles.jobTitle}>
          <h4>{title}</h4>
          <p>{company}</p>
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
      <button className={styles.detailsButton} onClick={handleJobDetailsClick}>Job Details</button>
    </div>
  );
};

export default WorkItem;
