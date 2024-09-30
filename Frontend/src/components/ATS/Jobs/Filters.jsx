import React from 'react';
import './css/Filters.css';

const Filters = () => {
  return (
    <div className="filters">
      <h3>Filters</h3>
      <div className="filter-option">
        <label>Category</label>
        <select>
          <option>Select Category</option>
        </select>
      </div>
      <div className="filter-option">
        <label>Date Range</label>
        <input type="date" />
      </div>
      <div className="filter-option">
        <label>Location</label>
        <select>
          <option>Select Location</option>
        </select>
      </div>
      <div className="filter-option">
        <label>Client</label>
        <input type="text" />
      </div>
    </div>
  );
};

export default Filters;
