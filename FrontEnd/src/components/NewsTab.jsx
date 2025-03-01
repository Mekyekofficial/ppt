import React, { useEffect, useState } from 'react';
import API from '../api';  // Ensure this points to your backend API setup
import NewsLeftContent from './News/NewsLeftContent';
import NewsTabStyles from './css/NewsTab.module.css';
import NewsCategories from './News/NewsCategories';
import NewsHeader from './News/NewsHeader';
import NewsSearchBar from './News/NewsSearchBar';
import NewsItem from './News/NewsItem';
import News from './News/News';
import NewsPics from './News/NewsPics';
import NewsRecommendation from './News/NewsRecommendation';
import NewsChannelSuggestion from './News/NewsChannelSuggestion';
import NewsHeadlines from './News/NewsHeadlines';
import NewsPagesSuggestions from './News/NewsPagesSuggestions';

const NewsTab = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      let backendNews = [];
      let mediastackNews = [];
    
      try {
        const response = await API.get('/posts/news');
        backendNews = response.data;
      } catch (error) {
        console.error('Error fetching news from backend:', error);
      }
    
      try {
        const response = await fetch(
          `https://api.mediastack.com/v1/news?access_key=${import.meta.env.VITE_MEDIASHACK_API_ACCESS_TOKEN}&countries=in`
        );
        const data = await response.json();
        mediastackNews = data.data;
      } catch (error) {
        console.error('Error fetching news from mediastack:', error);
      }

      console.log(mediastackNews);
    
      // Combine both arrays and update state
      const combinedNews = [...backendNews, ...mediastackNews];
      setNews(combinedNews);
    };
    
    fetchNews();
    
  }, []);

  return (
    <div className={NewsTabStyles["news-tab"]}>
      <div className={NewsTabStyles["left-sidebar"]}>
        <NewsLeftContent />
      </div>
      <div className={NewsTabStyles["main-news"]}>
        <NewsSearchBar />
        <div className={NewsTabStyles["news-items"]}>
          {news.length > 0 ? (
            news.map((item) => (
              <News key={item._id} news={item} />
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
