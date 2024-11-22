import React from 'react';
import CourseTabStyles from './css/CourseTab.module.css';
import CourseHeading from './CourseTab/CourseHeading';
import CourseTools from './CourseTab/CourseTools';
import CourseBanner from './CourseTab/CourseBanner';


const CourseTab = () => {
  return (
    <div className={CourseTabStyles["Course-tab"]}>
      <CourseHeading />
      <div className={CourseTabStyles["Course-content"]}>
        <div className={CourseTabStyles.sidebar}>
            <CourseTools />
        </div>
        <div className={CourseTabStyles["main-Course"]}>
            <CourseBanner />
        </div>
      </div>
    </div>
  );
};

export default CourseTab;
