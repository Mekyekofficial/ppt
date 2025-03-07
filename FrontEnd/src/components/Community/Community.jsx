import React from "react";
import styles from "./css/Community.module.css";

const Community = () => {
  const posts = [
    {
      id: 1,
      communityName: "Community Name",
      author: "Author Name",
      time: "2hrs ago",
      content:
        "Just finished working on a new project! Can't wait to share more details with the community.",
      imageUrl: "", // Replace with actual image URL if available
    },
    {
      id: 2,
      communityName: "Community Name",
      author: "Author Name",
      time: "2hrs ago",
      content:
        "Just finished working on a new project! Can't wait to share more details with the community.",
      imageUrl: "", // Replace with actual image URL if available
    },
  ];
  return (
    <div className={styles.communityCard}>
      <div className={styles.banner}>
        <div className={styles.profileSection}>
          <div className={styles.profileImage}></div>
          <div className={styles.textSection}>
            <h2 className={styles.title}>Artificial Intelligence</h2>
            <p className={styles.members}>
              200k members <span className={styles.joined}>Joined</span>
            </p>
          </div>
        </div>
        <p className={styles.description}>
          An AI community page is an online platform where individuals
          passionate about artificial intelligence come together to share
          knowledge, resources, and discuss trends and developments in the
          field. It serves as a hub for AI enthusiasts, researchers, developers,
          and professionals to collaborate, ask questions, exchange ideas, and
          stay updated on the latest advancements in AI technology.
        </p>
      </div>

      <div className={styles.communityPosts}>
        <h2 className={styles.title}>Posts</h2>
        <div className={styles.postsContainer}>
          {posts.map((post) => (
            <div className={styles.postCard}>
              <div className={styles.postHeader}>
                <div className={styles.profileImage}></div>
                <div className={styles.postInfo}>
                  <h3 className={styles.communityName}>{post.communityName}</h3>
                  <p className={styles.postDetails}>Posted by {post.author}</p>
                  <p className={styles.time}>{post.time}</p>
                </div>
              </div>
              <p className={styles.content}>{post.content}</p>
              <div className={styles.postImage}></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Community;
