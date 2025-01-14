import React from 'react';
import Logo from '../../assets/logo.png';
import HeaderStyles from './css/headerBeforeLogIn.module.css';
import { NavLink } from 'react-router-dom';

const HeaderBeforeLogIn = ({ onLogInClick }) => {
  return (
    <header className={HeaderStyles.header}>
      {/* Logo */}
      <div className={HeaderStyles.logo}>
        <img src={Logo} alt="Logo" className={HeaderStyles["logo-image"]} />
        <span className={HeaderStyles["logo-text"]}>Mekyek</span>
      </div>

      {/* Navigation Links */}
      <nav className={HeaderStyles.nav}>
        <NavLink to="/Feeds" className={HeaderStyles["nav-item"]}>
          <span>Hire Talent</span>
        </NavLink>
        <NavLink to="/news" className={HeaderStyles["nav-item"]}>
          <span>Find Work</span>
        </NavLink>
      </nav>

      {/* User Section */}
      <div className={HeaderStyles["user-section"]} onClick={onLogInClick}>
        Log In
      </div>
    </header>
  );
};

export default HeaderBeforeLogIn;
