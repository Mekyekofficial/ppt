import React from 'react';
import styles from './css/CourseSection.module.css';
import CourseSectionCategory from './CourseSectionCategory';

const CourseSection = () => {
  return (
    <div className={styles.container}>
      <CourseSectionCategory
        title="Software Tools"
        description="Get ready to upskill yourself"
        items={[
          'Artificial Intelligence & machine learning',
          'Cyber security',
          'Data Analytics',
          'Blockchain',
          'Web-Development',
          'Ethical Hacking',
          'App Development',
          'IOT',
        ]}
        viewMore
      />
      <CourseSectionCategory
        title="Subjects"
        description="Empower your journey with visualization"
        items={[
          'Computer Network',
          'DBMS',
          'Operating System',
          'DSA',
          'DAA',
          'Object-oriented programming',
          'Generative AI',
          'Machine Learning',
        ]}
        viewMore
      />
      <CourseSectionCategory
        title="Management studies"
        description="Brush up your manage and ace skills"
        items={['Statistics', 'Brand Management', 'Guestimates & Case Study', 'Tableau']}
        viewMore
      />
      <CourseSectionCategory
        title="Coding Zone"
        description="Unlock your coding skills with great practices"
        items={['C programming', 'Learn C++', 'Java', 'Python']}
        viewMore
      />
    </div>
  );
};

export default CourseSection;
