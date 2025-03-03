import React, { useState, useRef, useEffect } from "react";
import styles from "./css/NewsLeftContent.module.css";
import { Link, useLocation } from "react-router-dom";
import { 
  Home, 
  Zap, 
  Bookmark, 
  Settings, 
  FileText, 
  MessageSquare, 
  Lock, 
  ChevronDown 
} from "lucide-react";

const NewsLeftContent = () => {
  const location = useLocation();
  const [showSettingsPopup, setShowSettingsPopup] = useState(false);
  const settingsRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (settingsRef.current && !settingsRef.current.contains(event.target)) {
        setShowSettingsPopup(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const menuItems = [
    { path: "/", label: "Home", icon: <Home size={24} /> },
    { path: "/latest", label: "Latest", icon: <Zap size={24} /> },
    { path: "/saved", label: "Saved", icon: <Bookmark size={24} /> },
  ];

  const settingsOptions = [
    { path: "/terms", label: "Terms & Conditions", icon: <FileText size={20} /> },
    { path: "/feedback", label: "Feedback & Support", icon: <MessageSquare size={20} /> },
    { path: "/privacy", label: "Privacy & Policy", icon: <Lock size={20} /> },
  ];

  const handleSettingsClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setShowSettingsPopup(!showSettingsPopup);
  };

  return (
    <div className={styles.card}>
      <nav className={styles.navigation}>
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`${styles.navItem} ${
              location.pathname === item.path ? styles.active : ""
            }`}
          >
            <span className={styles.icon}>{item.icon}</span>
            <span className={styles.label}>{item.label}</span>
          </Link>
        ))}
        
        <div className={styles.settingsContainer} ref={settingsRef}>
          <button 
            className={`${styles.navItem} ${showSettingsPopup ? styles.active : ""}`}
            onClick={handleSettingsClick}
          >
            <span className={styles.icon}><Settings size={24} /></span>
            <span className={styles.label}>Settings</span>
            <span className={`${styles.arrow} ${showSettingsPopup ? styles.arrowUp : ""}`}>
              <ChevronDown size={16} />
            </span>
          </button>
          
          {showSettingsPopup && (
            <div className={styles.settingsPopup}>
              {settingsOptions.map((option) => (
                <Link
                  key={option.path}
                  to={option.path}
                  className={styles.settingsItem}
                  onClick={() => setShowSettingsPopup(false)}
                >
                  <span className={styles.icon}>{option.icon}</span>
                  <span className={styles.label}>{option.label}</span>
                </Link>
              ))}
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default NewsLeftContent;
