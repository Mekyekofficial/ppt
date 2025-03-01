import React, { useState, useEffect } from 'react';
import API from '../../api';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import styles from '../css/Post.module.css';
import { toast } from 'react-toastify';

const PostEvents = () => {
    const [userinfo, setUserinfo] = useState(null);
    const [imageLoaded, setImageLoaded] = useState(false);

    useEffect(() => {
        const user = localStorage.getItem("user-info");
        const userinfo = JSON.parse(user);
        setUserinfo(userinfo);
    }, []);

    useEffect(() => {
        if (userinfo?.profilePhoto) {
            const img = new Image();
            img.src = userinfo.profilePhoto;
            img.onload = () => setImageLoaded(true);
        }
    }, [userinfo?.profilePhoto]);

    const [eventData, setEventData] = useState({
        eventType: '',
        eventName: '',
        eventImage: null,
        location: '',
        date: '',
        time: ''
    });

    // Handle text inputs & dropdown change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setEventData((prevState) => ({ ...prevState, [name]: value }));
    };

    // Handle file input
    const handleFileChange = (e) => {
        if (e.target.files.length > 0) {
            setEventData((prevState) => ({ ...prevState, eventImage: e.target.files[0] }));
            toast.success('Image uploaded successfully');
        }
    };

    // Handle form submission
    const handleSubmit = async () => {
        const formData = new FormData();
        formData.append("firstName", userinfo?.firstName || "");
        formData.append("lastName", userinfo?.lastName || "");
        if (userinfo?.profilePhoto) {
            formData.append("userPhoto", userinfo.profilePhoto);
        }
        formData.append("userId", userinfo._id);
        formData.append('eventType', eventData.eventType);
        formData.append('eventName', eventData.eventName);
        formData.append('eventImage', eventData.eventImage);
        formData.append('location', eventData.location);
        formData.append('date', eventData.date);
        formData.append('time', eventData.time);

        
        try {
            const response = await API.post("/posts/event", formData, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });

            if (response.data.success) {
                toast.success('Event posted successfully');
                setEventData({
                    eventType: '',
                    eventName: '',
                    eventImage: null,
                    location: '',
                    date: '',
                    time: ''
                });
            }
        } catch (error) {
            console.error('Error posting event:', error);
            toast.error('Failed to post event');
        }
    };

    return (
        <div className={styles.postInputContainer}>
            <button className={`${styles.optionButton} ${styles["events"]}`}>Events</button>

            {/* Event Type Dropdown */}
            <select
                className={styles.eventTypeDropdown}
                name="eventType"
                value={eventData.eventType}
                onChange={handleChange}
            >
                <option value="" disabled>Select Event Type</option>
                <option value="local">Local Events</option>
                <option value="seminar">Seminars</option>
                <option value="cultural">Cultural Events</option>
            </select>

            {/* Event Name Input */}
            <input
                type="text"
                name="eventName"
                value={eventData.eventName}
                placeholder="Enter Event Name"
                className={styles.textInput}
                onChange={handleChange}
            />

            {/* Image Upload */}
            <input type="file" id='fileInput' accept="image/*" onChange={handleFileChange} style={{ display: "none" }}/>
            <div className={styles.imageUpload} onClick={() => document.getElementById("fileInput").click()}>
                <AddPhotoAlternateIcon />
                <div>Upload Image</div>
            </div>

            {/* Location Input */}
            <div className={styles.inputRow}>
                <LocationOnIcon className={styles.inputIcon} />
                <input
                    type="text"
                    name="location"
                    value={eventData.location}
                    placeholder="Enter Location"
                    className={styles.inputField}
                    onChange={handleChange}
                />
            </div>

            {/* Date Input */}
            <div className={styles.inputRow}>
                <CalendarMonthIcon className={styles.inputIcon} />
                <input
                    type="date"
                    name="date"
                    value={eventData.date}
                    className={styles.inputField}
                    onChange={handleChange}
                />
            </div>

            {/* Time Input */}
            <div className={styles.inputRow}>
                <AccessTimeIcon className={styles.inputIcon} />
                <input
                    type="time"
                    name="time"
                    value={eventData.time}
                    className={styles.inputField}
                    onChange={handleChange}
                />
            </div>

            {/* Submit Button */}
            <button className={styles.postButton2} onClick={handleSubmit}>Post</button>
        </div>
    );
};

export default PostEvents;
