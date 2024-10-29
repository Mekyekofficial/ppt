import React from 'react';
import EventItem from './EventItem';
import styles from './css/EventCategory.module.css';

const EventCategory = () => {
  return (
    <div className={styles.container}>
      <button className={styles.categoryButton}>Free events</button>
      <div className={styles.eventList}>
        <EventItem />
        <EventItem />
        <EventItem />
      </div>
      <div className={styles.showAll}>
        <span>Show All</span>
        <span className={styles.arrow}>&rarr;</span>
      </div>
    </div>
  );
};

export default EventCategory;
