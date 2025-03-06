import React from 'react';
import { useNavigate } from 'react-router-dom';
import CardViewStyles from './css/CardView.module.css';

const CardView = ({ jobs, role }) => {
  const navigate = useNavigate();

  const handleCardClick = (job) => {
    navigate(`/ATS/jobs/job-applicants/${job.jobId}`); // Navigate to JobApplication page
  };

  return (
    <div className={CardViewStyles.cards}>
      {jobs.map((job) => (
        <div 
          key={job._id} 
          className={CardViewStyles.card} 
          onClick={() => handleCardClick(job)} // Add click event
        >
          <div className={CardViewStyles["card-header"]}>
            <div className={CardViewStyles.title}>
              <h3>{job.title}</h3>
              <p>By {job.postedBy}</p>
            </div>
            <div className={CardViewStyles.more}>:</div>
          </div>
          <div className={CardViewStyles["card-body"]}>
            <div className={CardViewStyles["card-metric"]}>
              <div className={CardViewStyles.metric}>
                <h4>Total Candidates</h4>
                <p>{job.applicants || 0}</p>
                <p>Last 7 days <span className={CardViewStyles["arrow-up"]}>↑</span><span className={CardViewStyles["arrow-down"]}>↓</span></p>
              </div>
              <div className={CardViewStyles.metric}>
                <h4>Active Candidates</h4>
                <p>{job.activeCandidates || 0}</p>
                <p>Last 7 days <span className={CardViewStyles["arrow-up"]}>↑</span><span className={CardViewStyles["arrow-down"]}>↓</span></p>
              </div>
            </div>
            <div className={CardViewStyles["card-location"]}>
              <p>{job.location}</p>
              <p>Created on: {new Date(job.postedOn).toLocaleDateString()}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardView;
