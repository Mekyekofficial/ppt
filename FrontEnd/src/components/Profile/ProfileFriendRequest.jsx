import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../api";
import styles from "./css/ProfileFriendRequest.module.css";
import { FaUserFriends } from "react-icons/fa";
import { toast } from "react-toastify";

const ProfileFriendRequest = ({ profileOwner, isProfileOwner }) => {
  const navigate = useNavigate();
  const [visibleCount, setVisibleCount] = useState(5);
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  // 1) Fetch pendingFriends for this profileOwner
  useEffect(() => {
    if (!isProfileOwner) {
      setLoading(false);
      return;
    }

    const fetchPending = async () => {
      try {
        const res = await API.get("/profile/friend-requests", {
          params: { userId: profileOwner._id },
        });
        // console.log("Pending friend requests:", res.data);
        // res.data should be an array of User docs representing pendingFriends
        const pending = res.data.map((u) => {
          const work = u.workExperience?.[0] || {};
          return {
            _id: u._id,
            firstName: u.firstName,
            lastName: u.lastName,
            profileImage: u.profileImage || "",
            company: work.company || "",
            title: work.title || "",
          };
        });
        setRequests(pending);
        if (pending.length > 0) {
          toast.info("Friend requests available!");
        }
      } catch (err) {
        // console.error("Error loading pending requests", err);
        // toast.error("Failed to load friend requests");
      } finally {
        setLoading(false);
      }
    };

    fetchPending();
  }, [isProfileOwner, profileOwner._id]);

  const handleShowMore = () => setVisibleCount((c) => c + 3);

  // 2) Accept / Reject handlers call your backend exactly as defined
  const respond = async (friendId, accept) => {
    try {
      await API.post(
        accept ? "/profile/accept-friend" : "/profile/reject-friend",
        {
          currentUserId: profileOwner._id,
          friendId,
        }
      );
      setRequests((rs) => rs.filter((r) => r.friendId !== friendId));
      toast.success(
        accept ? "Friend request accepted!" : "Friend request rejected."
      );
    } catch (err) {
      console.error(err);
      toast.error("Could not update request");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <FaUserFriends className={styles.icon} />
        <span className={styles.title}>Friend Requests</span>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : requests.length === 0 ? (
        <p className={styles.empty}>No pending requests.</p>
      ) : (
        <>
          <ul className={styles.friendList}>
            {requests.slice(0, visibleCount).map((r) => (
              <li key={r.friendId} className={styles.friendItem}>
                <div
                  className={styles.avatar}
                  onClick={() => {
                    navigate(`/profile/${r.friendId}`);
                    window.location.reload();
                  }}
                >
                  {r.profileImage ? (
                    <img
                      src={r.profileImage}
                      alt={`${r.firstName} ${r.lastName}`}
                      className={styles.profileImage}
                    />
                  ) : (
                    <div className={styles.defaultAvatar} />
                  )}
                </div>
                <div className={styles.info}>
                  <span className={styles.name}>
                    {r.firstName} {r.lastName}
                  </span>
                  <span className={styles.role}>
                    {r.title} {r.company && `at ${r.company}`}
                  </span>
                </div>
                <div className={styles.actions}>
                  <button
                    className={styles.acceptBtn}
                    onClick={() => respond(r._id, true)}
                  >
                    Accept
                  </button>
                  <button
                    className={styles.declineBtn}
                    onClick={() => respond(r._id, false)}
                  >
                    Decline
                  </button>
                </div>
              </li>
            ))}
          </ul>

          {visibleCount < requests.length && (
            <button onClick={handleShowMore} className={styles.showMore}>
              Show More ▼
            </button>
          )}
        </>
      )}
    </div>
  );
};

export default ProfileFriendRequest;
