import React, { useState } from 'react';
import Styles from './home.module.css';
import HomeHero from './Home/HomeHero';
import HomeBusiness from './Home/HomeBusiness';
import HomeFeatures from './Home/HomeFeatures';
import HomeCompanies from './Home/HomeCompanies';
import HomeTestimonial from './Home/HomeTestimonial';
import HomeFAQ from './Home/HomeFAQ';
import HeaderBeforeLogIn from './components/includes/headerBeforeLogIn';



const Home = () => {

  return (
    <div className={Styles.home}>
      <HeaderBeforeLogIn />
      <HomeHero />
      <HomeBusiness />
      <HomeFeatures />
      <HomeCompanies />
      <HomeTestimonial />
      <HomeFAQ />
    </div>
  );
};

export default Home;
