import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./css/headerBeforeLogIn.module.css";

const HeaderBeforeLogIn = () => {
  return (
    <header className={styles.header}>
      {/* Navigation Links */}
      <nav className={styles.nav}>
        <NavLink to="/hire-talent" className={styles.navItem}>
          Hire Talent
        </NavLink>
        <NavLink to="/find-work" className={styles.navItem}>
          Find Work
        </NavLink>
      </nav>

      {/* Sign Up Button */}
      <button className={styles.signUpButton}>Sign Up</button>
    </header>
  );
};

export default HeaderBeforeLogIn;
