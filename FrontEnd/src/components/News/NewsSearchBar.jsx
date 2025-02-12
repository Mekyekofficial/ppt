import React from "react";
import styles from "./css/NewsSearchBar.module.css";
import { Search, Filter, ChevronRight } from "lucide-react"; // React UI icons

const categories = ["Technology", "Travel", "Indian Budget", "Web"];

const NewsSearchBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.searchBar}>
        <div className={styles.searchInputContainer}>
            <svg className={styles.searchIcon} viewBox="0 0 385 398" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M336.875 348.25L282.28 291.805M321.451 191.044C321.451 269.078 260.265 332.338 184.788 332.338C109.311 332.338 48.125 269.078 48.125 191.044C48.125 113.009 109.311 49.75 184.788 49.75C260.265 49.75 321.451 113.009 321.451 191.044Z" stroke="#292556" stroke-opacity="0.72" stroke-width="24.5" stroke-linecap="round"/>
            </svg>
            <input type="text" placeholder="Search News.." className={styles.searchInput} />
        </div>
        <div className={styles.filter}>
          <svg className={styles.filterIcon} viewBox="0 0 380 371" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_2540_3404)" filter="url(#filter0_d_2540_3404)">
            <path d="M221.667 196.583L301.831 84.866C313.653 68.3905 319.564 60.1528 317.79 53.3433C317.235 51.2123 316.217 49.2298 314.81 47.5364C310.311 42.125 300.172 42.125 279.894 42.125L100.106 42.125C79.8278 42.125 69.6887 42.125 65.1905 47.5364C63.7828 49.2298 62.7653 51.2123 62.2101 53.3432C60.436 60.1527 66.3471 68.3905 78.1693 84.866L158.333 196.583M221.667 196.583L158.333 196.583M221.667 196.583L221.667 323.687C221.667 325.997 221.667 327.152 221.111 327.523C220.94 327.637 220.743 327.708 220.539 327.728C219.874 327.793 219.141 326.9 217.677 325.114L158.741 253.248C158.562 253.029 158.472 252.92 158.417 252.793C158.399 252.751 158.383 252.708 158.371 252.664C158.333 252.531 158.333 252.389 158.333 252.106L158.333 196.583" stroke="#292556" stroke-width="20.5" stroke-linejoin="round"/>
            </g>
            <defs>
            <filter id="filter0_d_2540_3404" x="-30" y="-26" width="440" height="397" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="4"/>
            <feGaussianBlur stdDeviation="15"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.39 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2540_3404"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2540_3404" result="shape"/>
            </filter>
            <clipPath id="clip0_2540_3404">
            <rect width="380" height="337" fill="white"/>
            </clipPath>
            </defs>
          </svg>
          <span className={styles.filterText}>Filter</span>
        </div>
      </div>

      <hr className={styles.separator} />

      <div className={styles.categories}>
        <button className={styles.yourChoice}>Your Choice</button>
        {categories.map((category, index) => (
          <button key={index} className={styles.categoryButton}>{category}</button>
        ))}
        <ChevronRight className={styles.moreIcon} size={18} />
      </div>
    </div>
  );
};

export default NewsSearchBar;
