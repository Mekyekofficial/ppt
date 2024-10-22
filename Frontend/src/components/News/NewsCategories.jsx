import React from 'react';
import NewsCategoriesStyles from './css/NewsCategories.module.css';

const NewsCategories = () => {
  return (
    <div className={NewsCategoriesStyles["news-categories"]}>
      <ul className={NewsCategoriesStyles["categories-list"]}>
        <li className={`${NewsCategoriesStyles.category} ${NewsCategoriesStyles.active}`}>For You</li>
        <li className={NewsCategoriesStyles.category}>Your Following</li>
        <li className={NewsCategoriesStyles.category}>Trending</li>
        <li className={NewsCategoriesStyles.category}>Explore</li>
        <li className={NewsCategoriesStyles.category}>India</li>
        <li className={NewsCategoriesStyles.category}>World</li>
        <li className={NewsCategoriesStyles.category}>Technology</li>
        <li className={NewsCategoriesStyles.category}>UI/UX</li>
        <li className={NewsCategoriesStyles.category}>Web</li>
        <li className={NewsCategoriesStyles.category}>Travel</li>
        <li className={NewsCategoriesStyles.category}>Finance</li>
        <li className={`${NewsCategoriesStyles.category} ${NewsCategoriesStyles.add}`}>+ Add</li>
      </ul>
    </div>
  );
};

export default NewsCategories;
