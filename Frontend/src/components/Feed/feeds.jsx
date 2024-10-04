import React from 'react';
import Post from './post';
import SearchBar from './searchBar';
import './css/feeds.css';

const Feeds = () => {

  return (
    <div className="feeds">
      <SearchBar />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default Feeds;
