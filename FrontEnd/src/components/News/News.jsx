import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./css/News.module.css";
import ProfileImage from "../../assets/profile-image.png";
import API from "../../api";

const News = ({ news }) => {
  const navigate = useNavigate();
  const [liked, setLiked] = useState(false);
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("user-info")) || {};
    setUserInfo(userInfo);
    if (news?.likeBy?.includes(userInfo._id)) {
      setLiked(true);
    }
    const fetchComments = async () => {
      try {
        const response = await API.get(
          `posts/news/getComments?newsId=${news?._id}`
        );
        setComments(response.data.comments);
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };
    fetchComments();
  }, []);

  const toggleLike = () => {
    setLiked(!liked);
    const saveLike = async () => {
      try {
        console.log("Liking post...");
        console.log(news._id, userInfo._id);
        const response = await API.post("posts/news/like", {
          newsId: news._id,
          userId: userInfo._id,
        });
        console.log("Like response:", response.data);
      } catch (error) {
        console.error("Error liking post:", error);
      }
    };
    saveLike();
  };

  const [shared, setShared] = useState(false);
  const handleShare = async () => {
    const currentUrl = window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Check this out!",
          url: currentUrl,
        });
        setShared(true); // Indicate that the link was shared
      } catch (error) {
        console.error("Error sharing:", error);
      }
    } else {
      alert("Share functionality is not supported in this browser.");
    }
  };

  const [isExpanded, setIsExpanded] = useState(false);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const handleAddComment = () => {
    console.log("Adding comment:", comment);
    if (comment.trim()) {
      const newComment = {
        userName: `${userInfo.firstName} ${userInfo.lastName}`,
        comment,
      };
      setComments([...comments, newComment]);
      setComment("");

      const saveComment = async () => {
        try {
          console.log("Adding comment...");
          console.log(news._id, userInfo._id, comment);
          const response = await API.post("/posts/news/commentPost", {
            newsId: news._id,
            userId: userInfo._id,
            userName: `${userInfo.firstName} ${userInfo.lastName}`,
            comment,
          });
          console.log("Comment response:", response.data);
        } catch (error) {
          console.error("Error adding comment:", error);
        }
      };
      saveComment();
    }
  };
  return (
    <div className={styles.newsCard}>
      {/* Header */}
      <div className={styles.header}>
        <div className={styles.profile}>
          <img
            className={styles.avatar}
            src={news?.author?.profilePhoto}
            alt="avatar"
            onClick={() => navigate(`/profile/${news?.author?._id}`)}
            style={{ cursor: "pointer" }}
          />
          <div>
            <div className={styles.newsSource}>
              {news?.author?.firstName || news?.author?.lastName ? (
                <span>{news?.author?.firstName} {news?.author?.lastName}</span>
              ) : (
                <span>{news?.author}</span>
              )}
            </div>
            <div className={styles.timeAgo}>
              {news?.date ? (
                <span>{new Date(news?.date).toLocaleDateString()} at{" "} {new Date(news?.date).toLocaleTimeString()}</span>
              ) : (
                <span>{new Date(news?.published_at).toLocaleDateString()} at{" "} {new Date(news?.published_at).toLocaleTimeString()}</span>
              )}
            </div>
          </div>
        </div>
        <svg
          className={styles.moreIcon}
          viewBox="0 0 514 470"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M155.271 234.997C155.271 253.925 138.491 269.268 117.792 269.268C97.0925 269.268 80.3125 253.925 80.3125 234.997C80.3125 216.07 97.0925 200.727 117.792 200.727C138.491 200.727 155.271 216.07 155.271 234.997Z"
            fill="#292556"
          />
          <path
            d="M294.479 234.997C294.479 253.925 277.699 269.268 257 269.268C236.301 269.268 219.521 253.925 219.521 234.997C219.521 216.07 236.301 200.727 257 200.727C277.699 200.727 294.479 216.07 294.479 234.997Z"
            fill="#292556"
          />
          <path
            d="M433.688 234.997C433.688 253.925 416.908 269.268 396.208 269.268C375.509 269.268 358.729 253.925 358.729 234.997C358.729 216.07 375.509 200.727 396.208 200.727C416.908 200.727 433.688 216.07 433.688 234.997Z"
            fill="#292556"
          />
        </svg>
      </div>

      {/* Content */}
      <div className={styles.content}>
        <h3 className={styles.title}>{news?.title}</h3>
        <p className={styles.description}>{news?.content}{news?.description}</p>
      </div>

      {/* Placeholder for Image/Video */}
      {news?.newsPhoto ? (
          <img className={styles.media} src={news.newsPhoto} alt="newsPhoto" />
        ) : (
          <img className={styles.media} src={news.image} alt="newsPhoto" />
      )}

      <div className={styles.separator}></div>

      {/* Footer */}
      <div className={styles.footer}>
        <div
          className={styles.action}
          onClick={toggleLike}
          style={{ cursor: "pointer" }}>
          <svg
            className={styles.icon}
            viewBox="0 0 432 467"
            fill="none"
            fillRule="evenodd"
            clipRule="evenodd"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M101.232 86.0805C71.37 100.83 49.5 135.933 49.5 177.788C49.5 220.538 65.7 253.5 88.884 281.753C108.018 305.026 131.166 324.328 153.738 343.125C159.114 347.6 164.424 352.063 169.668 356.512C179.136 364.588 187.578 371.651 195.732 376.807C203.886 381.964 210.42 384.299 216 384.299C221.58 384.299 228.132 381.964 236.268 376.807C244.422 371.651 252.864 364.588 262.332 356.512C267.576 352.05 272.886 347.594 278.262 343.145C300.834 324.309 323.982 305.026 343.116 281.753C366.318 253.5 382.5 220.538 382.5 177.788C382.5 135.952 360.63 100.83 330.768 86.0805C301.752 71.7397 262.764 75.5341 225.72 117.155C224.461 118.568 222.951 119.691 221.281 120.459C219.611 121.226 217.815 121.621 216 121.621C214.185 121.621 212.389 121.226 210.719 120.459C209.049 119.691 207.539 118.568 206.28 117.155C169.236 75.5341 130.248 71.7397 101.232 86.0805ZM216 86.781C174.384 46.5022 127.782 40.8593 90 59.5198C50.148 79.2701 22.5 125.036 22.5 177.807C22.5 229.663 42.48 269.242 68.706 301.153C89.694 326.702 115.38 348.087 138.078 366.961C143.238 371.242 148.194 375.406 152.946 379.454C162.18 387.315 172.08 395.682 182.106 402.025C192.132 408.369 203.58 413.506 216 413.506C228.42 413.506 239.868 408.349 249.894 402.025C259.938 395.682 269.82 387.315 279.054 379.454C283.806 375.406 288.762 371.242 293.922 366.961C316.602 348.087 342.306 326.683 363.294 301.153C389.52 269.242 409.5 229.663 409.5 177.807C409.5 125.036 381.87 79.2701 342 59.5588C304.218 40.8788 257.616 46.5217 216 86.781Z"
              fill={liked ? "red" : "black"}
            />
          </svg>
          <span>{liked ? "Liked" : "Like"}</span>
        </div>
        <div
          className={styles.action}
          onClick={() => setIsExpanded(!isExpanded)}>
          <svg
            className={styles.icon}
            viewBox="0 0 732 491"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink">
            <rect width="732" height="491" fill="url(#pattern0_2544_3382)" />
            <defs>
              <pattern
                id="pattern0_2544_3382"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1">
                <use
                  xlink:href="#image0_2544_3382"
                  transform="matrix(0.0021097 0 0 0.00314522 0 -0.245418)"
                />
              </pattern>
              <image
                id="image0_2544_3382"
                width="474"
                height="474"
                xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAdoAAAHaCAYAAACn5IivAAAAAXNSR0IArs4c6QAAIABJREFUeF7snQd8U+X3/+/NTtqkadOSDlpooZRZFMuQIV+GgjIURJQpU2RPZckG2VOWgAgy5AuIIENRAQFZioNRZqHUFrrbdKTZuf/vib3++/UnKfhtpM393Ncrr44kT+55Pyf3c8/znOc8LIMDBEAABEAABEDAYwRYj7WMhkEABEAABEAABBgILZwABEAABEAABDxIAELrQbhoGgRAAARAAAQgtPABEAABEAABEPAgAQitB+GiaRAAARAAARCA0MIHQAAEQAAEQMCDBCC0HoSLpkEABEAABEAAQgsfAAEQAAEQAAEPEoDQehAumgYBEAABEAABCC18AARAAARAAAQ8SABC60G4aBoEQAAEQAAEILTwARAAARAAARDwIAEIrQfhomkQAAEQAAEQgNDCB0AABEAABEDAgwQgtB6Ei6ZBAARAAARAAEILHwABEAABEAABDxKA0HoQLpoGARAAARAAAQgtfAAEQAAEQAAEPEgAQutBuGgaBEAABEAABCC08AEQAAEQAAEQ8CABCK0H4aJpEAABEAABEIDQwgdAAARAAARAwIMEILQehIumQQAEQAAEQABCCx8AARAAARAAAQ8SgNB6EC6aBgEQAAEQAAEILXwABEAABEAABDxIAELrQbhoGgRAAARAAAQgtPABEAABEAABEPAgAQitB+GiaRAAARAAARCA0MIHQAAEQAAEQMCDBCC0HoSLpkEABEAABEAAQgsfAAEQAAEQAAEPEoDQehAumgYBEAABEAABCC18AARAAARAAAQ8SABC60G4aBoEQAAEQAAEILTwARAAARAAARDwIAEIrQfhomkQAAEQAAEQgNDCB0AABEAABEDAgwQgtB6Ei6ZBAARAAARAAEILHwABEAABEAABDxKA0HoQLpoGARAAARAAAQgtfAAEQAAEQAAEPEgAQutBuGgaBEAABEAABCC08AEQAAEQAAEQ8CABCK0H4aJpEAABEAABEIDQwgdAAARAAARAwIMEILQehIumQQAEQAAEQABCCx8AARAAARAAAQ8SgNB6EC6aBgEQAAEQAAEILXwABEAABEAABDxIAELrQbhoGgRAAARAAAQgtPABEAABEAABEPAgAQitB+GiaRAAARAAARCA0MIHQAAEQAAEQMCDBCC0HoSLpkEABEAABEAAQgsfAAEQAAEQAAEPEoDQehAumgYBEAABEAABCC18AARAAARAAAQ8SABC60G4aBoEQAAEQAAEILTwARAAARAAARDwIAEIrQfhomkQAAEQAAEQgNDCB0AABEAABEDAgwQgtB6Ei6ZBAARAAARAAEILHwABEAABEAABDxKA0HoQLpoGARAAARAAAQgtfAAEQAAEQAAEPEgAQutBuGgaBEAABEAABCC08AEQAAEQAAEQ8CABCK0H4aJpEAABEAABEIDQwgdAAARAAARAwIMEILQehIumQQAEQAAEQABCCx8AARAAARAAAQ8SgNB6EC6aBgEQAAEQAAEILXwABEAABEAABDxIAELrQbhoGgRAAARAAAQgtPABEAABEAABEPAgAQitB+GiaRAAARAAARCA0MIHQAAEQAAEQMCDBCC0HoSLpkEABEAABEAAQgsfAAEQAAEQAAEPEoDQehAumgYBEAABEAABCC18AARAAARAAAQ8SABC60G4aBoEQAAEQAAEILTwARAAARAAARDwIAEIrQfhomkQAAEQAAEQgNDCB0AABEAABEDAgwQgtB6Ei6ZBAARAAARAAEILHwABEAABEAABDxKA0HoQLpoGARAAARAAAQgtfAAEQAAEQAAEPEgAQutBuGgaBEAABEAABCC08AEQAAEQAAEQ8CABCK0H4aJpEAABEAABEIDQwgdAAARAAARAwIMEILQehIumQQAEQAAEQABCCx8AARAAARAAAQ8SgNB6EC6aBgEQAAEQAAEILXwABEAABEAABDxIAELrQbhoGgRAAARAAAQgtPABEAABEAABEPAgAQitB+GiaRAAARAAARCA0MIHQAAEQAAEQMCDBCC0HoSLpkEABEAABEAAQgsfAAEQAAEQAAEPEoDQehAumgYBEAABEAABCC18AARAAARAAAQ8SABC60G4aBoEQAAEQAAEILTwARAAARAAARDwIAEIrQfhomkQAAEQAAEQgNDCB0AABEAABEDAgwQgtB6Ei6ZBAARAAARAAEILHwABEAABEAABDxKA0HoQLpoGARAAARAAAQgtfAAEQAAEQAAEPEgAQutBuGgaBEAABEAABCC08AEQAAEQAAEQ8CABCK0H4aJpEAABEAABEIDQwgdAAARAAARAwIMEILQehIumQQAEQAAEQABCCx8AARAA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"
              />
            </defs>
          </svg>
          <span>Comment</span>
        </div>
        <div className={styles.action}>
          <svg
            className={styles.icon}
            viewBox="0 0 532 427"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M326.994 263.898C363.497 244.368 381.748 234.603 384.883 220.313C385.866 215.832 385.866 211.191 384.884 206.71C381.75 192.419 363.5 182.653 326.998 163.119L239.282 116.178C206.194 98.4709 189.65 89.6174 176.524 94.1647C172.385 95.5987 168.587 97.8736 165.37 100.846C155.167 110.274 155.167 129.038 155.167 166.567L155.167 260.438C155.167 297.963 155.167 316.726 165.369 326.153C168.586 329.126 172.383 331.401 176.522 332.835C189.647 337.383 206.191 328.532 239.278 310.829L326.994 263.898Z"
              stroke="#292556"
              stroke-width="17.5"
              stroke-linejoin="round"
            />
          </svg>
          <span>Play</span>
        </div>
        <div className={styles.action} onClick={handleShare}>
          <svg
            className={styles.icon}
            viewBox="0 0 526 414"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink">
            <rect width="526" height="414" fill="url(#pattern0_2282_5576)" />
            <defs>
              <pattern
                id="pattern0_2282_5576"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1">
                <use
                  xlink:href="#image0_2282_5576"
                  transform="scale(0.0163973 0.0208333)"
                />
              </pattern>
              <image
                id="image0_2282_5576"
                width="61"
                height="48"
                xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD0AAAAwCAYAAACi/HI3AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAAU0SURBVGhD7Zl9TNVlFMe/tIkJGOlsa5GCKDo1lBeVV5EEpRsvJkiSJJsgpGWNpSimRpqONoJFsWabtQpnZkphiGKBQIBACpqiKEpkEkb4AiSvsfo9h+cnL7uXe9Hfc9Eun+3unN95/mDf3/k95znnwehfCRgYj3BrUAyLNhSGRRsKw6INhWHRhoJBin6g2tDGxmbU1v2JlpZWzHaw5VHlGTLRd+604ETpaZSfqUDlxWpUXalBU/PffBWwnjgeCTtiMcl6Ao8oh15FX6r6FQUnTqFQ+p0+ewFdXV18RT1WEyywf89HMB4xgkeUQahoOZsFRSclsSfRcOMWX+lhymQr2M2cjik2EzFV+k22tkRRSRnWbYqn9e1bohHg60W+Uigu+mJVtZTJMhJZdrqCR3swNTWBy1w7uDo5wMNtDsaNG8tX+rI8/E2cv1CFdW9EYMVLL/CoMty3aJZNlhlZqKZsurvOhpuLIxztnuHRgZnvsxyNTc2I37YeqkXzeVQZ7kn0zVuNyM0vxrGcAhRLn29/TE1GwXmuPWXSzdlBYzY1ca32OvyWRpL/9ZfJ0mdvTb5S6CyavfXvM3OQnVskVdzzPNoD25PuUiYHk01NpGf8iLidyRhpbIySvIM8qhw6iT589DgSknfj9u0mHgHMzExpb7q7SJ/tPWRzIDZvS6K/yV5iStI7PKocWkWn7ErF7i/28yfAy9MVS/wX0h4VhbdfGNUGEUWMobUNPZSZTfa5hR7IydyDxPhNQgWz6i8XQzdnR7JKo1V0/V83yAYt9sHYMebki4SdAownpO3CujIRaBUtt4Gnys+RFU1h8SmybD+LQqto5zl2ZHd9+hXC18Qi96cSeh4s6s7v/rS0tt19uW5SgRSFVtEx0ZGICAsmn3VY0Rt2YMWq9dLxld2nmmuCNS9hkTHwDVpFQ8VAlJ48wz3QySAKraIZr68JoyaBVW7G2YqL2PruB/BUhdILSEvPQquUpf6ws33l6o345Vwl2ts7YGRkxFfUU1TcvZ/tZk6jdlUUg+7I6q7XY9+BDHwnNRBs/pUxGfUo/FQLEByogs0kK+raotZuxuXq32g9JTFOa9V/PjACf9TV47WolxG5chmPKs89taEy7BPfn3aEMt+bWbbTpBfShJqrtRg50hgfvv82nGbP4qvq+f1aHfyDo8jf+1kSpk+zIV8E9yVa5tLlGnyTlkldFCtGMqOk7KckxenUlrKv573ET2BuPhp5R/fyqBh02tPaYFPU5g2vIvtwKln2zLAc/5TOfXgh389s5BSNIqJlWGaDl6iwNXYtPVdeqlY7nPSno7MTJXxac3WyJysSRUXL2M6YCssJFuSnHTpGdiDKyitIOENkiysjRDQjZKkv2awf8tUeZ71hlxAMNp6OeVx8qytMtL90fLELPZZBNocPhNx6ihow+iNMNJu3F3m7k39Qal40wQaaK9VXyXd3fchFMwIDfMiycZFd8qkjv/Bnsuwl3e+Ni64IFe1gN+NuQTugIdt5BaVk2X2avhAqmrEsqLugZWbl4k5LK/kyrB8vLi0n33OeE1l9IFz0Yj9vPDbaDG1t7Tjw7REe7Sa/sBSdnf/Q+e7p8T8Sza6Dl7/oT37qvnTKroxc1X285in+r5uBEC6aERYaSOdvQ8NNJH/8OcVKpNlZLmKhIQFk9YUiA4cuZBw5ji3bk/hTDwsXuCNh50b+pB/0kmmGn+pZvBIe0udy4GmLJ/FWzGr+pD/0lunesDO7vaMT9rOm84h+GRLRQ43ePu8HCQMUDfwHGmsMx98k1EMAAAAASUVORK5CYII="
              />
            </defs>
          </svg>
          <span>Share</span>
        </div>
        <div className={styles.actionSource} onClick={() => window.open(news?.url, "_blank", "noopener,noreferrer")}>
          <svg
            className={styles.icon}
            viewBox="0 0 303 303"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_2549_3392)">
              <path
                d="M151.5 292.177C229.196 292.177 292.179 229.195 292.179 151.499C292.179 73.8043 229.196 10.8203 151.5 10.8203C73.8055 10.8203 10.8215 73.8043 10.8215 151.499C10.8215 229.195 73.8055 292.177 151.5 292.177Z"
                stroke="#292556"
                stroke-width="20"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10.8215 151.5H292.179"
                stroke="#292556"
                stroke-width="20"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M205.607 151.499C202.95 202.944 184.001 252.21 151.5 292.177C119 252.21 100.051 202.944 97.3931 151.499C100.051 100.054 119 50.7871 151.5 10.8203C184.001 50.7871 202.95 100.054 205.607 151.499Z"
                stroke="#292556"
                stroke-width="20"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_2549_3392">
                <rect width="303" height="303" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
      {isExpanded && (
                <div className={styles.commentSection}>
                  <div className={styles.commentInput}>
                    <img 
                      src={userInfo?.profilePhoto || ProfileImage} 
                      alt="Profile" 
                      className={styles.commentProfilePic}
                    />
                    <div className={styles.inputWrapper}>
                      <textarea
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        placeholder="Write a comment..."
                        className={styles.commentTextarea}
                      />
                      <button 
                        onClick={handleAddComment}
                        className={styles.commentButton}
                        disabled={!comment.trim()}
                      >
                        Post
                      </button>
                    </div>
                  </div>
      
                  <div className={styles.commentsList}>
                    {comments.map((c, index) => (
                      <div key={index} className={styles.commentItem}>
                        <img 
                          src={c.profilePhoto || ProfileImage} 
                          alt={c.userName} 
                          className={styles.commentUserPic}
                        />
                        <div className={styles.commentContent}>
                          <span className={styles.commentUserName}>{c.userName}</span>
                          <p className={styles.commentText}>{c.comment}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
    </div>
  );
};

export default News;
