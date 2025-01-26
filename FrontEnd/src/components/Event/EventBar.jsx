import React, { useState } from 'react';
import styles from './css/EventBar.module.css';
import { TextField, Button, MenuItem, Modal, Box } from '@mui/material';
import { FaRegCircle } from "react-icons/fa6";
import SearchIcon from '@mui/icons-material/Search';
import FilterAltIcon from '@mui/icons-material/FilterAlt';

const EventBar = ({openPost}) => {
  const [openFilter, setOpenFilter] = useState(false);
  const [pricing, setPricing] = useState("");
  const [localEvents, setLocalEvents] = useState("");
  const [seminars, setSeminars] = useState("");
  const [culturalEvents, setCulturalEvents] = useState("");

  const handleOpenFilter = () => setOpenFilter(!openFilter);

  const filterOptions = {
    location: ['New York', 'Los Angeles', 'Chicago'],
    date: ['Today', 'Tomorrow', 'This Week'],
    time: ['Morning', 'Afternoon', 'Evening'],
    category: ['Concert', 'Workshop', 'Conference'],
    mode: ['Online', 'In-person'],
  };

  return (
    <div className={styles.eventBar}>
      <div className={styles.filterBtn} onClick={handleOpenFilter}>
        <span>Filter</span>
        <FilterAltIcon />
      </div>

      {/* Filter pop-up */}
      {openFilter && (
        <div className={styles.filterPopUp}>
          <div>
            <label>
              <FaRegCircle/>
              <select value={pricing} onChange={(e) => setPricing(e.target.value)}>
                <option value="">Pricings</option>
                <option value="free">Free</option>
                <option value="paid">Paid</option>
              </select>
            </label>
          </div>
          <div>
            <label>
              <FaRegCircle/>
              <select value={localEvents} onChange={(e) => setLocalEvents(e.target.value)}>
                <option value="">Local Events</option>
                <option value="event1">Event 1</option>
                <option value="event2">Event 2</option>
              </select>
            </label>
          </div>
          <div>
            <label>
              <FaRegCircle/>
              <select value={seminars} onChange={(e) => setSeminars(e.target.value)}>
                <option value=""><FaRegCircle />Seminars</option>
                <option value="seminar1">Seminar 1</option>
                <option value="seminar2">Seminar 2</option>
              </select>
            </label>
          </div>
          <div>
            <label>
              <FaRegCircle/>
              <select value={culturalEvents} onChange={(e) => setCulturalEvents(e.target.value)}>
                <option value="">Cultural Events</option>
                <option value="cultural1">Cultural Event 1</option>
                <option value="cultural2">Cultural Event 2</option>
              </select>
            </label>
          </div>
        </div>
      )}

      {/* Search Field */}
      <div className={styles.searchField}>
        <input type="text" placeholder='Search any Event' className={styles.searchInput}/>
        <SearchIcon />
      </div>

      {/* Dropdowns */}
      <TextField select className={styles.dropdown} label="Location">
        {filterOptions.location.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </TextField>

      <TextField select className={styles.dropdown} label="Date">
        {filterOptions.date.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </TextField>

      <TextField select className={styles.dropdown} label="Time">
        {filterOptions.time.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </TextField>

      <TextField select className={styles.dropdown} label="Category">
        {filterOptions.category.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </TextField>

      <TextField select className={styles.dropdown} label="Mode">
        {filterOptions.mode.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </TextField>

      {/* Post Event Button */}
      <Button variant="contained" className={styles.postBtn} onClick={openPost}>
        Post A Event
      </Button>


    </div>
  );
};

export default EventBar;
