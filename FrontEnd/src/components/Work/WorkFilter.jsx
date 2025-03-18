import React, { useState } from "react";
import styles from "./css/WorkFilter.module.css";
import { ChevronDown, ChevronUp } from "lucide-react";

const filterOptions = {
  Job: {
    "Job type": ["In Office", "Remote", "Hybrid", "Field Work"],
    Eligibility: ["Professionals", "College Students"],
    Salary: ["0-3 Lakhs", "3-6 Lakhs", "6-12 Lakhs"],
    Location: ["Kolkata", "Mumbai", "Delhi/NCR", "Bengaluru", "Hyderabad"],
    Experience: ["Freshers", "0-2 Year", "2-5 Year", "5+ Year"],
  },
  Internship: {
    "Internship type": ["In Office", "Remote", "Hybrid", "Field Work"],
    Location: ["Kolkata", "Mumbai", "Delhi/NCR", "Bengaluru", "Hyderabad"],
  },
  Project: {
    "Project Type": [
      "Web Development",
      "Database administrator",
      "Software Engineer",
      "Network Engineer",
      "Data Scientist",
      "UI/UX Designer",
      "Data Analysis",
      "Cybersecurity",
      "Application Development",
      "System Engineer",
      "Artificial Intelligence",
      "Robotics",
      "Python Project",
      "Java Project",
      "C Projects",
      "C++ Projects",
      "Machine Learning",
      "Library Management System",
      "Blockchain",
      "Cloud Computing",
      "Game Development",
      "Virtual Reality (VR) / Augmented Reality (AR)",
      "Embedded Systems",
    ],
  },
};

const WorkFilter = () => {
  const [selectedCategory, setSelectedCategory] = useState("Job");
  const [openFilters, setOpenFilters] = useState({});

  const toggleFilter = (category) => {
    setOpenFilters((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  return (
    <div className={styles.container}>
      <div className={styles.categoryButtons}>
        {["Job", "Internship", "Project"].map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`${styles.categoryBtn} ${selectedCategory === category ? styles.active : ''}`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className={styles.filters}>
        {Object.entries(filterOptions[selectedCategory]).map(([filter, options]) => (
          <div key={filter} className={styles.filterSection}>
            <div className={styles.filterHeader} onClick={() => toggleFilter(filter)}>
              <span>{filter}</span>
              {openFilters[filter] ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </div>
            {openFilters[filter] && (
              <div className={styles.filterOptions}>
                {options.map((option) => (
                  <label key={option} className={styles.option}>
                    <input type="radio" name={filter} value={option} />
                    {option}
                  </label>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkFilter;
