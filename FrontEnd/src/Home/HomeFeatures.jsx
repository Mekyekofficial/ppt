import React, { useEffect, useRef } from "react";
import styles from "./css/HomeFeatures.module.css";
import { FaArrowRight } from "react-icons/fa";

const HomeFeatures = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      { threshold: 0.2 }
    );

    const cards = containerRef.current.querySelectorAll(`.${styles.card}`);
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      title: "Find Your Dream Job",
      points: [
        "AI-powered job matching",
        "Real-time notifications",
        "One-click apply",
      ],
      image: "job-search.svg",
      isDark: false,
    },
    {
      title: "Skill Development",
      points: [
        "Personalized learning paths",
        "Industry certifications",
        "Expert mentorship",
      ],
      image: "learning.svg",
      isDark: true,
    },
    {
      title: "Career Growth",
      points: [
        "Salary insights",
        "Career path planning",
        "Professional network",
      ],
      image: "career.svg",
      isDark: false,
    },
    {
      title: "Company Culture",
      points: ["Company reviews", "Work-life balance", "Benefits comparison"],
      image: "culture.svg",
      isDark: true,
    },
    {
      title: "Interview Prep",
      points: [
        "AI interview practice",
        "Company research",
        "Salary negotiation",
      ],
      image: "interview.svg",
      isDark: false,
    },
    {
      title: "Professional Profile",
      points: ["AI resume builder", "Portfolio showcase", "Skill endorsements"],
      image: "profile.svg",
      isDark: true,
    },
  ];

  return (
    <div className={styles.container} ref={containerRef}>
      {features.map((feature, index) => (
        <div
          key={index}
          className={`${styles.card} ${
            feature.isDark ? styles.darkBg : styles.lightBg
          }`}
          style={{ "--delay": `${index * 0.1}s` }}
        >
          <div className={styles.content}>
            <h3>{feature.title}</h3>
            <ul>
              {feature.points.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
            <div className={styles.icon}>
              <span>Learn More</span>
              <div className={styles.ArrowRight}>
                <FaArrowRight />
              </div>
            </div>
          </div>
          <div className={styles.image}>
            <img src={`/src/assets/${feature.image}`} alt={feature.title} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomeFeatures;
