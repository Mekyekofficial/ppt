import React, { useState } from "react";
import styles from "./css/CourseContent.module.css";
import { ExpandMore, PlayCircleOutline } from "@mui/icons-material";

const CourseContent = ({ Course }) => {
  console.log(Course);
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (sectionIndex) => {
    setExpandedSections((prevState) => ({
      ...prevState,
      [sectionIndex]: !prevState[sectionIndex],
    }));
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Course Content</h2>
      <p className={styles.topicCount}>
        {Course?.contents?.length} Topics
      </p>

      {Course?.contents?.map((section, sectionIndex) => (
        <div key={sectionIndex} className={styles.dropdown}>
          <div
            className={styles.dropdownHeader}
            onClick={() => toggleSection(sectionIndex)}
          >
            <span>{section.section}</span>
            <ExpandMore
              className={`${styles.icon} ${
                expandedSections[sectionIndex] ? styles.rotateIcon : ""
              }`}
            />
          </div>

          {expandedSections[sectionIndex] && (
            <div className={styles.dropdownContent}>
              <p className={styles.description}>
                Duration: {section.duration}
              </p>
              <ul className={styles.lessons}>
                {section?.topics?.map((topic, topicIndex) => (
                  <li key={topicIndex} className={styles.lesson}>
                    <span>{topic?.time}</span>
                    <PlayCircleOutline className={styles.playIcon} />
                    <span>{topic?.title}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CourseContent;
