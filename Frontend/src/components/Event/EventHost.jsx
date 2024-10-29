import React from 'react';
import EventHostStyles from './css/EventHost.module.css';

const EventHost = () => {
    return (
        <div className={EventHostStyles.EventHost}>
            <button>Host A Event</button>
        </div>
    );
};

export default EventHost;