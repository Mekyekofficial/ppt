import React from "react";
import styles from "./css/HomeHero.module.css";
import { Search, MapPin } from "lucide-react";
import heroImage from "../assets/hero-image.png"; 
import AIlogo from "../assets/gemini-icon.png";

const HomeHero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1>
          Empower Your Future, <br />
          One Step at a Time !!
        </h1>
        <p className={styles.poweredBy}>
          <span>Powered by AI <img src={AIlogo} alt="AIlogo" /></span>
        </p>
        <p className={styles.description}>
          Welcome to a platform where opportunities fuel growth! Here, you can
          learn new skills, earn through real opportunities, and connect with
          like-minded individuals. Whether you’re advancing your career or
          starting fresh, this is the space for you to thrive in a supportive
          community.
        </p>
        <div className={styles.searchBar}>
          <div className={styles.searchInput}>
            <input
              type="text"
              placeholder="Looking for a Web developer Job.."
              className={styles.input}
            />
            <i class="fa-solid fa-location-dot"></i>
            <button className={styles.jobsButton}>Jobs <span>&#9660;</span></button>
          </div>
          <button className={styles.searchButton}>
            <i class="fa-solid fa-magnifying-glass"></i>
            Search
          </button>
        </div>
      </div>
      <div className={styles.heroImage}>
        <img src={heroImage} alt="Hero Illustration" />
      </div>
    </section>
  );
};

export default HomeHero;
