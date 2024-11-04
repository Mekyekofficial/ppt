import React from 'react';
import styles from './css/WorkTitle.module.css';
import WorkIcon from '@mui/icons-material/Work';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DateRangeIcon from '@mui/icons-material/DateRange';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import ShareIcon from '@mui/icons-material/Share';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

const WorkDetails = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.icon}>
          <span className={styles.iconText}>JOBS</span>
        </div>
        <div className={styles.details}>
          <h3>Job Type</h3>
          <p>Company name</p>
        </div>
      </div>
      
      <div className={styles.infoSection}>
        <div className={`${styles.infoItem} ${styles.jobExperience}`}>
          <WorkIcon className={styles.infoIcon}/>
          <span>Job Experience</span>
        </div>
        <div className={`${styles.infoItem} ${styles.jobType}`}>
          <AccessTimeIcon />
          <span>Part time/Full time/remote</span>
        </div>
        <div className={`${styles.infoItem} ${styles.location}`}>
          <LocationOnIcon />
          <span>Location</span>
        </div>
        <div className={`${styles.infoItem} ${styles.postedOn}`}>
          <DateRangeIcon />
          <span>Posted on</span>
        </div>
      </div>

      <div className={styles["action-apply"]}>
        <div className={styles.actionSection}>
            <div className={styles.action}>
                Report
                <ReportProblemIcon />
            </div>
            <div className={styles.action}>
                Share
                <ShareIcon />
            </div>
            <div className={styles.action}>
                Save
                <BookmarkBorderIcon />
            </div>
        </div>

        <div className={styles.applySection}>
            <button className={styles.applyNow}>Apply Now</button>
            <button className={styles.quickApply}>Quick Apply</button>
        </div>
      </div>
    </div>
  );
};

export default WorkDetails;
