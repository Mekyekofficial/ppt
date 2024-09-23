// src/components/LoginPopup.jsx

import React, { useState } from 'react';
import './css/LoginPopup.css'; // Create a separate CSS file for styling

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
            Log In
          </button>
        </form>

        <div className="separator">
          <span>Or</span>
        </div>

        <button className="google-btn">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
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
