import React from 'react';
import styles from './css/CourseTools.module.css';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const goToCourseSettings = () => {
  window.location.href = '/learn/settings';
}

const CourseTools = () => {
  return (
    <div className={styles.container}>
      <p className={styles.option}>My courses</p>
      <p className={styles.option}>Save for later</p>
      <div className={styles.option}>
        Wishlist <FavoriteBorderIcon className={styles.icon} />
      </div>
      <p className={styles.option}>Post your Own</p>
      <p className={styles.option} onClick={goToCourseSettings}>Settings</p>
    </div>
  );
};

export default CourseTools;
