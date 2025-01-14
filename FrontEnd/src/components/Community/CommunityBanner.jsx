import React from 'react';
import yourCommunities from '../../assets/yourCommunity.png';
import requestedCommunity from '../../assets/requestedCommunity.png';
import styles from './css/CommunityBanner.module.css';

const CommunityBanner = () => {
  return (
    <div className={styles.container}>
      <div className={styles.searchSection}>
        <input type="text" className={styles.searchInput} placeholder="Search..." />
        <button className={styles.searchButton}>Search</button>
      </div>
      <div className={styles.communitiesSection}>
        <div className={styles.communityItem}>
          <img src={yourCommunities} alt="Your Communities" className={styles.communityImage} />
          <p>Your Communities</p>
        </div>
        <div className={styles.communityItem}>
          <img src={requestedCommunity} alt="Requested" className={styles.communityImage} />
          <p>Requested</p>
        </div>
      </div>
      <button className={styles.createGroupButton}>Create Group</button>
    </div>
  );
};

export default CommunityBanner;
