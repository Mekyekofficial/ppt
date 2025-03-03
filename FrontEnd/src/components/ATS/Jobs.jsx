import React, { useState, useEffect } from "react";
import JobsStyles from "./css/Jobs.module.css";
import JobPopupForm from "./Jobs/JobPopupForm";
import API from "../../api";
import { Search, Loader2, AlertCircle, FileSpreadsheet, Grid, Filter, Plus, ChevronDown, Check, X } from 'lucide-react';

const JobDashboard = () => {
  const [openJobForm, setOpenJobForm] = useState(false);
  const [openInternshipForm, setOpenInternshipForm] = useState(false);
  const [openProjectForm, setOpenProjectForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const [viewForJobs, setViewForJobs] = useState("table");
  const [viewForInternships, setViewForInternships] = useState("table");
  const [viewForProjects, setViewForProjects] = useState("table");

  const [jobs, setJobs] = useState([]);
  const [Internship, setInternship] = useState([]);
  const [Projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Filter states
  const [showFilters, setShowFilters] = useState(false);
  const [activeFilters, setActiveFilters] = useState({
    jobs: { status: [], datePosted: null },
    internships: { status: [], datePosted: null },
    projects: { status: [], datePosted: null }
  });

  const statusOptions = [
    { value: 'active', label: 'Active' },
    { value: 'closed', label: 'Closed' },
    { value: 'draft', label: 'Draft' },
    { value: 'archived', label: 'Archived' }
  ];

  const dateOptions = [
    { value: 'today', label: 'Today' },
    { value: 'week', label: 'This Week' },
    { value: 'month', label: 'This Month' },
    { value: 'quarter', label: 'This Quarter' },
    { value: 'year', label: 'This Year' }
  ];

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

  const toggleFilter = (type, section, value) => {
    setActiveFilters(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [type]: type === 'status' 
          ? prev[section][type].includes(value)
            ? prev[section][type].filter(item => item !== value)
            : [...prev[section][type], value]
          : value === prev[section][type] ? null : value
      }
    }));
  };

  const clearFilters = (section) => {
    setActiveFilters(prev => ({
      ...prev,
      [section]: { status: [], datePosted: null }
    }));
  };

  const applyDateFilter = (data, datePosted) => {
    if (!datePosted) return data;

    const now = new Date();
    const getDateRange = () => {
      switch (datePosted) {
        case 'today':
          return new Date(now.setHours(0, 0, 0, 0));
        case 'week':
          return new Date(now.setDate(now.getDate() - 7));
        case 'month':
          return new Date(now.setMonth(now.getMonth() - 1));
        case 'quarter':
          return new Date(now.setMonth(now.getMonth() - 3));
        case 'year':
          return new Date(now.setFullYear(now.getFullYear() - 1));
        default:
          return null;
      }
    };

    const startDate = getDateRange();
    return data.filter(item => {
      const postDate = new Date(item.postedOn);
      return postDate >= startDate;
    });
  };

  const applyStatusFilter = (data, statusFilter) => {
    if (!statusFilter?.length) return data;
    return data.filter(item => statusFilter.includes(item?.status.toLowerCase()));
  };

  const getFilteredData = (data, section) => {
    const filters = activeFilters[section];
    let filteredData = [...data];

    // Apply status filter
    filteredData = applyStatusFilter(filteredData, filters?.status);

    // Apply date filter
    filteredData = applyDateFilter(filteredData, filters?.datePosted);

    // Apply search filter
    if (searchTerm) {
      filteredData = filteredData.filter(item =>
        item.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return filteredData;
  };

  const fetchJobs = async (companyId) => {
    if (!companyId) {
      setError("Company ID is missing.");
      setLoading(false);
      return;
    }

    try {
      const response = await API.get(
        `/ATS/get-company-jobs?companyId=${companyId}&jobType=Permanent`
      );
      setJobs(response.data);
      setError(null);
    } catch (error) {
      setError("Error fetching jobs. Please try again later.");
      console.error("Error fetching jobs:", error);
    }
  };

  const fetchInternships = async (companyId) => {
    if (!companyId) {
      setError("Company ID is missing.");
      setLoading(false);
      return;
    }

    try {
      const response = await API.get(
        `/ATS/get-company-jobs?companyId=${companyId}&jobType=Internship`
      );
      setInternship(response.data);
      setError(null);
    } catch (error) {
      setError("Error fetching internships. Please try again later.");
      console.error("Error fetching Internships:", error);
    }
  };

  const fetchProjects = async (companyId) => {
    if (!companyId) {
      setError("Company ID is missing.");
      setLoading(false);
      return;
    }

    try {
      const response = await API.get(
        `/ATS/get-company-jobs?companyId=${companyId}&jobType=Project`
      );
      setProjects(response.data);
      setError(null);
    } catch (error) {
      setError("Error fetching projects. Please try again later.");
      console.error("Error fetching Projects:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const companyId = localStorage.getItem("company-id");
    if (companyId && companyId !== "null") {
      fetchJobs(companyId);
      fetchInternships(companyId);
      fetchProjects(companyId);
    } else {
      setError("Invalid company ID. Please check your credentials.");
      setLoading(false);
    }
  }, []);

  const renderFilterPopup = (section) => (
    <div className={JobsStyles.filterPopup}>
      <div className={JobsStyles.filterHeader}>
        <h3>Filter {section}</h3>
        <button 
          onClick={() => clearFilters(section.toLowerCase())} 
          className={JobsStyles.clearButton}
        >
          Clear all
        </button>
      </div>

      <div className={JobsStyles.filterContent}>
        <div className={JobsStyles.filterGroup}>
          <h4>Status</h4>
          <div className={JobsStyles.optionsGrid}>
            {statusOptions.map(option => (
              <button
                key={option.value}
                className={`${JobsStyles.optionButton} ${
                  activeFilters[section.toLowerCase()]?.status.includes(option.value) ? JobsStyles.selected : ''
                }`}
                onClick={() => toggleFilter('status', section.toLowerCase(), option.value)}
              >
                {activeFilters[section.toLowerCase()]?.status.includes(option.value) && (
                  <Check size={14} />
                )}
                {option.label}
              </button>
            ))}
          </div>
        </div>

        <div className={JobsStyles.filterGroup}>
          <h4>Date Posted</h4>
          <div className={JobsStyles.optionsGrid}>
            {dateOptions.map(option => (
              <button
                key={option.value}
                className={`${JobsStyles.optionButton} ${
                  activeFilters[section.toLowerCase()]?.datePosted === option.value ? JobsStyles.selected : ''
                }`}
                onClick={() => toggleFilter('datePosted', section.toLowerCase(), option.value)}
              >
                {activeFilters[section.toLowerCase()]?.datePosted === option.value && (
                  <Check size={14} />
                )}
                {option.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className={JobsStyles.filterActions}>
        <button 
          className={JobsStyles.applyButton}
          onClick={() => setShowFilters(false)}
        >
          Apply Filters
        </button>
      </div>
    </div>
  );

  const renderJobSection = (title, description, data, view, setView, selectedColumns, setSelectedColumns, openForm, setOpenForm, type) => {
    const section = type.toLowerCase();
    const filteredData = getFilteredData(data, section);
    
    return (
      <div className={JobsStyles.jobs}>
        <div className={JobsStyles.header}>
          <div className={JobsStyles.headerContent}>
            <h1>{title}</h1>
            <p>{description}</p>
          </div>
        </div>

        <div className={JobsStyles.topBar}>
          <div className={JobsStyles.searchContainer}>
            <Search className={JobsStyles.searchIcon} />
            <input
              type="text"
              placeholder={`Search ${title.toLowerCase()}...`}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={JobsStyles.searchInput}
            />
          </div>
          <button
            className={JobsStyles.createJobBtn}
            onClick={() => setOpenForm(true)}
          >
            <Plus size={20} />
            <span>Create {type}</span>
          </button>
        </div>

        <div className={JobsStyles.controls}>
          <div className={JobsStyles.filterSection}>
            <div className={JobsStyles.filterGroup}>
              <button 
                className={`${JobsStyles.filterButton} ${showFilters ? JobsStyles.active : ''}`}
                onClick={() => setShowFilters(prev => !prev)}
              >
                <Filter size={20} />
                <span>All Filters</span>
                <ChevronDown size={16} className={showFilters ? JobsStyles.rotate : ''} />
              </button>
              <button 
                className={`${JobsStyles.filterButton} ${activeFilters[section]?.status?.length > 0 ? JobsStyles.active : ''}`}
              >
                <span>Status</span>
                {activeFilters[section]?.status?.length > 0 && (
                  <span className={JobsStyles.filterCount}>{activeFilters[section]?.status?.length}</span>
                )}
              </button>
              <button 
                className={`${JobsStyles.filterButton} ${activeFilters[section]?.datePosted ? JobsStyles.active : ''}`}
              >
                <span>Date Posted</span>
                {activeFilters[section]?.datePosted && <Check size={16} />}
              </button>
            </div>
            {showFilters && renderFilterPopup(title)}
          </div>

          <div className={JobsStyles.viewControls}>
            <button 
              className={`${JobsStyles.viewButton} ${view === 'table' ? JobsStyles.active : ''}`}
              onClick={() => setView('table')}
            >
              <FileSpreadsheet size={20} />
              <span>Table View</span>
            </button>
            <button 
              className={`${JobsStyles.viewButton} ${view === 'card' ? JobsStyles.active : ''}`}
              onClick={() => setView('card')}
            >
              <Grid size={20} />
              <span>Card View</span>
            </button>
          </div>
        </div>

        <div className={JobsStyles.content}>
          {loading ? (
            <p>Loading Projects...</p>
          ) : viewForProjects === "table" ? (
            <TableView jobs={Projects} selectedColumns={selectedColumnsForProjects} role="Project"/>
            <div className={JobsStyles.loadingState}>
              <Loader2 className={JobsStyles.spinner} size={40} />
              <p>Loading {title.toLowerCase()}...</p>
            </div>
          ) : error ? (
            <div className={JobsStyles.errorState}>
              <AlertCircle size={40} />
              <p>{error}</p>
            </div>
          ) : filteredData?.length === 0 ? (
            <div className={JobsStyles.emptyState}>
              <Search size={40} />
              <p>No {title.toLowerCase()} found</p>
              <span>Create your first {type.toLowerCase()} or try different filters</span>
            </div>
          ) : view === "table" ? (
            <TableView jobs={filteredData} selectedColumns={selectedColumns} role={type} />
          ) : (
            <CardView jobs={Projects} role="Project"/>
            <CardView jobs={filteredData} role={type.toLowerCase()} />
          )}
        </div>

        <JobPopupForm open={openForm} onClose={() => {
          setOpenForm(false);
          fetchJobs(localStorage.getItem("company-id"));
        }} />
      </div>
    );
  };

  return (
    <div className={JobsStyles.jobsWrapper}>
      {renderJobSection(
        "Jobs",
        "Manage and track all permanent job positions",
        jobs,
        viewForJobs,
        setViewForJobs,
        selectedColumnsForJobs,
        setSelectedColumnsForJobs,
        openJobForm,
        setOpenJobForm,
        "Job"
      )}

      {renderJobSection(
        "Internships",
        "Manage internship opportunities and applications",
        Internship,
        viewForInternships,
        setViewForInternships,
        selectedColumnsForInternships,
        setSelectedColumnsForInternships,
        openInternshipForm,
        setOpenInternshipForm,
        "Internship"
      )}

      {renderJobSection(
        "Projects",
        "Track project-based positions and freelance work",
        Projects,
        viewForProjects,
        setViewForProjects,
        selectedColumnsForProjects,
        setSelectedColumnsForProjects,
        openProjectForm,
        setOpenProjectForm,
        "Project"
      )}
    </div>
  );
};

export default JobDashboard;
