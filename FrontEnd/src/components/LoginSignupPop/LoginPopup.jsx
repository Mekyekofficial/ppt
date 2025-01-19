import React, { useState } from 'react';
import { FaGoogle } from "react-icons/fa";
import styles from './css/LoginPopup.module.css';
import { login } from '../../api';
import { json, useNavigate } from 'react-router-dom';


const LoginPopup = ({ onSubmit, googleLogin, onSignUp }) => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await login(email, password);
      localStorage.setItem('token', response.data.token); // Save token
      onSubmit(email, password); // Proceed to the next step
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to log in');
    }

  };

  return (
    <div className={styles["login-popup"]}>
      <div className={styles["login-box"]}>
        <h2>Log In</h2>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className={styles["input-field"]}>
              <label><b>Email</b></label>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                <div className={styles["forgot-password"]}>forgot Password?</div>
              </div>
            </div>

            <button type="submit" className={styles["login-btn"]}>
              CONTINUE
            </button>
          </form>
          <div className={styles.or}><hr />Or <hr /></div>
          
          <button type="button" className={styles["google-btn"]} onClick={googleLogin}>
            <FaGoogle className={styles["google-icon"]} />
            Continue with Google
          </button>
          <button type="button" className={styles["signIn-btn"]} onClick={onSignUp}>
            Have it ? <span>Join us !!</span>
          </button>
      </div>
    </div>
  );
};

export default LoginPopup;
