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
  }, [community]);

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
    formData.append('date', new Date().toISOString());
    formData.append('firstName', userInfo.firstName);
    formData.append('lastName', userInfo.lastName);
    formData.append('profilePhoto', userInfo.profilePhoto);
    formData.append('_id', userInfo._id);
    formData.append('communityId', id);

    try {
      const response = await API.post("/comunity/post/create", formData,
        {headers: {"Content-Type": "multipart/form-data"}}
      );
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
                <img src={post.image} alt="image" className={styles.postImage}/>
              </div>
            ))) || <p>No posts yet</p>}
        </div>
      </div>
    </div>
  );
};

export default Community;
