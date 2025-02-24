import React, { createContext, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/includes/header";
import Footer from "./components/includes/footer";
import Post from "./components/Post";
import AppStyles from "./AppOutlet.module.css";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaNewspaper,
  FaUsers,
  FaBook,
  FaCalendar,
  FaBriefcase,
} from "react-icons/fa";

export const PostContext = createContext();

const AppOutlet = () => {
  const location = useLocation();
  const hideFooter = location.pathname.startsWith("/ATS");
  const hideHeader = location.pathname === "/";

  const [hidePost, setHidePost] = useState(true);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const closePost = () => setHidePost(true);
  const openPost = () => setHidePost(false);

  const navItems = [
    { path: "/feeds", icon: <FaHome />, label: "Feed" },
    { path: "/news", icon: <FaNewspaper />, label: "News" },
    { path: "/community", icon: <FaUsers />, label: "Community" },
    { path: "/learn", icon: <FaBook />, label: "Learn" },
    { path: "/events", icon: <FaCalendar />, label: "Events" },
    { path: "/Work", icon: <FaBriefcase />, label: "Work" },
  ];

  return (
    <PostContext.Provider value={{ openPost, closePost }}>
      <div className={AppStyles.container}>
        <nav className={`${AppStyles.nav} ${isNavOpen ? AppStyles.open : ""}`}>
          <div className={AppStyles.logo}>
            <Link to="/">Logo</Link>
          </div>

          <div
            className={AppStyles.menuIcon}
            onClick={() => setIsNavOpen(!isNavOpen)}
          >
            <div></div>
            <div></div>
            <div></div>
          </div>

          <div className={AppStyles.navItems}>
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`${AppStyles.navItem} ${
                  location.pathname === item.path ? AppStyles.active : ""
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </Link>
            ))}
          </div>

          {!hideHeader && (
            <div className={AppStyles.authButtons}>
              <Link to="/login" className={AppStyles.loginButton}>
                Login
              </Link>
              <Link to="/signup" className={AppStyles.signupButton}>
                Sign Up
              </Link>
            </div>
          )}
        </nav>
        <main className={AppStyles.main}>
          {!hideHeader && <Header />}
          <Outlet />
          {!hidePost && <Post closePost={closePost} />}
          {/* {!hideFooter && <Footer />} */}
        </main>
      </div>
    </PostContext.Provider>
  );
};

export default AppOutlet;
