import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./css/HomeHero.module.css";
import AIlogo from "../assets/gemini-icon.png";

const HomeHero = () => {
  const [showJobList, setShowJobList] = useState(false);
  const [typedText, setTypedText] = useState("");
  const navigate = useNavigate();

  const jobTypes = [
    "Full-time Jobs",
    "Part-time Jobs",
    "Remote Jobs",
    "Freelance Jobs",
    "Internships",
    "Contract Jobs",
  ];

  const description =
    "Welcome to a platform where opportunities fuel growth! Here, you can learn new skills, earn through real opportunities, and connect with like-minded individuals. Whether you're advancing your career or starting fresh, this is the space for you to thrive in a supportive community.";

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < description.length) {
        setTypedText((prev) => prev + description[index]);
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 30);

    return () => clearInterval(typingInterval);
  }, []);

  const handleSearch = () => {
    // Search functionality will be implemented later
    console.log("Search clicked");
  };

  const handleJobSelect = (jobType) => {
    setShowJobList(false);
    // You can handle the selected job type here
  };

  return (
    <section className={styles.hero}>
      <div className={styles.heroWrapper}>
        <div className={styles.content}>
          <h1>
            Empower Your Future,
            <br />
            One Step at a Time !!
          </h1>
          <p className={styles.poweredBy}>
            <span>
              Powered by AI <img src={AIlogo} alt="AIlogo" />
            </span>
          </p>
          <p className={styles.description}>
            {typedText}
            <span className={styles.cursor}></span>
          </p>
          <div className={styles.searchBar}>
            <div className={styles.searchInput}>
              <i className="fa-solid fa-search"></i>
              <input
                type="text"
                placeholder="Jobs.."
                className={styles.input}
              />
              <i className="fa-solid fa-location-dot"></i>
            </div>
            <div className={styles.jobsWrapper}>
              <button
                className={styles.jobsButton}
                onClick={() => setShowJobList(!showJobList)}
              >
                Jobs <span>&#9660;</span>
              </button>
              {showJobList && (
                <div className={styles.jobsList}>
                  {jobTypes.map((job, index) => (
                    <div
                      key={index}
                      className={styles.jobItem}
                      onClick={() => handleJobSelect(job)}
                    >
                      {job}
                    </div>
                  ))}
                </div>
              )}
            </div>
            <button className={styles.searchButton} onClick={handleSearch}>
              <i className="fa-solid fa-magnifying-glass"></i>
              Search
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
