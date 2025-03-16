import React from 'react';
import logo from '../../../assets/logo.png';
import { FaHome, FaBriefcase, FaEnvelope, FaUsers, FaSearch, FaStore, FaCog, FaList } from 'react-icons/fa';
import SidebarStyles from './css/sidebar.module.css';
import { NavLink } from 'react-router-dom';
import { use, useEffect, useState } from 'react';

const Sidebar = () => {
  const companyToken = localStorage.getItem('company-token');

  const [companyInfo, setCompanyInfo] = useState(null);

  useEffect(() => {
    const company = localStorage.getItem('company-info');
    const companyInfo = JSON.parse(company);
    setCompanyInfo(companyInfo);
  }, []);

  const [companyLogoLoaded, setCompanyLogoLoaded] = useState(false);

  useEffect(() => {
    if (companyInfo?.companyLogo) {
      const img = new Image();
      img.src = companyInfo.companyLogo;
      img.onload = () => setCompanyLogoLoaded(true);
    }
  }, [companyInfo?.companyLogo]);

  const active = ({isActive}) => {
    return isActive ? {color: "#FC914F", } : {color: "#333"};
  }
  return (
    <div className={SidebarStyles.sidebar}>
      <ul className={SidebarStyles.menu}>
        <li>
          <NavLink to="/Company/ATS/Jobs" style={active} className={SidebarStyles["menu-item"]}>
            <FaBriefcase className={SidebarStyles["menu-icon"]} /> Jobs
          </NavLink>
        </li>
        <li>
          <NavLink to="/Company/ATS/Applications" style={active} className={SidebarStyles["menu-item"]}>
            <FaEnvelope className={SidebarStyles["menu-icon"]} /> Applications
          </NavLink>
        </li>
        <li>
          <NavLink to="/Company/ATS/Talent-Hunt" style={active} className={SidebarStyles["menu-item"]}>
            <FaList className={SidebarStyles["menu-icon"]} /> Talent Hunt
          </NavLink>
        </li>
        <li>
          <NavLink to="/Company/ATS/Interviews" style={active} className={SidebarStyles["menu-item"]}>
            <FaList className={SidebarStyles["menu-icon"]} /> Interviews
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
