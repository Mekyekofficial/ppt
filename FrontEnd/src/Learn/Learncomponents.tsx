import React, { useState } from 'react';
import styles from './Css/Learncomponents.module.css';

const Learncomponents: React.FC = () => {
  const [email, setEmail] = useState('');
  const [showToast, setShowToast] = useState('');

  const featuredCourses = [
    {
      id: 1,
      category: 'AI & Machine Learning',
      duration: '4-6 months • Professional Certificate',
      title: 'Google AI for Everyone',
      description: 'Master AI fundamentals and machine learning techniques to advance your career in the fastest-growing field.',
      instructor: 'Andrew Ng, DeepLearning.AI',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      rating: 4.8,
      students: '2.1M+',
      level: 'Beginner',
      skills: ['Python', 'TensorFlow', 'Machine Learning', 'Deep Learning'],
      price: 'Free 7-day trial',
      university: 'Stanford University'
    },
    {
      id: 2,
      category: 'Data Science',
      duration: '6-8 months • Professional Certificate',
      title: 'IBM Data Science Professional Certificate',
      description: 'Learn in-demand skills like Python, SQL, and data visualization to become job-ready in data science.',
      instructor: 'IBM Skills Network Team',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      rating: 4.6,
      students: '890K+',
      level: 'Intermediate',
      skills: ['Python', 'SQL', 'Data Analysis', 'Machine Learning'],
      price: 'Included in Coursera Plus',
      university: 'IBM'
    },
    {
      id: 3,
      category: 'Business',
      duration: '3-4 months • Specialization',
      title: 'Google Project Management Professional Certificate',
      description: 'Gain essential project management skills to lead teams and deliver results in any industry.',
      instructor: 'Google Career Certificates',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      rating: 4.7,
      students: '1.5M+',
      level: 'Beginner',
      skills: ['Project Management', 'Agile', 'Leadership', 'Communication'],
      price: '$59/month',
      university: 'Google'
    }
  ];

  const stats = {
    courses: '10,000+',
    universities: '350+',
    certificates: '500+',
    learners: '100M+'
  };

  const showToastMessage = (message: string) => {
    setShowToast(message);
    setTimeout(() => setShowToast(''), 3000);
  };

  const handleEnrollClick = (courseTitle: string) => {
    showToastMessage(`🎉 Starting your journey with: ${courseTitle}`);
  };

  const handleViewAll = () => {
    showToastMessage('🚀 Exploring all 10,000+ courses available...');
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      showToastMessage(`✅ Welcome to Coursera Plus! Check your inbox at ${email}`);
      setEmail('');
    } else {
      showToastMessage('⚠️ Please enter a valid email address');
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
            <span className={styles.instructorName}>By {featuredCourses[0].instructor}</span>
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
            <span className={styles.instructorName}>By {featuredCourses[1].instructor}</span>
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
            <span className={styles.instructorName}>By {featuredCourses[2].instructor}</span>
            <button 
              className={styles.enrollButton}
              onClick={() => handleEnrollClick(featuredCourses[2].title)}
            >
              Enroll Now
            </button>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className={styles.newsletterSection}>
        <div className={styles.newsletterContent}>
          <h2 className={styles.newsletterTitle}>Join 100M+ learners worldwide</h2>
          <p className={styles.newsletterDescription}>
            Start your 7-day free trial and get unlimited access to 10,000+ courses from top universities and companies like Google, IBM, and Stanford.
          </p>
        </div>
        <form onSubmit={handleNewsletterSubmit} className={styles.newsletterForm}>
          <div className={styles.emailInput}>
            <input
              type="email"
              placeholder="Enter your email to get started"
              value={email}
              onChange={handleEmailChange}
              className={styles.emailField}
              required
            />
          </div>
          <button type="submit" className={styles.continueButton}>
            Start Free Trial
          </button>
        </form>
      </div>
    </div>
  );
};

export default Learncomponents;
