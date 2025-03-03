import React, { useEffect, useState } from 'react';
import styles from './css/WorkItems.module.css';
import Work from './Work';
import axios from 'axios';
import API from '../../api';

const WorkItems = ({ setSelectedJob }) => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      let backendJobs = [];
      let dataworksJobs = [];
      try {
        const response = await API.get('/posts/jobs');
        backendJobs = response.data;

        // const dataworksResponse = await axios.get('https://findwork.dev/api/jobs/', {
        //   headers: {
        //     'Authorization': 'Token c3b2e6a3e285fdb8dd624e19de6e8526418e5659'
        //   }
        // });
        setJobs([...backendJobs, ...dataworksJobs]);
        console.log(dataworksResponse);
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
