"use client";

import React, { useState, useEffect } from "react";
import styles from "./css/Post.module.css";
import {
  Plus,
  Send,
  Image as ImageIcon,
  Link as LinkIcon,
  Smile,
} from "lucide-react";
import ProfileImage from "../../../assets/profile-image.png";
import { toast } from "react-toastify";
import API from "../../../api";

const Post = () => {
  const [posts, setPosts] = useState([]);
  const [showCreatePost, setShowCreatePost] = useState(false);
  // selectedType is null until the user chooses one of the four options.
  const [selectedType, setSelectedType] = useState(null);
  const [companyId, setCompanyId] = useState("");
  const [companyInfo, setCompanyInfo] = useState({});
  const [newPost, setNewPost] = useState({
    content: "",
    image: null,
    // type will be set once the user selects a post type
    type: "",
    eventType: "",
    eventName: "",
    location: "",
    date: "",
    time: "",
  });

  useEffect(() => {
    const companyId = localStorage.getItem("company-id");
    const companyInfo = JSON.parse(localStorage.getItem("company-info"));
    setCompanyId(companyId);
    setCompanyInfo(companyInfo);

    const fetchPosts = async () => {
      try {
        const response = await API.get(
          `/ATS/get-all-posts?companyId=${companyId}`
        );
        console.log(response.data.posts);
        if (response.status === 200) {
          setPosts(response.data.posts);
        } else {
          toast.error("Failed to fetch posts");
        }
      } catch (error) {
        console.error("Error fetching posts:", error);
        toast.error("Failed to fetch posts");
      }
    };

    fetchPosts();
  }, []);

  const resetForm = () => {
    setNewPost({ title: "", content: "", image: null, type: "" });
    setSelectedType(null);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setNewPost({
        ...newPost,
        image: file,
        preview: URL.createObjectURL(file),
      });
    }
  };

  const handleFeedPost = async (e) => {
    e.preventDefault();
    console.log("Processing Feed Post...");
    if (!newPost.content.trim() && !newPost.image) {
      toast.error("Please enter content or upload a file");
      return;
    }

    const postData = new FormData();
    postData.append("content", newPost.content);
    postData.append("postOn", new Date().toISOString());
    postData.append("firstName", companyInfo.companyName || "Anonymous");
    postData.append("lastName", "");
    postData.append("profilePhoto", companyInfo.companyLogo || ProfileImage);
    postData.append("userId", companyId);

    if (newPost.image) {
      postData.append("file", newPost.image); // Use the file object directly
    }

    for (let [key, value] of postData.entries()) {
      console.log(`${key}: ${value}`);
    }

    console.log("Posting Feed...");
    try {
      const response = await API.post("/feeds/post", postData);
      if (response.status === 201) {
        toast.success("Posted successfully");
        resetForm();
        // Optionally update posts state or remove reload until backend is working
        // window.location.reload();
      } else {
        toast.error("Failed to post data");
      }
    } catch (error) {
      console.error("Error posting:", error);
      toast.error("Failed to post");
    }
  };

  const handleNewsPost = async (e) => {
    e.preventDefault();

    if (!newPost.content.trim() && !newPost.image) {
      toast.error("Please enter content or upload a file");
      return;
    }

    const postData = new FormData();
    postData.append("content", newPost.content);
    postData.append("date", new Date().toISOString());
    postData.append("firstName", companyInfo.companyName || "Anonymous");
    postData.append("lastName", "");
    postData.append("userPhoto", companyInfo.companyLogo || ProfileImage);
    postData.append("userId", companyId);
    if (newPost.image) {
      postData.append("newsPhoto", newPost.image);
    } else {
      console.warn("No file selected!");
      toast.warn("No file selected!");
    }

    try {
      const response = await API.post("/posts/news", postData);
      toast.success("News posted successfully!");
      resetForm();
    } catch (error) {
      console.error("Error posting news:", error);
      toast.error("Failed to post news!");
    }
  };

  const handleEventPost = async (e) => {
    e.preventDefault();

    if (
      !newPost.eventType ||
      !newPost.eventName ||
      !newPost.location ||
      !newPost.date ||
      !newPost.time
    ) {
      toast.error("Please fill in all fields");
      return;
    }

    const postData = new FormData();
    postData.append("eventType", newPost.eventType);
    postData.append("eventName", newPost.eventName);
    postData.append("location", newPost.location);
    postData.append("date", newPost.date);
    postData.append("time", newPost.time);
    postData.append("firstName", companyInfo.companyName || "Anonymous");
    postData.append("lastName", "");
    postData.append("userPhoto", companyInfo.companyLogo || ProfileImage);
    if (newPost.image) {
      postData.append("eventImage", newPost.image);
    }
    postData.append("userId", companyId);

    try {
      const response = await API.post("/posts/event", postData);
      toast.success("Event posted successfully!");
      resetForm();
    } catch (error) {
      console.error("Error posting event:", error);
      toast.error("Failed to post event!");
    }
  };

  const renderPostTypeSelection = () => (
    <div className={`${styles.card} ${styles.createPostCard}`}>
      <div className={styles.cardHeader}>
        <h2 className={styles.cardTitle}>Select Post Type</h2>
        <button
          className={styles.closeButton}
          onClick={() => {
            setShowCreatePost(false);
            setSelectedType(null);
          }}>
          ×
        </button>
      </div>
      <div className={styles.cardContent}>
        <div className={styles.radioGroup}>
          <button
            type="button"
            className={styles.submitButton}
            onClick={() => {
              setSelectedType("Feed");
              setNewPost({ ...newPost, type: "Feed" });
            }}>
            Feed Post
          </button>
          <button
            type="button"
            className={styles.submitButton}
            onClick={() => {
              setSelectedType("News");
              setNewPost({ ...newPost, type: "News" });
            }}>
            News Post
          </button>
          <button
            type="button"
            className={styles.submitButton}
            onClick={() => {
              setSelectedType("Event");
              setNewPost({ ...newPost, type: "Event" });
            }}>
            Event Post
          </button>
          <button
            type="button"
            className={styles.submitButton}
            onClick={() => {
              setSelectedType("Course");
              setNewPost({ ...newPost, type: "Course" });
            }}>
            Course Post
          </button>
        </div>
      </div>
    </div>
  );

  const renderPostForm = () => (
    <div className={`${styles.card} ${styles.createPostCard}`}>
      <div className={styles.cardHeader}>
        <h2 className={styles.cardTitle}>Create {newPost.type} Post</h2>
        <button
          className={styles.closeButton}
          onClick={() => {
            setShowCreatePost(false);
            setSelectedType(null);
          }}>
          ×
        </button>
      </div>
      <div className={styles.cardContent}>
        <form
          className={styles.form}
          onSubmit={
            newPost.type === "Feed"
              ? handleFeedPost
              : newPost.type === "News"
              ? handleNewsPost
              : newPost.type === "Event"
              ? handleEventPost
              : newPost.type === "Course"
              ? null
              : null
          }>
          {newPost.type === "Feed" && (
            <div className={styles.formGroup}>
              <textarea
                className={styles.textarea}
                placeholder="Share your thought..."
                value={newPost.content}
                onChange={(e) =>
                  setNewPost({ ...newPost, content: e.target.value })
                }
                required
              />
            </div>
          )}

          {newPost.type === "News" && (
            <div className={styles.formGroup}>
              <textarea
                className={styles.textarea}
                placeholder="Share News..."
                value={newPost.content}
                onChange={(e) =>
                  setNewPost({ ...newPost, content: e.target.value })
                }
                required
              />
            </div>
          )}

          {newPost.type === "Event" && (
            <>
              <div className={styles.formGroup}>
                <select
                  className={styles.eventTypeDropdown}
                  name="eventType"
                  value={newPost.eventType}
                  onChange={(e) =>
                    setNewPost({ ...newPost, eventType: e.target.value })
                  }
                  required>
                  <option value="" disabled>
                    Select Event Type
                  </option>
                  <option value="local">Local Events</option>
                  <option value="seminar">Seminars</option>
                  <option value="cultural">Cultural Events</option>
                </select>
              </div>

              <div className={styles.formGroup}>
                <input
                  type="text"
                  name="eventName"
                  value={newPost.eventName}
                  placeholder="Enter Event Name"
                  className={styles.textInput}
                  onChange={(e) =>
                    setNewPost({ ...newPost, eventName: e.target.value })
                  }
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <input
                  type="text"
                  name="location"
                  value={newPost.location}
                  placeholder="Enter Location"
                  className={styles.textInput}
                  onChange={(e) =>
                    setNewPost({ ...newPost, location: e.target.value })
                  }
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <input
                  type="date"
                  name="date"
                  value={newPost.date}
                  className={styles.textInput}
                  onChange={(e) =>
                    setNewPost({ ...newPost, date: e.target.value })
                  }
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <input
                  type="time"
                  name="time"
                  value={newPost.time}
                  className={styles.textInput}
                  onChange={(e) =>
                    setNewPost({ ...newPost, time: e.target.value })
                  }
                  required
                />
              </div>
            </>
          )}

          {/* If you want different fields for different post types, you can add conditional rendering here */}
          {newPost.image && (
            <div className={styles.imagePreview}>
              <img src={newPost.preview} alt="Preview" />
              <button
                type="button"
                className={styles.removeImage}
                onClick={() => setNewPost({ ...newPost, image: null })}>
                ×
              </button>
            </div>
          )}
          <div className={styles.postActions}>
            <label className={styles.uploadButton}>
              <ImageIcon size={20} />
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className={styles.fileInput}
              />
            </label>
            <button type="button" className={styles.actionButton}>
              <LinkIcon size={20} />
            </button>
            <button type="button" className={styles.actionButton}>
              <Smile size={20} />
            </button>
            <button className={styles.submitButton}>
              <Send size={20} />
              Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.pageTitle}>Posts</h1>
        <button
          className={styles.createPostButton}
          onClick={() => {
            setShowCreatePost(true);
            setSelectedType(null);
          }}>
          <Plus size={20} />
          Create Post
        </button>
      </div>

      {showCreatePost &&
        // If no post type is selected, render the selection options; otherwise, render the form
        (!selectedType ? renderPostTypeSelection() : renderPostForm())}

      <div className={styles.postsGrid}>
        {posts.length > 0
          ? posts.map((post) => (
              <div key={post.id} className={styles.postCard}>
                <div className={styles.postHeader}>
                  <div className={styles.authorInfo}>
                    <img
                      src={post.author.profilePhoto}
                      alt="profilePhoto"
                      className={styles.authorAvatar}
                    />
                    <div>
                      <h3 className={styles.authorName}>
                        {post.author.firstName}
                      </h3>
                      <span className={styles.postDate}>
                        {post.createdAt &&
                          new Date(post.createdAt).toDateString()}
                        {post.date && new Date(post.date).toDateString()}{" "}
                      </span>
                    </div>
                  </div>
                  <div className={styles.postTypeBadge}>{post.type} Post</div>
                </div>
                <div className={styles.postContent}>
                  <p className={styles.postText}>
                    {post.type === "Feed" && post.content}
                    {post.type === "News" && post.content}
                    {post.type === "Event" && (
                      <>
                        <h3>{post.eventName}</h3>
                        <p>{post.eventType}</p>
                        <p>{post.location}</p>
                        <p>{post.date}</p>
                        <p>{post.time}</p>
                      </>
                    )}
                  </p>
                  {(post.type === "Feed" && post.image) ||
                  (post.type === "News" && post.newsPhoto) ||
                  (post.type === "Event" && post.eventImage) ? (
                    <div className={styles.postImage}>
                      {post.type === "Feed" && (
                        <img src={post.image} alt="Post" />
                      )}
                      {post.type === "News" && (
                        <img src={post.newsPhoto} alt="Post" />
                      )}
                      {post.type === "Event" && (
                        <img src={post.eventImage} alt="Post" />
                      )}
                    </div>
                  ) : null}
                </div>
                {post.type === "Feed" || post.type === "News" ? (
                  <div className={styles.postFooter}>
                    <button className={styles.interactionButton}>
                      <span>👍</span>
                      <span>{post.likes}</span>
                    </button>
                    <button className={styles.interactionButton}>
                      <span>💬</span>
                      <span>{post.comments}</span>
                    </button>
                  </div>
                ) : null}
              </div>
            ))
          : null}
      </div>
    </div>
  );
};

export default Post;
