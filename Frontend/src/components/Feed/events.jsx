import React from 'react';
import EventImage from '../../assets/event-img.png';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import EventIcon from '@mui/icons-material/Event';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import { MdKeyboardArrowDown } from "react-icons/md";
import './css/events.css';


const Events = () => {
  return (
    <div className="events-container">
      <div className="events-header">
        <h2>Events</h2>
        <CalendarMonthIcon fontSize="large" />
      </div>
      <img src={EventImage} alt="event-img" />
      <div className="event">
        <EventIcon className="event-icon" />
        <div className="event-details">
          <p>5th Sept, 2024</p>
          <h4>TUC - Garba Dandiya Utsav 2024 | Navratri 2024</h4>
        </div>
      </div>

      <div className="event">
        <LocalDiningIcon className="event-icon" />
        <div className="event-details">
          <p>5th Sept, 2024</p>
          <h4>FLOATING BUFFET AT LENIN CRUISES (NON SAILING)</h4>
        </div>
      </div>

      <div className="see-more">
        <a href="#">See more <MdKeyboardArrowDown className='see-more-icon' /></a>
      </div>
    </div>
  );
};

export default Events;
