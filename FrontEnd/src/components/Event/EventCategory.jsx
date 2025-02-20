import React, { useEffect, useState } from "react";
import axios from "axios";
import EventItem from "./EventItem";
import styles from "./css/EventCategory.module.css";

const SERVER_URL = process.env.PUBLIC_SERVER_URL;

const EventCategory = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(`${SERVER_URL}/posts/events`);
        setEvents(response.data); // Store fetched events
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div className={styles.container}>
      <button className={styles.categoryButton}>Free events</button>
      <div className={styles.eventList}>
        {events.length > 0 ? (
          events.map((event) => <EventItem key={event._id} event={event} />)
        ) : (
          <p>Loading events...</p>
        )}
      </div>
      <div className={styles.showAll}>
        <span>Show All</span>
        <span className={styles.arrow}>&rarr;</span>
      </div>
    </div>
  );
};

export default EventCategory;
