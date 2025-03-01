import React, {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import ProfileImage from "../../assets/profile-image.png";
import styles from "./css/FeedsProfile.module.css";

const FeedsProfile = () => {
  const navigate = useNavigate();
  const [userinfo, setUserinfo] = useState({});
  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("user-info"));
    setUserinfo(userInfo);
  })
  return (
    <div className={styles.card} onClick={() => navigate(`/profile/${userinfo?._id}`)} style={{cursor: "pointer"}}>
      <div className={styles.profileImage}>
        <img src={userinfo?.profilePhoto || ProfileImage} alt="Profile" />
      </div>
      <h2 className={styles.name}>
        {userinfo?.firstName} {userinfo?.lastName}
      </h2>
      <p className={styles.role}>Product designer</p>
      <p className={styles.description}>
        Passionate about creating beautiful and functional user experience.
      </p>
      <hr className={styles.separator} />
      <div className={styles.stats}>
        <div className={styles.stat}>
          <span className={styles.statNumber}>0</span>
          <span className={styles.statLabel}>Post</span>
        </div>
        <div className={styles.stat}>
          <span className={styles.statNumber}>0</span>
          <span className={styles.statLabel}>Followers</span>
        </div>
        <div className={styles.stat}>
          <span className={styles.statNumber}>0</span>
          <span className={styles.statLabel}>Following</span>
        </div>
      </div>
    </div>
  );
};

export default FeedsProfile;
