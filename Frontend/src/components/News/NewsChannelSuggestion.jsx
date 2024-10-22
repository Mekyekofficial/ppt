import React from 'react';
import NewsChannelSuggestionStyles from './css/NewsChannelSuggestion.module.css';

const NewsChannelSuggestion = () => {
  return (
    <div className={NewsChannelSuggestionStyles["news-channel-suggestion"]}>
      <h3>You can check out...</h3>
      <ul>
        <li>User 1</li>
        <li>User 2</li>
        <li>User 3</li>
      </ul>
    </div>
  );
};

export default NewsChannelSuggestion;
