import React, { useState, useEffect } from "react";
import TableViewStyles from "./css/TableView.module.css";
import API from "../../../../api";
import Spinner from "../../../Animation/Spinner";

const TableView = ({ applicants, selectedColumns, jobs }) => {
  const [applicantDetails, setApplicantDetails] = useState([]);
  const [loading, setLoading] = useState(true);

  const columns = [
    { key: "Applicant", label: "Applicant" },
    { key: "Apply For", label: "Apply For" },
    { key: "Job location", label: "Job location" },
    { key: "Status", label: "Status" },
    { key: "Applied On", label: "Applied On" },
    { key: "Email", label: "Email" },
    { key: "Applicant Location", label: "Applicant Location" },
    { key: "Action", label: "Action" },
  ];

  const displayedColumns = columns.filter(
    (col) => selectedColumns.includes(col.label) || col.key === "Action"
  );

  if (applicants?.length > 0) {
    useEffect(() => {
      jobs.map(async (CompanyJob) => {
        const jobId = CompanyJob.jobId;
        const response = await API.get(`/posts/jobs/${jobId}`);

        if (response?.status == 200) {
          const job = response?.data;

          applicants.map((applicant) => {
            applicant?.appliedJobs.map((appliedJob) => {
              if (appliedJob?.jobId === jobId) {
                const newApplicantDetails = {
                  Applicant: applicant?.firstName + " " + applicant?.lastName,
                  "Apply For": job?.role,
                  "Job location": job?.location,
                  Status: appliedJob?.status,
                  "Applied On": new Date(
                    appliedJob?.appliedDate
                  ).toLocaleDateString(),
                  Email: applicant?.email,
                  "Applicant Location": applicant?.profileBanner?.location,
                  Action: <button>View</button>,
                };
                setApplicantDetails((prevDetails) => {
                  const exists = prevDetails.some(
                    (detail) =>
                      detail["Applicant"] === newApplicantDetails["Applicant"] &&
                      detail["Apply For"] === newApplicantDetails["Apply For"]
                  );
                  if (!exists) {
                    return [...prevDetails, newApplicantDetails];
                  }
                  return prevDetails;
                });
                applicantDetails.push(newApplicantDetails);
              }
            });
          });
          setLoading(false);
        }
      });
    }, [applicants]);
  }
  return (
    <div className={TableViewStyles["table-view"]}>
      <table>
        <thead>
          <tr>
            {displayedColumns.map((col) => (
              <th key={col.key}>
                {col.label}
                <span className={TableViewStyles["sorting-arrows"]}>
                  <span className={TableViewStyles["arrow-up"]}>▲</span>
                  <span className={TableViewStyles["arrow-down"]}>▼</span>
                </span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <tr>
              <td colSpan={displayedColumns.length}><Spinner /></td>
            </tr>
          ) : (
            (console.log(applicantDetails),
            applicantDetails?.length > 0 ? (
              applicantDetails.map((applicant, index) => (
                <tr key={index}>
                  {displayedColumns.map((col) => (
                    <td key={col.key}>{applicant[col.key]}</td>
                  ))}
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={displayedColumns.length}>No applicants found</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TableView;
