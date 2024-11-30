import React from 'react';
import styles from './css/Course.module.css';
import { YouTube, Star, Person, People } from '@mui/icons-material';
import CourseSuggestions from './CourseSuggestions';
import CourseHeading from './CourseHeading';
import CourseContent from './CourseContent';

const Course = () => {
  return (
    <div className={styles.courseContainer}>
      <CourseHeading />
      <CourseContent />
      <CourseSuggestions />
    </div>
  );
};

export default Course;
