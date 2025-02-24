import React, { useState } from "react";
import styles from "./css/HomeCards.module.css";
import {
  FaBriefcase,
  FaUsers,
  FaGraduationCap,
  FaNewspaper,
  FaCalendar,
  FaArrowRight,
  FaMapMarkerAlt,
  FaDollarSign,
  FaClock,
} from "react-icons/fa";

const HomeCards = () => {
  const [activeTab, setActiveTab] = useState("Jobs");

  const navItems = [
    { icon: <FaBriefcase />, title: "Jobs", color: "#4F46E5" },
    { icon: <FaUsers />, title: "Community", color: "#059669" },
    { icon: <FaGraduationCap />, title: "Courses", color: "#DC2626" },
    { icon: <FaNewspaper />, title: "News & Articles", color: "#7C3AED" },
    { icon: <FaCalendar />, title: "Events", color: "#2563EB" },
  ];

  const trendingContent = {
    Jobs: [
      {
        title: "Senior Software Engineer",
        company: "Google",
        location: "Bangalore",
        salary: "₹25-45 LPA",
        type: "Full-time",
        posted: "2 days ago",
      },
      {
        title: "Product Manager",
        company: "Microsoft",
        location: "Hyderabad",
        salary: "₹28-40 LPA",
        type: "Full-time",
        posted: "1 day ago",
      },
      {
        title: "UI/UX Designer",
        company: "Apple",
        location: "Remote",
        salary: "₹18-35 LPA",
        type: "Full-time",
        posted: "3 days ago",
      },
    ],
    Community: [
      {
        title: "Tech Innovators",
        members: "15.2K",
        description: "A community of tech enthusiasts and innovators",
      },
      {
        title: "Design Hub",
        members: "8.7K",
        description: "Connect with UI/UX designers worldwide",
      },
      {
        title: "Startup Network",
        members: "12.4K",
        description: "For entrepreneurs and startup enthusiasts",
      },
    ],
    Courses: [
      {
        title: "Full Stack Development",
        provider: "Udacity",
        duration: "6 months",
        rating: "4.8",
        students: "12K+",
      },
      {
        title: "AI & Machine Learning",
        provider: "Coursera",
        duration: "4 months",
        rating: "4.9",
        students: "15K+",
      },
      {
        title: "Cloud Computing",
        provider: "AWS",
        duration: "3 months",
        rating: "4.7",
        students: "8K+",
      },
    ],
    "News & Articles": [
      {
        title: "The Future of AI in 2024",
        source: "TechCrunch",
        readTime: "5 min read",
        category: "Technology",
      },
      {
        title: "Top Programming Languages to Learn",
        source: "Medium",
        readTime: "8 min read",
        category: "Development",
      },
      {
        title: "Remote Work Trends",
        source: "Forbes",
        readTime: "6 min read",
        category: "Career",
      },
    ],
    Events: [
      {
        title: "Tech Conference 2024",
        date: "Mar 15, 2024",
        location: "Bangalore",
        type: "In-person",
      },
      {
        title: "Web Development Workshop",
        date: "Mar 20, 2024",
        location: "Online",
        type: "Virtual",
      },
      {
        title: "AI Summit",
        date: "Apr 5, 2024",
        location: "Delhi",
        type: "Hybrid",
      },
    ],
  };

  const renderContent = () => {
    const content = trendingContent[activeTab];
    return (
      <div className={styles.content}>
        <div className={styles.sectionHeader}>
          <h3>Trending in {activeTab}</h3>
          <button className={styles.seeAll}>
            See All <FaArrowRight />
          </button>
        </div>
        <div className={styles.trendingGrid}>
          {content.map((item, index) => (
            <div key={index} className={styles.trendingCard}>
              {activeTab === "Jobs" && (
                <>
                  <div className={styles.cardHeader}>
                    <h4>{item.title}</h4>
                    <span className={styles.jobType}>{item.type}</span>
                  </div>
                  <p className={styles.company}>{item.company}</p>
                  <div className={styles.jobDetails}>
                    <span>
                      <FaMapMarkerAlt /> {item.location}
                    </span>
                    <span>
                      <FaDollarSign /> {item.salary}
                    </span>
                    <span>
                      <FaClock /> {item.posted}
                    </span>
                  </div>
                  <button className={styles.applyButton}>Apply Now</button>
                </>
              )}
              {activeTab === "Community" && (
                <>
                  <div className={styles.cardHeader}>
                    <div className={styles.cardInfo}>
                      <h4>{item.title}</h4>
                      <span className={styles.members}>
                        {item.members} members
                      </span>
                    </div>
                    <button className={styles.joinButton}>Join</button>
                  </div>
                  <p>{item.description}</p>
                </>
              )}
              {activeTab === "Courses" && (
                <>
                  <div className={styles.cardHeader}>
                    <h4>{item.title}</h4>
                    <span className={styles.rating}>⭐ {item.rating}</span>
                  </div>
                  <p className={styles.provider}>{item.provider}</p>
                  <div className={styles.courseDetails}>
                    <span>{item.duration}</span>
                    <span>{item.students} students</span>
                  </div>
                  <button className={styles.enrollButton}>Enroll Now</button>
                </>
              )}
              {activeTab === "News & Articles" && (
                <>
                  <span className={styles.category}>{item.category}</span>
                  <h4>{item.title}</h4>
                  <div className={styles.articleDetails}>
                    <span>{item.source}</span>
                    <span>•</span>
                    <span>{item.readTime}</span>
                  </div>
                  <button className={styles.readButton}>Read More</button>
                </>
              )}
              {activeTab === "Events" && (
                <>
                  <div className={styles.cardHeader}>
                    <h4>{item.title}</h4>
                    <span className={styles.eventType}>{item.type}</span>
                  </div>
                  <div className={styles.eventDetails}>
                    <span>
                      <FaCalendar /> {item.date}
                    </span>
                    <span>
                      <FaMapMarkerAlt /> {item.location}
                    </span>
                  </div>
                  <button className={styles.registerButton}>
                    Register Now
                  </button>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        {navItems.map((item, index) => (
          <button
            key={index}
            className={`${styles.navItem} ${
              activeTab === item.title ? styles.active : ""
            }`}
            onClick={() => setActiveTab(item.title)}
            style={{ "--accent-color": item.color }}
          >
            <span className={styles.icon}>{item.icon}</span>
            <span className={styles.title}>{item.title}</span>
          </button>
        ))}
      </nav>
      {renderContent()}
    </div>
  );
};

export default HomeCards;
