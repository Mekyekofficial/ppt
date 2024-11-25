import React from 'react';
import styles from './css/CourseSectionCategory.module.css';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const goToCatagory = () => {
  console.log('clicked');
}

const CourseSectionCategory = ({ title, description, items, viewMore }) => {
  return (
    <div className={styles.category} onClick={goToCatagory}>
      <div className={styles.header}>
        <div>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className={styles.items}>
        {items.map((item, index) => (
          <button key={index} className={styles.itemButton}>
            {item}
          </button>
        ))}
      </div>
      {viewMore && (
          <div className={styles.viewMore}>
            view more
          </div>
      )}
    </div>
  );
};

export default CourseSectionCategory;
