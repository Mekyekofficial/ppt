import React from 'react';
import styles from './css/CourseCategory.module.css';
import YouTubeIcon from '@mui/icons-material/YouTube';
import StarIcon from '@mui/icons-material/Star';
import CourseHeading from './CourseHeading';

const goToCourse = () => {
  window.location.href = '/learn/:category/:course';
};

const CourseCategory = () => {
  const renderCard = (rating) => (
    <div className={styles.card} onClick={goToCourse}>
      <YouTubeIcon className={styles.icon} />
      <div className={styles.stars}>
        {Array(rating)
          .fill()
          .map((_, i) => (
            <StarIcon key={i} className={styles.star} />
          ))}
      </div>
    </div>
  );

  return (
    <div className={styles.container}>
      <CourseHeading />
      <div className={styles.header}>
        <h2>Learn from the Best Guiders, Anywhere, Anyone</h2>
        <p>500+ learners choice</p>
      </div>
      <div className={styles.grid}>
        <div className={styles.leftColumn}>
          {renderCard(5)}
          {renderCard(5)}
          {renderCard(4)}
          {renderCard(4)}
          {renderCard(3)}
        </div>
        <div className={styles.main}>
          <div className={styles.largeCard}>
            <p className={styles.description}>Description</p>
          </div>
        </div>
        <div className={styles.rightColumn}>
          {renderCard(5)}
          {renderCard(5)}
          {renderCard(4)}
        </div>
        <div className={styles.bottomRow}>
          {renderCard(3)}
          {renderCard(3)}
        </div>
      </div>
    </div>
  );
};

export default CourseCategory;
