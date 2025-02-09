import React, { useState } from 'react';
import Filters from './Jobs/Filters';
import Views from './Jobs/Views';
import TableView from './Jobs/TableView';
import CardView from './Jobs/CardView';
import JobsStyles from './css/Jobs.module.css';
import JobPopupForm from './Jobs/JobPopupForm';

const JobDashboard = () => {
  const [openJobForm, setOpenJobForm] = useState(false);
  const [view, setView] = useState('table');

  // Manage selected columns for table view
  const [selectedColumns, setSelectedColumns] = useState([
    'Applicants', 
    'Posted On', 
    'Posted By'
  ]);

  const handleClickOpenJobForm = () => {
    setOpenJobForm(true);
  };

  const handleCloseJobForm = () => {
    setOpenJobForm(false);
  };

  return (
    <div className={JobsStyles.jobs}>
      <div className={JobsStyles["top-bar"]}>
        <button className={JobsStyles["create-job-btn"]} onClick={handleClickOpenJobForm}>
          Create a Job
        </button>
        <JobPopupForm open={openJobForm} onClose={handleCloseJobForm} />
      </div>

      <div className={JobsStyles.controls}>
        <Filters />
        <Views setView={setView} selectedColumns={selectedColumns} setSelectedColumns={setSelectedColumns} />
      </div>

      <div className={JobsStyles.content}>
        {view === 'table' ? <TableView selectedColumns={selectedColumns} /> : <CardView />}
      </div>
    </div>
  );
};

export default JobDashboard;
