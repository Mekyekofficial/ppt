import React, {useState} from 'react';
import { FiFilter } from "react-icons/fi";
import './css/Filters.css';

const Filters = () => {
  const [showFilters, setShowFilters] = useState(false);
  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };
  return (
    <div className="filters">
      <button className="toggle-button" onClick={toggleFilters}>
        <FiFilter className='filter-icon'/>
        Filters
      </button>
      {showFilters && (
        <div className="popup filters-popup">
          <h3>Filters</h3>
          <div className="filter-section">
            <label>Category</label>
            <select>
              <option>Category 1</option>
              <option>Category 2</option>
            </select>
          </div>
          <div className="filter-section">
            <label>Date Range</label>
            <select>
              <option>Last 7 Days</option>
              <option>Last 30 Days</option>
            </select>
          </div>
          <div className="filter-section">
            <label>Location</label>
            <select>
              <option>Select Location</option>
              <option>New York</option>
              <option>San Francisco</option>
            </select>
          </div>
          <div className="filter-section">
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
