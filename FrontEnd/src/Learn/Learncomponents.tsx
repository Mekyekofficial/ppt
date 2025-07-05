import React, { useState } from 'react';
import styles from './Css/Learncomponents.module.css';

const Learncomponents: React.FC = () => {
  const [email, setEmail] = useState('');
  const [showToast, setShowToast] = useState('');

  const featuredCourses = [
    {
      id: 1,
      category: 'Business',
      duration: '6 weeks • Beginner',
      title: 'Introduction to Business Leadership',
      description: 'Master the fundamentals of effective business leadership in modern organizations',
      instructor: 'Dr. Emily Chen',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
    },
    {
      id: 2,
      category: 'Technology',
      duration: '8 weeks • Intermediate',
      title: 'Data Science for Managers',
      description: 'Learn how to make data-driven decisions that impact business growth',
      instructor: 'Prof. Michael Johnson',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
    },
    {
      id: 3,
      category: 'Innovation',
      duration: '4 weeks • Advanced',
      title: 'Strategic Innovation',
      description: 'Develop strategies for fostering innovation within your organization',
      instructor: 'Dr. Sarah Williams',
      image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
    }
  ];

  const showToastMessage = (message: string) => {
    setShowToast(message);
    setTimeout(() => setShowToast(''), 3000);
  };

  const handleEnrollClick = (courseTitle: string) => {
    showToastMessage(`Enrolling in: ${courseTitle}`);
  };

  const handleViewAll = () => {
    showToastMessage('Viewing all featured courses...');
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      showToastMessage(`Subscribed with email: ${email}`);
      setEmail('');
    } else {
      showToastMessage('Please enter a valid email address');
    }
  };

  return (
    <div className={styles.componentsContainer}>
      {/* Toast Messages */}
      {showToast && (
        <div className={styles.toast}>
          {showToast}
        </div>
      )}

      {/* Featured Courses */}
      <h2 className={styles.featuredCoursesTitle}>Featured Courses</h2>
      <button className={styles.viewAllButton} onClick={handleViewAll}>
        view all
      </button>

      {/* course 1 */}
      <div className={styles.course1}>
        <div className={styles.courseImageContainer}>
          <div 
            className={styles.courseImage}
            style={{
              backgroundImage: `url(${featuredCourses[0].image})`
            }}
          ></div>
        </div>
        <div className={styles.courseContent}>
          <div className={styles.courseHeader}>
            <div className={styles.categoryBadge}>
              {featuredCourses[0].category}
            </div>
            <div className={styles.courseDuration}>
              {featuredCourses[0].duration}
            </div>
          </div>
          <div className={styles.courseInfo}>
            <div className={styles.courseDetails}>
              <h3 className={styles.courseTitle}>{featuredCourses[0].title}</h3>
              <p className={styles.courseDescription}>{featuredCourses[0].description}</p>
            </div>
          </div>
          <div className={styles.courseFooter}>
            <span className={styles.instructorName}>Instructor: {featuredCourses[0].instructor}</span>
            <button 
              className={styles.enrollButton}
              onClick={() => handleEnrollClick(featuredCourses[0].title)}
            >
              Enroll Now
            </button>
          </div>
        </div>
      </div>

      {/* course 2 */}
      <div className={styles.course2}>
        <div className={styles.courseImageContainer}>
          <div 
            className={styles.courseImage}
            style={{
              backgroundImage: `url(${featuredCourses[1].image})`
            }}
          ></div>
        </div>
        <div className={styles.courseContent}>
          <div className={styles.courseHeader}>
            <div className={styles.categoryBadge}>
              {featuredCourses[1].category}
            </div>
            <div className={styles.courseDuration}>
              {featuredCourses[1].duration}
            </div>
          </div>
          <div className={styles.courseInfo}>
            <div className={styles.courseDetails}>
              <h3 className={styles.courseTitle}>{featuredCourses[1].title}</h3>
              <p className={styles.courseDescription}>{featuredCourses[1].description}</p>
            </div>
          </div>
          <div className={styles.courseFooter}>
            <span className={styles.instructorName}>Instructor: {featuredCourses[1].instructor}</span>
            <button 
              className={styles.enrollButton}
              onClick={() => handleEnrollClick(featuredCourses[1].title)}
            >
              Enroll Now
            </button>
          </div>
        </div>
      </div>

      {/* course 3 */}
      <div className={styles.course3}>
        <div className={styles.courseImageContainer}>
          <div 
            className={styles.courseImage}
            style={{
              backgroundImage: `url(${featuredCourses[2].image})`
            }}
          ></div>
        </div>
        <div className={styles.courseContent}>
          <div className={styles.courseHeader}>
            <div className={styles.categoryBadge}>
              {featuredCourses[2].category}
            </div>
            <div className={styles.courseDuration}>
              {featuredCourses[2].duration}
            </div>
          </div>
          <div className={styles.courseInfo}>
            <div className={styles.courseDetails}>
              <h3 className={styles.courseTitle}>{featuredCourses[2].title}</h3>
              <p className={styles.courseDescription}>{featuredCourses[2].description}</p>
            </div>
          </div>
          <div className={styles.courseFooter}>
            <span className={styles.instructorName}>Instructor: {featuredCourses[2].instructor}</span>
            <button 
              className={styles.enrollButton}
              onClick={() => handleEnrollClick(featuredCourses[2].title)}
            >
              Enroll Now
            </button>
          </div>
        </div>
      </div>

      {/* nws letter */}
      <div className={styles.newsletterSection}>
        <div className={styles.newsletterContent}>
          <h2 className={styles.newsletterTitle}>Stay Updated with New Courses</h2>
          <p className={styles.newsletterDescription}>
            Subscribe to our newsletter to receive updates on new courses, industry insights, and learning tips.
          </p>
        </div>
        <form onSubmit={handleNewsletterSubmit} className={styles.newsletterForm}>
          <div className={styles.emailInput}>
            <input
              type="email"
              placeholder="Enter your Email"
              value={email}
              onChange={handleEmailChange}
              className={styles.emailField}
              required
            />
          </div>
          <button type="submit" className={styles.continueButton}>
            Continue
          </button>
        </form>
      </div>
    </div>
  );
};

export default Learncomponents;
