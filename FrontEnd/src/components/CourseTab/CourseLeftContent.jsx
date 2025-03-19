import React from "react";
import styles from "./css/CourseLeftContent.module.css";
import { Heart } from 'lucide-react';

const CourseLeftContent = () => {
  return (
    <div className={styles.card}>
      <div className={styles.menuItem}>My courses</div>
            <div className={styles.menuItem}>Save for later</div>
            <div className={styles.menuItem}>
                Wishlist <Heart size={16} className={styles.icon} />
            </div>
            <div className={styles.menuItem}>Post your Own</div>
            <div className={styles.menuItem}>Settings</div>
    </div>
  );
};

export default CourseLeftContent;
