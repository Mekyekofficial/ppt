import React from 'react';
import styles from './Css/Navbar.module.css';
import mekyekLogo from '../assets/Mekyek.png';
import { FaSearch, FaBell, FaMoon } from 'react-icons/fa';

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navBar}>
      <div className={styles.leftSection}>
        <div className={styles.logo}>
          <img src={mekyekLogo} alt="Mekyek Logo" className={styles.logoImage} />
          <span className={styles.Mekyek}>Mekyek.</span>
        </div>
        <div className={styles.navItems}>
          <a href="#" className={styles.Home}>Home</a>
          <a href="#" className={styles.News}>News</a>
          <a href="#" className={styles.Community}>Community</a>
          <a href="#" className={styles.Learn}>Learn</a>
          <a href="#" className={styles.Events}>Events</a>
          <a href="#" className={styles.Work}>Work</a>
        </div>
      </div>

      <div className={styles.rightSection}>
        <div className={styles.search}>
          <FaSearch className={styles.searchIcon} />
          <input 
            type="text" 
            placeholder="Search..." 
            className={styles.Search}
          />
        </div>
        <div className={styles.pfpAndNotifi}>
          <FaBell className={styles.icon} />
          <FaMoon className={styles.icon} />
          <div className={styles.pfp}></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;