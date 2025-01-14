import React from 'react';
import styles from './css/EventCategoryRecommendation.module.css';

const EventCategoryRecommendation = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Recomded Topics</h2>
      <div className={styles.categories}>
        <button className={styles.categoryButton}>+Technology</button>
        <button className={styles.categoryButton}>+Web</button>
        <button className={styles.categoryButton}>+Travel</button>
        <button className={styles.categoryButton}>+Travel</button>
      </div>
    </div>
  );
};

export default EventCategoryRecommendation;
