import React, { useState, useEffect } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import { googleAuth, signup, login } from "../api";
import { useNavigate } from "react-router-dom";

import Styles from "./css/LoginSignupPop.module.css";
import LoginPopup from "./LoginSignupPop/LoginPopup";
import SignUpPopup from "./LoginSignupPop/SignUpPopup";
import ConfirmEmailModal from "./LoginSignupPop/confirmEmailModal";
import ConfirmPhNumberModal from "./LoginSignupPop/confirmPhNumberModal";
import NameModal from "./LoginSignupPop/nameModal";
import BirthModal from "./LoginSignupPop/birthModal";
import AddProfessionalPhoto from "./LoginSignupPop/addProfessionalPhoto";

const LoginSignupPop = ({ onLogInClick }) => {
  const navigate = useNavigate();

  const [currentStep, setCurrentStep] = useState(1);

  const [userData, setUserData] = useState({
    email: "",
    phNumber: "",
    password: "",
    emailVerificationCode: "",
    phNumberVerificationCode: "",
    firstName: "",
    lastName: "",
    dob: { day: "", month: "", year: "" },
    gender: "",
    professionalPhoto: "",
  });

  useEffect(() => {}, [userData]);

  const overlayClick = (e) => {
    if (
      e.target.classList.contains(Styles.overlay) &&
      (currentStep == 1 || currentStep == 2)
    ) {
      onLogInClick();
    }
  };

  const handleLoginSubmit = async (email, password) => {
    try {
      const response = await login(email, password);
      if (response.status == 200) {
        const { email, firstName, lastName, profilePhoto } = response.data.user;
        const _id = response.data.user._id;
        const token = response.data.token;
        const userData = { email, firstName, lastName, profilePhoto, _id };

        localStorage.setItem("token", token);
        localStorage.setItem("user-info", JSON.stringify(userData));

        setCurrentStep(0);
        navigate("/feeds");
        window.location.reload();
      }
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  const handleSignUpSubmit = async (email, password) => {
    // try {
    //   const response = await fetch('/auth/signup', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ email, password }),
    //   });

    //   const data = await response.json();
    //   if (response.ok) {
    //     localStorage.setItem('token', data.token);
    //     setUserData({ ...userData, email, password });
    //     setCurrentStep(3); // Move to the next modal
    //   }
    // } catch (error) {
    //   console.error('Error signing up:', error);
    // }
    setUserData({ ...userData, email, password });
    setCurrentStep(3);
  };

  // const handleEmailVerification = async (verificationCode) => {
  //   // try {
  //   //   const response = await fetch('/auth/verify-email', {
  //   //     method: 'POST',
  //   //     headers: { 'Content-Type': 'application/json' },
  //   //     body: JSON.stringify({ email: userData.email, verificationCode }),
  //   //   });
  //   //   const data = await response.json();

  //   //   if (response.ok) {
  //   //     setUserData({ ...userData, verificationCode });
  //   //     setCurrentStep(3); // Move to the next modal
  //   //   } else {
  //   //     console.error(data.message);
  //   //   }
  //   // } catch (error) {
  //   //   console.error('Error verifying email:', error);
  //   // }
  //   if (verificationCode === '123456') {
  //     setUserData({ ...userData, emailVerificationCode: verificationCode });
  //     setCurrentStep(4);
  //   }
  // };

  // const handlePhNumberVerification = async (verificationCode) => {
  //   if (verificationCode === '123456') {
  //     setUserData({ ...userData, phNumberVerificationCode: verificationCode });
  //     setCurrentStep(5);
  //   }
  // };

  const handleNameSubmit = async (firstName, lastName) => {
    const updatedUserData = {
      ...userData,
      firstName: firstName,
      lastName: lastName,
    };
    setUserData(updatedUserData);
    SignUp(updatedUserData);
  };

  const SignUp = async (updatedUserData) => {
    try {
      const response = await signup(updatedUserData);
      console.log("response:", response);
      if (response.status == 201) {
        localStorage.setItem("token", response.data.token);
        const userInfo = {
          _id: response.data.user._id,
          email: response.data.user.email,
          firstName: response.data.user.firstName,
          lastName: response.data.user.lastName,
        };
        localStorage.setItem("user-info", JSON.stringify(userInfo));
        setCurrentStep(0);
        navigate("/feeds");
        window.location.reload();
      }
    } catch (error) {
      console.error("Error completing profile:", error);
    }
  };

  // const handleBirthSubmit = (birthDate, gender) => {
  //   setUserData({ ...userData, birthDate, gender });
  //   setCurrentStep(5);
  // };

  // const handleComplete = async () => {
  //   try {
  //     const response = await fetch('/api/profile', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //         'Authorization': Bearer ${localStorage.getItem('token')},
  //       },
  //       body: JSON.stringify(userData),
  //     });
  //     const data = await response.json();

  //     if (response.ok) {
  //       console.log('Signup complete:', data);
  //       setCurrentStep(0); // Reset the popup flow
  //     } else {
  //       console.error(data.message);
  //     }
  //   } catch (error) {
  //     console.error('Error completing profile:', error);
  //   }
  // };

  const responseGoogle = async (authResult) => {
    try {
      if (authResult["code"]) {
        const result = await googleAuth(authResult["code"]);
        const { email, firstName, lastName, profilePhoto } = result.data.user;
        const _id = result.data.user._id;
        const token = result.data.token;
        const userData = { email, firstName, lastName, profilePhoto, _id };

        localStorage.setItem("token", token);
        localStorage.setItem("user-info", JSON.stringify(userData));

        setCurrentStep(0);
        navigate("/feeds");
        window.location.reload();
      }
    } catch (err) {
      const errorMessage =
        err?.response?.data?.message || err?.message || "Failed to Sign Up";
      setError(errorMessage);
    }
  };

  const googleLogin = useGoogleLogin({
    onSuccess: responseGoogle,
    onFailure: responseGoogle,
    flow: "auth-code",
  });

  return (
    <div className={Styles["login-signup-pop"]}>
      {currentStep === 1 && (
        <LoginPopup
          onSubmit={handleLoginSubmit}
          onSignUp={() => setCurrentStep(2)}
          googleLogin={googleLogin}
        />
      )}
      {currentStep === 2 && (
        <SignUpPopup
          onSubmit={handleSignUpSubmit}
          onLogIn={() => setCurrentStep(1)}
          googleLogin={googleLogin}
        />
      )}
      {/* {currentStep === 3 && (
        <ConfirmEmailModal onSubmit={handleEmailVerification} />
      )}
      {currentStep === 4 && (
        <ConfirmPhNumberModal onSubmit={handlePhNumberVerification} />
      )} */}
      {currentStep === 3 && <NameModal onSubmit={handleNameSubmit} />}
      {/* {currentStep === 6 && (
        <BirthModal onSubmit={handleBirthSubmit} />
      )}
      {currentStep === 7 && (
        <AddProfessionalPhoto onComplete={handleComplete} />
      )} */}

      <div className={Styles.overlay} onClick={overlayClick} />
    </div>
  );
};

export default LoginSignupPop;
