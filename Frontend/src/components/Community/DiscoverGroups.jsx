import React from 'react';
import discoverGroups from '../../assets/discoverGroups.png';
import styles from './css/DiscoverGroups.module.css';

const DiscoverGroups = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <img src={discoverGroups} alt="Discover Groups" className={styles.illustration}/>
            </div>
            <h1 className={styles.title}>Discover groups</h1>
            <p className={styles.description}>
                Find other trusted communities that share and<br />support your goals.
            </p>
            <button className={styles.discoverButton}>Discover</button>
        </div>
    );
};

export default DiscoverGroups;
