import React, { useState, useEffect } from "react";
import styles from "./css/headerBeforeLogIn.module.css";
import logo from '../../assets/logo.png';
import { NavLink, useNavigate } from "react-router-dom";
import { FaBriefcase, FaUserPlus, FaTimes } from "react-icons/fa";
import { login, signup } from "../../api";

const HeaderBeforeLogIn = () => {
  const navigate = useNavigate();
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
    try {
      if (isLogin) {
        console.log("Login:", formData);
        const { email, password } = formData;
        const response = await login(email, password);
        if (response.status == 200) {
          const { email, firstName, lastName, profilePhoto } =
            response.data.user;
          const _id = response.data.user._id;
          const token = response.data.token;
          const userData = { email, firstName, lastName, profilePhoto, _id };

          localStorage.setItem("token", token);
          localStorage.setItem("user-info", JSON.stringify(userData));

          navigate("/feeds");
          window.location.reload();
        }
      } else {
        console.log("Signup:", formData);
        const { name, email, password, confirmPassword } = formData;
        const [firstName, lastName] = name.split(" ");
        const signupData = { firstName, lastName, email, password, confirmPassword };
        const response = await signup(signupData);
        console.log("response:", response);
        if (response.status == 201) {
          localStorage.setItem("token", response.data.token);
          const userInfo = {
            _id: response.data.user._id,
            email: response.data.user.email,
            name: response.data.user.name,
          };
          localStorage.setItem("user-info", JSON.stringify(userInfo));
          navigate("/feeds");
          window.location.reload();
        }
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
          <NavLink to="/" className={styles.logoLink}>
            <img src={logo} alt="Logo of the website" />
            &nbsp;
            <span>Mekyek</span>
          </NavLink>
        </div>

        <div className={styles.navLinks}>
          <NavLink to="/work" className={styles.navItem}>
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
            }}>
            Log In
          </button>
          <button
            className={styles.signUpButton}
            onClick={() => {
              setIsLogin(false);
              setIsModalOpen(true);
            }}>
            Sign Up
          </button>
        </div>
      </nav>

      {isModalOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <button
              className={styles.closeButton}
              onClick={() => setIsModalOpen(false)}>
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
