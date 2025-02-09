import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // Import useParams to get jobId from URL
import { Card, CardContent, Button, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import API from "../../../api"; // Adjust the path to match your API service file
import styles from "./css/JobApplicants.module.css";

const JobApplicants = () => {
  const { jobId } = useParams(); // Get jobId from the URL
  const [selectedColumns, setSelectedColumns] = useState(["Total Candidates", "Active Candidates", "On Hold",]);
  const allColumns = ["Interview Passed", "Interview Pending",  "Rejected", "Hired"];
  const [customColumns, setCustomColumns] = useState(allColumns.filter((col) => !selectedColumns.includes(col)));
  const [applicants, setApplicants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch applicants from backend using jobId from URL
  useEffect(() => {
    if (!jobId) return; // Ensure jobId exists before fetching

    const fetchApplicants = async () => {
      try {
        const response = await API.get(`/ATS/applicants?jobId=${jobId}`);
        
        if (response.status !== 200) throw new Error("Failed to fetch applicants");

        const data = response.data;

        setApplicants(data);
      } catch (err) {
        console.error("Error fetching applicants:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchApplicants();
  }, [jobId]); // Runs when jobId changes

  const toggleColumn = (column, isAdding) => {
    if (isAdding) {
      setSelectedColumns([...selectedColumns, column]);
      setCustomColumns(customColumns.filter((col) => col !== column));
    } else {
      setSelectedColumns(selectedColumns.filter((col) => col !== column));
      setCustomColumns([...customColumns, column]);
    }
  };

  return (
    <div className={styles.container}>
      <Card className={styles.viewsSection}>
        <CardContent>
          <h3>Views</h3>
          <div className={styles.customColumns}>
            <p>Customized columns: <span>(Choose any 3)</span></p>
            <div className={styles.columnButtons}>
              {selectedColumns.map((col) => (
                <Button key={col} variant="contained" color="primary" className={styles.selected} onClick={() => toggleColumn(col, false)}>
                  {col}
                  <ExpandLess fontSize="small" />
                </Button>
              ))}
              <br />
              {customColumns.map((col) => (
                <Button key={col} variant="outlined" color="secondary" className={styles.unselected} onClick={() => toggleColumn(col, true)}>
                  {col}
                  <ExpandMore fontSize="small" />
                </Button>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Show loading or error message */}
      {loading ? <p>Loading applicants...</p> : error ? <p>Error: {error}</p> : (
        <Table className={styles.table}>
          <TableHead>
            <TableRow>
              {selectedColumns.map((col) => (
                <TableCell key={col}>{col}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {applicants.length > 0 ? (
              applicants.map((app, index) => (
                <TableRow key={index}>
                  {selectedColumns.map((col) => (
                    <TableCell key={col}>
                      {app[col.toLowerCase().replace(/\s/g, "_")] || "—"}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={selectedColumns.length} style={{ textAlign: "center" }}>
                  No applicants found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      )}
    </div>
  );
};

export default JobApplicants;
