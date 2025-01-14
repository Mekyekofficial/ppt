import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";
import ViewListIcon from "@mui/icons-material/ViewList";
import SearchBarStyles from "./css/SearchBar.module.css";

const SearchBar = () => {
  return (
    <div className={SearchBarStyles["search-bar"]}>
      <div className={SearchBarStyles["search-input"]}>
        <SearchIcon className={SearchBarStyles.icon} />
        <input type="text" placeholder="Search for candidates..." />
      </div>
      <div className={SearchBarStyles["search-options"]}>
        <button className={SearchBarStyles["filters-btn"]}>
          <FilterListIcon className={SearchBarStyles.icon} />
          Filters
        </button>
        <button className={SearchBarStyles["views-btn"]}>
          <ViewListIcon className={SearchBarStyles.icon} />
          Views
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
