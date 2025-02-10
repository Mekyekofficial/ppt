import React from 'react';
import styles from './css/headerBeforeLogIn.module.css';
import {  NavLink } from 'react-router-dom';
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
    <header className={styles.header}>
      {/* Navigation Links */}
      <nav className={styles.nav}>
        <NavLink to="/feeds" className={styles.navItem}>
          Hire Talent
        </NavLink>
        <NavLink to="/feeds" className={styles.navItem}>
          Find Work
        </NavLink>
      </nav>

      {/* Sign Up Button */}
      <button className={styles.signUpButton}  onClick={onLogInClick}>Sign Up</button>
      {isLoginPopupOpen && <LoginSignupPop onLogInClick={onLogInClick} />}
    </header>
  );
};

export default HeaderBeforeLogIn;

