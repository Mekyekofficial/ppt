import React from 'react';
// import Profile from './Feed/profile';
import Events from './Feed/events';
import Feeds from './Feed/feeds';
// import UserSuggestions from './Feed/userSuggestions';\
import TrendingTopic from './Feed/TrendingTopic';
import TrendingNews from './Feed/trendingNews';
import FeedsProfile from './Feed/FeedsProfile';
import FeedSectionStyles from './css/feedSection.module.css';

function feedSection() {
  return (
    <div className={FeedSectionStyles["feed-section"]}>
      <div className={FeedSectionStyles["left-sidebar"]}>
        {/* <Profile /> */}
        <FeedsProfile />
      </div>
      <div className={FeedSectionStyles["main-content"]}>
        <Feeds />
      </div>
      <div className={FeedSectionStyles["right-sidebar"]}>
        <TrendingTopic />
        {/* <UserSuggestions /> */}
      </div>
    </div>
  );
}

export default feedSection;
