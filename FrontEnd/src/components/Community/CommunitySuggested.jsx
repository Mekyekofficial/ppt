import React, { useState } from 'react';
import { UserPlus } from 'lucide-react';
import styles from './css/CommunitySuggested.module.css';

const CommunitySuggested = ({ name, memberCount = 0, logo }) => {
    const [isJoining, setIsJoining] = useState(false);

    const handleJoin = () => {
        setIsJoining(true);
        // Simulate API call
        setTimeout(() => {
            setIsJoining(false);
        }, 1000);
    };

    return (
        <div className={styles.suggestion}>
            <div className={styles.community}>
                <div className={styles.imageContainer}>
                    <img src={logo} alt={name} className={styles.image} />
                </div>
                <div className={styles.details}>
                    <h3 className={styles.name}>{name}</h3>
                    <p className={styles.memberCount}>
                        {memberCount.toLocaleString()} members
                    </p>
                </div>
            </div>
            <button 
                className={`${styles.joinButton} ${isJoining ? styles.joining : ''}`}
                onClick={handleJoin}
                disabled={isJoining}
            >
                <UserPlus size={16} />
                <span>{isJoining ? 'Joining...' : 'Join'}</span>
            </button>
        </div>
    );
};

export default CommunitySuggested;
