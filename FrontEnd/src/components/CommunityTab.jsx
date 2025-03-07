import React, { useState, useEffect } from 'react';
import styles from './css/CommunityTab.module.css';
import DiscoverGroups from './Community/DiscoverGroups';
import CommunitySuggested from './Community/CommunitySuggested';
import CommunityYour from './Community/CommunityYour';
import CreateCommunity from './Community/CreateComunity';
import { Search, Users, ChevronRight } from 'lucide-react';
import { Outlet } from 'react-router-dom';
import API from '../api';


const CommunityTab = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('main');
  const [suggestedCommunities, setSuggestedCommunities] = useState([
    {
      id: 1,
      name: "Human Resources Review Group",
      memberCount: 1234,
      logo: "https://via.placeholder.com/48",
      category: "Business"
    },
    {
      id: 2,
      name: "Social Media Marketing Group",
      memberCount: 5678,
      logo: "https://via.placeholder.com/48",
      category: "Marketing"
    },
    {
      id: 3,
      name: "Brain Expansion Group",
      memberCount: 9012,
      logo: "https://via.placeholder.com/48",
      category: "Education"
    }
  ]);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const filteredCommunities = suggestedCommunities.filter(community =>
    community.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    community.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className={styles.pageContainer}>
      <div className={styles.container}>
        <div className={styles.leftSidebar}>
          <div className={styles.searchContainer}>
            <div className={styles.searchWrapper}>
              <Search className={styles.searchIcon} size={20} />
              <input
                type="text"
                placeholder="Find Communities"
                className={styles.searchInput}
                value={searchQuery}
                onChange={handleSearch}
              />
            </div>
            <button className={styles.filterButton}>Filter</button>
          </div>

          <div className={styles.navigation}>
            <button
              className={`${styles.navButton} ${activeTab === 'main' ? styles.active : ''}`}
              onClick={() => handleTabChange('main')}
            >
              Main Group
            </button>
            <button
              className={`${styles.navButton} ${activeTab === 'invitation' ? styles.active : ''}`}
              onClick={() => handleTabChange('invitation')}
            >
              Invitation
            </button>
            <button
              className={`${styles.navButton} ${activeTab === 'your' ? styles.active : ''}`}
              onClick={() => handleTabChange('your')}
            >
              Your Communities
            </button>
          </div>

          <button className={styles.createButton} onClick={() => setShowPopup(true)}>
            <Users size={20} />
            Create Community
          </button>
        </div>

        
        <div className={styles.mainContent}>
          <Outlet />
        </div>

        <div className={styles.rightSidebar}>
          <div className={styles.suggestedSection}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Suggested Communities</h2>
              <ChevronRight size={20} className={styles.headerIcon} />
            </div>
            <div className={styles.suggestedList}>
              {filteredCommunities.map((community) => (
                <CommunitySuggested
                  key={community.id}
                  name={community.name}
                  memberCount={community.memberCount}
                  logo={community.logo}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      {showPopup && <CreateCommunity onClose={() => setShowPopup(false)} />}
    </div>
  );
};

export default CommunityTab;
