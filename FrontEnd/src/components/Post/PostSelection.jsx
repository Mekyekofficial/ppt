import React from 'react';
import styles from '../css/Post.module.css';

const PostSelection = ({ handleOptionClick }) => {
    return (
        <>
            <h2 className={styles.heading}>What do You want to Post?</h2>
            <div className={styles.options}>
                <button
                    className={`${styles.optionButton} ${styles.news}`}
                    onClick={() => handleOptionClick("News")}
                >
                    News
                </button>
                <button
                    className={`${styles.optionButton} ${styles.events}`}
                    onClick={() => handleOptionClick("Events")}
                >
                    Events
                </button>
                <button
                    className={`${styles.optionButton} ${styles.gigs}`}
                    onClick={() => handleOptionClick("Gigs")}
                >
                    Gigs
                </button>
                <button
                    className={`${styles.optionButton} ${styles.courses}`}
                    onClick={() => handleOptionClick("Courses")}
                >
                    Courses
                </button>
            </div>
        </>
    );
};

export default PostSelection;