import React, { useState } from 'react';
import Filters from './Jobs/Filters';
import Views from './Jobs/Views';
import TableView from './Jobs/TableView';
import CardView from './Jobs/CardView';
import './css/Jobs.css';

const JobDashboard = () => {
  const [view, setView] = useState('table');

  return (
    <div className="jobs">
      <div className="top-bar">
        <button className="create-job-btn">Create a Job</button>
      </div>

      <div className="controls">
        <Filters />
        <Views setView={setView} />
      </div>

      <div className="content">
        {view === 'table' ? <TableView /> : <CardView />}
      </div>
    </div>
  );
};

export default JobDashboard;
