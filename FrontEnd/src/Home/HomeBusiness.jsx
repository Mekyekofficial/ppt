import React, { useEffect, useRef } from "react";
import { FaUsers, FaBriefcase, FaGraduationCap } from "react-icons/fa";
import styles from "./css/HomeBusiness.module.css";

const HomeBusiness = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.animate);
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = containerRef.current.querySelectorAll(
      `.${styles.statItem}`
    );
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const stats = [
    {
      icon: <FaUsers />,
      count: "10K+",
      label: "Active Users",
      color: "#4F46E5",
    },
    {
      icon: <FaBriefcase />,
      count: "5K+",
      label: "Job Opportunities",
      color: "#059669",
    },
    {
      icon: <FaGraduationCap />,
      count: "1K+",
      label: "Success Stories",
      color: "#DC2626",
    },
  ];

  return (
    <div className={styles.container} ref={containerRef}>
      <div className={styles.banner}>
        <div className={styles.content}>
          <h2>
            Empowering <span>Businesses</span> and <span>Talent</span>
          </h2>
          <p>
            Join thousands of companies and professionals who trust our platform
            for their career growth and business needs.
          </p>
        </div>
        <div className={styles.stats}>
          {stats.map((stat, index) => (
            <div
              key={index}
              className={styles.statItem}
              style={{ "--delay": `${index * 0.2}s` }}
            >
              <div className={styles.icon} style={{ color: stat.color }}>
                {stat.icon}
              </div>
              <div className={styles.statContent}>
                <h3 className={styles.statCount}>{stat.count}</h3>
                <p className={styles.statLabel}>{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeBusiness;
