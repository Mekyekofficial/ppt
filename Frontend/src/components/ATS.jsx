import React from 'react';
import Sidebar from './ATS/Sidebar';
// import Dashboard from './ATS/Dashboard';
import Jobs from './ATS/Jobs';
// import Applications from './ATS/Applications';
// import TalentPool from './ATS/TalentPool';
import './css/ATS.css';

const ATS = () => {
  return (
    <div className="ATS-container">
      <Sidebar />
      <Jobs />
    </div>
  );
};

export default ATS;
