import React from "react";
import styles from "./css/TrendingTopic.module.css";

const trendingTopics = [
  { topic: "#Webdevelopment", count: "2.4K" },
  { topic: "#UXDesign", count: "1.8k" },
  { topic: "#AI", count: "1.2k" },
  { topic: "#Data Science", count: "1k" },
];

const TrendingTopic = () => {
  return (
    <div className={styles.trendingBox}>
      <h3 className={styles.heading}>Trending topic</h3>
      <ul className={styles.topicList}>
        {trendingTopics.map((item, index) => (
          <li key={index} className={styles.topicItem}>
            <span className={styles.topic}>{item.topic}</span>
            <span className={styles.count}>{item.count}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrendingTopic;
