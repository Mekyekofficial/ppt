import React from 'react';
import Sidebar from './';
import Dashboard from './components/Dashboard/Dashboard';
import './ATS.css';

const ATS = () => {
  return (
    <div className="ATS-container">
      <Sidebar />
      <Dashboard />
    </div>
  );
};

export default ATS;
