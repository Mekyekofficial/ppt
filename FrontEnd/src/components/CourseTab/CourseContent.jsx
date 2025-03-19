import React, { useState } from "react";
import styles from "./css/CourseContent.module.css";
import { ExpandMore, PlayCircleOutline } from "@mui/icons-material";

const CourseContent = ({Course}) => {
  const [showIntroContent, setShowIntroContent] = useState(false);
  const [showMoreContent, setShowMoreContent] = useState(false);

  const toggleIntroContent = () => {
    setShowIntroContent(!showIntroContent);
  };

  const toggleMoreContent = () => {
    setShowMoreContent(!showMoreContent);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Course Content</h2>
      <p className={styles.topicCount}>10 Topics</p>

      {/* Introduction Dropdown */}
      <div className={styles.dropdown}>
        <div className={styles.dropdownHeader} onClick={toggleIntroContent}>
          <span>Introduction to DBMS</span>
          <ExpandMore
            className={`${styles.icon} ${
              showIntroContent ? styles.rotateIcon : ""
            }`}
          />
        </div>
        {showIntroContent && (
          <div className={styles.dropdownContent}>
            <p className={styles.description}>
              A Database Management System (DBMS) is software that enables the
              creation, management, and manipulation of databases, allowing
              users to efficiently store, retrieve, and manage data.
            </p>
            <ul className={styles.lessons}>
              {["0:37", "2:00", "5:35", "5:35"].map((time, index) => (
                <li key={index} className={styles.lesson}>
                  <span>{time}</span>
                  <PlayCircleOutline className={styles.playIcon} />
                  <span> What is DBMS?</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* More into DBMS Dropdown */}
      <div className={styles.dropdown}>
        <div className={styles.dropdownHeader} onClick={toggleMoreContent}>
          <span>More into DBMS</span>
          <ExpandMore
            className={`${styles.icon} ${
              showMoreContent ? styles.rotateIcon : ""
            }`}
          />
        </div>
        {showMoreContent && (
          <div className={styles.dropdownContent}>
            <p className={styles.description}>
              A DBMS ensures efficient data management by providing tools for
              data storage, retrieval, security, and integrity, supporting
              multiple users and applications.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseContent;
