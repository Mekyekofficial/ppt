import React from 'react';
import { FaHome, FaNewspaper, FaUsers, FaBook, FaCalendarAlt, FaBriefcase, FaBell, FaEnvelope, FaBars,  } from 'react-icons/fa';
import { RxAvatar } from "react-icons/rx";
import Logo from '../../assets/logo.png';
import HeaderStyles from './css/header.module.css';

const Header = () => {
  return (
    <header className={HeaderStyles.header}>
      {/* Logo */}
      <div className={HeaderStyles.logo}>
        <img src={Logo} alt="Logo" className={HeaderStyles["logo-image"]} />
        <span className={HeaderStyles["logo-text"]}>Mekyek</span>
      </div>

      {/* Navigation Links */}
      <nav className={HeaderStyles.nav}>
        <a href="/" className={HeaderStyles["nav-item"]}>
          <FaHome className={HeaderStyles.icon} />
          <span>Home</span>
        </a>
        <a href="/news" className={HeaderStyles["nav-item"]}>
          <FaNewspaper className={HeaderStyles.icon} />
          <span>News</span>
        </a>
        <a href="/community" className={HeaderStyles["nav-item"]}>
          <FaUsers className={HeaderStyles.icon} />
          <span>Community</span>
        </a>
        <a href="/learn" className={HeaderStyles["nav-item"]}>
          <FaBook className={HeaderStyles.icon} />
          <span>Learn</span>
        </a>
        <a href="/events" className={HeaderStyles["nav-item"]}>
          <FaCalendarAlt className={HeaderStyles.icon} />
          <span>Events</span>
        </a>
        <a href="/work" className={HeaderStyles["nav-item"]}>
          <FaBriefcase className={HeaderStyles.icon} />
          <span>Work</span>
        </a>
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
