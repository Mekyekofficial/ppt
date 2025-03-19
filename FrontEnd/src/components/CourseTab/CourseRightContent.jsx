import React from "react";
import styles from "./css/CourseRightContent.module.css";

import { ChevronDown } from 'lucide-react';

const CourseRightContent = () => {
  const categories = [
    ['Web Development', 'AI/ML'],
    ['Data science', 'IOT', 'UX/UI'],
    ['Cloud Computing', 'Blockchain'],
    ['Computer Networking'],
    ['Ethical Hacking', 'Data Analytics'],
    ['App Development'],
    ['Web Development', 'AI/ML'],
    ['Data science', 'IOT', 'UX/UI'],
    ['Cloud Computing', 'Blockchain'],
    ['Computer Networking']
    ];

  return (
    <div className={styles.dashboard}>
            <div className={styles.headerCard}>
                <h2>Welcome, Tulanka</h2>
                <p>Good Morning</p>
            </div>

            <div className={styles.categoryCard}>
                <div className={styles.choiceLabel}>Your Choice</div>
                <div className={styles.categories}>
                    {categories.map((row, index) => (
                        <div key={index} className={styles.categoryRow}>
                            {row.map((category, idx) => (
                                <div key={idx} className={styles.categoryItem}>{category}</div>
                            ))}
                        </div>
                    ))}
                </div>
                <div className={styles.viewMore}>
                    view more <ChevronDown size={16} />
                </div>
            </div>
        </div>
  );
};

export default CourseRightContent;
