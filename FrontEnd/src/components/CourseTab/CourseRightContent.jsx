import React, { useState, useEffect } from "react";
import styles from "./css/CourseRightContent.module.css";

import { ChevronDown } from 'lucide-react';

const CourseRightContent = () => {
    const [userInfo, setUserInfo] = useState({});
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

    useEffect(() => {
        const userInfo = JSON.parse(localStorage.getItem('user-info'));
        setUserInfo(userInfo);
    }, []);


    const [greeting, setGreeting] = useState('');

    useEffect(() => {
        const updateGreeting = () => {
            const now = new Date();
            const hour = now.getHours();

            if (hour >= 4 && hour < 12) {
                setGreeting('Good Morning');
            } else if (hour >= 12 && hour < 15) {
                setGreeting('Good Noon');
            } else if (hour >= 15 && hour < 17) {
                setGreeting('Good Afternoon');
            } else if (hour >= 17 && hour < 20) {
                setGreeting('Good Evening');
            } else {
                setGreeting('Good Night');
            }
        };

        updateGreeting();

        const intervalId = setInterval(updateGreeting, 60000); // Update every minute
        return () => clearInterval(intervalId);
    }, []);

  return (
    <div className={styles.dashboard}>
            <div className={styles.headerCard}>
                <h2>Welcome, {userInfo?.firstName || "Learner"}</h2>
                <p>{greeting} !!</p>
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
