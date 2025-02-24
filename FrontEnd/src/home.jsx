import React from "react";
import Styles from "./home.module.css";
import HomeHero from "./Home/HomeHero";
import HomeBusiness from "./Home/HomeBusiness";
import HomeFeatures from "./Home/HomeFeatures";
import HomeCompanies from "./Home/HomeCompanies";
import HomeCards from "./Home/HomeCards";
import HomeFeedback from "./Home/HomeFeedback";
import HomeFAQ from "./Home/HomeFAQ";
import HeaderBeforeLogIn from "./components/includes/headerBeforeLogIn";
import Footer from "./components/Footer";

const Home = () => {
  return (
    <div className={Styles.home}>
      <HeaderBeforeLogIn />
      <HomeHero />
      <HomeBusiness />
      <HomeFeatures />
      <HomeCompanies />
      <HomeCards />
      <HomeFeedback />
      <HomeFAQ />
      <Footer />
    </div>
  );
};

export default Home;
