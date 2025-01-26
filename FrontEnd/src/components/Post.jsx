import React from "react";
import styles from "./css/Post.module.css";
import { Avatar, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useEffect, useState } from "react";

const PostPopup = ({closePost}) => {
  const token = localStorage.getItem('token');

  const [userinfo, setUserinfo] = useState(null);
    useEffect(() => {
      const user = localStorage.getItem('user-info');
      const userinfo = JSON.parse(user);
      setUserinfo(userinfo);
    }, []);

  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
      if (userinfo?.profilePhoto) {
        const img = new Image();
        img.src = userinfo.profilePhoto;
        img.onload = () => setImageLoaded(true);
      }
    }, [userinfo?.profilePhoto]);

  return (
    <div className={styles.popupContainer}>
      <div className={styles.popupHeader}>
        {userinfo && token ? (
          <>
            {imageLoaded ? (
              <img src={userinfo.profilePhoto} alt="avatar" className={styles.avatar} />
            ) : (
              <Avatar className={styles.avatar} />
            )}
            <div>
            <p className={styles.userName}>{userinfo.firstName || 'Alex'}&nbsp;{userinfo.lastName}&nbsp;&nbsp;</p>
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
          <CloseIcon/>
        </IconButton>
      </div>
      <div className={styles.popupContent}>
        <h2 className={styles.heading}>What do You want to Post?</h2>
        <div className={styles.options}>
          <button className={`${styles.optionButton} ${styles.news}`}>News</button>
          <button className={`${styles.optionButton} ${styles.events}`}>Events</button>
          <button className={`${styles.optionButton} ${styles.gigs}`}>Gigs</button>
          <button className={`${styles.optionButton} ${styles.courses}`}>Courses</button>
        </div>
      </div>
      {/* <div className={styles.overlay}></div> */}
    </div>
  );
};

export default PostPopup;
