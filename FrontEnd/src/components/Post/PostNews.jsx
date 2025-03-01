import React, { useState, useEffect } from 'react';
import styles from '../css/Post.module.css';
import InsertPhotoOutlinedIcon from "@mui/icons-material/InsertPhotoOutlined";
import InsertLinkOutlinedIcon from "@mui/icons-material/InsertLinkOutlined";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import API from '../../api';
import { toast } from 'react-toastify';

const PostNews = () => {
    const [userinfo, setUserinfo] = useState(null);
    const [imageLoaded, setImageLoaded] = useState(false);

    useEffect(() => {
        const user = localStorage.getItem("user-info");
        const userinfo = JSON.parse(user);
        setUserinfo(userinfo);
    }, []);

    useEffect(() => {
        if (userinfo?.profilePhoto) {
            const img = new Image();
            img.src = userinfo.profilePhoto;
            img.onload = () => setImageLoaded(true);
        }
    }, [userinfo?.profilePhoto]);

    const [content, setContent] = useState('');
    const [selectedFile, setSelectedFile] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (!userinfo) {
            console.error("Userinfo is not loaded!");
            return;
        }
    
        if (!content) {
            console.error("Content is empty!");
            return;
        }
    
        const formData = new FormData();
        formData.append("firstName", userinfo?.firstName || "");
        formData.append("lastName", userinfo?.lastName || "");
        if (userinfo?.profilePhoto) {
            formData.append("userPhoto", userinfo.profilePhoto);
        }
        formData.append("userId", userinfo._id);
        formData.append("content", content);
        formData.append("date", new Date().toISOString());
    
        if (selectedFile) {
            // console.log("Selected file:", selectedFile);
            formData.append("newsPhoto", selectedFile);
        } else {
            console.warn("No file selected!");
            toast.warn("No file selected!");
        }
    
        try {
            const response = await API.post("/posts/news", formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });
            toast.success("News posted successfully!");
            setContent("");
            setSelectedFile(null);
        } catch (error) {
            console.error("Error posting news:", error);
            toast.error("Failed to post news!");
        }
    };
    

    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
        toast.info("File selected successfully!");
    };

    return (
        <div className={styles.postInputContainer}>
            <button 
                type="button"
                className={`${styles.optionButton} ${styles["news"]}`}
            >
                News
            </button>
            <form onSubmit={handleSubmit}>
                <textarea
                    className={styles.textarea}
                    placeholder="Enter Your Post Here"
                    maxLength="3000"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                ></textarea>
                <div className={styles.footer}>
                    <div className={styles.icons}>
                        {/* Hidden file input */}
                        <input
                            type="file"
                            id="fileInput"
                            style={{ display: "none" }}
                            onChange={handleFileChange}
                        />
                        {/* Icon triggers file input */}
                        <InsertPhotoOutlinedIcon
                            className={styles.icon}
                            onClick={() => document.getElementById("fileInput").click()}
                        />
                        <InsertLinkOutlinedIcon className={styles.icon} />
                    </div>
                    <div className={styles.charCount}>
                        {content.length}/3000
                    </div>
                    <button className={styles.postButton} type="submit">
                        Post
                    </button>
                </div>
            </form>
        </div>
    );
};

export default PostNews;