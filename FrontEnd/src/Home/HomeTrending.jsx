import React, { useState } from "react";
import styles from "./css/HomeTrending.module.css";
import {
  FaBriefcase,
  FaUsers,
  FaGraduationCap,
  FaNewspaper,
} from "react-icons/fa";
import { MdWork } from "react-icons/md";

const HomeTrending = () => {
  const [activeTab, setActiveTab] = useState("jobs");

  const tabs = [
    { id: "jobs", label: "Jobs", icon: <FaBriefcase /> },
    { id: "community", label: "Community", icon: <FaUsers /> },
    { id: "internships", label: "Internships & Gigs", icon: <MdWork /> },
    { id: "courses", label: "Courses", icon: <FaGraduationCap /> },
    { id: "news", label: "News & Articles", icon: <FaNewspaper /> },
  ];

  const trendingContent = {
    jobs: [
      {
        title: "Senior Software Engineer",
        company: "Google",
        location: "Bangalore",
        salary: "₹25L - ₹45L",
        badge: "Hot",
      },
      {
        title: "Product Manager",
        company: "Microsoft",
        location: "Hyderabad",
        salary: "₹28L - ₹40L",
        badge: "Trending",
      },
      {
        title: "UI/UX Designer",
        company: "Apple",
        location: "Remote",
        salary: "₹18L - ₹35L",
        badge: "New",
      },
    ],
    community: [
      {
        title: "Tech Meetup 2024",
        organizer: "Developer Community",
        members: "5.2K",
        badge: "Active",
      },
      {
        title: "Women in Tech",
        organizer: "WIT Foundation",
        members: "8.7K",
        badge: "Popular",
      },
      {
        title: "Startup Network",
        organizer: "Startup India",
        members: "12K",
        badge: "Growing",
      },
    ],
    internships: [
      {
        title: "Software Development Intern",
        company: "Amazon",
        duration: "6 months",
        stipend: "₹50K/month",
        badge: "Top Rated",
      },
      {
        title: "Marketing Intern",
        company: "Flipkart",
        duration: "3 months",
        stipend: "₹35K/month",
        badge: "Verified",
      },
      {
        title: "Data Science Intern",
        company: "IBM",
        duration: "6 months",
        stipend: "₹45K/month",
        badge: "Featured",
      },
    ],
    courses: [
      {
        title: "Full Stack Development",
        provider: "Udacity",
        duration: "6 months",
        rating: "4.8",
        badge: "Bestseller",
      },
      {
        title: "AI & Machine Learning",
        provider: "Coursera",
        duration: "4 months",
        rating: "4.9",
        badge: "Popular",
      },
      {
        title: "Cloud Computing",
        provider: "AWS",
        duration: "3 months",
        rating: "4.7",
        badge: "Certified",
      },
    ],
    news: [
      {
        title: "Tech Industry Trends 2024",
        source: "TechCrunch",
        time: "2 hours ago",
        reads: "15K",
        badge: "Trending",
      },
      {
        title: "AI Revolution in Healthcare",
        source: "Forbes",
        time: "5 hours ago",
        reads: "10K",
        badge: "Featured",
      },
      {
        title: "Future of Remote Work",
        source: "Harvard Business Review",
        time: "1 day ago",
        reads: "25K",
        badge: "Editor's Pick",
      },
    ],
  };

  const renderContent = (type) => {
    const content = trendingContent[type];
    return (
      <div className={styles.trendingGrid}>
        {content.map((item, index) => (
          <div key={index} className={styles.trendingCard}>
            <div className={styles.cardHeader}>
              <h3>{item.title}</h3>
              <span className={styles.badge}>{item.badge}</span>
            </div>
            <div className={styles.cardContent}>
              {type === "jobs" && (
                <>
                  <p className={styles.company}>{item.company}</p>
                  <p className={styles.location}>{item.location}</p>
                  <p className={styles.salary}>{item.salary}</p>
                </>
              )}
              {type === "community" && (
                <>
                  <p className={styles.organizer}>{item.organizer}</p>
                  <p className={styles.members}>{item.members} members</p>
                </>
              )}
              {type === "internships" && (
                <>
                  <p className={styles.company}>{item.company}</p>
                  <p className={styles.duration}>{item.duration}</p>
                  <p className={styles.stipend}>{item.stipend}</p>
                </>
              )}
              {type === "courses" && (
                <>
                  <p className={styles.provider}>{item.provider}</p>
                  <p className={styles.duration}>{item.duration}</p>
                  <p className={styles.rating}>⭐ {item.rating}</p>
                </>
              )}
              {type === "news" && (
                <>
                  <p className={styles.source}>{item.source}</p>
                  <p className={styles.time}>{item.time}</p>
                  <p className={styles.reads}>{item.reads} reads</p>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.tabs}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`${styles.tab} ${
              activeTab === tab.id ? styles.active : ""
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.icon}
            <span>{tab.label}</span>
          </button>
        ))}
      </div>
      <div className={styles.content}>{renderContent(activeTab)}</div>
    </div>
  );
};

export default HomeTrending;
