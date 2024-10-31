import React from 'react';
import WorkTabStyles from './css/WorkTab.module.css';
import WorkBanner from './Work/WorkBanner';

const WorkTab = () => {
  return (
    <div className={WorkTabStyles["Work-tab"]}>
      <WorkBanner />
    </div>
  );
};

export default WorkTab;
