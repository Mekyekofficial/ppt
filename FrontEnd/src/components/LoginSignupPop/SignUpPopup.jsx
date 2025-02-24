import React, { useState } from 'react';
import { FaGoogle } from "react-icons/fa";
import styles from './css/SignUpPopup.module.css';
import { signup } from '../../api';
import { useGoogleLogin } from "@react-oauth/google";
import { googleAuth } from '../../api';
import { useNavigate } from 'react-router-dom';


const SignUpPopup = ({ onSubmit, onLogIn, googleLogin }) => {

  const [inputValue, setInputValue] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputValue);
      // const userData = {
      //   email: isEmail ? inputValue : null,
      //   phoneNumber: !isEmail ? inputValue : null,
      //   password: password,
      // };
      // const response = await signup(userData);
      // localStorage.setItem('token', response.data.token); // Save token

      onSubmit(inputValue, password); // Proceed to the next step
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message);
    }

  };

  return (
    <div className={styles["signUp-popup"]}>
      <div className={styles["signUp-box"]}>
        <h2>Sign Up</h2>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleSubmit}>
        <div className={styles["input-field"]}>
            <label><b>Email</b></label>
            <input
              type="text"
              placeholder="Enter email"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              required
            />
          </div>

            <div className={styles["input-field"]}>
              <label><b>Password</b> (8+ characters)</label>
              <div className={styles["password-wrapper"]}>
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span className={styles["show-password"]} onClick={togglePasswordVisibility}>
                  {showPassword ? 'Hide' : 'Show'}
                </span>
              </div>
            </div>

            <button type="submit" className={styles["signUp-btn"]}>
              Sign Up
            </button>
          </form>
          <div className={styles.or}><hr />Or <hr /></div>
          
          <button type="button" className={styles["google-btn"]} onClick={googleLogin}>
            <FaGoogle className={styles["google-icon"]} />
            Continue with Google
          </button>
          <button type="button" className={styles["login-btn"]} onClick={onLogIn}>
            Already have a acoount ? <span>Join in !!</span>
          </button>
      </div>
    </div>
  );
};

export default SignUpPopup;