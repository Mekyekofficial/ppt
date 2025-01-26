import React, { useEffect, useState } from "react";
import styles from "./css/Post.module.css";
import PostSelection from "./Post/PostSelection";
import PostNews from "./Post/PostNews";
import PostEvents from "./Post/PostEvents";
import PostGigs from "./Post/PostGigs";
import PostCourses from "./Post/PostCourses";
import { Avatar, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";


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
      { activeScreen === "selection" ? <PostSelection handleOptionClick= {handleOptionClick}/> : 
        selectedOption === "News" ? <PostNews/> : 
        selectedOption === "Events" ? <PostEvents/> :
        selectedOption === "Gigs" ?  <PostGigs/> : 
        selectedOption === "Courses" ? <PostCourses/> : null
      }
      </div>
    </div>
  );
};

export default PostPopup;
