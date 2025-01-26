import React, { useState } from 'react';
import styles from '../css/Post.module.css';
import InsertPhotoOutlinedIcon from "@mui/icons-material/InsertPhotoOutlined";
import InsertLinkOutlinedIcon from "@mui/icons-material/InsertLinkOutlined";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";

const PostNews = () => {
    const [content, setContent] = useState('');
    const [selectedFile, setSelectedFile] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(content);
        setContent('');
    };

    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
        console.log("File selected:", e.target.files[0]);
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