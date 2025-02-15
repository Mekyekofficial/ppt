import React, { useState } from 'react';
import WorkTabStyles from './css/WorkTab.module.css';
import WorkFilter from './Work/WorkFilter';
import WorkItems from './Work/WorkItems';
import WorkDescription from './Work/WorkDescription';

const WorkTab = () => {
  // State to store the selected job
  const [selectedJob, setSelectedJob] = useState(null);

  return (
    <div className={WorkTabStyles["Work-tab"]}>
      <div className={WorkTabStyles["left-sidebar"]}>
        <WorkFilter />
      </div>
      <div className={WorkTabStyles["main-content"]}>
        <WorkItems setSelectedJob={setSelectedJob} />
      </div>
      
      <div className={WorkTabStyles["right-sidebar"]}>
        {selectedJob && (
          <WorkDescription job={selectedJob} />
        )}
      </div>
      
    </div>
  );
};

export default WorkTab;
