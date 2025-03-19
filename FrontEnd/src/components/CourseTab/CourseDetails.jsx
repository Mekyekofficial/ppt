import React, { useState, useEffect } from 'react';
import CourseHeading from './CourseHeading';
import CourseContent from './CourseContent';
import Course from './Course';
import styles from './css/CourseDetails.module.css';

const CourseDetails = () => {
    const [currentCourse, setCurrentCourse] = useState({});
    const [suggestionCourses, setSuggestionCourses] = useState([]);
    
    useEffect(() => {
        const courseId = window.location.pathname.split('/')[2];
        const storedCourses = JSON.parse(localStorage.getItem('courses')) || [];
        const course = storedCourses.find(course => course._id === courseId);
        setCurrentCourse(course);
        const suggestions = storedCourses.filter(course => course._id !== courseId);
        setSuggestionCourses(suggestions);
    }, []);

    return (
        <div className={styles.courseDetails}>
            <div className={styles.contentWrapper}>
                <CourseHeading Course={currentCourse} />
                <CourseContent Course={currentCourse} />
                <div className={styles.CourseList}>
                    {suggestionCourses.length > 0 ? (
                        suggestionCourses.slice(0, 5).map(course => (
                            <Course key={course._id} Course={course} />
                        ))
                    ) : (
                        <p>Loading Courses...</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;
