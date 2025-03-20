import React from "react";
import styles from "./css/NewsHeadlines.module.css";
import NewsCarousel from "./NewsCarousel";

const NewsHeadlines = () => {
  return (
    <div className={styles.newsContainer}>
      <h2 className={styles.title}>Breaking News</h2>
      <div className={styles.imageWrapper}>
        <NewsCarousel className={styles.image}/>
      </div>
    </div>
  );
};

export default NewsHeadlines;
