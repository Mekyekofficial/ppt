import React from 'react';
import NewsPicsStyles from './css/NewsPics.module.css';

const NewsPics = () => {
  return (
    <div className={NewsPicsStyles["news-pics"]}>
      <h3>Picks</h3>
      <div className={NewsPicsStyles["pic-item"]}>
        <img src="news_pic_1.jpg" alt="News Pic 1" />
        <p>Logitech introduces new MX and Wave keys designed for the Mac</p>
      </div>
      <div className={NewsPicsStyles["pic-item"]}>
        <img src="news_pic_2.jpg" alt="News Pic 2" />
        <p>Apple's iPhone security update guarantee outdone by Samsung</p>
      </div>
    </div>
  );
};

export default NewsPics;
