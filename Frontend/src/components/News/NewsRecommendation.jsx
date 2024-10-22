import React from 'react';
import NewsRecommendationStyles from './css/NewsRecommendation.module.css';

const NewsRecommendation = () => {
  return (
    <div className={NewsRecommendationStyles["news-recommendation"]}>
      <h3>Recommended Topics</h3>
      <div className={NewsRecommendationStyles.topics}>
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
