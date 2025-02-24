import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Course from './Course';
import styles from './css/CourseSection.module.css';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const CourseSection = () => {
  const [Courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get('http://localhost:5000/posts/Courses');
        setCourses(response.data); // Store fetched Courses
      } catch (error) {
        console.error("Error fetching Courses:", error);
      }
    };

    fetchCourses();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <button className={styles.dateButton}>
          <CalendarMonthIcon className={styles.icon} />
          Recomended Courses
        </button>
        <span className={styles.seeMore}>See More</span>
      </div>

      <div className={styles.CourseList}>
        {Courses.length > 0 ? (
          Courses.map(Course => <Course key={Course._id} Course={Course} />)
        ) : (
          <p>Loading Courses...</p>
        )}
      </div>
    </div>
  );
};

export default CourseSection;
