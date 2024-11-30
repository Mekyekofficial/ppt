import React from 'react';
import CourseTabStyles from './css/CourseTab.module.css';
import CourseTabHeading from './CourseTab/CourseTabHeading';
import CourseTools from './CourseTab/CourseTools';
import CourseBanner from './CourseTab/CourseBanner';
import CourseSection from './CourseTab/CourseSection';


const CourseTab = () => {
  return (
    <div className={CourseTabStyles["Course-tab"]}>
      <CourseTabHeading />
      <div className={CourseTabStyles["Course-content"]}>
        <div className={CourseTabStyles.sidebar}>
            <CourseTools />
        </div>
        <div className={CourseTabStyles["main-Course"]}>
            <CourseBanner />
            <CourseSection />
        </div>
      </div>
    </div>
  );
};

export default CourseTab;
