import React, { useState } from 'react';
import Styles from './home.module.css';
import HomeBanner from './Home/HomeBanner';
import HomeFAQ from './Home/HomeFAQ';
import HeaderBeforeLogIn from './components/includes/headerBeforeLogIn';



const Home = () => {

  return (
    <div className={Styles.home}>
      <HeaderBeforeLogIn />
      <HomeBanner />
      <HomeFAQ />
    </div>
  );
};

export default Home;
