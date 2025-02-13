import React from 'react';
import Event from './Event';
import styles from './css/EventSection.module.css';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const events = [
  {
    id: 1,
    eventName: 'ABC Events',
    eventImage: '', // Placeholder for image URL
  },
  {
    id: 2,
    eventName: 'ABC Events',
    eventImage: '',
  },
  {
    id: 3,
    eventName: 'ABC Events',
    eventImage: '',
  },
  {
    id: 4,
    eventName: 'ABC Events',
    eventImage: '',
  },
];

const EventSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <button className={styles.dateButton}>
          <CalendarMonthIcon className={styles.icon} />
          9 Jan - 31 Jan Events
        </button>
        <span className={styles.seeMore}>See More</span>
      </div>

      <div className={styles.eventList}>
        {events.map(event => (
          <Event key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default EventSection;
