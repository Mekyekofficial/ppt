import React from 'react';
import Logo from '../../assets/logo.png';
import styles from './css/CommunitySuggested.module.css';

const CommunitySuggested = ({ name }) => {
    return (
        <div className={styles.suggestion}>
            <div className={styles.community}>
                <img src={Logo} alt="community" className={styles.image} />
                <div className={styles.details}>
                    <p className={styles.name}>{name}</p>
                    <p className={styles.role}>members</p>
                </div>
            </div>
            <button className={styles.joinButton}>Join</button>
        </div>
    );
};

export default CommunitySuggested;
