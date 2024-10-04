import React from "react";
import "./css/SearchBar.css";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";
import ViewListIcon from "@mui/icons-material/ViewList";

const SearchBar = () => {
  return (
    <div className="search-bar">
      <div className="search-input">
        <SearchIcon className="icon" />
        <input type="text" placeholder="Search for candidates..." />
      </div>
      <div className="search-options">
        <button className="filters-btn">
          <FilterListIcon className="icon" />
          Filters
        </button>
        <button className="views-btn">
          <ViewListIcon className="icon" />
          Views
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
