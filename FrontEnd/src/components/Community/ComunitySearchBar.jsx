import React, {useState} from "react";
import styles from "./css/ComunitySearchBar.module.css";
import { Search, Filter, MapPin } from "lucide-react";
import CreateCommunity from "./CreateComunity";

const ComunitySearchBar = () => {
  const [showPopup, setShowPopup] = useState(false);
  return (
    <div className={styles.searchBarContainer}>
      {/* Search Input */}
      <div className={styles.searchBox}>
        <div className={styles.searchInputContainer}>
          <svg
            className={styles.searchIcon}
            viewBox="0 0 385 398"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M336.875 348.25L282.28 291.805M321.451 191.044C321.451 269.078 260.265 332.338 184.788 332.338C109.311 332.338 48.125 269.078 48.125 191.044C48.125 113.009 109.311 49.75 184.788 49.75C260.265 49.75 321.451 113.009 321.451 191.044Z"
              stroke="#292556"
              stroke-opacity="0.72"
              stroke-width="24.5"
              stroke-linecap="round"
            />
          </svg>
          <input
            type="text"
            placeholder="Search Communities.."
            className={styles.searchInput}
          />
        </div>
        <div className={styles.location}>
          <svg
            viewBox="0 0 380 374"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <g
              clip-path="url(#clip0_2701_7549)"
              filter="url(#filter0_d_2701_7549)">
              <g filter="url(#filter1_d_2701_7549)">
                <path
                  d="M221.667 199.583L301.831 87.866C313.653 71.3905 319.564 63.1528 317.79 56.3433C317.235 54.2123 316.217 52.2298 314.81 50.5364C310.311 45.125 300.172 45.125 279.894 45.125L100.106 45.125C79.8278 45.125 69.6887 45.125 65.1905 50.5364C63.7828 52.2298 62.7653 54.2123 62.2101 56.3432C60.436 63.1527 66.3471 71.3905 78.1693 87.866L158.333 199.583M221.667 199.583L158.333 199.583M221.667 199.583L221.667 326.687C221.667 328.997 221.667 330.152 221.111 330.523C220.94 330.637 220.743 330.708 220.539 330.728C219.874 330.793 219.141 329.9 217.677 328.114L158.741 256.248C158.562 256.029 158.472 255.92 158.417 255.793C158.399 255.751 158.383 255.708 158.371 255.664C158.333 255.531 158.333 255.389 158.333 255.106L158.333 199.583"
                  stroke="#292556"
                  stroke-width="37.5"
                  stroke-linejoin="round"
                  shape-rendering="crispEdges"
                />
              </g>
            </g>
            <defs>
              <filter
                id="filter0_d_2701_7549"
                x="-30"
                y="-23"
                width="440"
                height="397"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="15" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.39 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_2701_7549"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_2701_7549"
                  result="shape"
                />
              </filter>
              <filter
                id="filter1_d_2701_7549"
                x="-6.85156"
                y="26.375"
                width="393.703"
                height="423.109"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="50" />
                <feGaussianBlur stdDeviation="25" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_2701_7549"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_2701_7549"
                  result="shape"
                />
              </filter>
              <clipPath id="clip0_2701_7549">
                <rect
                  width="380"
                  height="337"
                  fill="white"
                  transform="translate(0 3)"
                />
              </clipPath>
            </defs>
          </svg>
          <span>Filter</span>
        </div>
      </div>
      <div className={styles.separator}></div>
      <button className={styles.createCommunity} onClick={() => setShowPopup(true)}>
        <svg
          viewBox="0 0 285 285"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M148.437 141.906C154.177 135.573 158.583 128.349 161.654 120.234C164.726 112.12 166.258 103.708 166.25 95C166.242 86.2917 164.71 77.8802 161.654 69.7656C158.599 61.651 154.193 54.4271 148.437 48.0938C160.312 49.6771 170.208 54.9219 178.125 63.8281C186.042 72.7344 190 83.125 190 95C190 106.875 186.042 117.266 178.125 126.172C170.208 135.078 160.312 140.323 148.437 141.906ZM207.219 237.5C209.396 233.938 211.031 230.13 212.123 226.076C213.216 222.023 213.758 217.914 213.75 213.75V201.875C213.75 194.75 212.167 187.969 209 181.533C205.833 175.097 201.677 169.409 196.531 164.469C206.625 168.031 215.979 172.635 224.592 178.279C233.205 183.924 237.508 191.789 237.5 201.875V213.75C237.5 220.281 235.176 225.874 230.529 230.529C225.882 235.184 220.289 237.508 213.75 237.5H207.219ZM237.5 130.625H225.625C222.26 130.625 219.442 129.485 217.17 127.205C214.898 124.925 213.758 122.107 213.75 118.75C213.742 115.393 214.882 112.575 217.17 110.295C219.458 108.015 222.276 106.875 225.625 106.875H237.5V95C237.5 91.6354 238.64 88.8171 240.92 86.545C243.2 84.2729 246.018 83.1329 249.375 83.125C252.732 83.1171 255.554 84.2571 257.842 86.545C260.13 88.8329 261.266 91.6512 261.25 95V106.875H273.125C276.49 106.875 279.312 108.015 281.592 110.295C283.872 112.575 285.008 115.393 285 118.75C284.992 122.107 283.852 124.929 281.58 127.217C279.308 129.505 276.49 130.641 273.125 130.625H261.25V142.5C261.25 145.865 260.11 148.687 257.83 150.967C255.55 153.247 252.732 154.383 249.375 154.375C246.018 154.367 243.2 153.227 240.92 150.955C238.64 148.683 237.5 145.865 237.5 142.5V130.625ZM95 142.5C81.9375 142.5 70.7552 137.849 61.4531 128.547C52.151 119.245 47.5 108.062 47.5 95C47.5 81.9375 52.151 70.7552 61.4531 61.4531C70.7552 52.151 81.9375 47.5 95 47.5C108.062 47.5 119.245 52.151 128.547 61.4531C137.849 70.7552 142.5 81.9375 142.5 95C142.5 108.062 137.849 119.245 128.547 128.547C119.245 137.849 108.062 142.5 95 142.5ZM0 213.75V204.25C0 197.521 1.73375 191.338 5.20125 185.701C8.66875 180.065 13.2683 175.758 19 172.781C31.2708 166.646 43.7396 162.046 56.4062 158.982C69.0729 155.919 81.9375 154.383 95 154.375C108.062 154.367 120.927 155.903 133.594 158.982C146.26 162.062 158.729 166.662 171 172.781C176.74 175.75 181.343 180.057 184.811 185.701C188.278 191.346 190.008 197.529 190 204.25V213.75C190 220.281 187.676 225.874 183.029 230.529C178.382 235.184 172.789 237.508 166.25 237.5H23.75C17.2187 237.5 11.6296 235.176 6.9825 230.529C2.33542 225.882 0.00791667 220.289 0 213.75Z"
            fill="black"
            fill-opacity="0.73"
          />
        </svg>
        Create Community
      </button>
      {showPopup && <CreateCommunity onClose={() => setShowPopup(false)} />}
    </div>
  );
};

export default ComunitySearchBar;
