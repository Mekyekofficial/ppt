import React from "react";
import styles from "./css/EventUpcoming.module.css";

const EventUpcoming = () => {
  return (
    <div className={styles.upcomingContainer}>
      <h2 className={styles.heading}>Upcoming Events</h2>
      <div className={styles.content}></div>
    </div>
  );
};

export default EventUpcoming;
