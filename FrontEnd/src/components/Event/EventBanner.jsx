import React from 'react';
import styles from './css/EventBanner.module.css';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Button from '@mui/material/Button';

const EventBanner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.content}>
        <div className={styles.eventInfo}>
          <div className={styles.location}>
            <LocationOnIcon />
            <span>Location</span>
          </div>
          <div className={styles.eventName}>Name of the Event</div>
          <div className={styles.eventTime}>DATE AND TIME</div>
        </div>
        <Button variant="contained" className={styles.joinButton}>
          Join
        </Button>
      </div>
      <div className={styles.controls}>
        <ChevronLeftIcon className={styles.icon} />
        <ChevronRightIcon className={styles.icon} />
      </div>
    </div>
  );
};

export default EventBanner;
