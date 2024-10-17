import React from 'react';
import { FaHome, FaNewspaper, FaUsers, FaBook, FaCalendarAlt, FaBriefcase, FaBell, FaEnvelope, FaBars,  } from 'react-icons/fa';
import { RxAvatar } from "react-icons/rx";
import Logo from '../../assets/logo.png';
import HeaderStyles from './css/header.module.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const active = ({isActive}) => {
    return isActive ? {color: "#FC914F"} : {color: "#333"};
  }
  return (
    <header className={HeaderStyles.header}>
      {/* Logo */}
      <div className={HeaderStyles.logo}>
        <img src={Logo} alt="Logo" className={HeaderStyles["logo-image"]} />
        <span className={HeaderStyles["logo-text"]}>Mekyek</span>
      </div>

      {/* Navigation Links */}
      <nav className={HeaderStyles.nav}>
        <NavLink to="/Feed-Section" className={HeaderStyles["nav-item"]} style={active}>
          <FaHome className={HeaderStyles.icon} />
          <span>Home</span>
        </NavLink>
        <NavLink to="/news" className={HeaderStyles["nav-item"]} style={active}>
          <FaNewspaper className={HeaderStyles.icon} />
          <span>News</span>
        </NavLink>
        <NavLink to="/community" className={HeaderStyles["nav-item"]} style={active}>
          <FaUsers className={HeaderStyles.icon} />
          <span>Community</span>
        </NavLink>
        <NavLink to="/learn" className={HeaderStyles["nav-item"]} style={active}>
          <FaBook className={HeaderStyles.icon} />
          <span>Learn</span>
        </NavLink>
        <NavLink to="/events" className={HeaderStyles["nav-item"]} style={active}>
          <FaCalendarAlt className={HeaderStyles.icon} />
          <span>Events</span>
        </NavLink>
        <NavLink to="/ATS" className={HeaderStyles["nav-item"]} style={active}>
          <FaBriefcase className={HeaderStyles.icon} />
          <span>Work</span>
        </NavLink>
      </nav>

      {/* User Section */}
      <div className={HeaderStyles["user-section"]}>
        <div className={HeaderStyles.profile}>
          <RxAvatar className={HeaderStyles.avatar} fontSize={"30px"}/>
          <span>&nbsp;Alex&nbsp;&nbsp;</span>
          <FaBell className={HeaderStyles.avatar} fontSize={"15px"} color='white'/>
        </div>
        <FaEnvelope className={HeaderStyles["user-icon"]}/>
        <FaBars className={HeaderStyles["user-icon"]} />
      </div>
    </header>
  );
};

export default Header;
