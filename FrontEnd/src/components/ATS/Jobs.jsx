import React, { useState, useEffect } from 'react';
import Filters from './Jobs/Filters';
import Views from './Jobs/Views';
import TableView from './Jobs/TableView';
import CardView from './Jobs/CardView';
import JobsStyles from './css/Jobs.module.css';
import JobPopupForm from './Jobs/JobPopupForm';
import API from '../../api';
import { use } from 'react';

const JobDashboard = () => {
  const [openJobForm, setOpenJobForm] = useState(false);
  const [view, setView] = useState('table');
  const [jobs, setJobs] = useState([]); // State to hold job data
  const [loading, setLoading] = useState(true);

  // Manage selected columns for table view
  const [selectedColumns, setSelectedColumns] = useState([
    'Applicants', 
    'Posted On', 
    'Posted By'
  ]);

  const fetchJobs = async (companyId) => {
    if (!companyId) {
      console.error("Company ID is missing.");
      setJobs([]);
      setLoading(false);
      return;
    }
  
    try {
      const response = await API.get(`/ATS/get-company-jobs?companyId=${companyId}`);
      setJobs(response.data); // Axios automatically parses JSON, no need for `response.json()`
    } catch (error) {
      console.error('Error fetching jobs:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleClickOpenJobForm = () => {
    setOpenJobForm(true);
  };

  const handleCloseJobForm = () => {
    setOpenJobForm(false);
    fetchJobs(); // Refresh job list after posting
  };

  useEffect(() => {
    const companyId = localStorage.getItem('company-id');
  
    if (companyId && companyId !== "null") {
      fetchJobs(companyId);
    } else {
      console.error("Invalid companyId:", companyId);
      setLoading(false);
    }
  }, []);

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
        {loading ? (
          <p>Loading jobs...</p>
        ) : view === 'table' ? (
          <TableView jobs={jobs} selectedColumns={selectedColumns} />
        ) : (
          <CardView jobs={jobs} />
        )}
      </div>
    </div>
  );
};

export default JobDashboard;
