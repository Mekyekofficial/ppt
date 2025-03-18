import React, {useState, useEffect} from 'react';
import Post from './post';
import FeedsStyles from './css/feeds.module.css';
import API from '../../api';

const Feeds = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await API.get('feeds/getFeeds');
        setPosts(response.data); // Store fetched posts
        console.log("Posts:", response.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className={FeedsStyles.feeds}>
      {posts.length > 0 ? (
          posts.map(post => <Post key={post._id} post={post} />)
        ) : (
          <p>Loading posts...</p>
      )}
    </div>
  );
};

export default Feeds;
