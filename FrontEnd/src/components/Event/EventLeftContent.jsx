import React from "react";
import styles from "./css/EventLeftContent.module.css";
import TrendingEvents from "./TrendingEvents";

const EventLeftContent = () => {
  return (
    <div className={styles.card}>
      <TrendingEvents />
    </div>
  );
};

export default EventLeftContent;
