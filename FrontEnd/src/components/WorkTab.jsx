import React from 'react';
import WorkTabStyles from './css/WorkTab.module.css';
import WorkBanner from './Work/WorkBanner';
import WorkFilter from './Work/WorkFilter';
import WorkFilterByJob from './Work/WorkFilterByJob';
import WorkItems from './Work/WorkItems';

const WorkTab = () => {
  return (
    <div className={WorkTabStyles["Work-tab"]}>
      <div className={WorkTabStyles["left-sidebar"]}>
        <WorkFilter />
      </div>
      <div className={WorkTabStyles["main-content"]}>

      </div>
      <div className={WorkTabStyles["right-sidebar"]}>

      </div>
    </div>
  );
};

export default WorkTab;
