import React, { useState } from 'react';
import './css/LoginPopup.css';
import googleIcon from '../assets/google.png';

const LoginPopup = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-popup">
      <div className="login-box">
        <h2>Log In</h2>
        <form>
          <div className="input-field">
            <label>Email or phone</label>
            <input type="text" placeholder="Enter email or phone" required />
          </div>

          <div className="input-field">
            <label>Password (8+ characters)</label>
            <div className="password-wrapper">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter password"
                required
              />
              <span className="show-password" onClick={togglePasswordVisibility}>
                {showPassword ? 'Hide' : 'Show'}
              </span>
            </div>
          </div>

          <button type="submit" className="login-btn">
            CONTINUE
          </button>
        </form>

        <div className="separator">
          <span>Or</span>
        </div>

        <button className="google-btn">
          <img
            src= {googleIcon}
            alt="Google icon"
          />
          Continue with Google
        </button>

        <p className="signup-text">
          Have it? <a href="#">Join us!</a>
        </p>
      </div>
    </div>
  );
};

export default LoginPopup;
