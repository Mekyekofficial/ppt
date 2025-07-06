import React from 'react';
import styles from './Css/Navbar.module.css';
import mekyekLogo from '../assets/Mekyek.png';
import { FaSearch, FaBell, FaMoon } from 'react-icons/fa';

interface NavbarProps {
  onProfileClick?: () => void;
  currentPage?: string;
  onNavClick?: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onProfileClick, currentPage = 'Home', onNavClick }) => {
  const handleProfileClick = () => {
    if (onProfileClick) {
      onProfileClick();
    }
  };

  const handleNavItemClick = (page: string) => {
    if (onNavClick) {
      onNavClick(page);
    }
  };

  return (
    <nav className={styles.navBar}>
      <div className={styles.leftSection}>
        <div className={styles.logo}>
          <img src={mekyekLogo} alt="Mekyek Logo" className={styles.logoImage} />
          <span className={styles.Mekyek}>Mekyek.</span>
        </div>
        <div className={styles.navItems}>
          <a 
            href="#" 
            className={currentPage === 'Home' ? styles.Home : styles.navItem}
            onClick={(e) => { e.preventDefault(); handleNavItemClick('Home'); }}
          >
            Home
          </a>
          <a 
            href="#" 
            className={currentPage === 'News' ? styles.Home : styles.navItem}
            onClick={(e) => { e.preventDefault(); handleNavItemClick('News'); }}
          >
            News
          </a>
          <a 
            href="#" 
            className={currentPage === 'Community' ? styles.Home : styles.navItem}
            onClick={(e) => { e.preventDefault(); handleNavItemClick('Community'); }}
          >
            Community
          </a>
          <a 
            href="#" 
            className={currentPage === 'Learn' ? styles.Home : styles.navItem}
            onClick={(e) => { e.preventDefault(); handleNavItemClick('Learn'); }}
          >
            Learn
          </a>
          <a 
            href="#" 
            className={currentPage === 'Events' ? styles.Home : styles.navItem}
            onClick={(e) => { e.preventDefault(); handleNavItemClick('Events'); }}
          >
            Events
          </a>
          <a 
            href="#" 
            className={currentPage === 'Work' ? styles.Home : styles.navItem}
            onClick={(e) => { e.preventDefault(); handleNavItemClick('Work'); }}
          >
            Work
          </a>
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
          <div 
            className={styles.pfp}
            onClick={handleProfileClick}
          ></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;