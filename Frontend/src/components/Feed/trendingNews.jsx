import React from 'react';
import { IoNewspaperOutline } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";
import TrendingNewsStyles from './css/trendingNews.module.css';


const TrendingNews = () => {
  const news = [
    {
      id: 1,
      title: "Logitech introduces new MX and Wave Keys designed for the Mac",
      imgSrc: "https://via.placeholder.com/150",
      description: "Logitech has announced new versions of ...",
    },
    {
      id: 2,
      title: "Netanyahu fumes as Trudeau cuts Israel weapons supply",
      imgSrc: "https://via.placeholder.com/150", 
      description: "Israel’s Prime Minister Benjamin ...",
    },
  ];

  return (
    <div className={TrendingNewsStyles["trending-news-container"]}>
      <h3 className={TrendingNewsStyles.heading}>Trending News <IoNewspaperOutline className='news-icon'/></h3>
      <div className={TrendingNewsStyles["news-items"]}>
        {news.map((item) => (
          <div className={TrendingNewsStyles["news-item"]} key={item.id}>
            <img src={item.imgSrc} alt={item.title} className={TrendingNewsStyles["news-image"]} />
            <p className={TrendingNewsStyles["news-title"]}>{item.title}</p>
            <p className={TrendingNewsStyles['news-description']}>{item.description}</p>
          </div>
        ))}
      </div>
      <div className={TrendingNewsStyles["see-more"]}>
        <span>See more</span>
        < MdKeyboardArrowDown/>
      </div>
    </div>
  );
};

export default TrendingNews;
