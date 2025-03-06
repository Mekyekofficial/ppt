'use client';

import React, { useState } from "react";
import styles from "./css/Report.module.css";
import { 
  BarChart3, 
  Users, 
  DollarSign, 
  Calendar, 
  Download, 
  Filter, 
  Search,
  Plus,
  MoreVertical,
  Edit2,
  Trash2,
  CheckCircle2,
  XCircle,
  Building2,
  ArrowUpRight,
  ArrowDownRight,
  FileText,
  PieChart,
  LineChart,
  Table
} from 'lucide-react';

const Report = () => {
  const [reports, setReports] = useState([
    { 
      id: 1, 
      title: "Monthly Recruitment Report",
      type: "Recruitment",
      date: "Feb 25, 2025",
      status: "Completed",
      department: "HR",
      generatedBy: "John Doe",
      views: 45,
      downloads: 12
    },
    { 
      id: 2, 
      title: "Q1 Financial Overview",
      type: "Financial",
      date: "Feb 20, 2025",
      status: "Completed",
      department: "Finance",
      generatedBy: "Jane Smith",
      views: 38,
      downloads: 8
    },
    { 
      id: 3, 
      title: "Employee Performance Analysis",
      type: "Performance",
      date: "Feb 15, 2025",
      status: "Processing",
      department: "HR",
      generatedBy: "John Doe",
      views: 25,
      downloads: 5
    },
    { 
      id: 4, 
      title: "Department Budget Report",
      type: "Financial",
      date: "Feb 10, 2025",
      status: "Completed",
      department: "Finance",
      generatedBy: "Jane Smith",
      views: 32,
      downloads: 10
    },
  ]);

  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [filterDepartment, setFilterDepartment] = useState('all');
  const [showAddForm, setShowAddForm] = useState(false);
  const [selectedReport, setSelectedReport] = useState(null);
  const [showActions, setShowActions] = useState(false);
  const [viewMode, setViewMode] = useState('table'); // 'table', 'chart', 'list'
  const [newReport, setNewReport] = useState({
    title: "",
    type: "",
    department: "",
    description: ""
  });

  const handleAddReport = (e) => {
    e.preventDefault();
    if (newReport.title && newReport.type && newReport.department) {
      const report = {
        id: reports.length + 1,
        date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }),
        ...newReport,
        status: "Processing",
        generatedBy: "John Doe",
        views: 0,
        downloads: 0
      };
      setReports([report, ...reports]);
      setNewReport({
        title: "",
        type: "",
        department: "",
        description: ""
      });
      setShowAddForm(false);
    }
  };

  const handleDelete = (id) => {
    setReports(reports.filter(item => item.id !== id));
    setShowActions(false);
  };

  const handleStatusChange = (id, newStatus) => {
    setReports(reports.map(item => 
      item.id === id ? { ...item, status: newStatus } : item
    ));
  };

  const filteredReports = reports.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.department.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = filterType === 'all' || item.type.toLowerCase() === filterType.toLowerCase();
    const matchesDepartment = filterDepartment === 'all' || item.department.toLowerCase() === filterDepartment.toLowerCase();
    return matchesSearch && matchesType && matchesDepartment;
  });

  const getStatusStyle = (status) => {
    switch (status) {
      case "Completed":
        return styles.statusCompleted;
      case "Processing":
        return styles.statusProcessing;
      default:
        return styles.statusPending;
    }
  };

  const getReportIcon = (type) => {
    switch (type.toLowerCase()) {
      case "recruitment":
        return <Users size={20} />;
      case "financial":
        return <DollarSign size={20} />;
      case "performance":
        return <BarChart3 size={20} />;
      default:
        return <FileText size={20} />;
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerContent}>
          <h1 className={styles.pageTitle}>Reports & Analytics</h1>
          <p className={styles.pageDescription}>Generate and manage business reports</p>
        </div>
        <button 
          className={styles.generateButton}
          onClick={() => setShowAddForm(!showAddForm)}
        >
          <Plus size={20} />
          Generate Report
        </button>
      </div>

      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <div className={styles.statIcon}>
            <FileText size={24} />
          </div>
          <div className={styles.statInfo}>
            <h3 className={styles.statTitle}>Total Reports</h3>
            <p className={styles.statValue}>{reports.length}</p>
            <p className={styles.statSubtext}>Generated reports</p>
          </div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statIcon}>
            <Users size={24} />
          </div>
          <div className={styles.statInfo}>
            <h3 className={styles.statTitle}>Total Views</h3>
            <p className={styles.statValue}>
              {reports.reduce((total, report) => total + report.views, 0)}
            </p>
            <p className={styles.statSubtext}>Report views</p>
          </div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statIcon}>
            <Download size={24} />
          </div>
          <div className={styles.statInfo}>
            <h3 className={styles.statTitle}>Total Downloads</h3>
            <p className={styles.statValue}>
              {reports.reduce((total, report) => total + report.downloads, 0)}
            </p>
            <p className={styles.statSubtext}>Report downloads</p>
          </div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statIcon}>
            <Calendar size={24} />
          </div>
          <div className={styles.statInfo}>
            <h3 className={styles.statTitle}>Last Generated</h3>
            <p className={styles.statValue}>{reports[0]?.date || 'N/A'}</p>
            <p className={styles.statSubtext}>Most recent report</p>
          </div>
        </div>
      </div>

      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <div className={styles.searchContainer}>
            <Search className={styles.searchIcon} size={20} />
            <input
              type="text"
              placeholder="Search reports..."
              className={styles.searchInput}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className={styles.filterContainer}>
            <Filter size={20} />
            <select
              className={styles.filterSelect}
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
            >
              <option value="all">All Types</option>
              <option value="recruitment">Recruitment</option>
              <option value="financial">Financial</option>
              <option value="performance">Performance</option>
            </select>
            <select
              className={styles.filterSelect}
              value={filterDepartment}
              onChange={(e) => setFilterDepartment(e.target.value)}
            >
              <option value="all">All Departments</option>
              <option value="hr">HR</option>
              <option value="finance">Finance</option>
              <option value="engineering">Engineering</option>
              <option value="marketing">Marketing</option>
            </select>
            <div className={styles.viewModeContainer}>
              <button 
                className={`${styles.viewModeButton} ${viewMode === 'table' ? styles.active : ''}`}
                onClick={() => setViewMode('table')}
              >
                <Table size={20} />
              </button>
              <button 
                className={`${styles.viewModeButton} ${viewMode === 'chart' ? styles.active : ''}`}
                onClick={() => setViewMode('chart')}
              >
                <BarChart3 size={20} />
              </button>
              <button 
                className={`${styles.viewModeButton} ${viewMode === 'list' ? styles.active : ''}`}
                onClick={() => setViewMode('list')}
              >
                <FileText size={20} />
              </button>
            </div>
          </div>
        </div>
        <div className={styles.cardContent}>
          {viewMode === 'table' && (
            <div className={styles.tableContainer}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Type</th>
                    <th>Department</th>
                    <th>Date</th>
                    <th>Status</th>
                    <th>Views</th>
                    <th>Downloads</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredReports.map((report) => (
                    <tr key={report.id}>
                      <td>
                        <div className={styles.reportTitle}>
                          {getReportIcon(report.type)}
                          {report.title}
                        </div>
                      </td>
                      <td>
                        <span className={styles.reportType}>{report.type}</span>
                      </td>
                      <td>
                        <div className={styles.departmentCell}>
                          <Building2 size={16} />
                          {report.department}
                        </div>
                      </td>
                      <td>
                        <div className={styles.dateCell}>
                          <Calendar size={16} />
                          {report.date}
                        </div>
                      </td>
                      <td>
                        <span className={`${styles.statusBadge} ${getStatusStyle(report.status)}`}>
                          {report.status}
                        </span>
                      </td>
                      <td>
                        <div className={styles.viewsCell}>
                          <FileText size={16} />
                          {report.views}
                        </div>
                      </td>
                      <td>
                        <div className={styles.downloadsCell}>
                          <Download size={16} />
                          {report.downloads}
                        </div>
                      </td>
                      <td>
                        <div className={styles.actionButtons}>
                          <button 
                            className={styles.actionButton}
                            onClick={() => {
                              setSelectedReport(report);
                              setShowActions(true);
                            }}
                          >
                            <MoreVertical size={16} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          {viewMode === 'chart' && (
            <div className={styles.chartContainer}>
              <div className={styles.chartPlaceholder}>
                <BarChart3 size={48} />
                <p>Chart view coming soon</p>
              </div>
            </div>
          )}
          {viewMode === 'list' && (
            <div className={styles.listContainer}>
              {filteredReports.map((report) => (
                <div key={report.id} className={styles.listItem}>
                  <div className={styles.listItemHeader}>
                    <div className={styles.reportTitle}>
                      {getReportIcon(report.type)}
                      {report.title}
                    </div>
                    <div className={styles.actionButtons}>
                      <button 
                        className={styles.actionButton}
                        onClick={() => {
                          setSelectedReport(report);
                          setShowActions(true);
                        }}
                      >
                        <MoreVertical size={16} />
                      </button>
                    </div>
                  </div>
                  <div className={styles.listItemContent}>
                    <div className={styles.listItemDetails}>
                      <span className={styles.reportType}>{report.type}</span>
                      <span className={styles.departmentCell}>
                        <Building2 size={16} />
                        {report.department}
                      </span>
                      <span className={styles.dateCell}>
                        <Calendar size={16} />
                        {report.date}
                      </span>
                    </div>
                    <div className={styles.listItemStats}>
                      <span className={styles.viewsCell}>
                        <FileText size={16} />
                        {report.views} views
                      </span>
                      <span className={styles.downloadsCell}>
                        <Download size={16} />
                        {report.downloads} downloads
                      </span>
                      <span className={`${styles.statusBadge} ${getStatusStyle(report.status)}`}>
                        {report.status}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {showAddForm && (
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <h2 className={styles.cardTitle}>Generate New Report</h2>
            <p className={styles.cardDescription}>Create a new report</p>
          </div>
          <div className={styles.cardContent}>
            <form onSubmit={handleAddReport} className={styles.form}>
              <div className={styles.formGrid}>
                <div className={styles.formGroup}>
                  <label htmlFor="title" className={styles.label}>
                    Report Title
                  </label>
                  <input
                    id="title"
                    type="text"
                    className={styles.input}
                    value={newReport.title}
                    onChange={(e) => setNewReport({ ...newReport, title: e.target.value })}
                    placeholder="Enter report title"
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="type" className={styles.label}>
                    Report Type
                  </label>
                  <select
                    id="type"
                    className={styles.input}
                    value={newReport.type}
                    onChange={(e) => setNewReport({ ...newReport, type: e.target.value })}
                    required
                  >
                    <option value="">Select type</option>
                    <option value="Recruitment">Recruitment</option>
                    <option value="Financial">Financial</option>
                    <option value="Performance">Performance</option>
                  </select>
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="department" className={styles.label}>
                    Department
                  </label>
                  <select
                    id="department"
                    className={styles.input}
                    value={newReport.department}
                    onChange={(e) => setNewReport({ ...newReport, department: e.target.value })}
                    required
                  >
                    <option value="">Select department</option>
                    <option value="HR">HR</option>
                    <option value="Finance">Finance</option>
                    <option value="Engineering">Engineering</option>
                    <option value="Marketing">Marketing</option>
                  </select>
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="description" className={styles.label}>
                    Description
                  </label>
                  <input
                    id="description"
                    type="text"
                    className={styles.input}
                    value={newReport.description}
                    onChange={(e) => setNewReport({ ...newReport, description: e.target.value })}
                    placeholder="Enter report description"
                  />
                </div>
              </div>
              <div className={styles.formActions}>
                <button 
                  type="button" 
                  className={styles.cancelButton}
                  onClick={() => setShowAddForm(false)}
                >
                  Cancel
                </button>
                <button type="submit" className={styles.submitButton}>
                  Generate Report
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {showActions && selectedReport && (
        <div className={styles.actionsMenu}>
          <button 
            className={styles.actionMenuItem}
            onClick={() => handleStatusChange(selectedReport.id, 'Completed')}
          >
            <CheckCircle2 size={16} />
            Mark as Completed
          </button>
          <button 
            className={styles.actionMenuItem}
            onClick={() => handleStatusChange(selectedReport.id, 'Processing')}
          >
            <Clock size={16} />
            Mark as Processing
          </button>
          <button 
            className={styles.actionMenuItem}
            onClick={() => handleStatusChange(selectedReport.id, 'Pending')}
          >
            <XCircle size={16} />
            Mark as Pending
          </button>
          <button 
            className={styles.actionMenuItem}
            onClick={() => {
              setSelectedReport(null);
              setShowActions(false);
            }}
          >
            <Edit2 size={16} />
            Edit Details
          </button>
          <button 
            className={`${styles.actionMenuItem} ${styles.deleteAction}`}
            onClick={() => handleDelete(selectedReport.id)}
          >
            <Trash2 size={16} />
            Delete Report
          </button>
        </div>
      )}
    </div>
  );
};

export default Report; 