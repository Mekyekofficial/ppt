import React from 'react';
import styles from './css/EventItem.module.css';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EventIcon from '@mui/icons-material/Event';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import EventItemImg from '../../assets/EventItem.png';

const EventItem = () => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={EventItemImg} alt="event" className={styles.eventImage} />
      </div>
      <h3 className={styles.eventName}>Name of the event</h3>
      <div className={styles.eventDetails}>
        <div className={styles.detailItem}>
          <LocationOnIcon className={styles.icon} />
          <span>Location</span>
        </div>
        <div className={styles.detailItem}>
          <EventIcon className={styles.icon} />
          <span>Date</span>
        </div>
        <div className={styles.detailItem}>
          <AccessTimeIcon className={styles.icon} />
          <span>Time</span>
        </div>
      </div>
      <button className={styles.joinButton}>Join</button>
    </div>
  );
};

export default EventItem;
