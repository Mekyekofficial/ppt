import React, { useState } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import { googleAuth } from "../api";
import { useNavigate } from "react-router-dom";

import Styles from "./css/LoginSignupPop.module.css";
import LoginPopup from "./LoginSignupPop/LoginPopup";
import SignUpPopup from "./LoginSignupPop/SignUpPopup";
import ConfirmEmailModal from "./LoginSignupPop/confirmEmailModal";
import ConfirmPhNumberModal from "./LoginSignupPop/confirmPhNumberModal";
import NameModal from "./LoginSignupPop/nameModal";
import BirthModal from "./LoginSignupPop/birthModal";
import AddProfessionalPhoto from "./LoginSignupPop/AddProfessionalPhoto";

const SERVER_URL = import.meta.env.PUBLIC_SERVER_URL;

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
    lastname: "",
    dob: { day: "", month: "", year: "" },
    gender: "",
    professionalPhoto: "",
  });

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
      const url = `${SERVER_URL}/auth/login`;
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      console.log(response);
      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("token", data.token);
        setUserData({ ...userData, email, password });
        window.location.href = "/feeds";
      } else {
        console.error(data.message);
      }
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  const handleSignUpSubmit = async (email, password) => {
    try {
      const response = await fetch("/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        localStorage.setItem("token", data.token);
        setUserData({ ...userData, email, password });
        setCurrentStep(3); // Move to the next modal
      }
    } catch (error) {
      console.error("Error signing up:", error);
    }
  };

  const handleEmailVerification = async (verificationCode) => {
    // try {
    //   const response = await fetch('/auth/verify-email', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ email: userData.email, verificationCode }),
    //   });
    //   const data = await response.json();

    //   if (response.ok) {
    //     setUserData({ ...userData, verificationCode });
    //     setCurrentStep(3); // Move to the next modal
    //   } else {
    //     console.error(data.message);
    //   }
    // } catch (error) {
    //   console.error('Error verifying email:', error);
    // }
    if (verificationCode === "123456") {
      setUserData({ ...userData, emailVerificationCode: verificationCode });
      setCurrentStep(4);
    }
  };

  const handlePhNumberVerification = async (verificationCode) => {
    if (verificationCode === "123456") {
      setUserData({ ...userData, phNumberVerificationCode: verificationCode });
      setCurrentStep(5);
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

  const handleComplete = async () => {
    try {
      const response = await fetch("/api/profile", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(userData),
      });
      const data = await response.json();

      if (response.ok) {
        console.log("Signup complete:", data);
        setCurrentStep(0); // Reset the popup flow
      } else {
        console.error(data.message);
      }
    } catch (error) {
      console.error("Error completing profile:", error);
    }
  };

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
      {currentStep === 3 && (
        <ConfirmEmailModal onSubmit={handleEmailVerification} />
      )}
      {currentStep === 4 && (
        <ConfirmPhNumberModal onSubmit={handlePhNumberVerification} />
      )}
      {currentStep === 5 && <NameModal onSubmit={handleNameSubmit} />}
      {currentStep === 6 && <BirthModal onSubmit={handleBirthSubmit} />}
      {currentStep === 7 && (
        <AddProfessionalPhoto onComplete={handleComplete} />
      )}

      <div className={Styles.overlay} onClick={overlayClick} />
    </div>
  );
};

export default LoginSignupPop;
