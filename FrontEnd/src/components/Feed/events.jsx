import React from 'react';
import EventImage from '../../assets/event-img.png';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import EventIcon from '@mui/icons-material/Event';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import { MdKeyboardArrowDown } from "react-icons/md";
import EventsStyles from './css/events.module.css';

const Events = () => {
  return (
    <div className={EventsStyles["events-container"]}>
      <div className={EventsStyles["events-header"]}>
        <h2>Events</h2>
        <CalendarMonthIcon fontSize="large" />
      </div>
      <img src={EventImage} alt="event-img" />
      <div className={EventsStyles.event}>
        <EventIcon className={EventsStyles["event-icon"]} />
        <div className={EventsStyles["event-details"]}>
          <p>5th Sept, 2024</p>
          <h4>TUC - Garba Dandiya Utsav 2024 | Navratri 2024</h4>
        </div>
      </div>

      <div className={EventsStyles.event}>
        <LocalDiningIcon className={EventsStyles["event-icon"]} />
        <div className={EventsStyles["event-details"]}>
          <p>5th Sept, 2024</p>
          <h4>FLOATING BUFFET AT LENIN CRUISES (NON SAILING)</h4>
        </div>
      </div>

      <div className={EventsStyles["see-more"]}>
        <a href="#">See more <MdKeyboardArrowDown className={EventsStyles['see-more-icon']} /></a>
      </div>
    </div>
  );
};

export default Events;