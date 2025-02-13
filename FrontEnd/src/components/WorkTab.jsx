import React from 'react';
import WorkTabStyles from './css/WorkTab.module.css';
import WorkBanner from './Work/WorkBanner';
import WorkFilter from './Work/WorkFilter';
import WorkFilterByJob from './Work/WorkFilterByJob';
import WorkItems from './Work/WorkItems';
import WorkDescription from './Work/WorkDescription';

const WorkTab = () => {
  return (
    <div className={WorkTabStyles["Work-tab"]}>
      <div className={WorkTabStyles["left-sidebar"]}>
        <WorkFilter />
      </div>
      <div className={WorkTabStyles["main-content"]}>
        <WorkItems />
      </div>
      <div className={WorkTabStyles["right-sidebar"]}>
        <WorkDescription />
      </div>
    </div>
  );
};

export default WorkTab;
