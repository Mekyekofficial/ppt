import React from 'react';
import Sidebar from './ATS/Sidebar';
import ATSOutletStyles from './css/ATSOutlet.module.css';
import { Outlet } from 'react-router-dom';

const ATSOutlet = () => {
  return (
    <div className={ATSOutletStyles["ATS-container"]}>
      <Sidebar />
      <Outlet /> 
    </div>
  );
};

export default ATSOutlet;
