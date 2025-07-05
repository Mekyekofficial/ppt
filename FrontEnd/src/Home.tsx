import React from 'react';
import Navbar from './Navbar/Navbar';
import PostCreation from './Home/PostCreation';
import Post from './Home/Post';

const Home: React.FC = () => {
  return (
    <div style={{ backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      <Navbar />
      <div style={{ paddingTop: '80px' }}>
        <PostCreation />
        <Post />
      </div>
    </div>
  );
};

export default Home;
