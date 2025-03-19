import React from "react";
import styles from "./css/CourseHeading.module.css";
import { YouTube, Group, Star } from "@mui/icons-material";

const CourseHeading = ({ Course }) => {
  // Convert standard YouTube link to an embeddable link
  const getEmbedLink = (link) => {
    if (!link) return ""; // Guard against undefined or null links
    // For links in the format "https://youtu.be/XYZ" or "https://www.youtube.com/watch?v=XYZ"
    if (link.includes("youtu.be")) {
      return link.replace("youtu.be", "www.youtube.com/embed");
    }
    if (link.includes("watch?v=")) {
      return link.replace("watch?v=", "embed/");
    }
    return link;
  };

  return (
    <div className={styles.container}>
      <div className={styles.videoProgressContainer}>
        {/* Video Section */}
        <div className={styles.videoContainer}>
          <div className={styles.video}>
            <iframe
              src={getEmbedLink(Course?.videoLink)}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Course Video"
              className={styles.iframe}
            ></iframe>
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
            <span>Subjects &gt;&gt; {Course?.CourseName}</span>
          </p>
          <p className={styles.authorInfo}>
            ~by <span className={styles.authorName}>Alex Windget</span>
          </p>
          <p className={styles.learnersInfo}>
            <Group className={styles.icon} /> ~4k learners
          </p>
          <p className={styles.rating}>
            <Star className={styles.star} />
            <Star className={styles.star} />
            <Star className={styles.star} /> 4.2
          </p>
          <p className={styles.dateInfo}>
            Date: {Course?.date} - Time: {Course?.time}
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
