import React from "react";
import { useNavigate } from "react-router-dom";
import TableViewStyles from "./css/TableView.module.css";

const TableView = ({ jobs, selectedColumns, role }) => {
  const navigate = useNavigate();

  const handleRowClick = (job) => {
    navigate(`/ATS/jobs/job-applicants/${job.jobId}`); // Navigate to JobApplication page
  };

  const columns = [
    { key: "title", label: "Title" },
    { key: "applicants", label: "Applicants" },
    { key: "postedOn", label: "Posted On" },
    { key: "postedBy", label: "Posted By" },
    { key: "rejected", label: "Rejected" },
    { key: "onHold", label: "On Hold" },
    { key: "interviewed", label: "Interviewed" },
    { key: "hired", label: "Hired" },
  ];

  const displayedColumns = columns.filter(
    (col) => col.key === "title" || selectedColumns.includes(col.label)
  );

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
          {jobs.map((job) => (
            <tr key={job._id} onClick={() => handleRowClick(job)} className={TableViewStyles["clickable-row"]}>
              <td>{job.title}</td>
              {selectedColumns.includes("Applicants") && <td>{job.totalCandidates?.length || 0}</td>}
              {selectedColumns.includes("Posted On") && <td>{new Date(job.postedOn).toLocaleDateString()}</td>}
              {selectedColumns.includes("Posted By") && <td>{job.postedBy}</td>}
              {selectedColumns.includes("Rejected") && <td>{job.rejected || 0}</td>}
              {selectedColumns.includes("On Hold") && <td>{job.onHold || 0}</td>}
              {selectedColumns.includes("Interviewed") && <td>{job.interviewed || 0}</td>}
              {selectedColumns.includes("Hired") && <td>{job.hired || 0}</td>}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableView;
