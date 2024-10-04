import React from 'react';
import MediaIcon from '../../assets/media.png';
import EventIcon from '../../assets/event.png';
import ArticleIcon from '../../assets/article.png';
import './css/searchBar.css';

const SearchBar = () => {
  return (
    <div className="search-bar-container">
      <input
        type="text"
        className="search-bar"
        placeholder="Search..."
      />
      <div className="options">
        <div className="option">
          <img src={MediaIcon} alt="Media" />
          <span>Media</span>
        </div>
        <div className="option">
          <img src={EventIcon} alt="Event" />
          <span>Event</span>
        </div>
        <div className="option">
          <img src={ArticleIcon} alt="Write article" />
          <span>Write article</span>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
