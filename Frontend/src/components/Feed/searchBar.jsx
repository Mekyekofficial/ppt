import React from 'react';
import MediaIcon from '../../assets/media.png';
import EventIcon from '../../assets/event.png';
import ArticleIcon from '../../assets/article.png';
import SearchBarStyles from './css/searchBar.module.css';

const SearchBar = () => {
  return (
    <div className={SearchBarStyles["search-bar-container"]}>
      <input
        type="text"
        className={SearchBarStyles["search-bar"]}
        placeholder="Search..."
      />
      <div className="options">
        <div className={SearchBarStyles.option}>
          <img src={MediaIcon} alt="Media" />
          <span>Media</span>
        </div>
        <div className={SearchBarStyles.option}>
          <img src={EventIcon} alt="Event" />
          <span>Event</span>
        </div>
        <div className={SearchBarStyles.option}>
          <img src={ArticleIcon} alt="Write article" />
          <span>Write article</span>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
