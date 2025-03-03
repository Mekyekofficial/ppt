import React, { useState, useEffect } from 'react';
import { Search, Users } from 'lucide-react';
import styles from './css/DiscoverGroups.module.css';

const DiscoverGroups = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div className={`${styles.container} ${isVisible ? styles.visible : ''}`}>
            <div className={styles.iconContainer}>
                <Users size={32} className={styles.icon} />
            </div>
            <h2 className={styles.title}>Discover Groups</h2>
            <p className={styles.description}>
                Find other trusted communities that share<br />
                and support your goals.
            </p>
            <button className={styles.discoverButton}>
                <Search size={16} />
                <span>Discover Now</span>
            </button>
        </div>
    );
};

export default DiscoverGroups;
