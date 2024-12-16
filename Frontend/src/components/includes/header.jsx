import React from 'react';
import { FaNewspaper, FaUsers, FaBook, FaCalendarAlt, FaBriefcase, FaBell, FaEnvelope, FaBars,  } from 'react-icons/fa';
import { RxAvatar } from "react-icons/rx";
import { MdFeed } from "react-icons/md";
import Logo from '../../assets/logo.png';
import HeaderStyles from './css/header.module.css';
import { NavLink } from 'react-router-dom';
import { use, useEffect, useState } from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const [userinfo, setUserinfo] = useState(null);
  useEffect(() => {
    const user = localStorage.getItem('user-info');
    const userData = JSON.parse(user);
    setUserinfo(userData);
  }, []);

  const active = ({isActive}) => {
    return isActive ? {color: "#FC914F"} : {color: "#333"};
  }

  const clickBar = () => {
    const dropdown = document.getElementById('dropdown-menu-bar');
    if (dropdown.style.display === 'none' || dropdown.style.display === '') {
      dropdown.style.display = 'block';
    } else {
      dropdown.style.display = 'none';
    }
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
        <NavLink to="/Feeds" className={HeaderStyles["nav-item"]} style={active}>
          <MdFeed className={HeaderStyles.icon} />
          <span>Feeds</span>
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
        <NavLink to="/Work" className={HeaderStyles["nav-item"]} style={active}>
          <FaBriefcase className={HeaderStyles.icon} />
          <span>Work</span>
        </NavLink>
      </nav>

      {/* User Section */}
      <div className={HeaderStyles["user-section"]}>
        <div className={HeaderStyles.profile}>
          {userinfo?.image ? (
            <img src={userinfo.image} alt="User Avatar" className={HeaderStyles.avatarImg} />
          ) : (
            <RxAvatar className={HeaderStyles.avatar} fontSize={"30px"} />
          )}
          <span>&nbsp;{userinfo?.name || 'Alex'}&nbsp;&nbsp;</span>
          <FaBell className={HeaderStyles.avatar} fontSize={"15px"} color='white'/>
        </div>
        <FaEnvelope className={HeaderStyles["user-icon"]}/>
        <FaBars className={HeaderStyles.bars} onClick={clickBar}/>
        <div id="dropdown-menu-bar" className={HeaderStyles.dropdownBar}>
          <NavLink to="/profile" className={HeaderStyles["dropdown-item-bar"]}>
            Profile 
          </NavLink>
          <NavLink to="/settings" className={HeaderStyles["dropdown-item-bar"]}>
            Settings
          </NavLink>
          <button className={HeaderStyles["dropdown-item-bar"]} onClick={() => {
              localStorage.removeItem('user-info');
              navigate('/');
            }
            }>
              Logout
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
