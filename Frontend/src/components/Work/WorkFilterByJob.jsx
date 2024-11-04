import React from 'react';
import { FaRupeeSign } from 'react-icons/fa';
import styles from './css/WorkFilterByJob.module.css';

const WorkFilterByJob = () => {
  const jobFilters = [
    { range: '0-3 Lakhs', jobs: '5000 jobs' },
    { range: '3-6 Lakhs', jobs: '5345 jobs' },
    { range: '6-10 Lakhs', jobs: '4567 jobs' },
    { range: '10-12 Lakhs', jobs: '3900 jobs' },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <FaRupeeSign className={styles.icon} />
        <span>Filter jobs by salary</span>
      </div>
      <div className={styles.filters}>
        {jobFilters.map((filter, index) => (
          <div key={index} className={styles.filterBox}>
            <span className={styles.salaryRange}>₹ {filter.range}</span>
            <span className={styles.jobCount}>{filter.jobs}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkFilterByJob;
