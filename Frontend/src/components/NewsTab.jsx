import React from 'react';
import './css/NewsTab.css';
import NewsCategories from './News/NewsCategories';
import NewsHeader from './News/NewsHeader';
import News from './News/News';
import NewsPics from './News/NewsPics';
import NewsRecommendation from './News/NewsRecommendation';
import NewsChannelSuggestion from './News/NewsChannelSuggestion';

const NewsTab = () => {
  return (
    <div className="news-tab">
      <NewsCategories />
      <div className="news-content">
        <div className="main-news">
        <NewsHeader />
          <News />
          <News />
          <News />
        </div>
        <div className="sidebar">
          <NewsPics />
          <NewsRecommendation />
          <NewsChannelSuggestion />
        </div>
      </div>
    </div>
  );
};

export default NewsTab;
