import React, { useState, useEffect } from "react";
import styles from "./css/headerBeforeLogIn.module.css";
import { NavLink } from "react-router-dom";
import { FaBriefcase, FaUserPlus, FaTimes } from "react-icons/fa";

const HeaderBeforeLogIn = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    confirmPassword: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add your authentication logic here
    try {
      if (isLogin) {
        // Login logic
        console.log("Login:", formData);
      } else {
        // Signup logic
        console.log("Signup:", formData);
      }
    } catch (error) {
      console.error("Auth error:", error);
    }
  };

  // Add effect to handle body scroll
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <NavLink to="/">YourLogo</NavLink>
        </div>

        <div className={styles.navLinks}>
          <NavLink to="/hire" className={styles.navItem}>
            <FaBriefcase />
            <span>Hire Talent</span>
          </NavLink>
          <NavLink to="/work" className={styles.navItem}>
            <FaUserPlus />
            <span>Find Work</span>
          </NavLink>
        </div>

        <div className={styles.authButtons}>
          <button
            className={styles.loginButton}
            onClick={() => {
              setIsLogin(true);
              setIsModalOpen(true);
            }}
          >
            Log In
          </button>
          <button
            className={styles.signUpButton}
            onClick={() => {
              setIsLogin(false);
              setIsModalOpen(true);
            }}
          >
            Sign Up
          </button>
        </div>
      </nav>

      {isModalOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <button
              className={styles.closeButton}
              onClick={() => setIsModalOpen(false)}
            >
              <FaTimes />
            </button>

            <h2>{isLogin ? "Welcome Back" : "Create Account"}</h2>
            <p className={styles.modalSubtitle}>
              {isLogin
                ? "Enter your details to access your account"
                : "Join our community and unlock all features"}
            </p>

            <form onSubmit={handleSubmit}>
              {!isLogin && (
                <div className={styles.inputGroup}>
                  <label>Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your name"
                    required
                  />
                </div>
              )}

              <div className={styles.inputGroup}>
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className={styles.inputGroup}>
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Enter your password"
                  required
                />
              </div>

              {!isLogin && (
                <div className={styles.inputGroup}>
                  <label>Confirm Password</label>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    placeholder="Confirm your password"
                    required
                  />
                </div>
              )}

              <button type="submit" className={styles.submitButton}>
                {isLogin ? "Log In" : "Sign Up"}
              </button>
            </form>

            <p className={styles.switchMode}>
              {isLogin
                ? "Don't have an account? "
                : "Already have an account? "}
              <button onClick={() => setIsLogin(!isLogin)}>
                {isLogin ? "Sign Up" : "Log In"}
              </button>
            </p>
          </div>
        </div>
      )}
    </header>
  );
};

export default HeaderBeforeLogIn;
