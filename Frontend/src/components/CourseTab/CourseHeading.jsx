import React from "react";
import styles from "./css/CourseHeading.module.css";
import { YouTube, Group, Star } from "@mui/icons-material";

const CourseHeading = () => {
  return (
    <div className={styles.container}>
        <div className={styles.videoProgressContainer}>
            {/* Video Section */}
            <div className={styles.videoContainer}>
                <div className={styles.video}>
                <YouTube className={styles.playIcon} />
                </div>
            </div>
                {/* Progress Section */}
                <div className={styles.progressContainer}>
                    <p className={styles.progressText}>
                    Earn a Certificate by upgrading your skills with these steps
                    </p>
                    <div className={styles.steps}>
                    <p>Enrollment</p>
                    <p>Daily classes</p>
                    <p>Mock Test</p>
                    <p>Project Submission</p>
                    <p>Certification</p>
                    </div>
                    <div className={styles.progressBar}>
                    <span className={styles.active}></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    </div>
                </div>
                        
      </div>
        {/* Info Section */}
        <div className={styles.infoContainer}>
            <div className={styles.subjectInfo}>
                <p className={styles.subjectText}>
                    <span>Subjects &gt;&gt; DBMS</span>
                </p>
                <p className={styles.authorInfo}>
                    ~by <span className={styles.authorName}>Alex Windget</span>
                </p>
                <p className={styles.learnersInfo}>
                    <Group className={styles.icon} /><Group className={styles.icon} /><Group className={styles.icon} /> ~4k learners
                </p>
                <p className={styles.rating}>
                    <Star className={styles.star} /><Star className={styles.star} /><Star className={styles.star} /> 4.2
                </p>
            </div>
            <div className={styles.aboutCourse}>
                <p>About this course..</p>
            </div>
        </div>
    </div>
  );
};

export default CourseHeading;
