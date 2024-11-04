import React, { useState } from "react";
import { FaMapMarkerAlt, FaBriefcase, FaMoneyBill, FaBell, FaUserCircle, FaCog } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import styles from "./css/WorkBanner.module.css";

const WorkBanner = () => {
    const [showLocationDropdown, setShowLocationDropdown] = useState(false);
    const [showExperienceDropdown, setShowExperienceDropdown] = useState(false);
    const [showSalaryDropdown, setShowSalaryDropdown] = useState(false);
  
    const toggleDropdown = (dropdown) => {
      if (dropdown === "location") setShowLocationDropdown(!showLocationDropdown);
      if (dropdown === "experience") setShowExperienceDropdown(!showExperienceDropdown);
      if (dropdown === "salary") setShowSalaryDropdown(!showSalaryDropdown);
    };

  const [pricing, setPricing] = useState("");
  const [localEvents, setLocalEvents] = useState("");
  const [seminars, setSeminars] = useState("");

  
  return (
    <div className={styles.banner}>
      <div className={styles.searchBarAnduserOptions}>
        <div className={styles.searchBar}>
            <input type="text" placeholder="Search" className={styles.searchInput} />
            <button className={styles.searchButton}>Search</button>
        </div>
        <div className={styles.userOptions}>
            <FaUserCircle className={styles.icon} />
            <FaCog className={styles.icon} />
        </div>
      </div>
    
      <div className={styles.filterBar}>
        <div className={styles.filterOptions}>
          {/* Work Location Dropdown */}
          <div>
            <label className={styles.option}>
            <FaMapMarkerAlt className={styles.icon} />
              <select value={pricing} onChange={(e) => setPricing(e.target.value)}>
                <option value="">Work Location <RiArrowDropDownLine /></option>
                <option value="Remote">Remote<RiArrowDropDownLine /></option>
                <option value="On-site">On-site<RiArrowDropDownLine /></option>
                <option value="Hybrid">Hybrid<RiArrowDropDownLine /></option>
              </select>
            </label>
          </div>
          {/* Work Experience Dropdown */}
          <div>
            <label className={styles.option}>
              <FaBriefcase className={styles.icon} />
              <select value={localEvents} onChange={(e) => setLocalEvents(e.target.value)}>
                <option value="">Work Experience</option>
                <option value="0-2Years">0-2 Years</option>
                <option value="3-5Years">3-5 Years</option>
                <option value="5+Years">5+ Years</option>
              </select>
            </label>
          </div>
          {/* Salary Dropdown */}
          <div>
            <label className={styles.option}>
              <FaMoneyBill className={styles.icon} />
              <select value={seminars} onChange={(e) => setSeminars(e.target.value)}>
                <option value="">Salary</option>
                <option value="$40,000-$60,000">$40,000 - $60,000</option>
                <option value="$60,000-$80,000">$60,000 - $80,000</option>
                <option value="$80,000+">$80,000+</option>
              </select>
            </label>
          </div>
        </div>
        <div className={styles.option}>
          <FaBell className={styles.icon} />
          <span>Notifications</span>
        </div>
      </div>
    </div>
  );
};

export default WorkBanner;
