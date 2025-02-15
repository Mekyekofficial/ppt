import React, { useEffect, useState } from 'react';
import styles from './css/WorkItems.module.css';
import Work from './Work';
import axios from 'axios';

const WorkItems = ({ setSelectedJob }) => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get('http://localhost:5000/posts/jobs');
        setJobs(response.data); // Store fetched jobs
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };

    fetchJobs();
  }, []);

  return (
    <div className={styles.works}>
      {jobs.length > 0 ? (
        jobs.map(job => (
          <Work key={job._id} job={job} onSelectJob={setSelectedJob} />
        ))
      ) : (
        <p>Loading Jobs</p>
      )}
    </div>
  );
};

export default WorkItems;
