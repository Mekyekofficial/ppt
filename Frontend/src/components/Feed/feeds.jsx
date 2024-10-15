import React from 'react';
import Post from './post';
import SearchBar from './searchBar';
import FeedsStyles from './css/feeds.module.css';

const Feeds = () => {

  return (
    <div className={FeedsStyles.feeds}>
      <SearchBar />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default Feeds;
