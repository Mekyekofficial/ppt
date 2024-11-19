import React, { useState } from 'react';
import { FaGoogle } from "react-icons/fa";
import styles from './css/LoginPopup.module.css';


const LoginPopup = ({ onSubmit, onClose }) => {
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const handleContinue = (e) => {
    e.preventDefault();
    onNext(emailOrPhone, password);
  };

  return (
    <div className={styles["login-popup"]}>
      <div className={styles["login-box"]}>
        <h2>Log In</h2>
        <form onSubmit={handleContinue}>
        <div className={styles["input-field"]}>
            <label><b>Email or phone</b></label>
            <input
              type="text"
              placeholder="Enter email or phone"
              required
              value={emailOrPhone}
              onChange={(e) => setEmailOrPhone(e.target.value)}
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

          <button type="submit" className={styles["login-btn"]} onClick={onSubmit}>
            CONTINUE
          </button>
          <div className={styles.or}><hr />Or <hr /></div>
          <button type="button" className={styles["google-btn"]}>
            <FaGoogle className={styles["google-icon"]} />
            Continue with Google
          </button>
          <button type="button" className={styles["signIn-btn"]} onClick={onClose}>
            Have it ? Join us !!
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPopup;
