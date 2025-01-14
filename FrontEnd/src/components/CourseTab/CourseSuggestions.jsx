import React from "react";
import styles from "./css/CourseSuggestions.module.css";
import { YouTube } from "@mui/icons-material";

const CourseSuggestions = () => {
  const suggestions = [
    "What’s next ..... !!",
    "What’s next ..... !!",
    "What’s next ..... !!",
  ];

  return (
    <div className={styles.container}>
      {suggestions.map((text, index) => (
        <div key={index} className={styles.card}>
          <div className={styles.video}>
            <YouTube className={styles.icon} />
          </div>
          <p className={styles.text}>{text}</p>
        </div>
      ))}
    </div>
  );
};

export default CourseSuggestions;
