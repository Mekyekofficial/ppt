import React, { useEffect, useState } from 'react';
import styles from './css/WorkItems.module.css';
import WorkItem from './WorkItem';
import axios from 'axios';
import companyLogo from '../../assets/logo.png';

const WorkItems = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get('http://localhost:5000/posts/jobs');
        setJobs(response.data); // Store fetched jobs
        console.log("Jobs:", response.data);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };

    fetchJobs();
  }, []);

  return (
    <div className={styles.workItemsContainer}>
      {jobs.length > 0 ? (
        jobs.map(job => (
          <WorkItem key={job._id} job={job}/>
        ))
      ) : (
        <p>Loading jobs...</p>
      )}
    </div>
  );
};

export default WorkItems;
