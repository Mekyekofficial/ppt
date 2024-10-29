import React from 'react';
import styles from './css/CommunityJoined.module.css';

const CommunityJoined = ({ logo, name, description }) => {
    return (
        <div className={styles.communityItem}>
            <img src={logo} alt={`${name} logo`} className={styles.logo} />
            <div className={styles.details}>
                <p className={styles.name}>{name}</p>
                <p className={styles.description}>{description}</p>
            </div>
        </div>
    );
};

export default CommunityJoined;
