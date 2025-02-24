import React from 'react';
import CommunityTabStyles from './css/CommunityTab.module.css';
import CommunityBanner from './Community/CommunityBanner';
import DiscoverGroups from './Community/DiscoverGroups';
import CommunitySuggestions from './Community/CommunitySuggestions';
import CommunityYour from './Community/CommunityYour';
import ComunitySearchBar from './Community/ComunitySearchBar';

const CommunityTab = () => {
  return (
    <div className={CommunityTabStyles["community-section"]}>
      <div className={CommunityTabStyles["left-sidebar"]}>

      </div>
      <div className={CommunityTabStyles["main-content"]}>
        <ComunitySearchBar />
        <CommunityYour />
      </div>
      <div className={CommunityTabStyles["right-sidebar"]}>

      </div>
    </div>
  );
};

export default CommunityTab;
