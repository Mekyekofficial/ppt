import React from 'react';
import Avatar from '@mui/material/Avatar';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ShareIcon from '@mui/icons-material/Share';
import { SlOptionsVertical } from "react-icons/sl";
import PostStyles from './css/post.module.css';

const Post = () => {
  return (
    <div className={PostStyles["post-container"]}>
      <div className={PostStyles["post-header"]}>
        <div className={PostStyles["user-info"]}>
          <Avatar alt="Alex" src="/path/to/user-avatar.png" className="avatar" />
          <span className={PostStyles.username}>Alex</span>
        </div>
        <div className={PostStyles["post-title"]}>
          <input type="text" placeholder="add Your article" className={PostStyles["article-input"]} />
        </div>
      </div>
      
      <div className={PostStyles["post-actions"]}>
        <div className={PostStyles["action"]}>
          <ThumbUpAltIcon />
          <span>Like</span>
        </div>
        <div className={PostStyles["action"]}>
          <ChatBubbleOutlineIcon />
          <span>Comment</span>
        </div>
        <div className={PostStyles["action"]}>
          <BookmarkBorderIcon />
          <span>Save</span>
        </div>
        <div className={PostStyles["action"]}>
          <ShareIcon />
          <span>Share</span>
        </div>
        <div className={PostStyles["action"]}>
          <SlOptionsVertical />
          <span>more</span>
        </div>
      </div>
    </div>
    
  );
};

export default Post;
