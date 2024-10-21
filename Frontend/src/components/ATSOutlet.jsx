import React from 'react';
import Sidebar from './ATS/Sidebar';
import ATSStyles from './css/ATS.module.css';
import { Outlet } from 'react-router-dom';

const ATS = () => {
  return (
    <div className={ATSStyles["ATS-container"]}>
      <Sidebar />
      <Outlet /> 
    </div>
  );
};

export default ATS;
