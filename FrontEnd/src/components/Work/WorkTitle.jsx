import React from "react";
import styles from "./css/WorkTitle.module.css";
import WorkIcon from "@mui/icons-material/Work";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import DateRangeIcon from "@mui/icons-material/DateRange";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import ShareIcon from "@mui/icons-material/Share";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

const WorkTitle = ({ job }) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <img src={job.company.companyLogo} alt={`${job.company.companyName} logo`} className={styles.icon} />
        <div className={styles.details}>
          <h3>{job.jobType}</h3>
          <p>{job.company.companyName}</p>
        </div>
      </div>

      <div className={styles.infoSection}>
        <div className={styles.infoItem}>
          <WorkIcon className={styles.infoIcon} />
          <span>{job.experience}</span>
        </div>
        <div className={styles.infoItem}>
          <AccessTimeIcon />
          <span>{job.employmentType}</span>
        </div>
        <div className={styles.infoItem}>
          <LocationOnIcon />
          <span>{job.location}</span>
        </div>
        <div className={styles.infoItem}>
          <DateRangeIcon />
          <span>{new Date(job.postedOn).toDateString()}</span>
        </div>
      </div>

      <div className={styles["action-apply"]}>
        <div className={styles.actionSection}>
          <div className={styles.action}>
            Report <ReportProblemIcon />
          </div>
          <div className={styles.action}>
            Share <ShareIcon />
          </div>
          <div className={styles.action}>
            Save <BookmarkBorderIcon />
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

export default WorkTitle;
