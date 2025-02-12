import React from "react";
import styles from "./css/NewsHeadlines.module.css";
import sampleImage from "../../assets/news-headline-image.png"; // Replace with actual image path

const NewsHeadlines = () => {
  return (
    <div className={styles.newsContainer}>
      <h2 className={styles.title}>Trending Headline</h2>
      <div className={styles.imageWrapper}>
        <img src={sampleImage} alt="Trending Headline" className={styles.image} />
      </div>
    </div>
  );
};

export default NewsHeadlines;
