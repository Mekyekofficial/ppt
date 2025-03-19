import React, { useEffect, useState } from 'react';
import styles from './css/WorkItems.module.css';
import Work from './Work';
import API from '../../api';
import axios from 'axios';

const WorkItems = ({ setSelectedJob }) => {
  const [jobs, setJobs] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      let jobsFromFirst = [];
      let jobsFromSecond = [];
      try {
        // First API call using your custom API instance
        const response1 = await API.get("/posts/jobs");
        jobsFromFirst = Array.isArray(response1.data)
          ? response1.data
          : []; // Ensure we have an array

        } catch (err) {
          console.error("Error fetching jobs:", err);
          setError("Error fetching jobs. Please try again later.");
        }

        try {

        // Second API call using axios directly
        const options = {
          method: "POST",
          url: "https://api.theirstack.com/v1/jobs/search",
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJzdWRkaGFqaXRjaG93ZGh1cnkyMjZAZ21haWwuY29tIiwicGVybWlzc2lvbnMiOiJ1c2VyIiwiY3JlYXRlZF9hdCI6IjIwMjUtMDMtMTlUMDI6NTY6MDEuMjE2ODkxKzAwOjAwIn0.ikDQNsslpcuLZNLmIan83MsKpFbPinwuXwQaLzZpuzE"
          },
          data: {
            page: 0,
            limit: 1,
            job_country_code_or: ["IN"],
            posted_at_max_age_days: 7
          }
        };

        const response2 = await axios.request(options);
        console.log(response2.data.data);
        // Check if the API returns an array directly or an object with a 'jobs' property
        jobsFromSecond = Array.isArray(response2.data.data)
          ? response2.data.data
          : response2.data.jobs
          ? response2.data.jobs
          : [];
        } catch (err) {
          console.error("Error fetching jobs:", err);
          setError("Error fetching jobs. Please try again later.");
        }

        // Merge both arrays into one state
        setJobs([...jobsFromFirst, ...jobsFromSecond]);
      
    };

    fetchJobs();
  }, []);

  // useEffect(() => {
  //   getJson({
  //     engine: "google_jobs_listing",
  //     q: "eyJqb2JfdGl0bGUiOiJCYXJpc3RhIiwiaHRpZG9jaWQiOiJ5Vy1laV9FQ3Y3Z0FBQUFBQUFBQUFBPT0iLCJnbCI6InVzIiwiaGwiOiJlbiIsImZjIjoiRXZjQkNyY0JRVUYwVm14aVJETmtXVmxsYm5SNVNqZFVNM3BEVkd0d1drcFdZVXRzTTNOQmFIaHVPVEpXWWsxbGVsRldiMGxYVjBWdUxVdzNYMlF5V0VKTVpEaDRMVkZ6Umtwek5qSklaRkJtVTJReU5FbGxZa0ZDWnpCemVUY3lYemc1UkU5blNIWlpRVnBRU1doMFJHMXljRk50VkhCemJsOUxjbUprYURKNU4ybE5hMmt5Vmpkc2RuUmpORnB3VkcwemEzUmFTV3RZYWxGcmFHRjJkek0yTVcxeGNGbGliM2xCWmtveVl6ZDJRMTlrYTB0alYzQkpjbVZ2RWhkSVNHVnNXVFpFY2toTU1tOXhkSE5RYms1MVIzRkJaeG9pUVVSVmVVVkhaV2xpVmxaaVgxRnRkbXRrVmpaVWQxVnVhbWsxYW5KT2QyaE9adyIsImZjdiI6IjMiLCJmY19pZCI6ImZjXzEiLCJhcHBseV9saW5rIjp7InRpdGxlIjoiLm5GZzJlYntmb250LXdlaWdodDo1MDB9LkJpNkRkY3tmb250LXdlaWdodDo1MDB9QXBwbHkgZGlyZWN0bHkgb24gSW5kZWVkIiwibGluayI6Imh0dHBzOi8vd3d3LmluZGVlZC5jb20vdmlld2pvYj9qaz03ZTA0YWYyNmIyZGE2NjljXHUwMDI2dXRtX2NhbXBhaWduPWdvb2dsZV9qb2JzX2FwcGx5XHUwMDI2dXRtX3NvdXJjZT1nb29nbGVfam9ic19hcHBseVx1MDAyNnV0bV9tZWRpdW09b3JnYW5pYyJ9fQ",
  //     api_key: "1c62935b9c933fcc56f5665c6fc9c999c8fb80a2b80f4fa70de4b5199c0422a1"
  //   }, (json) => {
  //     console.log(json["apply_options"]);
  //   });
  // }
  // , []);

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
