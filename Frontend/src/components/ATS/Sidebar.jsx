import React from 'react';
import logo from '../../assets/logo.png';
import { FaHome, FaBriefcase, FaEnvelope, FaUsers, FaSearch, FaStore, FaCog, FaList } from 'react-icons/fa';
import SidebarStyles from './css/sidebar.module.css';

const Sidebar = () => {
  return (
    <div className={SidebarStyles.sidebar}>
      <div className={SidebarStyles["company-container"]}>
        <img src={logo} alt="logo" className={SidebarStyles.logo} /> Mekyek
      </div>
      <div className={SidebarStyles["search-box-container"]}>
        <FaSearch className={SidebarStyles["search-icon"]} />
        <input type="text" placeholder="Search..." className={SidebarStyles["search-box"]} />
      </div>
      <ul className={SidebarStyles.menu}>
        <li className={SidebarStyles.active}>
          <FaHome className={SidebarStyles["menu-icon"]} /> Dashboard
        </li>
        <li>
          <FaBriefcase className={SidebarStyles["menu-icon"]} /> Jobs
        </li>
        <li>
          <FaEnvelope className={SidebarStyles["menu-icon"]} /> Applications
        </li>
        <li>
          <FaUsers className={SidebarStyles["menu-icon"]} /> Talent Pool
        </li>
        <li>
          <FaList className={SidebarStyles["menu-icon"]} /> Talent Hunt
        </li>
        <li>
          <FaStore className={SidebarStyles["menu-icon"]} /> Market Place
        </li>
        <li>
          <FaCog className={SidebarStyles["menu-icon"]} /> Settings
        </li>
        <li>
          <FaList className={SidebarStyles["menu-icon"]} /> Setup
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
