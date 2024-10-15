import React, { useState } from 'react';
import Filters from './Jobs/Filters';
import Views from './Jobs/Views';
import TableView from './Jobs/TableView';
import CardView from './Jobs/CardView';
import JobsStyles from './css/Jobs.module.css';

const JobDashboard = () => {
  const [view, setView] = useState('table');

  return (
    <div className={JobsStyles.jobs}>
      <div className={JobsStyles["top-bar"]}>
        <button className={JobsStyles["create-job-btn"]}>Create a Job</button>
      </div>

      <div className={JobsStyles.controls}>
        <Filters />
        <Views setView={setView} />
      </div>

      <div className={JobsStyles.content}>
        {view === 'table' ? <TableView /> : <CardView />}
      </div>
    </div>
  );
};

export default JobDashboard;
