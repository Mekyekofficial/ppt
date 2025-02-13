import React from 'react';
import EventTabStyles from './css/EventTab.module.css';
import EventBar from './Event/EventBar';
import EventBanner from './Event/EventBanner';
import EventHost from './Event/EventHost';
import EventPicks from './Event/EventPicks';
import EventCategoryRecommendation from './Event/EventCategoryRecommendation';
import EventCategory from './Event/EventCategory';
import EventLeftContent from './Event/EventLeftContent';
import EventSearchBar from './Event/EventSearchBar';
import EventUpcoming from './Event/EventUpcoming';
import EventSection from './Event/EventSection';

const EventTab = () => {
  return (
    <div className={EventTabStyles["Event-tab"]}>
      <div className={EventTabStyles.leftSidebar}>
          <EventLeftContent />
      </div>
      <div className={EventTabStyles["Event-content"]}>
        <div className={EventTabStyles["Event-bar"]}>
          <EventSearchBar />
          <EventUpcoming />
        </div>
        <div className={EventTabStyles["main-Event"]}>
          <EventSection />
        </div>
      </div>
    </div>
  );
};

export default EventTab;
