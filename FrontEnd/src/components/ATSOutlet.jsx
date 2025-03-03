import React, { useState } from 'react';
import Sidebar from './ATS/Sidebar';
import SidebarTwo from './ATS/SidebarTwo';
import ATSOutletStyles from './css/ATSOutlet.module.css';
import { Outlet } from 'react-router-dom';

const ATSOutlet = () => {
  const [useSidebarTwo, setUseSidebarTwo] = useState(false);

  const toggleSidebar = () => {
    setUseSidebarTwo(!useSidebarTwo);
  };

  return (
    <div className={ATSOutletStyles["ATS-container"]}>
      {/* Toggle button for switching between sidebars */}
      <button 
        onClick={toggleSidebar} 
        className={ATSOutletStyles["sidebar-toggle"]}
      >
        Switch to {useSidebarTwo ? 'Classic' : 'Modern'} Sidebar
      </button>

      {/* Render either Sidebar or SidebarTwo based on state */}
      {useSidebarTwo ? <SidebarTwo /> : <Sidebar />}
      
      <main className={ATSOutletStyles["content-area"]}>
        <Outlet />
      </main>
    </div>
  );
};

export default ATSOutlet;
