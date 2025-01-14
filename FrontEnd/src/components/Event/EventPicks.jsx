import React from 'react';
import styles from './css/EventPicks.module.css';

const EventPicks = () => {
  const events = [
    {
      date: '5th Sept, 2024',
      title: 'TUC - Garba Dandiya Utsav 2024 | Navratri 2024',
    },
    {
      date: '5th Sept, 2024',
      title: 'FLOATING BUFFET AT LENIN CRUISES (NON SAILING)',
    },
    {
      date: '5th Sept, 2024',
      title: 'FLOATING BUFFET AT LENIN CRUISES (NON SAILING)',
    },
    {
      date: '5th Sept, 2024',
      title: 'FLOATING BUFFET AT LENIN CRUISES (NON SAILING)',
    },
    {
      date: '5th Sept, 2024',
      title: 'FLOATING BUFFET AT LENIN CRUISES (NON SAILING)',
    },
  ];

  return (
    <div className={styles.picksContainer}>
      <h2 className={styles.heading}>
        Picks <span className={styles.underline}></span>
      </h2>
      <div className={styles.eventList}>
        {events.map((event, index) => (
          <div key={index} className={styles.eventItem}>
            <p className={styles.date}>{event.date}</p>
            <p className={styles.title}>{event.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventPicks;
