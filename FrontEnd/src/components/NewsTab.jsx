import React from 'react';
import NewsTabStyles from './css/NewsTab.module.css';
import NewsCategories from './News/NewsCategories';
import NewsHeader from './News/NewsHeader';
import NewsItem from './News/NewsItem';
import NewsPics from './News/NewsPics';
import NewsRecommendation from './News/NewsRecommendation';
import NewsChannelSuggestion from './News/NewsChannelSuggestion';

const NewsTab = () => {
  return (
    <div className={NewsTabStyles["news-tab"]}>
      <NewsCategories />
      <div className={NewsTabStyles["news-content"]}>
        <div className={NewsTabStyles["main-news"]}>
        <NewsHeader />
        <div className={NewsTabStyles["news-items"]}>
          <NewsItem />
          <NewsItem />
          <NewsItem />
          <NewsItem />
          <NewsItem />
          <NewsItem />
          <NewsItem />
          <NewsItem />
          <NewsItem />
        </div>
        </div>
        <div className={NewsTabStyles.sidebar}>
          <NewsPics />
          <NewsRecommendation />
          <NewsChannelSuggestion />
        </div>
      </div>
    </div>
  );
};

export default NewsTab;
