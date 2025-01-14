import React from "react";
import { FaRegCircleUser } from "react-icons/fa6";
import styles from "./css/NewsChannelSuggestion.module.css";

const users = [
  "User 1",
  "User 2",
  "User 3",
  "User 4",
  "User 5",
];

const NewsChannelSuggestion = () => {
  return (
    <div className={styles.container}>
      <h2>You can check out...</h2>
      <div className={styles.userList}>
        {users.map((user, index) => (
          <div key={index} className={styles.userItem}>
            <div className={styles.userInfo}>
              <span className={styles.userIcon}><FaRegCircleUser /></span>
              <span className={styles.userName}>{user}</span>
            </div>
            <div className={styles.actions}>
              <button className={styles.actionButton}>Go after</button>
              <button className={styles.actionButton}>Be in touch</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsChannelSuggestion;
