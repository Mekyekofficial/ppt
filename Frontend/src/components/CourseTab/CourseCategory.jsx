import React from 'react';
import styles from './css/CourseCategory.module.css';
import YouTubeIcon from '@mui/icons-material/YouTube';
import StarIcon from '@mui/icons-material/Star';
import CourseHeading from './CourseTabHeading';

const goToCourse = () => {
  window.location.href = '/learn/:category/:course';
};

const CourseCategory = () => {
  const renderCard = (rating, description) => (
    <div className={styles.cardWithDescription} onClick={goToCourse}>
      <div className={styles.card}>
        <YouTubeIcon className={styles.icon} />
        <div className={styles.stars}>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon key={i} className={styles.star} />
            ))}
        </div>
      </div>
      {description ? (
        <div className={styles.description}>
          <h1>Course Title</h1>
          <h3>description</h3>
        </div>
      ) : null}
    </div>
  );

  return (
    <div className={styles.container}>
      <CourseHeading />
      <div className={styles.header}>
        <h2>Learn from the Best Guiders, Anywhere, Anyone</h2>
        <p>500+ learners choice</p>
      </div>
      <div className={styles.playground}>
        <div className={styles.row}>
          {renderCard(5)}
          {renderCard(5)}
          {renderCard(5)}
          {renderCard(5)}
        </div>
        <div className={styles.main}>
          {renderCard(5, true)}
          {renderCard(4, true)}
          {renderCard(4, true)}
          {renderCard(5, true)}
          {renderCard(3, true)}
          {renderCard(5, true)}
        </div>
        <div className={styles.row}>
          {renderCard(4)}
          {renderCard(5)}
          {renderCard(3)}
          {renderCard(4)}
        </div>
      </div>
    </div>
  );
};

export default CourseCategory;
