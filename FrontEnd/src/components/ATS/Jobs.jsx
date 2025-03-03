import React, { useState, useEffect } from "react";
import Filters from "./Jobs/Filters";
import Views from "./Jobs/Views";
import TableView from "./Jobs/TableView";
import CardView from "./Jobs/CardView";
import JobsStyles from "./css/Jobs.module.css";
import JobPopupForm from "./Jobs/JobPopupForm";
import API from "../../api";
import { use } from "react";

const JobDashboard = () => {
  const [openJobForm, setOpenJobForm] = useState(false);
  const [openInternshipForm, setOpenInternshipForm] = useState(false);
  const [openProjectForm, setOpenProjectForm] = useState(false);

  const [viewForJobs, setViewForJobs] = useState("table");
  const [viewForInternships, setViewForInternships] = useState("table");
  const [viewForProjects, setViewForProjects] = useState("table");

  const [jobs, setJobs] = useState([]); // State to hold job data
  const [Internship, setInternship] = useState([]); // State to hold Internship data
  const [Projects, setProjects] = useState([]); // State to hold Project data

  const [loading, setLoading] = useState(true);

  // Manage selected columns for table view
  const [selectedColumnsForJobs, setSelectedColumnsForJobs] = useState([
    "Applicants",
    "Posted On",
    "Posted By",
  ]);

  const [selectedColumnsForInternships, setSelectedColumnsForInternships] = useState([
    "Applicants",
    "Posted On",
    "Posted By",
  ]);

  const [selectedColumnsForProjects, setSelectedColumnsForProjects] = useState([
    "Applicants",
    "Posted On",
    "Posted By",
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
        `/ATS/get-company-jobs?companyId=${companyId}&jobType=Permanent`
      );
      setJobs(response.data); // Axios automatically parses JSON, no need for `response.json()`
    } catch (error) {
      console.error("Error fetching jobs:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchInternships = async (companyId) => {
    if (!companyId) {
      console.error("Company ID is missing.");
      setInternship([]);
      setLoading(false);
      return;
    }

    try {
      const response = await API.get(
        `/ATS/get-company-jobs?companyId=${companyId}&jobType=Internship`
      );
      setInternship(response.data);
    } catch (error) {
      console.error("Error fetching Internships:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchProjects = async (companyId) => {
    if (!companyId) {
      console.error("Company ID is missing.");
      setProjects([]);
      setLoading(false);
      return;
    }

    try {
      const response = await API.get(
        `/ATS/get-company-jobs?companyId=${companyId}&jobType=Project`
      );
      setProjects(response.data);
    } catch (error) {
      console.error("Error fetching Projects:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleClickOpenJobForm = () => {
    setOpenJobForm(true);
  };
  const handleClickOpenInternshipForm = () => {
    setOpenInternshipForm(true);
  };
  const handleClickOpenProjectForm = () => {
    setOpenProjectForm(true);
  };


  const handleCloseJobForm = () => {
    setOpenJobForm(false);
    fetchJobs();
  };
  const handleCloseInternshipForm = () => {
    setOpenInternshipForm(false);
    fetchInternships();
  };
  const handleCloseProjectForm = () => {
    setOpenProjectForm(false);
    fetchProjects();
  };

  useEffect(() => {
    const companyId = localStorage.getItem("company-id");

    if (companyId && companyId !== "null") {
      fetchJobs(companyId);
      fetchInternships(companyId);
      fetchProjects(companyId);
    } else {
      console.error("Invalid companyId:", companyId);
      setLoading(false);
    }
  }, []);

  return (
    <div className={JobsStyles.jobsWrapper}>
      <div className={JobsStyles.jobs}>
        <div className={JobsStyles["top-bar"]}>
          <button
            className={JobsStyles["create-job-btn"]}
            onClick={handleClickOpenJobForm}>
            Create a Job
          </button>
          <JobPopupForm open={openJobForm} onClose={handleCloseJobForm} />
        </div>

        <div className={JobsStyles.controls}>
          <Filters />
          <Views
            setView={setViewForJobs}
            selectedColumns={selectedColumnsForJobs}
            setSelectedColumns={setSelectedColumnsForJobs}
            role='job'
          />
        </div>

        <div className={JobsStyles.content}>
          {loading ? (
            <p>Loading jobs...</p>
          ) : viewForJobs === "table" ? (
            <TableView jobs={jobs} selectedColumns={selectedColumnsForJobs} role="Permanent"/>
          ) : (
            <CardView jobs={jobs} role="job"/>
          )}
        </div>
      </div>
      <div className={JobsStyles.jobs}>
        <div className={JobsStyles["top-bar"]}>
          <button
            className={JobsStyles["create-job-btn"]}
            onClick={handleClickOpenInternshipForm}>
            Create a Internship
          </button>
          <JobPopupForm open={openInternshipForm} onClose={handleCloseInternshipForm} />
        </div>

        <div className={JobsStyles.controls}>
          <Filters />
          <Views
            setView={setViewForInternships}
            selectedColumns={selectedColumnsForInternships}
            setSelectedColumns={setSelectedColumnsForInternships}
          />
        </div>

        <div className={JobsStyles.content}>
          {loading ? (
            <p>Loading Intership...</p>
          ) : viewForInternships === "table" ? (
            <TableView jobs={Internship} selectedColumns={selectedColumnsForInternships} role="internship"/>
          ) : (
            <CardView jobs={Internship} role="internship"/>
          )}
        </div>
      </div>
      <div className={JobsStyles.jobs}>
        <div className={JobsStyles["top-bar"]}>
          <button
            className={JobsStyles["create-job-btn"]}
            onClick={handleClickOpenProjectForm}>
            Create a Project
          </button>
          <JobPopupForm open={openProjectForm} onClose={handleCloseProjectForm} />
        </div>

        <div className={JobsStyles.controls}>
          <Filters />
          <Views
            setView={setViewForProjects}
            selectedColumns={selectedColumnsForProjects}
            setSelectedColumns={setSelectedColumnsForProjects}
          />
        </div>

        <div className={JobsStyles.content}>
          {loading ? (
            <p>Loading Projects...</p>
          ) : viewForProjects === "table" ? (
            <TableView jobs={Projects} selectedColumns={selectedColumnsForProjects} role="project"/>
          ) : (
            <CardView jobs={Projects} role="project"/>
          )}
        </div>
      </div>
    </div>
  );
};

export default JobDashboard;
