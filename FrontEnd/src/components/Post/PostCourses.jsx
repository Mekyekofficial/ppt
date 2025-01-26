import React, { useState } from 'react';
import styles from '../css/Post.module.css';
import VideoCallOutlinedIcon from "@mui/icons-material/VideoCallOutlined";
import LinkOutlinedIcon from "@mui/icons-material/LinkOutlined";


const PostCourses = () => {
    const [charCount, setCharCount] = useState(0);

    const handleTextareaChange = (e) => {
        setCharCount(e.target.value.length);
    };

    return (
        <div className={styles.postInputContainer}>
            <button
                className={`${styles.optionButton} ${styles['courses']}`}
            >
                Courses
            </button>
            <textarea
                className={styles.textarea}
                placeholder="Enter Details of the Course"
                maxLength="3000"
                onChange={handleTextareaChange}
            ></textarea>
            <div className={styles.footer}>
                <div className={styles.icons}>
                    <VideoCallOutlinedIcon />
                    <LinkOutlinedIcon />
                </div>
                <div className={styles.charCount}>
                    {charCount}/3000
                </div>
                {/* <SentimentSatisfiedAltIcon /> */}
                <button className={styles.postButton}>Post</button>
            </div>
        </div>
    );
};

export default PostCourses;