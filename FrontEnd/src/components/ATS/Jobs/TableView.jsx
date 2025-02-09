import React from "react";
import TableViewStyles from "./css/TableView.module.css";

const TableView = ({ selectedColumns }) => {
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
          <tr>
            <td>Job 1</td>
            {selectedColumns.includes("Applicants") && <td>5</td>}
            {selectedColumns.includes("Posted On") && <td>01/10/2024</td>}
            {selectedColumns.includes("Posted By") && <td>John Doe</td>}
            {selectedColumns.includes("Rejected") && <td>2</td>}
            {selectedColumns.includes("On Hold") && <td>1</td>}
            {selectedColumns.includes("Interviewed") && <td>3</td>}
            {selectedColumns.includes("Hired") && <td>1</td>}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableView;
