import React from 'react';
import './css/NewsRecommendation.css';

const NewsRecommendation = () => {
  return (
    <div className="news-recommendation">
      <h3>Recommended Topics</h3>
      <div className="topics">
        <span>Technology</span>
        <span>Web</span>
        <span>Travel</span>
        <span>Finance</span>
        <span>India</span>
      </div>
    </div>
  );
};

export default NewsRecommendation;
