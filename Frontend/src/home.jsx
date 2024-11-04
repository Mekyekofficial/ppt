import React from 'react';
import Styles from './home.module.css';
import HomeBanner from './Home/HomeBanner';
import HomeFAQ from './Home/HomeFAQ';

const Home = () => {
  return (
    <div className={Styles.home}>
      <HomeBanner />
      <HomeFAQ />
    </div>
  );
};

export default Home;