import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // Get jobId from URL
import {
  Card,
  CardContent,
  Button,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import API from "../../../api"; // Adjust the path to match your API service file
import styles from "./css/JobApplicants.module.css";
import ApplicantDetails from "./ApplicantDetails"; // Import the ApplicantDetails component

const JobApplicants = () => {
  const { jobId, jobType } = useParams(); // Get jobId from the URL
  const companyId = localStorage.getItem("company-id"); // Get companyId from localStorage

  // These are the columns that will always be shown initially.
  const [selectedColumns, setSelectedColumns] = useState([
    "Total Candidates",
    "Active Candidates",
    "On Hold",
  ]);
  // Additional columns that can be added.
  const allColumns = [
    "Interview Passed",
    "Interview Pending",
    "Rejected",
    "Hired",
  ];
  const [customColumns, setCustomColumns] = useState(
    allColumns.filter((col) => !selectedColumns.includes(col))
  );

  const [applicants, setApplicants] = useState([]); // Stores all applicant details
  const [jobApplicantsMap, setJobApplicantsMap] = useState({}); // Stores the job data with arrays of JobApply IDs per category
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Mapping from column header text to the corresponding key in job data
  const columnMapping = {
    "Total Candidates": "totalCandidates",
    "Active Candidates": "activeCandidates",
    "On Hold": "onHold",
    "Interview Passed": "interviewPassed",
    "Interview Pending": "interviewPending",
    Rejected: "rejected",
    Hired: "hired",
  };

  // Fetch both applicants and job-specific applicant distribution data
  useEffect(() => {
    if (!jobId || !companyId) return; // Ensure jobId and companyId exist before fetching

    const fetchData = async () => {
      try {
        // 1. Fetch all applicants for this job
        const responseApplicants = await API.get(
          `/ATS/applicants?jobId=${jobId}`
        );
        if (responseApplicants.status !== 200)
          throw new Error("Failed to fetch applicants");
        const applicantData = responseApplicants.data;
        setApplicants(applicantData);

        // 2. Fetch job data (which includes the arrays of applicant IDs per category)
        const responseJobs = await API.get(
          `/ATS/get-company-jobs?companyId=${companyId}&jobtype=${jobType}`
        );
        if (responseJobs.status !== 200)
          throw new Error("Failed to fetch job distribution");
        const jobDataArray = responseJobs.data;
        // Assume you get a single job document for this jobId; adjust if needed.
        const jobData = jobDataArray.find((job) => job.jobId === jobId) || {};
        setJobApplicantsMap(jobData);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [jobId, companyId]);

  // Toggle column selection as before
  const toggleColumn = (column, isAdding) => {
    if (isAdding) {
      setSelectedColumns([...selectedColumns, column]);
      setCustomColumns(customColumns.filter((col) => col !== column));
    } else {
      setSelectedColumns(selectedColumns.filter((col) => col !== column));
      setCustomColumns([...customColumns, column]);
    }
  };

  // Prepare a mapping of each selected column to an array of applicant objects.
  const columnsData = {};
  selectedColumns.forEach((col) => {
    const key = columnMapping[col];
    const applicantIds =
      jobApplicantsMap[key] && Array.isArray(jobApplicantsMap[key])
        ? jobApplicantsMap[key]
        : [];
    // For each applicant ID, find the corresponding applicant details.
    const applicantDetails = applicantIds
      .map((id) => {
        const applicant = applicants.find((app) => app._id === id);
        return applicant
          ? {
              id: applicant.userId,
              name: `${applicant.firstName} ${applicant.lastName}`,
            }
          : null;
      })
      .filter(Boolean); // Remove any null values.
    columnsData[col] = applicantDetails;
  });

  // Determine the maximum number of rows needed (based on the column with the most names)
  const maxRows = selectedColumns.reduce((max, col) => {
    const count = columnsData[col] ? columnsData[col].length : 0;
    return count > max ? count : max;
  }, 0);

  const [selectedApplicantId, setSelectedApplicantId] = useState(null);
  const closeApplicantDetails = () => {
    setOpenApplicantDetails(false);
    setSelectedApplicantId(null);
  };
  const [openApplicantDetails, setOpenApplicantDetails] = useState(false);
  

  return (
    <div className={styles.container}>
      <Card className={styles.viewsSection}>
        <CardContent>
          <h3>Views</h3>
          <div className={styles.customColumns}>
            <p>
              Customized columns: <span>(Choose any 3)</span>
            </p>
            <div className={styles.columnButtons}>
              {selectedColumns.map((col) => (
                <Button
                  key={col}
                  variant="contained"
                  color="primary"
                  className={styles.selected}
                  onClick={() => toggleColumn(col, false)}>
                  {col}
                  <ExpandLess fontSize="small" />
                </Button>
              ))}
              <br />
              {customColumns.map((col) => (
                <Button
                  key={col}
                  variant="outlined"
                  color="secondary"
                  className={styles.unselected}
                  onClick={() => toggleColumn(col, true)}>
                  {col}
                  <ExpandMore fontSize="small" />
                </Button>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Show loading or error message */}
      {loading ? (
        <p>Loading applicants...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <Table className={styles.table}>
          <TableHead>
            <TableRow>
              {selectedColumns.map((col) => (
                <TableCell key={col}>{col}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {maxRows > 0 ? (
              Array.from({ length: maxRows }).map((_, rowIndex) => (
                <TableRow key={rowIndex}>
                  {selectedColumns.map((col) => {
                    const applicant =
                      columnsData[col] && columnsData[col][rowIndex];
                    return (
                      <TableCell
                        key={col}
                        className={styles.cell}
                        onClick={() => {
                          if (applicant) {
                            setSelectedApplicantId(applicant.id);
                            setOpenApplicantDetails(true);
                          }
                        }}>
                        {applicant ? applicant.name : "—"}
                      </TableCell>
                    );
                  })}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={selectedColumns.length}
                  style={{ textAlign: "center" }}>
                  No applicants found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      )}
      {openApplicantDetails && <ApplicantDetails applicantId={selectedApplicantId} onClose={closeApplicantDetails}/>}
    </div>
  );
};

export default JobApplicants;
