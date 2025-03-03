import React, { useState, useEffect } from "react";
import TableViewStyles from "./css/TableView.module.css";
import API from "../../../api";

const TableView = ({ applicants, selectedColumns, jobs }) => {
  const [applicantDetails, setApplicantDetails] = useState([]);

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
    applicants.map( async (applicant) => {
      const jobId = applicant.jobID;
      const response = await API.get(`/posts/jobs/${jobId}`);
      const job = response.data;

      applicantDetails.push({
        Applicant: applicant.firstName + " " + applicant.lastName,
        "Apply For": job.role,
        "Job location": job.location,
        Status: "Applied",
        "Applied On": new Date(applicant.createdAt).toLocaleDateString(),
        Email: applicant.email,
        "Applicant Location": applicant.area + " " + applicant.cityStateCountry,
        Action: <button>View</button>,
      });
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
          {applicantDetails.length > 0 ? applicantDetails.map((applicant, index) => (
            <tr key={index}>
              {displayedColumns.map((col) => (
                <td key={col.key}>{applicant[col.key]}</td>
              ))}
            </tr>
          )) : <tr><td colSpan={displayedColumns.length}>No applicants found</td></tr>}
        </tbody>
      </table>
    </div>
  );
};

export default TableView;
