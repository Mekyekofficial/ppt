import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import styles from "./css/WorkFilter.module.css";

const WorkFilter = () => {
  const [openDropdowns, setOpenDropdowns] = useState({
    jobType: false,
    eligibility: false,
    salary: false,
    location: false,
    experience: false,
  });

  const toggleDropdown = (key) => {
    setOpenDropdowns((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className={styles.filterContainer}>
      <h3 className={styles.filterTitle}>All Filters</h3>

      {/* Job Type Filter */}
      <div className={styles.filterSection}>
        <div className={styles.filterHeader} onClick={() => toggleDropdown("jobType")}>
          Job Type {openDropdowns.jobType ? <FaAngleUp /> : <FaAngleDown />}
        </div>
        {openDropdowns.jobType && (
          <div className={styles.filterOptions}>
            <label><input type="radio" name="jobType" /> In Office</label>
            <label><input type="radio" name="jobType" /> Remote</label>
            <label><input type="radio" name="jobType" /> Hybrid</label>
            <label><input type="radio" name="jobType" /> Field Work</label>
          </div>
        )}
      </div>

      {/* Eligibility Filter */}
      <div className={styles.filterSection}>
        <div className={styles.filterHeader} onClick={() => toggleDropdown("eligibility")}>
          Eligibility {openDropdowns.eligibility ? <FaAngleUp /> : <FaAngleDown />}
        </div>
        {openDropdowns.eligibility && (
          <div className={styles.filterOptions}>
            <label><input type="radio" name="eligibility" /> Professionals</label>
            <label><input type="radio" name="eligibility" /> College Students</label>
          </div>
        )}
      </div>

      {/* Salary Filter */}
      <div className={styles.filterSection}>
        <div className={styles.filterHeader} onClick={() => toggleDropdown("salary")}>
          Salary {openDropdowns.salary ? <FaAngleUp /> : <FaAngleDown />}
        </div>
        {openDropdowns.salary && (
          <div className={styles.filterOptions}>
            <label><input type="radio" name="salary" /> 0-3 lakhs</label>
            <label><input type="radio" name="salary" /> 3-6 lakhs</label>
            <label><input type="radio" name="salary" /> 6-10 lakhs</label>
            <label><input type="radio" name="salary" /> 10-12 lakhs</label>
          </div>
        )}
      </div>

      {/* Location Filter */}
      <div className={styles.filterSection}>
        <div className={styles.filterHeader} onClick={() => toggleDropdown("location")}>
          Location {openDropdowns.location ? <FaAngleUp /> : <FaAngleDown />}
        </div>
        {openDropdowns.location && (
          <div className={styles.filterOptions}>
            <label><input type="radio" name="location" /> Delhi/NCR</label>
            <label><input type="radio" name="location" /> Mumbai</label>
            <label><input type="radio" name="location" /> Kolkata</label>
            <label><input type="radio" name="location" /> Bengaluru</label>
            <label><input type="radio" name="location" /> Hyderabad</label>
          </div>
        )}
      </div>

      {/* Experience Filter */}
      <div className={styles.filterSection}>
        <div className={styles.filterHeader} onClick={() => toggleDropdown("experience")}>
          Experience {openDropdowns.experience ? <FaAngleUp /> : <FaAngleDown />}
        </div>
        {openDropdowns.experience && (
          <div className={styles.filterOptions}>
            <label><input type="radio" name="experience" /> 0-1 years</label>
            <label><input type="radio" name="experience" /> 1-3 years</label>
            <label><input type="radio" name="experience" /> 3-5 years</label>
            <label><input type="radio" name="experience" /> 5+ years</label>
          </div>
        )}
      </div>
    </div>
  );
};

export default WorkFilter;
