import React from 'react';
import EventTabStyles from './css/EventTab.module.css';
import EventBar from './Event/EventBar';
import EventBanner from './Event/EventBanner';
import EventHost from './Event/EventHost';
import EventPicks from './Event/EventPicks';
import EventCategoryRecommendation from './Event/EventCategoryRecommendation';
import EventCategory from './Event/EventCategory';

const EventTab = () => {
  return (
    <div className={EventTabStyles["Event-tab"]}>
      <EventBar />
      <div className={EventTabStyles["Event-content"]}>
        <div className={EventTabStyles["main-Event"]}>
          <EventBanner />
          <EventHost />
          <div className={EventTabStyles["Event-items"]}>
            <EventCategory />
            <EventCategory />
            <EventCategory />
          </div>
        </div>
        <div className={EventTabStyles.sidebar}>
          <EventPicks />
          <EventCategoryRecommendation />
        </div>
      </div>
    </div>
  );
};

export default EventTab;
