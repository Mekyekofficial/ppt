import React from 'react';
import { IconButton } from '@mui/material';
import { PiHandsClappingDuotone } from "react-icons/pi";
import { IoPlayCircleOutline } from "react-icons/io5";
import BookmarkIcon from '@mui/icons-material/BookmarkBorder';
import ShareIcon from '@mui/icons-material/Share';
import { FiMessageCircle } from "react-icons/fi";
import { IoIosMore } from "react-icons/io";
import styles from './css/NewsItem.module.css';

const NewsItem = ({ news }) => {
  return (
    <div className={styles.newsItem}>
      <div className={styles.newsContent}>
        <img 
          className={styles.newsImage} 
          src={news.newsPhoto || "https://via.placeholder.com/150"} 
          alt="News"
        />
        <div className={styles.newsDetails}>
          <h3 className={styles.newsTitle}>
            {news.content.slice(0, 50)}...
            <IconButton className={`${styles.actionButton} ${styles.play}`}>
              <IoPlayCircleOutline />
            </IconButton>
          </h3>
          <p className={styles.newsText}>
            {news.content}
          </p>
          <p className={styles.newsInfo}>
            <span className={styles.date}>
              {new Date(news.date).toLocaleDateString()}
            </span>
            <span className={styles.author}>
              By {news.author.firstName} {news.author.lastName}
            </span>
          </p>
        </div>
      </div>

      <div className={styles.actionBar}>
        <IconButton className={styles.actionButton}>
          <PiHandsClappingDuotone />
        </IconButton>
        <IconButton className={styles.actionButton}>
          <FiMessageCircle />
        </IconButton>
        <IconButton className={styles.actionButton}>
          <BookmarkIcon />
        </IconButton>
        <IconButton className={styles.actionButton}>
          <ShareIcon />
        </IconButton>
        <IconButton className={styles.pagination}>
          <IoIosMore />
        </IconButton>
      </div>
    </div>
  );
};

export default NewsItem;
