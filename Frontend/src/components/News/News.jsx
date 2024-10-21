import React from 'react';
import './css/News.css';

const News = () => {
  return (
    <div className="news">
      <img src="news_image.jpg" alt="News" />
      <h3>News Title</h3>
      <p>News description goes here. This is a short overview of the news content.</p>
      <p className="date">5th Sept, 2024</p>
      <p className="author">By Aritra Mukherjee</p>
    </div>
  );
};

export default News;
