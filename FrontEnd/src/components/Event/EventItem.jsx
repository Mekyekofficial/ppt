import React from 'react';
import styles from './css/EventItem.module.css';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EventIcon from '@mui/icons-material/Event';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const EventItem = ({ event }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={event.eventImage} alt={event.eventName} className={styles.eventImage} />
      </div>
      <h3 className={styles.eventName}>{event.eventName}</h3>
      <div className={styles.eventDetails}>
        <div className={styles.detailItem}>
          <LocationOnIcon className={styles.icon} />
          <span>{event.location}</span>
        </div>
        <div className={styles.detailItem}>
          <EventIcon className={styles.icon} />
          <span>{new Date(event.date).toDateString()}</span>
        </div>
        <div className={styles.detailItem}>
          <AccessTimeIcon className={styles.icon} />
          <span>{event.time}</span>
        </div>
      </div>
      <button className={styles.joinButton}>Join</button>
    </div>
  );
};

export default EventItem;
