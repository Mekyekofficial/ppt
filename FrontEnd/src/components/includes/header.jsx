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
import LoginSignupPop from '../LoginSignupPop';
import CompanyRegistrationPopup from '../CompanyRegistrationPopup';

const Header = () => {
  const navigate = useNavigate();

  const token = localStorage.getItem('token');

  const [userinfo, setUserinfo] = useState(null);
  useEffect(() => {
    const user = localStorage.getItem('user-info');
    const userinfo = JSON.parse(user);
    setUserinfo(userinfo);
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

  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    if (userinfo?.profilePhoto) {
      const img = new Image();
      img.src = userinfo.profilePhoto;
      img.onload = () => setImageLoaded(true);
    }
  }, [userinfo?.profilePhoto]);

  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);
  
    const onLogInClick = () => {
      if (!isLoginPopupOpen) {
        setIsLoginPopupOpen(true);
      } else {
        setIsLoginPopupOpen(false);
      }
    };

    const [openCompanyRegistrationPopup, setOpenCompanyRegistrationPopup] = useState(false);

  return (
    <header className={HeaderStyles.header}>
      {/* Logo */}
      <div className={HeaderStyles.logo} onClick={() => {userinfo && token ? navigate('/feeds') : navigate('/')}}>
        <img src={Logo} alt="Logo" className={HeaderStyles["logo-image"]} />
        <span className={HeaderStyles["logo-text"]}>Mekyek</span>
      </div>

      {/* Navigation Links */}
      <nav className={HeaderStyles.nav}>
        <NavLink to="/feeds" className={HeaderStyles["nav-item"]} style={active}>
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
          {userinfo && token ? (
            <>
              {imageLoaded ? (
                <img src={userinfo?.profilePhoto} alt="User Avatar" className={HeaderStyles.avatarImg} />
              ) : (
                <RxAvatar className={HeaderStyles.avatar} fontSize={"30px"} />
              )}
              <span>&nbsp;{userinfo.firstName || 'Alex'}&nbsp;{userinfo.lastName}&nbsp;&nbsp;</span>
              <FaBell className={HeaderStyles.avatar} fontSize={"15px"} color='white'/>
            </>
          ) : (
            <div style={{ width: '100px', textAlign:'center', fontWeight: 'bold', cursor: 'pointer'}} onClick={onLogInClick}>Log In</div>
          )}
        </div>
        <FaEnvelope className={HeaderStyles["user-icon"]}/>
        <FaBars className={HeaderStyles.bar} onClick={clickBar}/>
        <div id="dropdown-menu-bar" className={HeaderStyles.dropdownBar}>
          <NavLink to="/profile" className={HeaderStyles["dropdown-item-bar"]}>
            Profile 
          </NavLink>
          <NavLink to="/settings" className={HeaderStyles["dropdown-item-bar"]}>
            Settings
          </NavLink>
          {
            (userinfo && token) ? (
              <>
              <button className={HeaderStyles["dropdown-item-bar"]} onClick={() => {
                localStorage.removeItem('user-info');
                localStorage.removeItem('token');
                navigate('/');
              }
              }>
                Logout
              </button>
              <button  className={HeaderStyles["dropdown-item-bar"]} onClick={() => setOpenCompanyRegistrationPopup(true)}>Register Company</button>
              </>
            ) : (
              <div></div>
            )
          }
        </div>
      </div>
      {!token && isLoginPopupOpen && <LoginSignupPop onLogInClick={onLogInClick} />}
      <CompanyRegistrationPopup open={openCompanyRegistrationPopup} onClose={() => setOpenCompanyRegistrationPopup(false)} />
    </header>
  );
};

export default Header;
