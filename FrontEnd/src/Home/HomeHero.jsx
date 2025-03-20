import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./css/HomeHero.module.css";
import AIlogo from "../assets/gemini-icon.png";

const HomeHero = () => {
  const [showJobList, setShowJobList] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [selectedJob, setSelectedJob] = useState("Jobs");
  const [searchInput, setSearchInput] = useState("");
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const jobTypes = [
    "Full-time Jobs",
    "Internships",
    "Remote Jobs",
    "Freelance",
  ];

  const description =
    "Welcome to a platform where opportunities fuel growth! Here, you can learn new skills, earn through real opportunities, and connect with like-minded individuals. ";

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

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowJobList(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleSearch = () => {
    if (!searchInput.trim() && selectedJob === "Jobs") {
      alert("Please enter a job search term or select a job type");
      return;
    }
    // Search functionality will be implemented later
    console.log("Searching for:", searchInput, "Job Type:", selectedJob);
  };

  const handleJobSelect = (jobType) => {
    setSelectedJob(jobType);
    setShowJobList(false);
    // You can handle the selected job type here
  };

  const features = [
    {
      icon: "fa-solid fa-briefcase",
      title: "Jobs",
      className: styles.featureBox1,
    },
    {
      icon: "fa-solid fa-laptop-code",
      title: "Internships & Gigs",
      className: styles.featureBox2,
    },
    {
      icon: "fa-solid fa-graduation-cap",
      title: "Courses",
      className: styles.featureBox3,
    },
    {
      icon: "fa-solid fa-clock",
      title: "Events",
      className: styles.featureBox4,
    },
    {
      icon: "fa-solid fa-users",
      title: "Community",
      className: styles.featureBox5,
    },
    {
      icon: "fa-solid fa-chart-line",
      title: "News & Articles",
      className: styles.featureBox6,
    },
  ];

  return (
    <section className={styles.hero}>
      <div className={styles.heroWrapper}>
        <div className={styles.content}>
          <h1>
            Empower Your Future,
            <br />
            One Step at a Time
          </h1>
          <p className={styles.poweredBy}>
            <span>
              Powered by AI <img src={AIlogo} alt="AI logo" />
            </span>
          </p>
          <div className={styles.descriptionSection}>
            <p className={styles.description}>
              {typedText}
              <span className={styles.cursor}></span>
            </p>
          </div>
          <div className={styles.searchBar}>
            <div className={styles.searchInput}>
              <i className="fa-solid fa-search"></i>
              <input
                type="text"
                placeholder="Search for jobs..."
                className={styles.input}
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                onKeyPress={handleKeyPress}
              />
              <i className="fa-solid fa-location-dot"></i>
            </div>
            <div className={styles.jobsWrapper} ref={dropdownRef}>
              <button
                className={styles.jobsButton}
                onClick={() => setShowJobList(!showJobList)}
                aria-expanded={showJobList}
                aria-haspopup="listbox"
              >
                {selectedJob}
                <span
                  style={{
                    transform: showJobList ? "rotate(180deg)" : "rotate(0deg)",
                    display: "inline-block",
                    transition: "transform 0.2s",
                  }}
                >
                  &#9660;
                </span>
              </button>
              {showJobList && (
                <div className={styles.jobsList} role="listbox">
                  {jobTypes.map((job, index) => (
                    <div
                      key={index}
                      className={styles.jobItem}
                      onClick={() => handleJobSelect(job)}
                      role="option"
                      aria-selected={selectedJob === job}
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

        <div className={styles.featureBoxes}>
          {features.map((feature, index) => (
            <div
              key={index}
              className={`${styles.featureBox} ${feature.className}`}
            >
              <i className={feature.icon}></i>
              <h3>{feature.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
