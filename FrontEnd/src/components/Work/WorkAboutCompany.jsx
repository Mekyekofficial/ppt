import React from 'react';
import styles from './css/WorkAboutCompany.module.css';
import StarBorderIcon from '@mui/icons-material/StarBorder';

const WorkAboutCompany = () => {
  return (
    <div className={styles.container}>
      <h2>About The Company</h2>
      <p className={styles.subText}>(Company info and Description)</p>
      
      <div className={styles.infoSection}>
        <div className={styles.infoItem}>
          <h4>Industry</h4>
        </div>
        <div className={styles.infoItem}>
          <h4>Company Size</h4>
        </div>
        <div className={styles.infoItem}>
          <h4>Headquarter</h4>
        </div>
        <div className={`${styles.infoItem} ${styles.reviewSection}`}>
          <h4>Reviews</h4>
          <div className={styles.stars}>
            <StarBorderIcon fontSize="small" />
            <StarBorderIcon fontSize="small" />
            <StarBorderIcon fontSize="small" />
            <StarBorderIcon fontSize="small" />
            <StarBorderIcon fontSize="small" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkAboutCompany;
