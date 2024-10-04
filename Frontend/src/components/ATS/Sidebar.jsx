import React from 'react';
import './css/Sidebar.css';
import logo from '../../assets/logo.png';
import { FaHome, FaBriefcase, FaEnvelope, FaUsers, FaSearch, FaStore, FaCog, FaList } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="company-container">
        <img src={logo} alt="logo" className="logo" /> Mekyek
      </div>
      <div className="search-box-container">
        <FaSearch className="search-icon" />
        <input type="text" placeholder="Search..." className="search-box" />
      </div>
      <ul className="menu">
        <li className='active'>
          <FaHome className="menu-icon" /> Dashboard
        </li>
        <li>
          <FaBriefcase className="menu-icon" /> Jobs
        </li>
        <li>
          <FaEnvelope className="menu-icon" /> Applications
        </li>
        <li>
          <FaUsers className="menu-icon" /> Talent Pool
        </li>
        <li>
          <FaList className="menu-icon" /> Talent Hunt
        </li>
        <li>
          <FaStore className="menu-icon" /> Market Place
        </li>
        <li>
          <FaCog className="menu-icon" /> Settings
        </li>
        <li>
          <FaList className="menu-icon" /> Setup
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
