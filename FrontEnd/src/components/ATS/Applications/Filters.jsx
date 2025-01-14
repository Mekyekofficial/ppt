import React, {useState} from 'react';
import { FiFilter } from "react-icons/fi";
import FiltersStyles from './css/Filters.module.css';

const Filters = () => {
  const [showFilters, setShowFilters] = useState(false);
  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };
  return (
    <div className={FiltersStyles.filters}>
      <button className={FiltersStyles["toggle-button"]} onClick={toggleFilters}>
        <FiFilter className={FiltersStyles['filter-icon']}/>
        Filters
      </button>
      {showFilters && (
        <div className={`${FiltersStyles.popup} ${FiltersStyles["filters-popup"]}`}>
          <h3>Filters</h3>
          <div className={FiltersStyles["filter-section"]}>
            <label>Category</label>
            <select>
              <option>Category 1</option>
              <option>Category 2</option>
            </select>
          </div>
          <div className={FiltersStyles["filter-section"]}>
            <label>Date Range</label>
            <select>
              <option>Last 7 Days</option>
              <option>Last 30 Days</option>
            </select>
          </div>
          <div className={FiltersStyles["filter-section"]}>
            <label>Location</label>
            <select>
              <option>Select Location</option>
              <option>New York</option>
              <option>San Francisco</option>
            </select>
          </div>
          <div className={FiltersStyles["filter-section"]}>
            <label>Client</label>
            <select>
              <option>Client 1</option>
              <option>Client 2</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
};

export default Filters;
