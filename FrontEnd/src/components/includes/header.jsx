import React from "react";
import Logo from "../../assets/logo.png";
import ProfileImage from "../../assets/profile-image.png";
import HeaderStyles from "./css/header.module.css";
import { NavLink } from "react-router-dom";
import { use, useEffect, useState } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import LoginSignupPop from "../LoginSignupPop";
import CompanyRegistrationPopup from "../CompanyRegistrationPopup";
import API from "../../api";
import { FaBriefcase, FaTimes } from "react-icons/fa";
import { login, signup } from "../../api";
import { Bell, MoreVertical } from 'lucide-react';

const Header = () => {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const [userinfo, setUserinfo] = useState(null);
  const [companyInfo, setCompanyInfo] = useState(null);
  const [showNotifications, setShowNotifications] = useState(false);
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'message',
      content: 'John Doe sent you a message',
      time: '2 minutes ago',
      read: false
    },
    {
      id: 2,
      type: 'like',
      content: 'Your post received 10 likes',
      time: '1 hour ago',
      read: false
    },
    {
      id: 3,
      type: 'comment',
      content: 'Sarah commented on your post',
      time: '2 hours ago',
      read: true
    }
  ]);

  const unreadCount = notifications.filter(n => !n.read).length;

  const markAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, read: true })));
  };

  const markAsRead = (id) => {
    setNotifications(notifications.map(n => 
      n.id === id ? { ...n, read: true } : n
    ));
  };

  useEffect(() => {
    const user = localStorage.getItem("user-info");
    const userinfo = JSON.parse(user);
    setUserinfo(userinfo);

    const company = localStorage.getItem("company-info");
    const companyInfo = JSON.parse(company);
    setCompanyInfo(companyInfo);

    if (!companyInfo) {
      const fetchCompany = async () => {
        try {
          const response = await API.get(
            `/company/get?userId=${userinfo?._id}`
          );
          const company = response.data.company;
          const { companyName, email, companyLogo } = company;
          const companyInfo = { companyName, companyEmail: email, companyLogo };

          localStorage.setItem("company-info", JSON.stringify(companyInfo));
          localStorage.setItem("company-id", company._id);

          setCompanyInfo(companyInfo);
        } catch (error) {
          console.error("Error fetching company:", error);
        }
      };
      fetchCompany();
    }
  }, []);

  const active = ({ isActive }) => {
    return isActive ? { color: "#292556" } : { color: "#5b577d" };
  };

  const clickBar = () => {
    const dropdown = document.getElementById("dropdown-menu-bar");
    if (dropdown.style.display === "none" || dropdown.style.display === "") {
      dropdown.style.display = "block";
    } else {
      dropdown.style.display = "none";
    }
  };

  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    if (userinfo?.profilePhoto) {
      const img = new Image();
      img.src = userinfo.profilePhoto;
      img.onload = () => setImageLoaded(true);
    }
  }, [userinfo?.profilePhoto]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    confirmPassword: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isLogin) {
        console.log("Login:", formData);
        const { email, password } = formData;
        const response = await login(email, password);
        if (response.status == 200) {
          const { email, firstName, lastName, profilePhoto } = response.data.user;
          const _id = response.data.user._id;
          const token = response.data.token;
          const userData = { email, firstName, lastName, profilePhoto, _id };

          localStorage.setItem("token", token);
          localStorage.setItem("user-info", JSON.stringify(userData));

          navigate("/feeds");
          window.location.reload();
        }
      } else {
        console.log("Signup:", formData);
        const { name, email, password, confirmPassword } = formData;
        const [firstName, lastName] = name.split(" ");
        const signupData = {
          firstName,
          lastName,
          email,
          password,
          confirmPassword,
        };
        const response = await signup(signupData);
        console.log("response:", response);
        if (response.status == 201) {
          localStorage.setItem("token", response.data.token);
          const userInfo = {
            _id: response.data.user._id,
            email: response.data.user.email,
            name: response.data.user.name,
          };
          localStorage.setItem("user-info", JSON.stringify(userInfo));
          navigate("/feeds");
          window.location.reload();
        }
      }
    } catch (error) {
      console.error("Auth error:", error);
    }
  };

  // Add effect to handle body scroll
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);
  const [openCompanyRegistrationPopup, setOpenCompanyRegistrationPopup] =
    useState(false);

  return (
    <header className={HeaderStyles.header}>
      {/* Logo */}
      <div
        className={HeaderStyles.logo}
        onClick={() => {
          userinfo && token ? navigate("/feeds") : navigate("/");
        }}>
        <img src={Logo} alt="Logo" className={HeaderStyles["logo-image"]} />
        <span className={HeaderStyles["logo-text"]}>Mekyek</span>
      </div>

      {/* Navigation Links */}
      <nav className={HeaderStyles.nav}>
        <NavLink
          to="/feeds"
          className={HeaderStyles["nav-item"]}
          style={active}>
          <svg
            className={HeaderStyles.icon}
            viewBox="0 0 414 385"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M199.937 6.59331C202.898 3.82937 204.378 2.44741 206.14 2.18085C206.71 2.09453 207.29 2.09453 207.86 2.18085C209.622 2.44741 211.102 3.82938 214.063 6.59331L372.329 154.339C373.579 155.506 374.204 156.09 374.595 156.819C374.724 157.06 374.833 157.311 374.921 157.57C375.188 158.353 375.188 159.208 375.188 160.918V342.156C375.188 344.969 375.188 346.375 374.471 347.36C374.24 347.679 373.96 347.959 373.642 348.19C372.656 348.906 371.25 348.906 368.438 348.906H269.812C267 348.906 265.594 348.906 264.608 348.19C264.29 347.959 264.01 347.679 263.779 347.36C263.062 346.375 263.062 344.969 263.062 342.156V233.539C263.062 230.727 263.062 229.321 262.346 228.335C262.115 228.017 261.835 227.737 261.517 227.505C260.531 226.789 259.125 226.789 256.312 226.789H157.688C154.875 226.789 153.469 226.789 152.483 227.505C152.165 227.737 151.885 228.017 151.654 228.335C150.938 229.321 150.938 230.727 150.938 233.539V342.156C150.938 344.969 150.938 346.375 150.221 347.36C149.99 347.679 149.71 347.959 149.392 348.19C148.406 348.906 147 348.906 144.188 348.906H45.5625C42.7502 348.906 41.3441 348.906 40.3583 348.19C40.04 347.959 39.76 347.679 39.5287 347.36C38.8125 346.375 38.8125 344.969 38.8125 342.156V160.918C38.8125 159.208 38.8125 158.353 39.0789 157.57C39.167 157.311 39.2761 157.06 39.4052 156.819C39.7959 156.09 40.4209 155.506 41.6709 154.339L199.937 6.59331Z"
              fill="currentColor"
            />
          </svg>

          <span>Home</span>
        </NavLink>
        <NavLink to="/news" className={HeaderStyles["nav-item"]} style={active}>
          <svg
            className={HeaderStyles.icon}
            viewBox="0 0 368 385"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M61.3292 85.5625C58.0758 85.5625 54.9558 87.0648 52.6553 89.7389C50.3549 92.4131 49.0625 96.04 49.0625 99.8218C49.0625 103.604 50.3549 107.23 52.6553 109.905C54.9558 112.579 58.0758 114.081 61.3292 114.081H282.129C285.382 114.081 288.503 112.579 290.803 109.905C293.103 107.23 294.396 103.604 294.396 99.8218C294.396 96.04 293.103 92.4131 290.803 89.7389C288.503 87.0648 285.382 85.5625 282.129 85.5625H61.3292ZM55.1958 142.6C53.5692 142.6 52.0091 143.351 50.8589 144.688C49.7087 146.025 49.0625 147.838 49.0625 149.729C49.0625 151.62 49.7087 153.434 50.8589 154.771C52.0091 156.108 53.5692 156.859 55.1958 156.859H288.262C289.889 156.859 291.449 156.108 292.599 154.771C293.75 153.434 294.396 151.62 294.396 149.729C294.396 147.838 293.75 146.025 292.599 144.688C291.449 143.351 289.889 142.6 288.262 142.6H55.1958ZM220.796 192.507C220.796 190.616 221.442 188.803 222.592 187.466C223.742 186.128 225.302 185.377 226.929 185.377H288.262C289.889 185.377 291.449 186.128 292.599 187.466C293.75 188.803 294.396 190.616 294.396 192.507C294.396 194.398 293.75 196.211 292.599 197.548C291.449 198.885 289.889 199.637 288.262 199.637H226.929C225.302 199.637 223.742 198.885 222.592 197.548C221.442 196.211 220.796 194.398 220.796 192.507ZM226.929 228.155C225.302 228.155 223.742 228.906 222.592 230.243C221.442 231.58 220.796 233.394 220.796 235.285C220.796 237.176 221.442 238.989 222.592 240.326C223.742 241.663 225.302 242.414 226.929 242.414H288.262C289.889 242.414 291.449 241.663 292.599 240.326C293.75 238.989 294.396 237.176 294.396 235.285C294.396 233.394 293.75 231.58 292.599 230.243C291.449 228.906 289.889 228.155 288.262 228.155H226.929ZM220.796 278.062C220.796 276.172 221.442 274.358 222.592 273.021C223.742 271.684 225.302 270.933 226.929 270.933H288.262C289.889 270.933 291.449 271.684 292.599 273.021C293.75 274.358 294.396 276.172 294.396 278.062C294.396 279.953 293.75 281.767 292.599 283.104C291.449 284.441 289.889 285.192 288.262 285.192H226.929C225.302 285.192 223.742 284.441 222.592 283.104C221.442 281.767 220.796 279.953 220.796 278.062ZM226.929 313.711C225.302 313.711 223.742 314.462 222.592 315.799C221.442 317.136 220.796 318.949 220.796 320.84C220.796 322.731 221.442 324.545 222.592 325.882C223.742 327.219 225.302 327.97 226.929 327.97H288.262C289.889 327.97 291.449 327.219 292.599 325.882C293.75 324.545 294.396 322.731 294.396 320.84C294.396 318.949 293.75 317.136 292.599 315.799C291.449 314.462 289.889 313.711 288.262 313.711H226.929ZM49.0625 213.896C49.0625 206.332 51.6473 199.078 56.2481 193.73C60.849 188.382 67.0892 185.377 73.5958 185.377H171.729C178.236 185.377 184.476 188.382 189.077 193.73C193.678 199.078 196.262 206.332 196.262 213.896V299.451C196.262 307.015 193.678 314.269 189.077 319.617C184.476 324.965 178.236 327.97 171.729 327.97H73.5958C67.0892 327.97 60.849 324.965 56.2481 319.617C51.6473 314.269 49.0625 307.015 49.0625 299.451V213.896Z"
              fill="currentColor"
              fill-opacity="0.77"
            />
            <path
              d="M85.8667 0C79.36 0 73.1199 3.00462 68.519 8.35288C63.9181 13.7011 61.3333 20.9549 61.3333 28.5185H36.3339C15.3579 28.5185 0 48.7381 0 71.2963V327.963C0 358.392 20.6448 385 48.1221 385H343.675C350.146 384.936 356.332 381.903 360.888 376.562C365.444 371.221 368 364.003 368 356.481V28.5185C368 20.9549 365.415 13.7011 360.814 8.35288C356.213 3.00462 349.973 0 343.467 0H85.8667ZM307.157 57.037C309.893 57.081 312.532 58.2196 314.63 60.261C316.728 62.3025 318.157 65.122 318.676 68.2448C318.847 69.224 318.937 70.2411 318.946 71.2963V327.963C318.946 335.527 321.53 342.78 326.131 348.129C330.732 353.477 336.972 356.481 343.479 356.481H48.1221C35.0949 356.481 24.5333 343.719 24.5333 327.963V71.2963C24.5333 63.4252 29.808 57.037 36.3339 57.037H307.157Z"
              fill="currentColor"
              fill-opacity="0.77"
            />
          </svg>

          <span>News</span>
        </NavLink>
        <NavLink
          to="/community"
          className={HeaderStyles["nav-item"]}
          style={active}>
          <svg
            className={HeaderStyles.icon}
            viewBox="0 0 437 332"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M219.402 152.516C258.837 152.516 290.805 121.732 290.805 83.7578C290.805 45.7839 258.837 15 219.402 15C179.968 15 148 45.7839 148 83.7578C148 121.732 179.968 152.516 219.402 152.516Z"
              stroke="#292556"
              stroke-opacity="0.77"
              stroke-width="29"
            />
            <path
              d="M359.459 145.622C370.926 142.607 381.044 135.297 387.88 125.092C394.717 114.885 397.792 102.498 396.516 90.2976C395.242 78.0963 389.707 66.9374 380.97 58.9525C372.234 50.9681 360.907 46.7178 349.157 47.0146M79.4076 145.622C67.9409 142.607 57.8224 135.297 50.9863 125.092C44.1496 114.885 41.0751 102.498 42.3503 90.2976C43.6249 78.0963 49.1594 66.9374 57.8964 58.9525C66.6329 50.9681 77.9594 46.7178 89.7101 47.0146M373.227 208.683L375.696 207.989C399.07 201.414 422.258 218.979 422.258 243.259C422.258 283.731 389.449 316.539 348.978 316.539H348.211M64.0312 208.683L61.5617 207.989C38.1883 201.414 15 218.979 15 243.259C15 283.731 47.8086 316.539 88.28 316.539H89.0469"
              stroke="#292556"
              stroke-opacity="0.77"
              stroke-width="29"
              stroke-linecap="round"
            />
            <path
              d="M105 227.16C105 196.209 135.45 174.445 164.734 184.467L181.362 190.156C205.575 198.442 231.855 198.442 256.068 190.156L272.696 184.467C301.98 174.445 332.43 196.209 332.43 227.16C332.43 277.003 292.024 317.409 242.181 317.409H195.248C145.406 317.409 105 277.003 105 227.16Z"
              stroke="#292556"
              stroke-opacity="0.77"
              stroke-width="29"
            />
          </svg>

          <span>Community</span>
        </NavLink>
        <NavLink
          to="/learn"
          className={HeaderStyles["nav-item"]}
          style={active}>
          <svg
            className={HeaderStyles.icon}
            viewBox="0 0 595 503"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M450.164 189.016V333.633C450.164 334.364 450.164 334.73 450.016 335.039C449.967 335.14 449.907 335.235 449.837 335.323C449.623 335.591 449.293 335.749 448.634 336.066L298.67 408.123C298.16 408.368 297.905 408.49 297.634 408.515C297.545 408.523 297.455 408.523 297.366 408.515C297.095 408.49 296.841 408.368 296.331 408.123L146.366 336.066C145.707 335.749 145.377 335.591 145.163 335.323C145.093 335.235 145.033 335.14 144.984 335.039C144.836 334.73 144.836 334.364 144.836 333.633V189.016M520.625 160.179L298.479 73.7326C298.05 73.5655 297.835 73.4819 297.611 73.4653C297.537 73.4598 297.463 73.4598 297.389 73.4653C297.165 73.4819 296.95 73.5655 296.521 73.7326L74.375 160.179L296.477 251.079C296.925 251.262 297.149 251.354 297.384 251.372C297.461 251.378 297.539 251.378 297.617 251.372C297.851 251.354 298.075 251.262 298.523 251.079L520.625 160.179ZM520.625 160.179V381.002C520.625 381.646 520.625 381.968 520.505 382.249C520.466 382.342 520.417 382.43 520.36 382.513C520.187 382.765 519.915 382.937 519.371 383.282L464.844 417.854"
              stroke="#292556"
              stroke-opacity="0.77"
              stroke-width="27.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <span>Learn</span>
        </NavLink>
        <NavLink
          to="/events"
          className={HeaderStyles["nav-item"]}
          style={active}>
          <svg
            className={HeaderStyles.icon}
            viewBox="0 0 494 464"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M214.455 141.67C211.075 158.895 207.87 191.855 207.87 209.373C207.87 226.891 208.717 260.416 214.455 277.076M214.455 141.67L277.71 89.6127C314.739 59.1387 333.253 43.9017 348.901 47.3215C353.778 48.3873 358.35 50.5456 362.271 53.6339C374.856 63.5433 374.856 87.5215 374.856 135.478V282.303C374.856 329.564 374.856 353.194 362.397 363.103C358.513 366.192 353.975 368.368 349.135 369.462C333.608 372.974 315.186 358.183 278.342 328.601C245.275 302.051 216.059 278.542 214.455 277.076M214.455 141.67C205.217 141.063 159.637 141.126 120.657 141.305C96.1591 141.417 83.9101 141.473 75.2798 147.779C72.4984 149.812 70.0368 152.285 68.017 155.076C61.75 163.735 61.75 176.02 61.75 200.592V218.529C61.75 243.209 61.75 255.549 68.053 264.223C70.0843 267.019 72.5584 269.493 75.3543 271.524C84.0296 277.827 96.3347 277.826 120.945 277.824C159.861 277.821 205.24 277.682 214.455 277.076M103.503 277.738L103.058 375.037C102.98 392.111 116.804 405.991 133.877 405.982V405.982C150.884 405.974 164.667 392.185 164.667 375.178V277.748M416.602 130.577C437.475 189.674 437.475 229.072 416.602 288.169"
              stroke="#292556"
              stroke-opacity="0.77"
              stroke-width="26.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <span>Events</span>
        </NavLink>
        <NavLink to="/Work" className={HeaderStyles["nav-item"]} style={active}>
          <svg
            className={HeaderStyles.icon}
            viewBox="0 0 434 382"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M387.5 92.75H46.5C29.3792 92.75 15.5 104.998 15.5 120.107V338.964C15.5 354.074 29.3792 366.321 46.5 366.321H387.5C404.621 366.321 418.5 354.074 418.5 338.964V120.107C418.5 104.998 404.621 92.75 387.5 92.75Z"
              stroke="#292556"
              stroke-opacity="0.68"
              stroke-width="30"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M155 15H279C287.222 15 295.107 17.2476 300.92 21.2484C306.734 25.2492 310 30.6753 310 36.3333V79H124V36.3333C124 30.6753 127.266 25.2492 133.08 21.2484C138.893 17.2476 146.778 15 155 15Z"
              stroke="#292556"
              stroke-opacity="0.68"
              stroke-width="30"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M108.5 188.5H325.5"
              stroke="#292556"
              stroke-opacity="0.68"
              stroke-width="30"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M108.5 270.57H325.5"
              stroke="#292556"
              stroke-opacity="0.68"
              stroke-width="30"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <span>Work</span>
        </NavLink>
      </nav>

      {/* User Section */}
      <div className={HeaderStyles["user-section"]}>
        <div className={HeaderStyles.notificationWrapper}>
          <div 
            className={HeaderStyles.notificationIconContainer}
            onClick={() => setShowNotifications(!showNotifications)}
          >
            <Bell className={HeaderStyles.notificationIcon} />
            {unreadCount > 0 && (
              <span className={HeaderStyles.notificationBadge}>
                {unreadCount}
              </span>
            )}
          </div>

          {showNotifications && (
            <div className={HeaderStyles.notificationsPopup}>
              <div className={HeaderStyles.notificationsHeader}>
                <h3>Notifications</h3>
                <button 
                  className={HeaderStyles.markAllRead}
                  onClick={markAllAsRead}
                >
                  Mark all as read
                </button>
              </div>
              <div className={HeaderStyles.notificationsList}>
                {notifications.map((notification) => (
                  <div 
                    key={notification.id}
                    className={`${HeaderStyles.notificationItem} ${
                      !notification.read ? HeaderStyles.unread : ''
                    }`}
                    onClick={() => markAsRead(notification.id)}
                  >
                    <div className={HeaderStyles.notificationContent}>
                      <p>{notification.content}</p>
                      <span className={HeaderStyles.notificationTime}>
                        {notification.time}
                      </span>
                    </div>
                    {!notification.read && (
                      <span className={HeaderStyles.unreadDot}></span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className={HeaderStyles.profile}>
          {userinfo && token ? (
            <>
              {imageLoaded ? (
                <img
                  src={userinfo?.profilePhoto}
                  alt="User Avatar"
                  className={HeaderStyles.avatarImg}
                  onClick={() => navigate(`/profile/${userinfo?._id}`)}
                  style={{ cursor: "pointer" }}
                />
              ) : (
                <img
                  src={ProfileImage}
                  alt="User Avatar"
                  className={HeaderStyles.avatarImg}
                  onClick={() => navigate(`/profile/${userinfo?._id}`)}
                  style={{ cursor: "pointer" }}
                />
              )}
            </>
          ) : (
            <div
              className={HeaderStyles.loginBtn}
              onClick={() => {
                setIsLogin(true);
                setIsModalOpen(true);
              }}>
              Log In
            </div>
          )}
        </div>
        <div className={HeaderStyles.menuIconWrapper}>
          <MoreVertical
            className={HeaderStyles.menuIcon}
          onClick={clickBar}
            size={24}
          />
        <div id="dropdown-menu-bar" className={HeaderStyles.dropdownBar}>
          <NavLink
            to={`/profile/${userinfo?._id}`}
            className={HeaderStyles["dropdown-item-bar"]}>
            Profile
          </NavLink>
          <NavLink to="/settings" className={HeaderStyles["dropdown-item-bar"]}>
            Settings
          </NavLink>
          {userinfo && token ? (
            <>
              <button
                className={HeaderStyles["dropdown-item-bar"]}
                onClick={() => {
                  localStorage.removeItem("user-info");
                  localStorage.removeItem("token");
                  localStorage.removeItem("company-info");
                  localStorage.removeItem("company-id");
                  navigate("/");
                }}>
                Logout
              </button>
              {companyInfo ? (
                <button
                  className={HeaderStyles["dropdown-item-bar"]}
                  onClick={() => navigate("/ATS")}>
                  Go to Company Profile
                </button>
              ) : (
                <button
                  className={HeaderStyles["dropdown-item-bar"]}
                  onClick={() => setOpenCompanyRegistrationPopup(true)}>
                  Register Company
                </button>
              )}
            </>
          ) : (
            <div></div>
          )}
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div className={HeaderStyles.modalOverlay}>
          <div className={HeaderStyles.modal}>
            <button
              className={HeaderStyles.closeButton}
              onClick={() => setIsModalOpen(false)}>
              <FaTimes />
            </button>

            <h2>{isLogin ? "Welcome Back" : "Create Account"}</h2>
            <p className={HeaderStyles.modalSubtitle}>
              {isLogin
                ? "Enter your details to access your account"
                : "Join our community and unlock all features"}
            </p>

            <form onSubmit={handleSubmit}>
              {!isLogin && (
                <div className={HeaderStyles.inputGroup}>
                  <label>Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your name"
                    required
                  />
                </div>
              )}

              <div className={HeaderStyles.inputGroup}>
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className={HeaderStyles.inputGroup}>
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Enter your password"
                  required
                />
              </div>

              {!isLogin && (
                <div className={HeaderStyles.inputGroup}>
                  <label>Confirm Password</label>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    placeholder="Confirm your password"
                    required
                  />
                </div>
              )}

              <button type="submit" className={HeaderStyles.submitButton}>
                {isLogin ? "Log In" : "Sign Up"}
              </button>
            </form>

            <p className={HeaderStyles.switchMode}>
              {isLogin
                ? "Don't have an account? "
                : "Already have an account? "}
              <button onClick={() => setIsLogin(!isLogin)}>
                {isLogin ? "Sign Up" : "Log In"}
              </button>
            </p>
          </div>
        </div>
      )}
      <CompanyRegistrationPopup
        open={openCompanyRegistrationPopup}
        onClose={() => setOpenCompanyRegistrationPopup(false)}
      />
    </header>
  );
};

export default Header;
