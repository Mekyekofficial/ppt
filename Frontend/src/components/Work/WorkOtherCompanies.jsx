import React from 'react';
import WorkOtherCompany from './WorkOtherCompany';
import styles from './css/WorkOtherCompanies.module.css';

const WorkOtherCompanies = () => {
  const companies = [1, 2, 3]; 

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Other Companies You might be Interested in</h2>
      <div className={styles.cards}>
        {companies.map((company, index) => (
          <WorkOtherCompany key={index} />
        ))}
      </div>
    </div>
  );
};

export default WorkOtherCompanies;
