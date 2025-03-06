'use client';

import React, { useState } from "react";
import styles from "./css/Post.module.css";
import { Plus, Send, Image as ImageIcon, Link as LinkIcon, Smile } from 'lucide-react';

const Post = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: "John Doe",
      title: "Project Update",
      content: "Just completed the latest sprint with amazing results!",
      date: "2025-03-15",
      likes: 24,
      comments: 8,
      image: null
    },
    {
      id: 2,
      author: "Jane Smith",
      title: "Team Meeting Summary",
      content: "Great discussion about upcoming features and improvements.",
      date: "2025-03-14",
      likes: 18,
      comments: 5,
      image: null
    },
    {
      id: 3,
      author: "Mike Johnson",
      title: "New Feature Launch",
      content: "Excited to announce the launch of our new dashboard feature!",
      date: "2025-03-13",
      likes: 42,
      comments: 12,
      image: null
    }
  ]);

  const [showCreatePost, setShowCreatePost] = useState(false);
  const [newPost, setNewPost] = useState({
    title: "",
    content: "",
    image: null
  });

  const handleCreatePost = (e) => {
    e.preventDefault();
    const post = {
      id: posts.length + 1,
      author: "Current User",
      title: newPost.title,
      content: newPost.content,
      date: new Date().toISOString().split('T')[0],
      likes: 0,
      comments: 0,
      image: newPost.image
    };
    setPosts([post, ...posts]);
    setNewPost({ title: "", content: "", image: null });
    setShowCreatePost(false);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewPost({ ...newPost, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.pageTitle}>Posts</h1>
        <button 
          className={styles.createPostButton}
          onClick={() => setShowCreatePost(!showCreatePost)}
        >
          <Plus size={20} />
          Create Post
        </button>
      </div>

      {showCreatePost && (
        <div className={`${styles.card} ${styles.createPostCard}`}>
          <div className={styles.cardHeader}>
            <h2 className={styles.cardTitle}>Create New Post</h2>
            <button 
              className={styles.closeButton}
              onClick={() => setShowCreatePost(false)}
            >
              ×
            </button>
          </div>
          <div className={styles.cardContent}>
            <form onSubmit={handleCreatePost} className={styles.form}>
              <div className={styles.formGroup}>
                <input
                  type="text"
                  className={styles.input}
                  placeholder="What's on your mind?"
                  value={newPost.title}
                  onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <textarea
                  className={styles.textarea}
                  placeholder="Share your thoughts..."
                  value={newPost.content}
                  onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
                  required
                />
              </div>
              {newPost.image && (
                <div className={styles.imagePreview}>
                  <img src={newPost.image} alt="Preview" />
                  <button
                    type="button"
                    className={styles.removeImage}
                    onClick={() => setNewPost({ ...newPost, image: null })}
                  >
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
                <button type="submit" className={styles.submitButton}>
                  <Send size={20} />
                  Post
                </button>
              </div>
            </form>
          </div>
        </div>
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