import React from 'react';
import { IconButton } from '@mui/material';
import { PiHandsClappingDuotone } from "react-icons/pi";
import PlayIcon from '@mui/icons-material/PlayArrow';
import BookmarkIcon from '@mui/icons-material/BookmarkBorder';
import ShareIcon from '@mui/icons-material/Share';
import { FiMessageCircle } from "react-icons/fi";
import { IoIosMore } from "react-icons/io";
import styles from './css/NewsItem.module.css';

const NewsItem = () => {
  return (
    <div className={styles.newsItem}>
      <div className={styles.newsContent}>
        <img 
          className={styles.newsImage} 
          src="https://via.placeholder.com/150" 
          alt="Apple's iPhone security update" 
        />
        <div className={styles.newsDetails}>
          <h3 className={styles.newsTitle}>
            Apple’s iPhone security update guarantee outdone by Samsung
          </h3>
          <p className={styles.newsText}>
            Samsung has recently introduced a more extensive security update guarantee for its devices, outpacing Apple’s iPhone security update policy. While Apple typically offers five years of software updates for its iPhones, Samsung has committed to providing up to four years of major Android updates and five years of security patches for many of its Galaxy devices...
            Samsung has recently introduced a more extensive security update guarantee for its devices, outpacing Apple’s iPhone security update policy. While Apple typically offers five years of software updates for its iPhones, Samsung has committed to providing up to four years of major Android updates and five years of security patches for many of its Galaxy devices...
          </p>
          <p className={styles.newsInfo}>
            <span className={styles.date}>22nd Sept</span>
            <span className={styles.author}>By Aritra Mukherjee</span>
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
          <PlayIcon />
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
