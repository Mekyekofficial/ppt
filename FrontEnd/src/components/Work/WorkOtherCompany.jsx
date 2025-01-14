import React from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WorkIcon from '@mui/icons-material/Work';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import styles from './css/WorkOtherCompanies.module.css';

const WorkOtherCompany = () => {
  return (
    <div className={styles.card}>
      <div className={styles.info}>
        <div className={styles.icon}><WorkIcon /></div>
        <div className={styles.icon}><LocationOnIcon /></div>
        <div className={styles.icon}><AttachMoneyIcon /></div>
        <div className={styles.infoBox}></div>
        <div className={styles.infoBox}></div>
        <div className={styles.infoBox}></div>
      </div>
      <div className={styles.actions}>
        <button className={styles.viewButton}>View</button>
        <BookmarkBorderIcon className={styles.saveIcon} />
      </div>
    </div>
  );
};

export default WorkOtherCompany;
