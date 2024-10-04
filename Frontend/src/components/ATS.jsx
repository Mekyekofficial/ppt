import React from 'react';
import Sidebar from './ATS/Sidebar';
import Dashboard from './ATS/Dashboard';
import Jobs from './ATS/Jobs';
import './css/ATS.css';

const ATS = () => {
  return (
    <div className="ATS-container">
      <Sidebar />
      <Dashboard />
    </div>
  );
};

export default ATS;
