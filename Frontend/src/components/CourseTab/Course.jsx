import React from 'react';
import styles from './css/Course.module.css';
import { YouTube, Star, Person, People } from '@mui/icons-material';
import CourseSuggestions from './CourseSuggestions';

const Course = () => {
  return (
    <div className={styles.courseContainer}>
      {/* Video Section */}
      <div className={styles.videoSection}>
        <div className={styles.video}>
          <YouTube className={styles.icon} />
        </div>
        <div className={styles.certification}>
          Earn a Certificate by upgrading your skills with these steps
        </div>
        <div className={styles.steps}>
          <span>Enrollment</span>
          <span>Daily classes</span>
          <span>Mock Test</span>
          <span>Project Submission</span>
          <span>Certification</span>
        </div>
      </div>

      {/* Course Details */}
      <div className={styles.detailsSection}>
        <div className={styles.info}>
          <div className={styles.subject}>
            <span>Subjects &gt;&gt; DBMS</span>
            <span>~by Alex Windget</span>
            <div className={styles.stats}>
              <Person /> ~4k learners
              <Star className={styles.starIcon} /> 4.2
            </div>
          </div>
          <div className={styles.about}>
            About this course..
          </div>
        </div>
      </div>

      {/* Course Content */}
      <div className={styles.courseContent}>
        <h2>Course Content</h2>
        <p>10 Topics</p>
        <div className={styles.contentItem}>
          <div className={styles.topicTitle}>
            <span>Introduction to DBMS</span>
          </div>
          <p>
            A Database Management System (DBMS) is software that enables the
            creation, management, and manipulation of databases.
          </p>
          <div className={styles.subTopics}>
            <span>0:37 What is DBMS?</span>
            <span>2:00 What is DBMS?</span>
          </div>
        </div>
      </div>
      {/* Course Suggestions */}
      <CourseSuggestions />
    </div>
  );
};

export default Course;
