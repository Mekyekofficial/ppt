import React, { useState } from 'react';
import Course from './Course';
import styles from './css/CourseSection.module.css';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import JSImage from '../../assets/js.png';
import aiImage from '../../assets/ai.png';
import reactImage from '../../assets/react.png';
import wordpressImage from '../../assets/wordpress.png';
import interviewImage from '../../assets/interview.png';
import dsaImage from '../../assets/dsa.png';

const CourseSection = () => {
  // Hardcoded array of courses
  const [Courses] = useState([
    {
      _id: "1",
      CourseName: "JavaScript Essentials Course",
      date: "2025-05-01",
      time: "10:00 AM",
      // Placeholder image or your own link
      CourseImage: JSImage,
      // Original YouTube link
      videoLink: "https://youtu.be/876aSEUA_8c?si=LyYIs-wK0fI5wJ"
    },
    {
      _id: "2",
      CourseName: "Neetcode 150 Course - All Coding Interview Questions Solved",
      date: "2025-06-10",
      time: "09:00 AM",
      CourseImage: interviewImage,
      videoLink: "https://youtu.be/T0u5nwSA0w0?si=GJaDMOimLLloZriB"
    },
    {
      _id: "3",
      CourseName: "How to Create a Website – WordPress Tutorial for Beginners 2025",
      date: "2025-07-15",
      time: "01:00 PM",
      CourseImage: wordpressImage,
      videoLink: "https://youtu.be/R4v_7hh4Yys?si=LwTGHheTzTd2cJmx"
    },
    {
      _id: "4",
      CourseName: "React Native Full Course for Beginners",
      date: "2025-08-20",
      time: "11:00 AM",
      CourseImage: reactImage,
      videoLink: "https://youtu.be/sm5Y7Vtuihg?si=8VdZbK-6INFF3TP1"
    },
    {
      _id: "5",
      CourseName: "Generative AI for Developers – Comprehensive Course",
      date: "2025-09-01",
      time: "02:00 PM",
      CourseImage: aiImage,
      videoLink: "https://youtu.be/F0GQ0l2NfHA?si=IJb5IxzEUDQLEUoz"
    },
    {
      _id: "6",
      CourseName: "Data Structures and Algorithms with Visualizations – Full Course (Java)",
      date: "2025-11-05",
      time: "04:00 PM",
      CourseImage: dsaImage,
      videoLink: "https://www.youtube.com/watch?v=2ZLl8GAk1X4&t=12s"
    },
    // Feel free to add more courses with original YouTube links
  ]);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <button className={styles.dateButton}>
          <CalendarMonthIcon className={styles.icon} />
          Recommended Courses
        </button>
        <span className={styles.seeMore}>See More</span>
      </div>

      <div className={styles.CourseList}>
        {Courses.length > 0 ? (
          Courses.map(course => (
            <Course key={course._id} Course={course} />
          ))
        ) : (
          <p>Loading Courses...</p>
        )}
      </div>
    </div>
  );
};

export default CourseSection;
