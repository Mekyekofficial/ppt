import React from 'react';
import NewsHeaderStyles from './css/NewsHeader.module.css';

const NewsHeader = () => {
  return (
    <div className={NewsHeaderStyles["news-header"]}>
      <div className={NewsHeaderStyles.banner}>
        <h1>Daily News</h1>
        <p>Get updated with Everyday News</p>
      </div>
      <button className={NewsHeaderStyles["post-news"]}>Post a News</button>
    </div>
  );
};

export default NewsHeader;
