import React from 'react';
import './css/NewsHeader.css';

const NewsHeader = () => {
  return (
    <div className="news-header">
      <div className="banner">
        <h1>Daily News</h1>
        <p>Get updated with Everyday News</p>
      </div>
      <button className="post-news">Post a News</button>
    </div>
  );
};

export default NewsHeader;
