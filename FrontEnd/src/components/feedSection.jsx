import React from 'react';
// import Profile from './Feed/profile';
import Events from './Feed/events';
import Feeds from './Feed/feeds';
// import UserSuggestions from './Feed/userSuggestions';\
import TrendingNews from './Feed/trendingNews';
import FeedSectionStyles from './css/feedSection.module.css';

function feedSection() {
  return (
    <div className={FeedSectionStyles["feed-section"]}>
      <div className={FeedSectionStyles["left-sidebar"]}>
        {/* <Profile /> */}
        <Events />
      </div>
      <div className={FeedSectionStyles["main-content"]}>
        <Feeds />
      </div>
      <div className={FeedSectionStyles["right-sidebar"]}>
        <TrendingNews />
        {/* <UserSuggestions /> */}
      </div>
    </div>
  );
}

export default feedSection;
