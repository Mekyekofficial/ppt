import React, { useState, useEffect } from "react";
import Filters from "./Applications/Filters";
import Views from "./Applications/Views";
import TableView from "./Applications/TableView";
import CardView from "./Applications/CardView";
import ApplicationsStyles from "./css/Applications.module.css";
import API from "../../api";

const Applications = () => {
  const [view, setView] = useState("table");
  const [jobs, setJobs] = useState([]);
  const [jobIds, setJobIds] = useState([]);
  const [applicants, setApplicants] = useState([]);
  const [loading, setLoading] = useState(true);

  const [selectedColumns, setSelectedColumns] = useState([
    "Applicant",
    "Apply For",
    "Status",
  ]);

  const fetchJobs = async (companyId) => {
    if (!companyId) {
      console.error("Company ID is missing.");
      setJobs([]);
      setLoading(false);
      return;
    }

    try {
      const response = await API.get(
        `/ATS/get-company-jobs?companyId=${companyId}&jobType=All`
      );
      const jobs = response.data;
      setJobs(...jobs, jobs);
    
      const jobIds = jobs.map(job => job.jobId);
      setJobIds(jobIds);
      jobIds.forEach(async (jobId) => {
        const response = await API.get(`/ATS/applicants?jobId=${jobId}`);
        const applicants = response.data;
        setApplicants(...applicants, applicants);
      });
    } catch (error) {
      console.error("Error fetching jobs:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const companyId = localStorage.getItem("company-id");

    if (companyId && companyId !== "null") {
      fetchJobs(companyId);
    } else {
      console.error("Invalid companyId:", companyId);
      setLoading(false);
    }
  }, []);

  return (
    <div className={ApplicationsStyles.applications}>
      <div className={ApplicationsStyles["top-bar"]}>
        <button className={ApplicationsStyles["create-job-btn"]}>
          Find Applications
        </button>
      </div>

      <div className={ApplicationsStyles.controls}>
        <Filters />
        <Views
          setView={setView}
          selectedColumns={selectedColumns}
          setSelectedColumns={setSelectedColumns}
        />
      </div>

      <div className={ApplicationsStyles.content}>
        {view === "table" ? (
          <TableView applicants={applicants} jobs={jobs}  selectedColumns={selectedColumns} />
        ) : (
          <CardView applicants={applicants} jobs={jobs} />
        )}
      </div>
    </div>
  );
};

export default Applications;
