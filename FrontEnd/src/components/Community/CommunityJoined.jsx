import React from 'react';
import { ChevronRight } from 'lucide-react';
import styles from './css/CommunityJoined.module.css';

const CommunityJoined = ({ logo, name, description, style }) => {
    return (
        <div className={styles.communityItem} style={style}>
            <div className={styles.logoContainer}>
                <img src={logo} alt={`${name} logo`} className={styles.logo} />
            </div>
            <div className={styles.details}>
                <h3 className={styles.name}>{name}</h3>
                <p className={styles.description}>{description}</p>
            </div>
            <button className={styles.viewButton}>
                <span>View</span>
                <ChevronRight size={16} />
            </button>
        </div>
    );
};

export default CommunityJoined;
