import React, { useState, useEffect } from "react";
import API from "../../api";               // axios instance
import styles from "./css/ProfileFriends.module.css";
import { FaUsers } from "react-icons/fa";
import DefaultAvatar from "../../assets/user-avatar-profile.png";

const ProfileFriends = ({ user }) => {
  const [friends, setFriends] = useState([]);
  const [visibleCount, setVisibleCount] = useState(5);
  const [loading, setLoading] = useState(true);
  console.log("user", user);

  useEffect(() => {
    if (!user?._id) return;
  
    const fetchFriends = async () => {
      try {
        const res = await API.get("/profile/friends", {
          params: { userId: user._id },
        });
        setFriends(res.data);
      } catch (err) {
        console.error("Failed to load friends", err);
      } finally {
        setLoading(false);
      }
    };
  
    fetchFriends();
  }, [user?._id]);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <FaUsers className={styles.icon} />
        <span>Friends</span>
      </div>

      {loading ? (
        <div className={styles.loading}>Loading...</div>
      ) : friends?.length === 0 ? (
        <div className={styles.noFriends}>No friends found</div>
      ) : (
        <ul className={styles.friendsList}>
          {friends.slice(0, visibleCount).map((friend) => (
            <li key={friend?._id} className={styles.friendItem}>
              <img
                src={friend.profileImage || DefaultAvatar}
                alt={`${friend.firstName} ${friend.lastName}`}
                className={styles.avatar}
              />
              <span className={styles.name}>
                {friend.firstName} {friend.lastName}
              </span>
            </li>
          ))}
        </ul>
      )}

      {visibleCount < friends.length && (
        <button
          className={styles.showMore}
          onClick={() => setVisibleCount((c) => c + 5)}
        >
          Show More
          <svg
            viewBox="0 0 227 227"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M66.2109 94.5833L113.503 141.875L160.794 94.5833"
              stroke="black"
              strokeWidth="22.67"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      )}
    </div>
  );
};

export default ProfileFriends;
