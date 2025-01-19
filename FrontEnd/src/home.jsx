import React, { useState } from 'react';
import Styles from './home.module.css';
import HomeBanner from './Home/HomeBanner';
import HomeFAQ from './Home/HomeFAQ';
import HeaderBeforeLogIn from './components/includes/headerBeforeLogIn';
import LoginPop from './components/LoginSignupPop/LoginPopup';



const Home = () => {
  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);

  const onLogInClick = () => {
    if (!isLoginPopupOpen) {
      setIsLoginPopupOpen(true);
    } else {
      setIsLoginPopupOpen(false);
    }
  };

  return (
    <div className={Styles.home}>
      <HeaderBeforeLogIn onLogInClick={onLogInClick} />
      <HomeBanner />
      <HomeFAQ />
      {isLoginPopupOpen && <LoginPop />}
    </div>
  );
};

export default Home;
