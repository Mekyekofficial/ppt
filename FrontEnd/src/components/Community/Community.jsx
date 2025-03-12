import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./css/Community.module.css";
import { use } from "react";
import API from "../../api";
import { toast } from "react-toastify";

const Community = () => {
  const [loading, setLoading] = useState(true);
  const [community, setCommunity] = useState({});
  const [userInfo, setUserInfo] = useState({});
  const [role, setRole] = useState("");
  const [postForm, setPostForm] = useState(false);
  const [postContent, setPostContent] = useState("");
  const [postImage, setPostImage] = useState(null);
  const [liked, setLiked] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [saved, setSaved] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    const fetchCommunity = async () => {
      try {
        const response = await API.get(`/comunity/getById?id=${id}`);
        if (response.status === 200) {
          setCommunity(response.data);
        } else {
          console.error("Error fetching community:", response.data);
        }
      } catch (error) {
        console.error("Error fetching community:", error);
      }
    };

    fetchCommunity();
  }, [id]);

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("user-info"));
    setUserInfo(userInfo);

    if (
      community?.members?.find((member) => member?.userId === userInfo._id)
        ?.userId
    ) {
      setRole(
        community?.members.find((member) => member.userId === userInfo._id)
          ?.role
      );
      setLoading(false);
    }

    if (community?.posts) {
      community.posts.forEach((post) => {
        if (post.likeBy.includes(userInfo._id)) {
          setLiked(true);
        }
      });
    }
  }, [ community]);

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setPostImage(e.target.files[0]);
    }
  };

  const handlePostSubmit = async () => {
    const formData = new FormData();
    formData.append("content", postContent);
    if (postImage) {
      formData.append("image", postImage);
    }
    formData.append("date", new Date().toISOString());
    formData.append("firstName", userInfo.firstName);
    formData.append("lastName", userInfo.lastName);
    formData.append("profilePhoto", userInfo.profilePhoto);
    formData.append("_id", userInfo._id);
    formData.append("communityId", id);

    try {
      const response = await API.post("/comunity/post/create", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      if (response.status === 201) {
        toast.success("Post submitted successfully");
        setPostForm(false);
        setPostContent("");
        setPostImage(null);
        window.location.reload();
      } else {
        console.error("Error submitting post:", response.data);
        toast.error("Error submitting post");
      }
    } catch (error) {
      console.error("Error submitting post:", error);
      toast.error("Error submitting post");
    }
  };

  const toggleLike = async (postId) => {
    try {
      const response = await API.post("/comunity/post/like", {
        communityId: community._id,
        userId: userInfo._id,
        postId: postId,
      });
      if (response.status === 200) {
        setLiked(!liked);
      } else {
        console.error("Error liking post:", response.data);
      }
    } catch (error) {
      console.error("Error liking post:", error);
    }
  }

  const fetchComments = async (postId) => {
    try {
      const response = await API.get(
        `/comunity/post/getComments?postId=${postId}&communityId=${community._id}`
      );
      if (response.status === 200) {
        setComments(response.data);
      } else {
        console.error("Error fetching comments:", response.data);
      }
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  }

  const handleAddComment = async (postId) => {
    try {
      const response = await API.post("/comunity/post/commentPost", {
        communityId: community._id,
        postId: postId,
        userId: userInfo._id,
        userName: `${userInfo.firstName} ${userInfo.lastName}`,
        comment,
      });
      if (response.status === 200) {
        setComment("");
        setComments([...comments, response.data]);
      } else {
        console.error("Error adding comment:", response.data);
      }
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  }

  const handleShare = async () => {
    try {
      const response = await API.post("/comunity/post/share", {
        postId: community._id,
        userId: userInfo._id,
      });
      if (response.status === 200) {
        toast.success("Post shared successfully");
      } else {
        console.error("Error sharing post:", response.data);
        toast.error("Error sharing post");
      }
    } catch (error) {
      console.error("Error sharing post:", error);
      toast.error("Error sharing post");
    }
  }

  const toggleSaved = async () => {
    setSaved(!saved);
  }

  return (
    <div className={styles.communityCard}>
      <div className={styles.banner}>
        <div className={styles.profileSection}>
          <img
            src={community?.profilePhoto}
            alt="profilePhoto"
            className={styles.profileImage}
          />
          <div className={styles.textSection}>
            <h2 className={styles.title}>{community?.name}</h2>
            <p className={styles.members}>
              {community?.members?.length} members
              <span className={styles.joined}>
                {role === "owner" && "You are Owner"}
                {role === "admin" && "You are Admin"}
                {role === "member" && "You are Member"}
                {!role && (
                  <button className={styles.joinButton}>
                    Join this community
                  </button>
                )}
              </span>
            </p>
          </div>
          {role === "owner" || role === "admin" || role === "member" ? (
            <button
              className={styles.createPost}
              onClick={() => setPostForm(true)}>
              Create a post
            </button>
          ) : (
            ""
          )}
        </div>
        <p className={styles.description}>{community?.description}</p>
      </div>

      {postForm && (
        <div className={styles.postForm}>
          <textarea
            className={styles.postInput}
            placeholder="What's on your mind?"
            value={postContent}
            onChange={(e) => setPostContent(e.target.value)}></textarea>

          <input
            type="file"
            accept="image/*"
            className={styles.imageInput}
            onChange={(e) => handleImageChange(e)}
          />

          <button className={styles.submitButton} onClick={handlePostSubmit}>
            Post
          </button>
        </div>
      )}

      <div className={styles.communityPosts}>
        <h2 className={styles.title}>Posts</h2>
        <div className={styles.postsContainer}>
          {(community?.posts?.length > 0 &&
            community?.posts?.map((post) => (
              <div className={styles.postCard}>
                <div className={styles.postHeader}>
                  <div className={styles.profileImage}></div>
                  <div className={styles.postInfo}>
                    <h3 className={styles.communityName}>
                      {post.communityName}
                    </h3>
                    <p className={styles.postDetails}>
                      Posted by {post.author.firstName} {post.author.lastName}
                    </p>
                    <p className={styles.time}>{post.time}</p>
                  </div>
                </div>
                <p className={styles.content}>{post.content}</p>
                <img
                  src={post.image}
                  alt="image"
                  className={styles.postImage}
                />
                <hr />
                {/* Post Actions */}
                <div className={styles.actions}>
                  <div
                    className={styles.action}
                    onClick={() => toggleLike(post._id)}
                    style={{ cursor: "pointer" }}>
                    <svg
                      className={styles.icon}
                      viewBox="0 0 565 554"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M82.3984 311.625C169.839 290.19 213.559 247.321 235.419 161.583C257.279 247.321 301 290.19 388.44 311.625C301 333.06 257.279 375.929 235.419 461.667C213.559 375.929 169.839 333.06 82.3984 311.625Z"
                        fill="#292556"
                        fill-opacity="0.18"
                      />
                      <path
                        d="M317.815 150.042C364.898 138.5 388.44 115.417 400.211 69.25C411.982 115.417 435.523 138.5 482.607 150.042C435.523 161.583 411.982 184.667 400.211 230.833C388.44 184.667 364.898 161.583 317.815 150.042Z"
                        fill="#292556"
                        fill-opacity="0.18"
                      />
                      <path
                        d="M329.586 444.354C353.128 438.583 364.898 427.042 370.784 403.958C376.669 427.042 388.44 438.583 411.982 444.354C388.44 450.125 376.669 461.667 370.784 484.75C364.898 461.667 353.128 450.125 329.586 444.354Z"
                        fill="#292556"
                        fill-opacity="0.18"
                      />
                      <path
                        d="M82.3984 311.625C169.839 290.19 213.559 247.321 235.419 161.583C257.279 247.321 301 290.19 388.44 311.625C301 333.06 257.279 375.929 235.419 461.667C213.559 375.929 169.839 333.06 82.3984 311.625Z"
                        stroke="#292556"
                        stroke-width="27.5"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M317.815 150.042C364.898 138.5 388.44 115.417 400.211 69.25C411.982 115.417 435.523 138.5 482.607 150.042C435.523 161.583 411.982 184.667 400.211 230.833C388.44 184.667 364.898 161.583 317.815 150.042Z"
                        stroke="#292556"
                        stroke-width="27.5"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M329.586 444.354C353.128 438.583 364.898 427.042 370.784 403.958C376.669 427.042 388.44 438.583 411.982 444.354C388.44 450.125 376.669 461.667 370.784 484.75C364.898 461.667 353.128 450.125 329.586 444.354Z"
                        stroke="#292556"
                        stroke-width="27.5"
                        stroke-linejoin="round"
                      />
                    </svg>

                    <span>{liked ? "Liked" : "Like"}</span>
                  </div>
                  <div
                    className={styles.action}
                    onClick={
                      isExpanded
                        ? () => setIsExpanded(false)
                        : () => {
                            setIsExpanded(true);
                            fetchComments(post._id);
                          }
                    }>
                    <svg
                      className={styles.icon}
                      viewBox="0 0 464 484"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M274.917 342.831H232.213C232.073 342.831 231.935 342.865 231.811 342.929L116 403.331L135.333 342.831C92.6233 342.831 58 308.207 58 265.497V211.747C58 139.352 116.688 80.6641 189.083 80.6641H274.917C347.312 80.6641 406 139.352 406 211.747C406 284.143 347.312 342.831 274.917 342.831Z"
                        fill="#292556"
                        fill-opacity="0.18"
                        stroke="#292556"
                        stroke-width="22"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
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
                      <button onClick={()=>handleAddComment(post._id)}>Add Comment</button>

                      <div className={styles.commentsList}>
                        {post.comments.map((c, index) => (
                          <p key={index}>
                            {c.userName} : {c.comment}
                          </p>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className={styles.action} onClick={handleShare}>
                    <svg
                      className={styles.icon}
                      viewBox="0 0 448 428"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M56 214C56 179.528 83.9449 151.583 118.417 151.583H124.25C158.722 151.583 186.667 179.528 186.667 214C186.667 248.472 158.722 276.417 124.25 276.417H118.417C83.9448 276.417 56 248.472 56 214Z"
                        fill="#292556"
                        fill-opacity="0.18"
                      />
                      <path
                        d="M280 107C280 77.4528 303.953 53.5 333.5 53.5H338.5C368.047 53.5 392 77.4528 392 107C392 136.547 368.047 160.5 338.5 160.5H333.5C303.953 160.5 280 136.547 280 107Z"
                        fill="#292556"
                        fill-opacity="0.18"
                      />
                      <path
                        d="M280 321C280 291.453 303.953 267.5 333.5 267.5H338.5C368.047 267.5 392 291.453 392 321C392 350.547 368.047 374.5 338.5 374.5H333.5C303.953 374.5 280 350.547 280 321Z"
                        fill="#292556"
                        fill-opacity="0.18"
                      />
                      <path
                        d="M177.333 178.333L280 124.833M177.333 249.667L280 303.167M333.5 374.5H338.5C368.047 374.5 392 350.547 392 321V321C392 291.453 368.047 267.5 338.5 267.5H333.5C303.953 267.5 280 291.453 280 321V321C280 350.547 303.953 374.5 333.5 374.5ZM333.5 160.5H338.5C368.047 160.5 392 136.547 392 107V107C392 77.4528 368.047 53.5 338.5 53.5H333.5C303.953 53.5 280 77.4528 280 107V107C280 136.547 303.953 160.5 333.5 160.5ZM118.417 276.417H124.25C128.351 276.417 130.402 276.417 132.133 276.313C161.436 274.558 184.808 251.187 186.563 221.883C186.667 220.152 186.667 218.101 186.667 214V214C186.667 209.899 186.667 207.848 186.563 206.117C184.808 176.814 161.436 153.442 132.133 151.687C130.402 151.583 128.351 151.583 124.25 151.583H118.417C114.316 151.583 112.265 151.583 110.533 151.687C81.2302 153.442 57.8583 176.814 56.1037 206.117C56 207.848 56 209.899 56 214V214C56 218.101 56 220.152 56.1037 221.883C57.8583 251.187 81.2302 274.558 110.533 276.313C112.265 276.417 114.316 276.417 118.417 276.417Z"
                        stroke="#292556"
                        stroke-width="25.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <span>Share</span>
                  </div>
                  <div className={styles.actionSave} onClick={toggleSaved}>
                    <svg
                      className={styles.icon}
                      viewBox="0 0 412 375"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M85.8359 97.375C85.8359 74.8766 85.8359 63.6274 91.5654 55.7414C93.4158 53.1946 95.6555 50.9549 98.2024 49.1045C106.088 43.375 117.338 43.375 139.836 43.375H272.169C294.668 43.375 305.917 43.375 313.803 49.1045C316.35 50.9549 318.589 53.1946 320.44 55.7414C326.169 63.6274 326.169 74.8766 326.169 97.375V358.339C326.169 362.124 326.169 364.016 325.269 364.609C324.992 364.791 324.674 364.902 324.344 364.931C323.27 365.025 322.096 363.541 319.747 360.573L208.825 220.441C207.677 218.99 207.103 218.265 206.361 218.13C206.124 218.087 205.881 218.087 205.644 218.13C204.902 218.265 204.328 218.99 203.18 220.441L92.2587 360.573C89.9096 363.541 88.735 365.025 87.661 364.931C87.331 364.902 87.0133 364.791 86.7366 364.609C85.8359 364.016 85.8359 362.124 85.8359 358.339V97.375Z"
                        stroke="#292556"
                        stroke-width="19.5"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <span>{saved ? "Saved" : "Save"}</span>
                  </div>
                </div>
              </div>
            ))) || <p>No posts yet</p>}
        </div>
      </div>
    </div>
  );
};

export default Community;
