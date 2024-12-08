import React, { useState } from 'react';
import Styles from './home.module.css';
import HomeBanner from './Home/HomeBanner';
import HomeFAQ from './Home/HomeFAQ';
import HeaderBeforeLogIn from './components/includes/headerBeforeLogIn';
import Footer from './components/includes/footer';
import LoginPopup from './components/LoginSignupPop/LoginPopup';
import ConfirmEmailModal from './components/LoginSignupPop/ConfirmEmailModal';
import NameModal from './components/LoginSignupPop/NameModal';
import BirthModal from './components/LoginSignupPop/BirthModal';
import AddProfessionalPhoto from './components/LoginSignupPop/AddProfessionalPhoto';

const Home = () => {
  const closeLoginSignupPop = () => {
    setCurrentStep(0);
    overlayDisappear();
  };

  const overlayClick = (e) => {
    if (e.target.classList.contains(Styles.overlay)) {
      closeLoginSignupPop();
      overlayDisappear();
    }
  }

  const overlayAppear = () => {
    document.querySelector(`.${Styles.overlay}`).style.display = 'block';
  }

  const overlayDisappear = () => {
    document.querySelector(`.${Styles.overlay}`).style.display = 'none';
  }

  // State to manage the current login step in the LoginSignupPop sequence
  const [currentStep, setCurrentStep] = useState(0);

  // State to collect user data across LoginSignupPop
  const [userData, setUserData] = useState({
    email: '',
    password: '',
    verificationCode: '',
    firstName: '',
    surname: '',
    birthDate: { day: '', month: '', year: '' },
    gender: '',
  });

  // Start the login sequence on "Log In" click
  const handleLogInClick = () => {
    overlayAppear();
    setCurrentStep(1);
  };

  // Handlers for each modal to collect data and move to the next step
  const handleLoginSubmit = (email, password) => {
    setUserData({ ...userData, email, password });
    setCurrentStep(2);
  };

  const handleEmailVerification = (verificationCode) => {
    setUserData({ ...userData, verificationCode });
    setCurrentStep(3);
  };

  const handleNameSubmit = (firstName, surname) => {
    setUserData({ ...userData, firstName, surname });
    setCurrentStep(4);
  };

  const handleBirthSubmit = (birthDate, gender) => {
    setUserData({ ...userData, birthDate, gender });
    setCurrentStep(5);
  };

  // Complete the sequence after the final modal
  const handleComplete = () => {
    setCurrentStep(0);
    console.log('User data collected:', userData);
  };

  return (
    <div className={Styles.home}>
      <HeaderBeforeLogIn onLogInClick={handleLogInClick} />
      <HomeBanner />
      <HomeFAQ />

      {currentStep === 1 && (
        <LoginPopup onSubmit={handleLoginSubmit} onClose={() => closeLoginSignupPop()} />
      )}
      {currentStep === 2 && (
        <ConfirmEmailModal onSubmit={handleEmailVerification} onClose={() => closeLoginSignupPop()} />
      )}
      {currentStep === 3 && (
        <NameModal onSubmit={handleNameSubmit} onClose={() => closeLoginSignupPop()} />
      )}
      {currentStep === 4 && (
        <BirthModal onSubmit={handleBirthSubmit} onClose={() => closeLoginSignupPop()} />
      )}
      {currentStep === 5 && (
        <AddProfessionalPhoto onComplete={handleComplete} onClose={() => closeLoginSignupPop()} />
      )}

      <div className={Styles.overlay} onClick={overlayClick} />
    </div>
  );
};

export default Home;
