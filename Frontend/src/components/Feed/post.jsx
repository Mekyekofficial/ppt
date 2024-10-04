import React from 'react';
import Avatar from '@mui/material/Avatar';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ShareIcon from '@mui/icons-material/Share';
import { SlOptionsVertical } from "react-icons/sl";
import './css/post.css';

const Post = () => {
  return (
    <div className="post-container">
      <div className="post-header">
        <div className="user-info">
          <Avatar alt="Alex" src="/path/to/user-avatar.png" className="avatar" />
          <span className="username">Alex</span>
        </div>
        <div className="post-title">
          <input type="text" placeholder="add Your article" className="article-input" />
        </div>
      </div>
      
      <div className="post-actions">
        <div className="action">
          <ThumbUpAltIcon />
          <span>Like</span>
        </div>
        <div className="action">
          <ChatBubbleOutlineIcon />
          <span>Comment</span>
        </div>
        <div className="action">
          <BookmarkBorderIcon />
          <span>Save</span>
        </div>
        <div className="action">
          <ShareIcon />
          <span>Share</span>
        </div>
        <div className="action">
          <SlOptionsVertical />
          <span>more</span>
        </div>
      </div>
    </div>
    
  );
};

export default Post;
