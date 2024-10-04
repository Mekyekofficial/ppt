import React from 'react';
// import Profile from './Feed/profile';
import Events from './Feed/events';
import Feeds from './Feed/feeds';
// import UserSuggestions from './Feed/userSuggestions';
import './css/FeedSection.css';

function feedSection() {
  return (
    <div className="feed-section">
      <div className="left-sidebar">
        {/* <Profile /> */}
        <Events />
      </div>
      <div className="main-content">
        <Feeds />
      </div>
      <div className="right-sidebar">
        {/* <UserSuggestions /> */}
      </div>
    </div>
  );
}

export default feedSection;
