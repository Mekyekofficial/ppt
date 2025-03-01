import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styles from "./css/WorkDetails.module.css";
import WorkTitle from "./WorkTitle";
import WorkAbout from "./WorkAbout";
import WorkAboutCompany from "./WorkAboutCompany";
import WorkOtherCompanies from "./WorkOtherCompanies";

const WorkDetails = () => {
  const { jobId } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/posts/jobs/${jobId}`);
        setJob(response.data);
      } catch (error) {
        console.error("Error fetching job details:", error);
      }
    };

    fetchJobDetails();
  }, [jobId]);

  if (!job) {
    return <p>Loading job details...</p>;
  }

  return (
    <div className={styles["work-details"]}>
      <WorkTitle job={job} />
      <WorkAbout job={job} />
      <WorkAboutCompany job={job} />
      <WorkOtherCompanies job={job} />
    </div>
  );
};

export default WorkDetails;
