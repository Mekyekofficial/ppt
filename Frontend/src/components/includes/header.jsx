import React from 'react';
import { FaHome, FaNewspaper, FaUsers, FaBook, FaCalendarAlt, FaBriefcase, FaBell, FaEnvelope, FaBars,  } from 'react-icons/fa';
import { RxAvatar } from "react-icons/rx";
import Logo from '../../assets/logo.png';
import './css/header.css';

const Header = () => {
  return (
    <header className="header">
      {/* Logo */}
      <div className="logo">
        <img src={Logo} alt="Logo" className="logo-image" />
        <span className="logo-text">Mekyek</span>
      </div>

      {/* Navigation Links */}
      <nav className="nav">
        <a href="/" className="nav-item">
          <FaHome className="icon" />
          <span>Home</span>
        </a>
        <a href="/news" className="nav-item">
          <FaNewspaper className="icon" />
          <span>News</span>
        </a>
        <a href="/community" className="nav-item">
          <FaUsers className="icon" />
          <span>Community</span>
        </a>
        <a href="/learn" className="nav-item">
          <FaBook className="icon" />
          <span>Learn</span>
        </a>
        <a href="/events" className="nav-item">
          <FaCalendarAlt className="icon" />
          <span>Events</span>
        </a>
        <a href="/work" className="nav-item">
          <FaBriefcase className="icon" />
          <span>Work</span>
        </a>
      </nav>

      {/* User Section */}
      <div className="user-section">
        <div className="profile">
          <RxAvatar className="avatar" fontSize={"30px"}/>
          <span>&nbsp;Alex&nbsp;&nbsp;</span>
          <FaBell className="avatar" fontSize={"15px"} color='white'/>
        </div>
        <FaEnvelope className="user-icon"/>
        <FaBars className="user-icon" />
      </div>
    </header>
  );
};

export default Header;
