import React, { useState, useEffect } from "react";
import styles from "./css/NewsSearchBar.module.css";
import { Search, Filter, ChevronRight, X } from "lucide-react"; // React UI icons

const categories = ["Technology", "Travel", "Indian Budget", "Web"];

// Sample news data for search results
const sampleNews = [
  { title: "Breaking: New Technology Trends", category: "Technology" },
  { title: "Travel Destinations 2024", category: "Travel" },
  { title: "Budget Analysis Report", category: "Indian Budget" },
  { title: "Web Development Updates", category: "Web" },
  { title: "Latest Tech Gadgets", category: "Technology" },
  { title: "Tourism Growth", category: "Travel" },
];

const NewsSearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [selectedChoices, setSelectedChoices] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const filteredNews = sampleNews.filter(news =>
    news.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    news.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setShowResults(true);
  };

  const handleSearchBlur = () => {
    // Delay hiding results to allow clicking on them
    setTimeout(() => setShowResults(false), 200);
  };

  const handleChoiceClick = (category) => {
    if (selectedChoices.includes(category)) {
      setSelectedChoices(selectedChoices.filter(choice => choice !== category));
    } else {
      setSelectedChoices([...selectedChoices, category]);
    }
  };

  const handleRemoveChoice = (category) => {
    setSelectedChoices(selectedChoices.filter(choice => choice !== category));
  };

  const handleClearAll = () => {
    setSelectedChoices([]);
  };

  return (
    <div className={`${styles.container} ${isVisible ? styles.visible : ''}`}>
      <div className={styles.searchBar}>
        <div className={styles.searchInputContainer}>
          <Search className={styles.searchIcon} size={20} />
          <input 
            type="text" 
            placeholder="Search News.." 
            className={styles.searchInput}
            value={searchQuery}
            onChange={handleSearchChange}
            onBlur={handleSearchBlur}
            onFocus={() => setShowResults(true)}
          />
        </div>
        <div className={styles.filter}>
          <Filter className={styles.filterIcon} size={20} />
          <span className={styles.filterText}>Filter</span>
        </div>
      </div>

      {showResults && searchQuery && (
        <div className={styles.searchResults}>
          {filteredNews.length > 0 ? (
            filteredNews.map((news, index) => (
              <div 
                key={index} 
                className={styles.searchResultItem}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={styles.resultContent}>
                  <span className={styles.resultTitle}>{news.title}</span>
                  <span className={styles.resultCategory}>{news.category}</span>
                </div>
                <ChevronRight className={styles.resultIcon} size={18} />
              </div>
            ))
          ) : (
            <div className={styles.noResults}>
              No results found for "{searchQuery}"
            </div>
          )}
        </div>
      )}

      <hr className={styles.separator} />

      <div className={styles.categories}>
        {selectedChoices.length > 0 ? (
          <div className={styles.selectedChoices}>
            {selectedChoices.map((choice, index) => (
              <div 
                key={index} 
                className={styles.selectedChoice}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span>{choice}</span>
                <button 
                  className={styles.removeChoice}
                  onClick={() => handleRemoveChoice(choice)}
                >
                  <X size={14} />
                </button>
              </div>
            ))}
            <button 
              className={styles.clearAll}
              onClick={handleClearAll}
            >
              Clear All
            </button>
          </div>
        ) : (
          <button className={styles.yourChoice}>Your Suggation</button>
        )}
        
        <div className={styles.categoryButtons}>
          {categories.map((category, index) => (
            <button 
              key={index} 
              className={`${styles.categoryButton} ${
                selectedChoices.includes(category) ? styles.selected : ""
              }`}
              onClick={() => handleChoiceClick(category)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {category}
            </button>
          ))}
        </div>
        <ChevronRight className={styles.moreIcon} size={18} />
      </div>
    </div>
  );
};

export default NewsSearchBar;
