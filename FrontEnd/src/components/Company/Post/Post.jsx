'use client';

import React, { useState, useEffect } from "react";
import styles from "./css/Post.module.css";
import { Plus, Send, Image as ImageIcon, Link as LinkIcon, Smile } from 'lucide-react';
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
    title: "",
    content: "",
    image: null,
    // type will be set once the user selects a post type
    type: ""
  });

  useEffect(() => {
    const companyId = localStorage.getItem("company-id");
    const companyInfo = JSON.parse(localStorage.getItem("company-info"));
    setCompanyId(companyId);
    setCompanyInfo(companyInfo);
  }, []);


  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await API.get("/posts/feeds");
        if (response.status === 200) {
          setPosts(response.data);
        } else {
          toast.error("Failed to fetch posts");
        }
      } catch (error) {
        console.error("Error fetching posts:", error);
        toast.error("Failed to fetch posts");
      }
    };

    // fetchPosts();
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
        preview: URL.createObjectURL(file)
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

  const renderPostTypeSelection = () => (
    <div className={`${styles.card} ${styles.createPostCard}`}>
      <div className={styles.cardHeader}>
        <h2 className={styles.cardTitle}>Select Post Type</h2>
        <button className={styles.closeButton} onClick={() => { setShowCreatePost(false); setSelectedType(null); }}>
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
            }}
          >
            Feed Post
          </button>
          <button
            type="button"
            className={styles.submitButton}
            onClick={() => {
              setSelectedType("News");
              setNewPost({ ...newPost, type: "News" });
            }}
          >
            News Post
          </button>
          <button
            type="button"
            className={styles.submitButton}
            onClick={() => {
              setSelectedType("Event");
              setNewPost({ ...newPost, type: "Event" });
            }}
          >
            Event Post
          </button>
          <button
            type="button"
            className={styles.submitButton}
            onClick={() => {
              setSelectedType("Course");
              setNewPost({ ...newPost, type: "Course" });
            }}
          >
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
        <button className={styles.closeButton} onClick={() => { setShowCreatePost(false); setSelectedType(null); }}>
          ×
        </button>
      </div>
      <div className={styles.cardContent}>
        <form 
          className={styles.form}
          onSubmit={
            newPost.type === "Feed" ? handleFeedPost : 
            newPost.type === "News" ? handleNewsPost : 
            newPost.type === "Event" ? null : 
            newPost.type === "Course" ? null : 
            null
          }
        >
          <div className={styles.formGroup}>
            {newPost.type !== "Feed" && newPost.type !== "News" && (
              <input
              type="text"
              className={styles.input}
              placeholder="What's on your mind?"
              value={newPost.title}
              onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
              required
            />
            )}
          </div>
          <div className={styles.formGroup}>
            {newPost.type === "News" && (
              <textarea
              className={styles.textarea}
              placeholder="Share News..."
              value={newPost.content}
              onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
              required
            />
            )}
          </div>
          {/* If you want different fields for different post types, you can add conditional rendering here */}
          {newPost.image && (
            <div className={styles.imagePreview}>
              <img src={newPost.preview} alt="Preview" />
              <button type="button" className={styles.removeImage} onClick={() => setNewPost({ ...newPost, image: null })}>
                ×
              </button>
            </div>
          )}
          <div className={styles.postActions}>
            <label className={styles.uploadButton}>
              <ImageIcon size={20} />
              <input type="file" accept="image/*" onChange={handleImageUpload} className={styles.fileInput} />
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
        <button className={styles.createPostButton} onClick={() => { setShowCreatePost(true); setSelectedType(null); }}>
          <Plus size={20} />
          Create Post
        </button>
      </div>

      {showCreatePost && (
        // If no post type is selected, render the selection options; otherwise, render the form
        !selectedType ? renderPostTypeSelection() : renderPostForm()
      )}

      <div className={styles.postsGrid}>
        {posts.map((post) => (
          <div key={post.id} className={styles.postCard}>
            <div className={styles.postHeader}>
              <div className={styles.authorInfo}>
                <div className={styles.authorAvatar}>
                  {post.author[0]}
                </div>
                <div>
                  <h3 className={styles.authorName}>{post.author}</h3>
                  <span className={styles.postDate}>{post.date}</span>
                </div>
              </div>
              <div className={styles.postTypeBadge}>
                {post.type} Post
              </div>
            </div>
            <div className={styles.postContent}>
              <h3 className={styles.postTitle}>{post.title}</h3>
              <p className={styles.postText}>{post.content}</p>
              {post.image && (
                <div className={styles.postImage}>
                  <img src={post.image} alt="Post content" />
                </div>
              )}
            </div>
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default Post;
