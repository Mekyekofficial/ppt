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
        <div className={styles.location}>
        <svg viewBox="0 0 380 374" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_2701_7549)" filter="url(#filter0_d_2701_7549)">
        <g filter="url(#filter1_d_2701_7549)">
        <path d="M221.667 199.583L301.831 87.866C313.653 71.3905 319.564 63.1528 317.79 56.3433C317.235 54.2123 316.217 52.2298 314.81 50.5364C310.311 45.125 300.172 45.125 279.894 45.125L100.106 45.125C79.8278 45.125 69.6887 45.125 65.1905 50.5364C63.7828 52.2298 62.7653 54.2123 62.2101 56.3432C60.436 63.1527 66.3471 71.3905 78.1693 87.866L158.333 199.583M221.667 199.583L158.333 199.583M221.667 199.583L221.667 326.687C221.667 328.997 221.667 330.152 221.111 330.523C220.94 330.637 220.743 330.708 220.539 330.728C219.874 330.793 219.141 329.9 217.677 328.114L158.741 256.248C158.562 256.029 158.472 255.92 158.417 255.793C158.399 255.751 158.383 255.708 158.371 255.664C158.333 255.531 158.333 255.389 158.333 255.106L158.333 199.583" stroke="#292556" stroke-width="37.5" stroke-linejoin="round" shape-rendering="crispEdges"/>
        </g>
        </g>
        <defs>
        <filter id="filter0_d_2701_7549" x="-30" y="-23" width="440" height="397" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="4"/>
        <feGaussianBlur stdDeviation="15"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.39 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2701_7549"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2701_7549" result="shape"/>
        </filter>
        <filter id="filter1_d_2701_7549" x="-6.85156" y="26.375" width="393.703" height="423.109" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="50"/>
        <feGaussianBlur stdDeviation="25"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2701_7549"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2701_7549" result="shape"/>
        </filter>
        <clipPath id="clip0_2701_7549">
        <rect width="380" height="337" fill="white" transform="translate(0 3)"/>
        </clipPath>
        </defs>
        </svg>
          <span>Filter</span>
        </div>
      </div>

    </div>
  );
};

export default CourseSearchBar;
