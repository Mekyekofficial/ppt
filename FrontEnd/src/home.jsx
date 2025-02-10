import React, { useState } from 'react';
import Styles from './home.module.css';
import HomeHero from './Home/HomeHero';
import HomeFAQ from './Home/HomeFAQ';
import HeaderBeforeLogIn from './components/includes/headerBeforeLogIn';



const Home = () => {

  return (
    <div className={Styles.home}>
      <HeaderBeforeLogIn />
      <HomeHero />
      <HomeFAQ />
    </div>
  );
};

export default Home;
