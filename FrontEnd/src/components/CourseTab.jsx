import React from 'react';
import CourseTabStyles from './css/CourseTab.module.css';
import CourseLeftContent from './CourseTab/CourseLeftContent';
import CourseSearchBar from './CourseTab/CourseSearchBar';
import CourseSection from './CourseTab/CourseSection';
import CourseBrowse from './CourseTab/CourseBrowse';
import CourseRightContent from './CourseTab/CourseRightContent';

const CourseTab = () => {
  return (
    <div className={CourseTabStyles["Course-tab"]}>
      <div className={CourseTabStyles.leftSidebar}>
          <CourseLeftContent />
      </div>
      <div className={CourseTabStyles["Course-content"]}>
        <div className={CourseTabStyles["Course-bar"]}>
          <CourseSearchBar />
          <CourseRightContent />
        </div>
        <div className={CourseTabStyles["main-Course"]}>
          <CourseSection />
          <CourseBrowse />
        </div>
      </div>
    </div>
  );
};

export default CourseTab;
