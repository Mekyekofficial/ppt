import React, { useEffect, useState } from "react";
import styles from "./css/Post.module.css";
import { Avatar, IconButton, Button, MenuItem, Select, TextField } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import InsertPhotoOutlinedIcon from "@mui/icons-material/InsertPhotoOutlined";
import InsertLinkOutlinedIcon from "@mui/icons-material/InsertLinkOutlined";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import VideoCallOutlinedIcon from "@mui/icons-material/VideoCallOutlined";
import LinkOutlinedIcon from "@mui/icons-material/LinkOutlined";

const PostPopup = ({ closePost }) => {
  const token = localStorage.getItem("token");

  const [userinfo, setUserinfo] = useState(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [activeScreen, setActiveScreen] = useState("selection");
  const [selectedOption, setSelectedOption] = useState("");

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

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setActiveScreen("postInput");
  };

  return (
    <div className={styles.popupContainer}>
      <div className={styles.popupHeader}>
        {userinfo && token ? (
          <>
            {imageLoaded ? (
              <img
                src={userinfo.profilePhoto}
                alt="avatar"
                className={styles.avatar}
              />
            ) : (
              <Avatar className={styles.avatar} />
            )}
            <div>
              <p className={styles.userName}>
                {userinfo.firstName || "Alex"} {userinfo.lastName}
              </p>
              <p className={styles.postTo}>Post to Anyone</p>
            </div>
          </>
        ) : (
          <>
            <Avatar className={styles.avatar} />
            <div>
              <p className={styles.userName}>Full Name</p>
              <p className={styles.postTo}>Post to Anyone</p>
            </div>
          </>
        )}
        <IconButton className={styles.closeButton} onClick={closePost}>
          <CloseIcon />
        </IconButton>
      </div>
      <div className={styles.popupContent}>
        {activeScreen === "selection" ? (
          <>
            <h2 className={styles.heading}>What do You want to Post?</h2>
            <div className={styles.options}>
              <button
                className={`${styles.optionButton} ${styles.news}`}
                onClick={() => handleOptionClick("News")}
              >
                News
              </button>
              <button
                className={`${styles.optionButton} ${styles.events}`}
                onClick={() => handleOptionClick("Events")}
              >
                Events
              </button>
              <button
                className={`${styles.optionButton} ${styles.gigs}`}
                onClick={() => handleOptionClick("Gigs")}
              >
                Gigs
              </button>
              <button
                className={`${styles.optionButton} ${styles.courses}`}
                onClick={() => handleOptionClick("Courses")}
              >
                Courses
              </button>
            </div>
          </>
        ) : selectedOption === "News" ?  (
          <div className={styles.postInputContainer}>
            <button
              className={`${styles.optionButton} ${styles[selectedOption.toLowerCase()]}`}
            >
              {selectedOption}
            </button>
            <textarea
              className={styles.textarea}
              placeholder="Enter Your Post Here"
              maxLength="3000"
            ></textarea>
            <div className={styles.footer}>
              <div className={styles.icons}>
                <InsertPhotoOutlinedIcon />
                <InsertLinkOutlinedIcon />
              </div>
              <div className={styles.charCount}>
                0/3000
              </div>
              {/* <SentimentSatisfiedAltIcon /> */}
              <button className={styles.postButton}>Post</button>
            </div>
          </div>
        ) : selectedOption === "Events" ? (
          <div className={styles.postInputContainer}>
            <button
              className={`${styles.optionButton} ${styles[selectedOption.toLowerCase()]}`}
            >
              {selectedOption}
            </button>
            <Select
          variant="outlined"
          className={styles.eventTypeDropdown}
          defaultValue=""
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
        ) : selectedOption === "Gigs" ?  (
          <div className={styles.postInputContainer}>
            <button
              className={`${styles.optionButton} ${styles[selectedOption.toLowerCase()]}`}
            >
              {selectedOption}
            </button>
            <textarea
              className={styles.textarea}
              placeholder="Enter Details of the Gig"
              maxLength="3000"
            ></textarea>
            <div className={styles.footer}>
              <div className={styles.icons}>
                <VideoCallOutlinedIcon />
                <LinkOutlinedIcon />
              </div>
              <div className={styles.charCount}>
                0/3000
              </div>
              {/* <SentimentSatisfiedAltIcon /> */}
              <button className={styles.postButton}>Post</button>
            </div>
          </div>
        ) : selectedOption === "Courses" ?  (
          <div className={styles.postInputContainer}>
            <button
              className={`${styles.optionButton} ${styles[selectedOption.toLowerCase()]}`}
            >
              {selectedOption}
            </button>
            <textarea
              className={styles.textarea}
              placeholder="Enter Details of the Course"
              maxLength="3000"
            ></textarea>
            <div className={styles.footer}>
              <div className={styles.icons}>
                <VideoCallOutlinedIcon />
                <LinkOutlinedIcon />
              </div>
              <div className={styles.charCount}>
                0/3000
              </div>
              {/* <SentimentSatisfiedAltIcon /> */}
              <button className={styles.postButton}>Post</button>
            </div>
          </div>
        ) : (
          <div className={styles.postInputContainer}>
            <button
              className={`${styles.optionButton} ${styles[selectedOption.toLowerCase()]}`}
            >
              {selectedOption}
            </button>
            
          </div>
        )}
      </div>
    </div>
  );
};

export default PostPopup;
