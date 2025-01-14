import React from 'react';
import styles from './css/CourseTabHeading.module.css';
import SearchIcon from '@mui/icons-material/Search';

const CourseTabHeading = () => {
  return (
    <div className={styles.container}>
      <div className={styles.greeting}>
        <h1>Hii, Tulanka</h1>
        <p>Good morning</p>
      </div>
      <div className={styles.searchBar}>
        <SearchIcon className={styles.icon} />
        <input
          type="text"
          placeholder="Search"
          className={styles.input}
        />
      </div>
    </div>
  );
};

export default CourseTabHeading;
