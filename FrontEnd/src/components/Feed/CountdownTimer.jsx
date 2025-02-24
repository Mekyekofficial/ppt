import React, { useState, useEffect } from "react";
import styles from "../css/FeedSection.module.css";
import image from "../../assets/image.png";

function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Set end date 5 days from now
    const endDate = new Date().getTime() + 10 * 24 * 60 * 60 * 1000;

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = endDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <div className={styles["countdown-container"]}>
        <h1 className={styles["countdown-title"]}>
          <img
            src={image}
            alt="logo"
            style={{ width: "40px", height: "40px" }}
          />
          Mekyek.com
        </h1>
        <h3 className={styles["countdown-title"]}>Coming Soon...</h3>
        <div className={styles["countdown-boxes"]}>
          <div className={styles["countdown-box"]}>
            <span className={styles["countdown-number"]}>{timeLeft.days}</span>
            <span className={styles["countdown-label"]}>Days</span>
          </div>
          <div className={styles["countdown-box"]}>
            <span className={styles["countdown-number"]}>{timeLeft.hours}</span>
            <span className={styles["countdown-label"]}>Hours</span>
          </div>
          <div className={styles["countdown-box"]}>
            <span className={styles["countdown-number"]}>
              {timeLeft.minutes}
            </span>
            <span className={styles["countdown-label"]}>Minutes</span>
          </div>
          <div className={styles["countdown-box"]}>
            <span className={styles["countdown-number"]}>
              {timeLeft.seconds}
            </span>
            <span className={styles["countdown-label"]}>Seconds</span>
          </div>
        </div>
      </div>

      <div className={styles["welcome-container"]}>
        <h2 className={styles["welcome-heading"]}>
          🚀 Something Exciting is Coming Soon!
        </h2>

        <div className={styles["welcome-content"]}>
          <p>
            Welcome to Mekyek.com! We're working hard behind the scenes to bring
            you something amazing. Stay tuned as we prepare to launch a platform
            that will revolutionize the way companies and job seekers connect.
          </p>

          <p>Sign up for updates and be the first to know when we go live!</p>
          <div className={styles["subscribe-container"]}>
            <input
              type="email" 
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              title="Please enter a valid email address"
              placeholder="Enter your email address"
              className={styles["subscribe-input"]}
              required
            />
            <button 
              className={styles["subscribe-button"]}
              onClick={(e) => {
                e.preventDefault();
                const emailInput = e.target.previousElementSibling;
                if (!emailInput.checkValidity()) {
                  emailInput.reportValidity();
                }
              }}
            >
              📩 Subscribe
            </button>
          </div>

          

          <p className={styles["see-you"]}>See you soon!</p>
        </div>
      </div>
    </>
  );
}

export default CountdownTimer;
