import React from "react";
import styles from "./css/EventUpcoming.module.css";

const EventUpcoming = () => {
  return (
    <div className={styles.container}>
            <h2 className={styles.title}>Upcoming Events</h2>
            <div className={styles.event}>
                <p className={styles.date}>6th March</p>
                <p className={styles.description}>
                    Olympic Games – A global multi-sport event held every four years.
                </p>
            </div>
            <div className={styles.event}>
                <p className={styles.date}>8th March</p>
                <p className={styles.description}>
                    Met Gala – A high-profile fashion event held annually to fundraise for the Metropolitan Museum of Art.
                </p>
            </div>
        </div>
  );
};

export default EventUpcoming;
