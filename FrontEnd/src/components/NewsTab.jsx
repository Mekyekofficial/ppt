import React, { useEffect, useState } from "react";
import API from "../api"; // Ensure this points to your backend API setup
import NewsLeftContent from "./News/NewsLeftContent";
import NewsTabStyles from "./css/NewsTab.module.css";
import NewsCategories from "./News/NewsCategories";
import NewsHeader from "./News/NewsHeader";
import NewsSearchBar from "./News/NewsSearchBar";
import NewsItem from "./News/NewsItem";
import News from "./News/News";
import NewsPics from "./News/NewsPics";
import NewsRecommendation from "./News/NewsRecommendation";
import NewsChannelSuggestion from "./News/NewsChannelSuggestion";
import NewsHeadlines from "./News/NewsHeadlines";
import NewsPagesSuggestions from "./News/NewsPagesSuggestions";
import Spinner from "./Animation/Spinner";
import NewsAPI from "newsapi";
import qs from "qs";

const NewsTab = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      let backendNews = [];
      let APINewsIND = [];
      let APINewsUS = [];

      try {
        const responseBackEnd = await API.get("/posts/news");
        backendNews = responseBackEnd.data;
      } catch (error) {
        console.error("Error fetching news from backend:", error);
      }
      setNews([...backendNews]);

      const queryUS = qs.stringify({
        language: "en",
        country: "us",
      });
      const responseUS = await fetch(
        `https://newsapi.org/v2/top-headlines?${queryUS}`,
        {
          headers: {
            Authorization: "Bearer 5abd4c21b4744eada7b2f6b0312cb1f3",
          },
        }
      );
      APINewsUS = await responseUS.json();
      console.log(APINewsUS);
      setNews((prevNews) => [...prevNews, ...APINewsUS.articles]);

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
            news.map((item) => <News key={item._id} news={item} />)
          ) : (
            <Spinner />
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
