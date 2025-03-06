import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import TableViewStyles from "./css/TableView.module.css";
import { ChevronUp, ChevronDown, Circle } from 'lucide-react';

const TableView = ({ jobs, selectedColumns, role }) => {
  const navigate = useNavigate();
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });

  const handleRowClick = (job) => {
    navigate(`/ATS/jobs/job-applicants?jobId=${job.jobId}&jobType=${role}`);
  };

  const columns = [
    { key: "title", label: "Title", sortable: true },
    { key: "status", label: "Status", sortable: true },
    { key: "applicants", label: "Applicants", sortable: true },
    { key: "postedOn", label: "Posted On", sortable: true },
    { key: "postedBy", label: "Posted By", sortable: true },
    { key: "rejected", label: "Rejected", sortable: true },
    { key: "onHold", label: "On Hold", sortable: true },
    { key: "interviewed", label: "Interviewed", sortable: true },
    { key: "hired", label: "Hired", sortable: true },
  ];

  const displayedColumns = columns.filter(
    (col) => col.key === "title" || selectedColumns.includes(col.label)
  );

  const handleSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const sortedJobs = useMemo(() => {
    if (!sortConfig.key) return jobs;

    return [...jobs].sort((a, b) => {
      if (sortConfig.key === 'postedOn') {
        return sortConfig.direction === 'asc'
          ? new Date(a.postedOn) - new Date(b.postedOn)
          : new Date(b.postedOn) - new Date(a.postedOn);
      }

      if (sortConfig.key === 'applicants') {
        const aValue = a.totalCandidates?.length || 0;
        const bValue = b.totalCandidates?.length || 0;
        return sortConfig.direction === 'asc'
          ? aValue - bValue
          : bValue - aValue;
      }

      const aValue = a[sortConfig.key] || '';
      const bValue = b[sortConfig.key] || '';
      
      return sortConfig.direction === 'asc'
        ? aValue.toString().localeCompare(bValue.toString())
        : bValue.toString().localeCompare(aValue.toString());
    });
  }, [jobs, sortConfig]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    if (date.toDateString() === today.toDateString()) {
      return 'Today';
    } else if (date.toDateString() === yesterday.toDateString()) {
      return 'Yesterday';
    } else {
      return date.toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
      });
    }
  };

  const getStatusColor = (status) => {
    switch (status?.toLowerCase()) {
      case 'active':
        return 'status-active';
      case 'closed':
        return 'status-closed';
      case 'draft':
        return 'status-draft';
      case 'archived':
        return 'status-archived';
      default:
        return '';
    }
  };

  const renderSortingArrows = (column) => {
    if (!column.sortable) return null;
    
    return (
      <div className={TableViewStyles['sorting-arrows']}>
        <ChevronUp
          size={12}
          className={`${TableViewStyles['arrow-up']} ${
            sortConfig.key === column.key && sortConfig.direction === 'asc'
              ? TableViewStyles.active
              : ''
          }`}
        />
        <ChevronDown
          size={12}
          className={`${TableViewStyles['arrow-down']} ${
            sortConfig.key === column.key && sortConfig.direction === 'desc'
              ? TableViewStyles.active
              : ''
          }`}
        />
      </div>
    );
  };

  const renderCell = (job, column) => {
    switch (column.key) {
      case 'title':
        return job.title;
      case 'status':
        return (
          <span className={`${TableViewStyles.status} ${TableViewStyles[getStatusColor(job.status)]}`}>
            <Circle size={8} />
            {job.status}
          </span>
        );
      case 'applicants':
        return job.totalCandidates?.length || 0;
      case 'postedOn':
        return formatDate(job.postedOn);
      case 'postedBy':
        return job.postedBy;
      default:
        return job[column.key] || 0;
    }
  };

  if (!jobs?.length) {
    return (
      <div className={TableViewStyles['empty-state']}>
        <p>No data available</p>
        <span>Try adjusting your filters or create a new {role.toLowerCase()}</span>
      </div>
    );
  }

  return (
    <div className={TableViewStyles['table-view']}>
      <table>
        <thead>
          <tr>
            {displayedColumns.map((column) => (
              <th
                key={column.key}
                onClick={() => column.sortable && handleSort(column.key)}
                className={column.sortable ? TableViewStyles['sorting-header'] : ''}
              >
                {column.label}
                {renderSortingArrows(column)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sortedJobs.map((job) => (
            <tr
              key={job._id}
              onClick={() => handleRowClick(job)}
              className={TableViewStyles['clickable-row']}
            >
              {displayedColumns.map((column) => (
                <td key={column.key}>{renderCell(job, column)}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableView;
