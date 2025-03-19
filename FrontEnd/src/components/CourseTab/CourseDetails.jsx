import React, { useState, useEffect } from 'react';
import CourseHeading from './CourseHeading';
import CourseContent from './CourseContent';
import CourseSuggestions from './CourseSuggestions';
import styles from './css/CourseDetails.module.css';

const CourseDetails = () => {
    const [Course, setCourse] = useState({});
    useEffect(() => {
        const courseId = window.location.pathname.split('/')[2];
        const storedCourses = JSON.parse(localStorage.getItem('courses')) || [];
        const course = storedCourses.find(course => course._id === courseId);
        setCourse(course);
    }, []);

    return (
        <div className={styles.courseDetails}>
            <div className={styles.contentWrapper}>
                <CourseHeading Course={Course} />
                <CourseContent Course={Course} />
                <div className={styles.suggestionsContainer}>
                    <CourseSuggestions Course={Course} />
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;