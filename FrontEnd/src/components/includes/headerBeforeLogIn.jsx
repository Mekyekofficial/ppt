import React from 'react';
import Logo from '../../assets/logo.png';
import HeaderStyles from './css/headerBeforeLogIn.module.css';
import { Navigate, NavLink } from 'react-router-dom';
import { useState } from 'react';
import LoginSignupPop from '../LoginSignupPop';

const HeaderBeforeLogIn = () => {
  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);

  const onLogInClick = () => {
    if (!isLoginPopupOpen) {
      setIsLoginPopupOpen(true);
    } else {
      setIsLoginPopupOpen(false);
    }
  };

  return (
    <header className={HeaderStyles.header}>
      {/* Logo */}
      <div className={HeaderStyles.logo} onClick={() => Navigate('/')}>
        <img src={Logo} alt="Logo" className={HeaderStyles["logo-image"]} />
        <span className={HeaderStyles["logo-text"]}>Mekyek</span>
      </div>

      {/* Navigation Links */}
      <nav className={HeaderStyles.nav}>
        <NavLink to="/feeds" className={HeaderStyles["nav-item"]}>
          <span>Hire Talent</span>
        </NavLink>
        <NavLink to="/feeds" className={HeaderStyles["nav-item"]}>
          <span>Find Work</span>
        </NavLink>
      </nav>

      {/* User Section */}
      <div className={HeaderStyles["user-section"]} onClick={onLogInClick}>
        Log In
      </div>
      {isLoginPopupOpen && <LoginSignupPop onLogInClick={onLogInClick} />}
    </header>
  );
};

export default HeaderBeforeLogIn;
