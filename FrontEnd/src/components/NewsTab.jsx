import React, { useEffect, useState } from 'react';
import API from '../api';  // Ensure this points to your backend API setup
import NewsLeftContent from './News/NewsLeftContent';
import NewsTabStyles from './css/NewsTab.module.css';
import NewsCategories from './News/NewsCategories';
import NewsHeader from './News/NewsHeader';
import NewsItem from './News/NewsItem';
import NewsPics from './News/NewsPics';
import NewsRecommendation from './News/NewsRecommendation';
import NewsChannelSuggestion from './News/NewsChannelSuggestion';
import NewsHeadlines from './News/NewsHeadlines';
import NewsPagesSuggestions from './News/NewsPagesSuggestions';

const NewsTab = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await API.get('/posts/news'); // Ensure your backend route is correct
        setNews(response.data);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className={NewsTabStyles["news-tab"]}>
      <div className={NewsTabStyles["left-sidebar"]}>
        <NewsLeftContent />
      </div>
      <div className={NewsTabStyles["main-news"]}>
        <NewsHeader />
        <div className={NewsTabStyles["news-items"]}>
          {news.length > 0 ? (
            news.map((item) => (
              <NewsItem key={item._id} news={item} />
            ))
          ) : (
            <p>Loading news...</p>
          )}
        </div>
      </div>
      <div className={NewsTabStyles["right-sidebar"]}>
        <NewsHeadlines />
        <NewsPagesSuggestions />
      </div>
    </div>
  );
};

export default NewsTab;
