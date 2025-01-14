import React from 'react';
import newsImg from '../../assets/news.png';
import { FiSearch } from "react-icons/fi";
import NewsHeaderStyles from './css/NewsHeader.module.css';

const NewsHeader = () => {
  return (
    <div className={NewsHeaderStyles["news-header"]}>
      <div className={NewsHeaderStyles.banner}>
        <div className={NewsHeaderStyles["search-bar"]}>
        <button><FiSearch /></button>
          <input type="text" placeholder="Search News" />
        </div>
        <img src={newsImg} alt="newsImg" />
        <h1>Daily News</h1>
        <p>Get updated with Everyday News</p>
      </div>
      <button className={NewsHeaderStyles["post-news"]}>Post a News</button>
    </div>
  );
};

export default NewsHeader;
