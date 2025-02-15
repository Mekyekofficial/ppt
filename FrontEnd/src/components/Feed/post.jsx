import React, { useState } from "react";
import styles from "./css/post.module.css";
import ProfileImage from "../../assets/profile-image.png";
import { FaEllipsisH, FaRegComment, FaRegBookmark, FaRegShareSquare } from "react-icons/fa";
import { IoSparklesOutline } from "react-icons/io5";

const Post = () => {
  const [liked, setLiked] = useState(false);
    const toggleLike = () => {
      setLiked(!liked);
    };
  
    const [shared, setShared] = useState(false);
    const handleShare = async () => {
      const currentUrl = window.location.href;
      if (navigator.share) {
        try {
          await navigator.share({
            title: 'Check this out!',
            url: currentUrl,
          });
          setShared(true); // Indicate that the link was shared
        } catch (error) {
          console.error('Error sharing:', error);
        }
      } else {
        alert('Share functionality is not supported in this browser.');
      }
    };

    const [isExpanded, setIsExpanded] = useState(false);
    const [comment, setComment] = useState("");
    const [comments, setComments] = useState([]);
    const handleAddComment = () => {
      if (comment.trim()) {
        setComments([...comments, comment]);
        setComment("");
      }
    };
  return (
    <div className={styles.post}>
      {/* Post Header */}
      <div className={styles.header}>
        <div className={styles.profileSection}>
          <img src={ProfileImage} alt="Profile" className={styles.profileImage} />
          <div className={styles.userInfo}>
            <span className={styles.userName}>Sarah Wilson</span>
            <span className={styles.postTime}>Posted 2h ago</span>
          </div>
        </div>
        <svg className={styles.optionsIcon} viewBox="0 0 514 470" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M155.271 234.997C155.271 253.925 138.491 269.268 117.792 269.268C97.0925 269.268 80.3125 253.925 80.3125 234.997C80.3125 216.07 97.0925 200.727 117.792 200.727C138.491 200.727 155.271 216.07 155.271 234.997Z" fill="#292556"/>
          <path d="M294.479 234.997C294.479 253.925 277.699 269.268 257 269.268C236.301 269.268 219.521 253.925 219.521 234.997C219.521 216.07 236.301 200.727 257 200.727C277.699 200.727 294.479 216.07 294.479 234.997Z" fill="#292556"/>
          <path d="M433.688 234.997C433.688 253.925 416.908 269.268 396.208 269.268C375.509 269.268 358.729 253.925 358.729 234.997C358.729 216.07 375.509 200.727 396.208 200.727C416.908 200.727 433.688 216.07 433.688 234.997Z" fill="#292556"/>
        </svg>

      </div>

      {/* Post Content */}
      <div className={styles.content}>
        <p className={styles.text}>
          Just finished working on a new project! Can’t wait to share more details with the community.
        </p>
        <div className={styles.postImage}></div>
      </div>

      {/* Post Actions */}
      <div className={styles.actions}>
        <div className={styles.action} onClick={toggleLike} style={{ cursor: "pointer" }}>
          <svg className={styles.icon} viewBox="0 0 565 554" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M82.3984 311.625C169.839 290.19 213.559 247.321 235.419 161.583C257.279 247.321 301 290.19 388.44 311.625C301 333.06 257.279 375.929 235.419 461.667C213.559 375.929 169.839 333.06 82.3984 311.625Z" fill="#292556" fill-opacity="0.18"/>
            <path d="M317.815 150.042C364.898 138.5 388.44 115.417 400.211 69.25C411.982 115.417 435.523 138.5 482.607 150.042C435.523 161.583 411.982 184.667 400.211 230.833C388.44 184.667 364.898 161.583 317.815 150.042Z" fill="#292556" fill-opacity="0.18"/>
            <path d="M329.586 444.354C353.128 438.583 364.898 427.042 370.784 403.958C376.669 427.042 388.44 438.583 411.982 444.354C388.44 450.125 376.669 461.667 370.784 484.75C364.898 461.667 353.128 450.125 329.586 444.354Z" fill="#292556" fill-opacity="0.18"/>
            <path d="M82.3984 311.625C169.839 290.19 213.559 247.321 235.419 161.583C257.279 247.321 301 290.19 388.44 311.625C301 333.06 257.279 375.929 235.419 461.667C213.559 375.929 169.839 333.06 82.3984 311.625Z" stroke="#292556" stroke-width="27.5" stroke-linejoin="round"/>
            <path d="M317.815 150.042C364.898 138.5 388.44 115.417 400.211 69.25C411.982 115.417 435.523 138.5 482.607 150.042C435.523 161.583 411.982 184.667 400.211 230.833C388.44 184.667 364.898 161.583 317.815 150.042Z" stroke="#292556" stroke-width="27.5" stroke-linejoin="round"/>
            <path d="M329.586 444.354C353.128 438.583 364.898 427.042 370.784 403.958C376.669 427.042 388.44 438.583 411.982 444.354C388.44 450.125 376.669 461.667 370.784 484.75C364.898 461.667 353.128 450.125 329.586 444.354Z" stroke="#292556" stroke-width="27.5" stroke-linejoin="round"/>
          </svg>

          <span>{liked ? "Liked" : "Like"}</span>
        </div>
        <div className={styles.action} onClick={() => setIsExpanded(!isExpanded)}>
          <svg className={styles.icon} viewBox="0 0 464 484" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M274.917 342.831H232.213C232.073 342.831 231.935 342.865 231.811 342.929L116 403.331L135.333 342.831C92.6233 342.831 58 308.207 58 265.497V211.747C58 139.352 116.688 80.6641 189.083 80.6641H274.917C347.312 80.6641 406 139.352 406 211.747C406 284.143 347.312 342.831 274.917 342.831Z" fill="#292556" fill-opacity="0.18" stroke="#292556" stroke-width="22" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span>Comment</span>
        </div>
        {isExpanded && (
        <div className={styles.commentSection}>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Write a comment..."
          />
          <button onClick={handleAddComment}>Add Comment</button>

          <div className={styles.commentsList}>
            {comments.map((c, index) => (
              <p key={index}>{c}</p>
            ))}
          </div>
        </div>
      )}

        <div className={styles.action} onClick={handleShare}>
          <svg className={styles.icon} viewBox="0 0 448 428" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M56 214C56 179.528 83.9449 151.583 118.417 151.583H124.25C158.722 151.583 186.667 179.528 186.667 214C186.667 248.472 158.722 276.417 124.25 276.417H118.417C83.9448 276.417 56 248.472 56 214Z" fill="#292556" fill-opacity="0.18"/>
            <path d="M280 107C280 77.4528 303.953 53.5 333.5 53.5H338.5C368.047 53.5 392 77.4528 392 107C392 136.547 368.047 160.5 338.5 160.5H333.5C303.953 160.5 280 136.547 280 107Z" fill="#292556" fill-opacity="0.18"/>
            <path d="M280 321C280 291.453 303.953 267.5 333.5 267.5H338.5C368.047 267.5 392 291.453 392 321C392 350.547 368.047 374.5 338.5 374.5H333.5C303.953 374.5 280 350.547 280 321Z" fill="#292556" fill-opacity="0.18"/>
            <path d="M177.333 178.333L280 124.833M177.333 249.667L280 303.167M333.5 374.5H338.5C368.047 374.5 392 350.547 392 321V321C392 291.453 368.047 267.5 338.5 267.5H333.5C303.953 267.5 280 291.453 280 321V321C280 350.547 303.953 374.5 333.5 374.5ZM333.5 160.5H338.5C368.047 160.5 392 136.547 392 107V107C392 77.4528 368.047 53.5 338.5 53.5H333.5C303.953 53.5 280 77.4528 280 107V107C280 136.547 303.953 160.5 333.5 160.5ZM118.417 276.417H124.25C128.351 276.417 130.402 276.417 132.133 276.313C161.436 274.558 184.808 251.187 186.563 221.883C186.667 220.152 186.667 218.101 186.667 214V214C186.667 209.899 186.667 207.848 186.563 206.117C184.808 176.814 161.436 153.442 132.133 151.687C130.402 151.583 128.351 151.583 124.25 151.583H118.417C114.316 151.583 112.265 151.583 110.533 151.687C81.2302 153.442 57.8583 176.814 56.1037 206.117C56 207.848 56 209.899 56 214V214C56 218.101 56 220.152 56.1037 221.883C57.8583 251.187 81.2302 274.558 110.533 276.313C112.265 276.417 114.316 276.417 118.417 276.417Z" stroke="#292556" stroke-width="25.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span>Share</span>
        </div>
        <div className={styles.actionSave}>
          <svg className={styles.icon} viewBox="0 0 412 375" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M85.8359 97.375C85.8359 74.8766 85.8359 63.6274 91.5654 55.7414C93.4158 53.1946 95.6555 50.9549 98.2024 49.1045C106.088 43.375 117.338 43.375 139.836 43.375H272.169C294.668 43.375 305.917 43.375 313.803 49.1045C316.35 50.9549 318.589 53.1946 320.44 55.7414C326.169 63.6274 326.169 74.8766 326.169 97.375V358.339C326.169 362.124 326.169 364.016 325.269 364.609C324.992 364.791 324.674 364.902 324.344 364.931C323.27 365.025 322.096 363.541 319.747 360.573L208.825 220.441C207.677 218.99 207.103 218.265 206.361 218.13C206.124 218.087 205.881 218.087 205.644 218.13C204.902 218.265 204.328 218.99 203.18 220.441L92.2587 360.573C89.9096 363.541 88.735 365.025 87.661 364.931C87.331 364.902 87.0133 364.791 86.7366 364.609C85.8359 364.016 85.8359 362.124 85.8359 358.339V97.375Z" stroke="#292556" stroke-width="19.5" stroke-linejoin="round"/>
          </svg>
          <span>Save</span>
        </div>
      </div>
    </div>
  );
};

export default Post;
