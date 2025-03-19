import React from "react";
import styles from "./css/CourseSearchBar.module.css";
import { Search, Filter, MapPin } from "lucide-react";

const CourseSearchBar = () => {
  return (
    <div className={styles.searchBarContainer}>
      {/* Search Input */}
      <div className={styles.searchBox}>
        <div className={styles.searchInputContainer}>
            <svg className={styles.searchIcon} viewBox="0 0 385 398" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M336.875 348.25L282.28 291.805M321.451 191.044C321.451 269.078 260.265 332.338 184.788 332.338C109.311 332.338 48.125 269.078 48.125 191.044C48.125 113.009 109.311 49.75 184.788 49.75C260.265 49.75 321.451 113.009 321.451 191.044Z" stroke="#292556" stroke-opacity="0.72" stroke-width="24.5" stroke-linecap="round"/>
            </svg>
            <input
            type="text"
            placeholder="Search Courses.."
            className={styles.searchInput}
            />
        </div>
      </div>

    </div>
  );
};

export default CourseSearchBar;
