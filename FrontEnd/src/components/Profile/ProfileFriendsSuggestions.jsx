import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../api";
import styles from "./css/ProfileFriendsSuggestions.module.css";
import { FaUserFriends } from "react-icons/fa";

const ProfileFriendsSuggestions = ({ user, profileOwner, isProfileOwner }) => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [visibleCount, setVisibleCount] = useState(5);
  const [friendsData, setFriendsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFriends = async () => {
      try {
        const res = await API.get("/profile/getAll");
        const processed = res.data.map((friend) => {
          const work = friend.workExperience?.[0] || {};
          return {
            id: friend._id,
            firstName: friend.firstName || "",
            lastName: friend.lastName || "",
            profileImage: friend.profileImage || "",
            company: work.company || "",
            title: work.title || "",
          };
        });
        setFriendsData(processed);
      } catch (error) {
        console.error("Error fetching friend suggestions:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFriends();
  }, []);

  const filteredFriends = friendsData.filter((friend) => {
    const fullName = `${friend.firstName} ${friend.lastName}`.toLowerCase();
    const company = friend.company.toLowerCase();
    const term = searchTerm.toLowerCase();
    return fullName.includes(term) || company.includes(term);
  });

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <FaUserFriends className={styles.icon} />
        <span className={styles.title}>Search Friends</span>
      </div>

      <input
        type="text"
        placeholder="Search by name or company..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className={styles.searchInput}
      />

      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <ul className={styles.friendList}>
            {filteredFriends.slice(0, visibleCount).map((friend) => (
              <li
                key={friend.id}
                className={styles.friendItem}
                onClick={() => { navigate(`/profile/${friend?.id}`); window.location.reload(); }}>
                <div className={styles.avatar}>
                  {friend.profileImage ? (
                    <img
                      src={friend.profileImage}
                      alt={`${friend.firstName} ${friend.lastName}`}
                      className={styles.profileImage}
                    />
                  ) : (
                    <div className={styles.defaultAvatar}></div>
                  )}
                </div>
                <div className={styles.info}>
                  <span className={styles.name}>
                    {friend.firstName} {friend.lastName}
                  </span>
                  <span className={styles.role}>
                    {friend.title} at {friend.company}
                  </span>
                </div>
              </li>
            ))}
          </ul>

          {visibleCount < filteredFriends.length && (
            <button onClick={handleShowMore} className={styles.showMore}>
              Show More ▼
            </button>
          )}
        </>
      )}
    </div>
  );
};

export default ProfileFriendsSuggestions;
