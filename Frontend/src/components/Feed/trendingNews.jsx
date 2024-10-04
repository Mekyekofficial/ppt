import React from 'react';
import './css/trendingNews.css';
import { IoNewspaperOutline } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";


const TrendingNews = () => {
  const news = [
    {
      id: 1,
      title: "Logitech introduces new MX and Wave Keys designed for the Mac",
      imgSrc: "https://via.placeholder.com/150", // Replace with actual image
      description: "Logitech has announced new versions of ...",
    },
    {
      id: 2,
      title: "Netanyahu fumes as Trudeau cuts Israel weapons supply",
      imgSrc: "https://via.placeholder.com/150", // Replace with actual image
      description: "Israel’s Prime Minister Benjamin ...",
    },
  ];

  return (
    <div className="trending-news-container">
      <h3 className="heading">Trending News <IoNewspaperOutline className='news-icon'/></h3>
      <div className="news-items">
        {news.map((item) => (
          <div className="news-item" key={item.id}>
            <img src={item.imgSrc} alt={item.title} className="news-image" />
            <p className="news-title">{item.title}</p>
            <p className='news-description'>{item.description}</p>
          </div>
        ))}
      </div>
      <div className="see-more">
        <span>See more</span>
        < MdKeyboardArrowDown/>
      </div>
    </div>
  );
};

export default TrendingNews;
