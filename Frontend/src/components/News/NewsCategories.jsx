import React from 'react';
import './css/NewsCategories.css';

const NewsCategories = () => {
  return (
    <div className="news-categories">
      <ul className="categories-list">
        <li className="category active">For You</li>
        <li className="category">Your Following</li>
        <li className="category">Trending</li>
        <li className="category">Explore</li>
        <li className="category">India</li>
        <li className="category">World</li>
        <li className="category">Technology</li>
        <li className="category">UI/UX</li>
        <li className="category">Web</li>
        <li className="category">Travel</li>
        <li className="category">Finance</li>
        <li className="category browse">+ Browse</li>
      </ul>
    </div>
  );
};

export default NewsCategories;
