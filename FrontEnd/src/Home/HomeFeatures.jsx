import React, { useEffect, useRef, useState } from "react";
import styles from "./css/HomeFeatures.module.css";
import { ArrowRight } from "lucide-react";
import Internship from "../assets/internship.png";
import Jobs from "../assets/jobs.png";
import Courses from "../assets/courses.png";
import Community from "../assets/community.png";
import News from "../assets/news1.png";
import Events from "../assets/events1.png";

const features = [
  { title: "Internships & Gigs", desc: ["Hourly jobs", "Internship", "Freelance", "Market"], img: Internship, bg: styles.lightBg },
  { title: "Jobs", desc: ["ATS", "Post A Job", "Find A Job", "Talent Hunt"], img: Jobs, bg: styles.darkBg },
  { title: "Courses", desc: ["learn courses", "multiple skills", "Find A Job", "Talent Hunt"], img: Courses, bg: styles.darkBg },
  { title: "Community", desc: ["Engage,", "Share &", "Connect~~", "Build Your Community..."], img: Community, bg: styles.lightBg },
  { title: "News & Articles", desc: ["60 words news", "category", "driven audio", "embedded"], img: News, bg: styles.lightBg },
  { title: "Events", desc: ["Host & attend", "events", "Live events", "Find A Job", "Talent Hunt"], img: Events, bg: styles.darkBg },
];

const HomeFeatures = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className={styles.container}>
      {features.map((feature, index) => (
        <div
          key={index}
          className={`${styles.card} ${feature.bg} ${visible ? styles.visible : ""}`}
          style={{ animationDelay: `${index * 1}s` }}
        >
          <div className={styles.content}>
            <h3>{feature.title}</h3>
            <ul>
              {feature.desc.map((text, i) => (
                <li key={i}>{text}</li>
              ))}
            </ul>
          </div>
          <div className={styles.imageIcon} >
            <div className={styles.image}>
                <img src={feature.img} alt={feature.title} />
            </div>
            <div className={styles.icon}>
                <ArrowRight className={styles.ArrowRight}/>
                <span>Learn more</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomeFeatures;
