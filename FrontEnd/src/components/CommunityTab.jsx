import React from 'react';
import CommunityTabStyles from './css/CommunityTab.module.css';
import CommunityBanner from './Community/CommunityBanner';
import DiscoverGroups from './Community/DiscoverGroups';
import CommunitySuggestions from './Community/CommunitySuggestions';
import CommunityYour from './Community/CommunityYour';

const CommunityTab = () => {
  return (
    <div className={CommunityTabStyles["Community-tab"]}>
        <div className={CommunityTabStyles["main-Community"]}>
            <CommunityBanner />
            <DiscoverGroups />
            <CommunityYour />
        </div>
        <div className={CommunityTabStyles.sidebar}>
            <CommunitySuggestions />
        </div>
    </div>
  );
};

export default CommunityTab;
