import React from 'react';
import styles from './css/TrendingEvents.module.css';
import { Circle } from 'lucide-react';

const TrendingEvents = () => {
    const events = [
        { date: "1 January", description: "New Year's Eve" },
        { date: "24th February", description: "Super Bowl (NFL Championship Game)" },
        { date: "9th March", description: "Kolkata International Drum Festival" },
        { date: "14th March", description: "The Holi Land 2025" },
        { date: "12th March", description: "Bengal Auto Expo" },
        { date: "22nd March", description: "Indian Premiere League" },
        { date: "25th March", description: "2025 IFA Shield" },
    ];

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Trending</h2>
            {events.map((event, index) => (
                <div key={index} className={styles.event}>
                    <div>
                    <Circle size={16} className={styles.icon} /><p className={styles.date}>{event.date}</p>
                    </div>
                        <p className={styles.description}>{event.description}</p>
                    
                </div>
            ))}
        </div>
    );
};

export default TrendingEvents;
