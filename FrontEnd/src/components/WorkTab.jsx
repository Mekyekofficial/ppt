import React from 'react';
import WorkTabStyles from './css/WorkTab.module.css';
import WorkBanner from './Work/WorkBanner';
import WorkFilter from './Work/WorkFilter';
import WorkFilterByJob from './Work/WorkFilterByJob';
import WorkItems from './Work/WorkItems';

const WorkTab = () => {
  return (
    <div className={WorkTabStyles["Work-tab"]}>
      <WorkBanner />
      <div className={WorkTabStyles.content}>
        <div className={WorkTabStyles.sidebar}>
          <WorkFilter />
          <WorkFilterByJob />
        </div>
        <div className={WorkTabStyles["main-content"]}>
          <WorkItems />
        </div>
      </div>
    </div>
  );
};

export default WorkTab;
