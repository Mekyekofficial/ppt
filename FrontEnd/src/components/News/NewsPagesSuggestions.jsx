import React, { useState } from "react";
import styles from "./css/NewsPagesSuggestions.module.css";
import { Search } from "lucide-react"; // React UI icon
import sampleImage from "../../assets/profile-image.png"; // Replace with actual image

const newsPages = [
  { name: "FRES News", category: "Digital World" },
  { name: "OPG News", category: "World News" },
  { name: "ABCE News", category: "Indian News" },
  { name: "Tech Daily", category: "Technology" },
  { name: "Sports Central", category: "Sports" },
  { name: "Health Today", category: "Health" },
  { name: "Business Insider", category: "Business" },
  { name: "Science Weekly", category: "Science" },
];

const NewsPagesSuggestions = () => {
  const [showAll, setShowAll] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPages = newsPages.filter(page =>
    page.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    page.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const displayedPages = showAll ? filteredPages : filteredPages.slice(0, 3);

  const handleMoreClick = () => {
    setShowAll(!showAll);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span className={styles.title}>Suggested News Page</span>
        <div className={styles.searchBar}>
            <svg className={styles.searchIcon} viewBox="0 0 227 231" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M198.625 202.125L166.435 169.364M189.531 110.882C189.531 156.174 153.455 192.889 108.953 192.889C64.451 192.889 28.375 156.174 28.375 110.882C28.375 65.5909 64.451 28.875 108.953 28.875C153.455 28.875 189.531 65.5909 189.531 110.882Z" stroke="#292556" stroke-opacity="0.72" stroke-width="24.5" stroke-linecap="round"/>
            </svg>
            <input 
              type="text" 
              placeholder="Search" 
              className={styles.searchInput}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
        </div>
      </div>

      <ul className={styles.newsList}>
        {displayedPages.map((page, index) => (
          <li key={index} className={styles.newsItem}>
            <img src={sampleImage} alt="News" className={styles.avatar} />
            <div className={styles.newsInfo}>
              <span className={styles.newsName}>{page.name}</span>
              <span className={styles.newsCategory}>{page.category}</span>
            </div>
            <button className={styles.joinButton}>Join</button>
          </li>
        ))}
      </ul>

      {filteredPages.length > 3 && (
        <button 
          className={`${styles.moreButton} ${showAll ? styles.moreButtonUp : ''}`}
          onClick={handleMoreClick}
        >
          <svg className={styles.moreIcon} viewBox="0 0 622 544" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M181.417 215.336L311 328.669L440.583 215.336" stroke="#292556" stroke-width="31.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span>{showAll ? 'Show Less' : 'Show More'}</span>
        </button>
      )}
    </div>
  );
};

export default NewsPagesSuggestions;
