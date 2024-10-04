import React, { useState } from 'react';
import Filters from './Applications/Filters';
import Views from './Applications/Views';
import TableView from './Applications/TableView';
import CardView from './Applications/CardView';
import './css/Applications.css';

const Applications = () => {
  const [view, setView] = useState('table');

  return (
    <div className="applications">
      <div className="top-bar">
        <button className="create-job-btn">Find Applications</button>
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

export default Applications;
