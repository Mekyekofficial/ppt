import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Event from './Event';
import styles from './css/EventSection.module.css';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import API from '../../api'

const EventSection = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await API.get('/posts/events');
        setEvents(response.data); // Store fetched events
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, []);

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
        {events.length > 0 ? (
          events.map(event => <Event key={event._id} event={event} />)
        ) : (
          <p>Loading events...</p>
        )}
      </div>
    </div>
  );
};

export default EventSection;
