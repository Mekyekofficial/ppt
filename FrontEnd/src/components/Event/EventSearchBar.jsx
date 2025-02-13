import React from "react";
import styles from "./css/EventSearchBar.module.css";
import { Search, Filter, MapPin } from "lucide-react";

const EventSearchBar = () => {
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
            placeholder="Search Events.."
            className={styles.searchInput}
            />
        </div>
        <div className={styles.location}>
          <svg className={styles.locationIcon} viewBox="0 0 276 325" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M40.4218 39.4291C66.3015 14.1831 101.402 0 138.001 0C174.601 0 209.701 14.1831 235.581 39.4291C261.461 64.6752 276 98.9161 276 134.619C276 170.323 261.461 204.564 235.581 229.81L138.001 325L40.4218 229.81C27.6066 217.31 17.4409 202.469 10.5053 186.137C3.56972 169.804 0 152.298 0 134.619C0 116.941 3.56972 99.4351 10.5053 83.1023C17.4409 66.7694 27.6066 51.9292 40.4218 39.4291ZM138.001 173.08C148.458 173.08 158.486 169.028 165.88 161.815C173.274 154.602 177.428 144.82 177.428 134.619C177.428 124.419 173.274 114.636 165.88 107.424C158.486 100.211 148.458 96.1587 138.001 96.1587C127.545 96.1587 117.517 100.211 110.123 107.424C102.729 114.636 98.5753 124.419 98.5753 134.619C98.5753 144.82 102.729 154.602 110.123 161.815C117.517 169.028 127.545 173.08 138.001 173.08Z" fill="black"/>
           </svg>
          <span>Kolkata</span>
        </div>
      </div>

      <div className={styles.separator}></div>

      {/* Filter Section */}
      <div className={styles.filters}>
        <button className={styles.filterButton}>
            <svg viewBox="0 0 380 381" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_2561_6193)">
                <path d="M221.667 222.25L306.18 89.0936C316.419 72.9624 321.538 64.8968 319.591 58.3502C318.98 56.2946 317.935 54.394 316.527 52.7765C312.043 47.625 302.49 47.625 283.384 47.625L96.6159 47.625C77.5099 47.625 67.9568 47.625 63.4726 52.7765C62.0646 54.394 61.0198 56.2946 60.4086 58.3502C58.4622 64.8967 63.5814 72.9623 73.8198 89.0936L158.333 222.25M221.667 222.25L158.333 222.25M221.667 222.25L221.667 366.129C221.667 368.641 221.667 369.898 221.086 370.266C220.908 370.379 220.705 370.445 220.495 370.458C219.808 370.501 219.071 369.484 217.595 367.45L158.676 286.223C158.525 286.015 158.45 285.911 158.403 285.793C158.388 285.754 158.375 285.714 158.365 285.674C158.333 285.552 158.333 285.423 158.333 285.166L158.333 222.25" stroke="black" stroke-width="30.5" stroke-linejoin="round"/>
                </g>
                <defs>
                <clipPath id="clip0_2561_6193">
                <rect width="380" height="381" fill="white"/>
                </clipPath>
                </defs>
            </svg>
          <span>Filter</span>
        </button>
        <button className={styles.dropdown}>
            Location
            <svg className={styles.dropDownIcon} viewBox="0 0 370 325" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M107.916 128.648L184.999 196.357L262.083 128.648" stroke="#292556" stroke-width="31.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </button>
        <button className={styles.dropdown}>
            Mode 
            <svg className={styles.dropDownIcon} viewBox="0 0 370 325" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M107.916 128.648L184.999 196.357L262.083 128.648" stroke="#292556" stroke-width="31.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </button>
        <button className={styles.dropdown}>
            Category 
            <svg className={styles.dropDownIcon} viewBox="0 0 370 325" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M107.916 128.648L184.999 196.357L262.083 128.648" stroke="#292556" stroke-width="31.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </button>
        <button className={styles.dropdown}>
            Date 
            <svg className={styles.dropDownIcon} viewBox="0 0 370 325" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M107.916 128.648L184.999 196.357L262.083 128.648" stroke="#292556" stroke-width="31.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </button>
      </div>
    </div>
  );
};

export default EventSearchBar;
