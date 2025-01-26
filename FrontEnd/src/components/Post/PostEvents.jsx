import React, { useState } from 'react';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import styles from '../css/Post.module.css';

const PostEvents = () => {

    return (
        <div className={styles.postInputContainer}>
            <button
                className={`${styles.optionButton} ${styles["events"]}`}
            >
                Events
            </button>
            <Select
                variant="outlined"
                className={styles.eventTypeDropdown}
                defaultValue=""
                onChange={(e) => setSelectedOption(e.target.value)}
            >
                <MenuItem value="">Select Event Type</MenuItem>
                <MenuItem value="local">Local Events</MenuItem>
                <MenuItem value="seminar">Seminars</MenuItem>
                <MenuItem value="cultural">Cultural Events</MenuItem>
            </Select>

            {/* Event Name Input */}
            <input
                type="text"
                placeholder="Enter Event Name"
                className={styles.textInput}
            />

            {/* Image Upload Section */}
            <div className={styles.imageUpload}>
                <AddPhotoAlternateIcon />
                <div>Upload Image</div>
            </div>

            {/* Location, Date, and Time Inputs */}
            <div className={styles.inputRow}>
                <LocationOnIcon className={styles.inputIcon} />
                <input
                    type="text"
                    placeholder="Enter Location"
                    className={styles.inputField}
                />
            </div>
            <div className={styles.inputRow}>
                <CalendarMonthIcon className={styles.inputIcon} />
                <input
                    type="date"
                    className={styles.inputField}
                />
            </div>
            <div className={styles.inputRow}>
                <AccessTimeIcon className={styles.inputIcon} />
                <input
                    type="time"
                    className={styles.inputField}
                />
            </div>

            {/* Post Button */}
            <button className={styles.postButton2}>Post</button>
        </div>
    );
};

export default PostEvents;