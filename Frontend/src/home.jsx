import React, { useState } from 'react';
import Styles from './home.module.css';
import HomeBanner from './Home/HomeBanner';
import HomeFAQ from './Home/HomeFAQ';
import HeaderBeforeLogIn from './components/includes/headerBeforeLogIn';
import Footer from './components/includes/footer';
import LoginPopup from './components/LoginSignupPop/LoginPopup';
import SignUpPopup from './components/LoginSignupPop/SignUpPopup';
import ConfirmEmailModal from './components/LoginSignupPop/ConfirmEmailModal';
import NameModal from './components/LoginSignupPop/NameModal';
import BirthModal from './components/LoginSignupPop/BirthModal';
import AddProfessionalPhoto from './components/LoginSignupPop/AddProfessionalPhoto';
import API from './api';
import { GoogleOAuthProvider } from "@react-oauth/google";

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
  const handleLoginSubmit = async (email, password) => {
    try {
      const url = 'http://localhost:5000/auth/login';
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      console.log(response);
      const data = await response.json();
  
      if (response.ok) {
        // Store the token in localStorage or a secure place
        localStorage.setItem('token', data.token);
        setUserData({ ...userData, email, password });
        window.location.href = '/feeds';
      } else {
        console.error(data.message);
      }
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  const handleSignUpSubmit = async (email, password) => {
    try {
      const response = await fetch('/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        setUserData({ ...userData, email, password });
        setCurrentStep(3); // Move to the next modal
      }
    } catch (error) {
      console.error('Error signing up:', error);
    }
  };


  const handleEmailVerification = async (verificationCode) => {
    try {
      const response = await fetch('/auth/verify-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: userData.email, verificationCode }),
      });
      const data = await response.json();
  
      if (response.ok) {
        setUserData({ ...userData, verificationCode });
        setCurrentStep(3); // Move to the next modal
      } else {
        console.error(data.message);
      }
    } catch (error) {
      console.error('Error verifying email:', error);
    }
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
  const handleComplete = async () => {
    try {
      const response = await fetch('/api/profile', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify(userData),
      });
      const data = await response.json();
  
      if (response.ok) {
        console.log('Signup complete:', data);
        setCurrentStep(0); // Reset the popup flow
      } else {
        console.error(data.message);
      }
    } catch (error) {
      console.error('Error completing profile:', error);
    }
  };

  const GoogleAuthWrapperLogin = () => {
    return (
      <GoogleOAuthProvider clientId="137399153709-dl079hd78sbv82mj2th7voonfrl8313i.apps.googleusercontent.com">
        <LoginPopup onSubmit={handleLoginSubmit} onClose={() => closeLoginSignupPop()} onSignUp={() => setCurrentStep(2)} />
      </GoogleOAuthProvider>
    );
  };

  const GoogleAuthWrapperSignUp = () => {
    return (
      <GoogleOAuthProvider clientId="137399153709-dl079hd78sbv82mj2th7voonfrl8313i.apps.googleusercontent.com">
        <SignUpPopup onSubmit={handleSignUpSubmit} onClose={() => closeLoginSignupPop()} />
      </GoogleOAuthProvider>
    );
  };

  return (
    <div className={Styles.home}>
      <HeaderBeforeLogIn onLogInClick={handleLogInClick} />
      <HomeBanner />
      <HomeFAQ />

      {currentStep === 1 && (
        <GoogleAuthWrapperLogin />
      )}
      {currentStep === 2 && (
        <GoogleAuthWrapperSignUp />
      )}
      {currentStep === 3 && (
        <ConfirmEmailModal onSubmit={handleEmailVerification} onClose={() => closeLoginSignupPop()} />
      )}
      {currentStep === 4 && (
        <NameModal onSubmit={handleNameSubmit} onClose={() => closeLoginSignupPop()} />
      )}
      {currentStep === 5 && (
        <BirthModal onSubmit={handleBirthSubmit} onClose={() => closeLoginSignupPop()} />
      )}
      {currentStep === 6 && (
        <AddProfessionalPhoto onComplete={handleComplete} onClose={() => closeLoginSignupPop()} />
      )}

      <div className={Styles.overlay} onClick={overlayClick} />
    </div>
  );
};

export default Home;
