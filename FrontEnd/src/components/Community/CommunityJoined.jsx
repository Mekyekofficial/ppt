import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import styles from './css/CommunityJoined.module.css';

const CommunityJoined = ({ logo, name, description, style, _id }) => {
    const navigate = useNavigate();
    return (
        <div className={styles.communityItem} style={style} onClick={() => navigate(`/community/${_id}`)}>
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
