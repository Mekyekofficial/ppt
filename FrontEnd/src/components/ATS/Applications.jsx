import React, { useState } from 'react';
import Filters from './Applications/Filters';
import Views from './Applications/Views';
import TableView from './Applications/TableView';
import CardView from './Applications/CardView';
import ApplicationsStyles from './css/Applications.module.css';

const Applications = () => {
  const [view, setView] = useState('table');

  return (
    <div className={ApplicationsStyles.applications}>
      <div className={ApplicationsStyles["top-bar"]}>
        <button className={ApplicationsStyles["create-job-btn"]}>Find Applications</button>
      </div>

      <div className={ApplicationsStyles.controls}>
        <Filters />
        <Views setView={setView} />
      </div>

      <div className={ApplicationsStyles.content}>
        {view === 'table' ? <TableView /> : <CardView />}
      </div>
    </div>
  );
};

export default Applications;
