import React, { useState } from 'react';
import { Search, Plus, ChevronDown } from 'lucide-react';
import styles from './css/CommunityBanner.module.css';

const CommunityBanner = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className={styles.container}>
      <div className={`${styles.searchSection} ${isSearchFocused ? styles.focused : ''}`}>
        <div className={styles.searchInputWrapper}>
          <Search className={styles.searchIcon} size={20} />
          <input 
            type="text" 
            className={styles.searchInput} 
            placeholder="Find Communities" 
            value={searchQuery}
            onChange={handleSearchChange}
            onFocus={() => setIsSearchFocused(true)}
            onBlur={() => setIsSearchFocused(false)}
          />
        </div>
        <button className={styles.filterButton}>
          Filter
          <ChevronDown size={16} />
        </button>
      </div>

      <div className={styles.navigationSection}>
        <div className={styles.navItem}>
          <span className={styles.active}>Main Group</span>
        </div>
        <div className={styles.navItem}>
          <span>Invitation</span>
        </div>
        <div className={styles.navItem}>
          <span>Your Communities</span>
        </div>
      </div>

      <button className={styles.createButton}>
        <Plus size={20} />
        Create Community
      </button>
    </div>
  );
};

export default CommunityBanner;
