import React from 'react';
import logo from '../../assets/logo.png';
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
      {companyLogoLoaded && companyToken ? (
        <div className={SidebarStyles["company-container"]}>
          <img src={companyInfo.companyLogo} alt="logo" className={SidebarStyles.logo} /> {companyInfo.companyName}
        </div>
      ) : (
        <div className={SidebarStyles["company-container"]}>
          <img src={logo} alt="logo" className={SidebarStyles.logo} /> Mekyek
        </div>
      )
      }
      <div className={SidebarStyles["search-box-container"]}>
        <FaSearch className={SidebarStyles["search-icon"]} />
        <input type="text" placeholder="Search..." className={SidebarStyles["search-box"]} />
      </div>
      <ul className={SidebarStyles.menu}>
        <li>
          <NavLink to="/ATS/dashboard" style={active} className={SidebarStyles["menu-item"]}>
            <FaHome className={SidebarStyles["menu-icon"]} /> Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/ATS/jobs" style={active} className={SidebarStyles["menu-item"]}>
            <FaBriefcase className={SidebarStyles["menu-icon"]} /> Jobs
          </NavLink>
        </li>
        <li>
          <NavLink to="/ATS/applications" style={active} className={SidebarStyles["menu-item"]}>
            <FaEnvelope className={SidebarStyles["menu-icon"]} /> Applications
          </NavLink>
        </li>
        {/* <li>
          <NavLink to="/ATS/talentPool" style={active} className={SidebarStyles["menu-item"]}>
            <FaUsers className={SidebarStyles["menu-icon"]} /> Talent Pool
          </NavLink>
        </li> */}
        <li>
          <NavLink to="/ATS/talentHunt" style={active} className={SidebarStyles["menu-item"]}>
            <FaList className={SidebarStyles["menu-icon"]} /> Talent Hunt
          </NavLink>
        </li>
        {/* <li>
          <NavLink to="/ATS/marketPlace" style={active} className={SidebarStyles["menu-item"]}>
            <FaStore className={SidebarStyles["menu-icon"]} /> Market Place
          </NavLink>
        </li> */}
        <li>
          <NavLink to="/ATS/settings" style={active} className={SidebarStyles["menu-item"]}>
            <FaCog className={SidebarStyles["menu-icon"]} /> Settings
          </NavLink>
        </li>
        {/* <li>
          <NavLink to="/ATS/setup" style={active} className={SidebarStyles["menu-item"]}>
            <FaList className={SidebarStyles["menu-icon"]} /> Setup
          </NavLink>
        </li> */}
      </ul>
    </div>
  );
};

export default Sidebar;
