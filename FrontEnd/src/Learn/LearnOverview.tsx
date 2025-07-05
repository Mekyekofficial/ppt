import React, { useState } from 'react';
import styles from './Css/LearnOverview.module.css';

const LearnOverview: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showToast, setShowToast] = useState('');

  const learningPaths = [
    {
      id: 1,
      title: 'Business Leadership',
      description: 'Develop essential leadership skills to drive organizational success',
      courses: '12 courses',
      icon: '🎓'
    },
    {
      id: 2,
      title: 'Data & Analytics',
      description: 'Master data analysis techniques for impactful business decisions',
      courses: '12 courses',
      icon: '💾'
    },
    {
      id: 3,
      title: 'Career Development',
      description: 'Enhance your professional skills and advance your career',
      courses: '12 courses',
      icon: '🏢'
    }
  ];

  const showToastMessage = (message: string) => {
    setShowToast(message);
    setTimeout(() => setShowToast(''), 3000);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    showToastMessage(`Searching for: ${searchQuery}`);
  };

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleExploreCourses = () => {
    showToastMessage('Exploring courses...');
  };

  const handleViewLearningPaths = () => {
    showToastMessage('Viewing learning paths...');
  };

  const handlePathExplore = (pathTitle: string) => {
    showToastMessage(`Exploring ${pathTitle} courses`);
  };

  const handleFilter = () => {
    showToastMessage('Opening filters...');
  };

  const handleSort = () => {
    showToastMessage('Opening sort options...');
  };

  const handleViewAll = () => {
    showToastMessage('Viewing all learning paths...');
  };

  return (
    <div className={styles.learnContainer}>
      {/* Toast Messages */}
      {showToast && (
        <div className={styles.toast}>
          {showToast}
        </div>
      )}

      {/* Search Section */}
      <form onSubmit={handleSearch} className={styles.searchContent}>
        <div className={styles.searchIcon}>
          <div className={styles.searchIconVector}></div>
        </div>
        <div className={styles.placeText}>
          <input
            type="text"
            placeholder="search for courses, topics, or instructors..."
            value={searchQuery}
            onChange={handleSearchInputChange}
            className={styles.searchInput}
          />
        </div>
        <button type="submit" className={styles.searchButton}>
          Search
        </button>
      </form>

      {/* Filter and Sort Buttons */}
      <button className={styles.filterButton} onClick={handleFilter}>
        Filter
      </button>
      <button className={styles.sortButton} onClick={handleSort}>
        Sort By
      </button>

      {/* Hero Section */}
      <div className={styles.exploreCourses}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Advance Your Career with Expert-Led Courses
          </h1>
          <p className={styles.heroDescription}>
            Discover professional courses designed to help you gain new skills, stay competitive, and achieve your career goals.
          </p>
        </div>
        <div className={styles.heroButtons}>
          <button className={styles.exploreCoursesBtn} onClick={handleExploreCourses}>
            Explore Courses
          </button>
          <button className={styles.viewLearningPathsBtn} onClick={handleViewLearningPaths}>
            view Learning paths
          </button>
        </div>
      </div>

      {/* Learning Paths Section */}
      <h2 className={styles.learningPathsTitle}>Learning Paths</h2>
      <button className={styles.viewAllButton} onClick={handleViewAll}>
        view all
      </button>

      {/* Learning Path Cards */}
      {learningPaths.map((path, index) => (
        <div key={path.id} className={`${styles.pathCard} ${styles[`path${index + 1}`]}`}>
          <div className={styles.pathContent}>
            <div className={styles.pathIcon}>
              {path.icon}
            </div>
            <div className={styles.pathInfo}>
              <h3 className={styles.pathTitle}>{path.title}</h3>
              <p className={styles.pathDescription}>{path.description}</p>
            </div>
          </div>
          <div className={styles.pathFooter}>
            <span className={styles.pathCourses}>{path.courses}</span>
            <button 
              className={styles.pathExploreBtn}
              onClick={() => handlePathExplore(path.title)}
            >
              Explore
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LearnOverview;
