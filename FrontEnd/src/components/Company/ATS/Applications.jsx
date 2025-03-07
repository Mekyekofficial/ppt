import React, { useState, useEffect } from "react";
import Filters from "./Applications/Filters";
import Views from "./Applications/Views";
import TableView from "./Applications/TableView";
import CardView from "./Applications/CardView";
import ApplicationsStyles from "./css/Applications.module.css";
import API from "../../../api";
import {
  Search,
  Loader2,
  AlertCircle,
  FileSpreadsheet,
  Grid,
  Filter,
  X,
  Check,
  ChevronDown,
} from "lucide-react";

const Applications = () => {
  const [view, setView] = useState("table");
  const [jobs, setJobs] = useState([]);
  const [jobIds, setJobIds] = useState([]);
  const [applicants, setApplicants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    status: [],
    experience: [],
    dateRange: "all",
    location: [],
  });

  const [selectedColumns, setSelectedColumns] = useState([
    "Applicant",
    "Apply For",
    "Status",
    "Date Applied",
    "Experience",
  ]);

  const statusOptions = [
    { value: "pending", label: "Pending Review" },
    { value: "shortlisted", label: "Shortlisted" },
    { value: "interviewed", label: "Interviewed" },
    { value: "offered", label: "Offered" },
    { value: "rejected", label: "Rejected" },
  ];

  const experienceOptions = [
    { value: "0-2", label: "0-2 years" },
    { value: "2-5", label: "2-5 years" },
    { value: "5-8", label: "5-8 years" },
    { value: "8+", label: "8+ years" },
  ];

  const dateRangeOptions = [
    { value: "today", label: "Today" },
    { value: "week", label: "This Week" },
    { value: "month", label: "This Month" },
    { value: "quarter", label: "This Quarter" },
    { value: "all", label: "All Time" },
  ];

  const toggleFilter = (type, value) => {
    setFilters((prev) => ({
      ...prev,
      [type]: prev[type].includes(value)
        ? prev[type].filter((item) => item !== value)
        : [...prev[type], value],
    }));
  };

  const fetchJobs = async (companyId) => {
    if (!companyId) {
      setError("Company ID is missing.");
      setLoading(false);
      return;
    }

    try {
      const response = await API.get(
        `/ATS/get-company-jobs?companyId=${companyId}&jobType=All`
      );
      const jobsData = response.data;
      setJobs(jobsData);

      const jobIds = jobsData.map((job) => job.jobId);
      setJobIds(jobIds);

      const applicantsData = await Promise.all(
        jobIds.map((jobId) =>
          API.get(`/ATS/applicants?jobId=${jobId}`).then(
            (response) => response.data
          )
        )
      );

      setApplicants(applicantsData.flat());
      setError(null);
    } catch (error) {
      setError("Error fetching applications data. Please try again later.");
      console.error("Error fetching jobs:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const companyId = localStorage.getItem("company-id");
    if (companyId && companyId !== "null") {
      fetchJobs(companyId);
    } else {
      setError("Invalid company ID. Please check your credentials.");
      setLoading(false);
    }
  }, []);

  // Determine if any search term or filter is applied
  const isSearchOrFilterApplied =
    searchTerm.trim() !== "" ||
    filters.status.length > 0 ||
    filters.experience.length > 0 ||
    filters.dateRange !== "all" ||
    filters.location.length > 0;

  const filteredApplicants = isSearchOrFilterApplied
    ? applicants.filter((applicant) => {
        // You can extend this section later to include additional filter checks (status, experience, etc.)
        const lowerSearch = searchTerm.toLowerCase();
        return (
          applicant?.name?.toLowerCase().includes(lowerSearch) ||
          applicant?.jobTitle?.toLowerCase().includes(lowerSearch) ||
          applicant?.status?.toLowerCase().includes(lowerSearch) ||
          applicant?.experience?.toLowerCase().includes(lowerSearch) ||
          applicant?.location?.toLowerCase().includes(lowerSearch) ||
          applicant?.dateApplied?.toLowerCase().includes(lowerSearch)
        );
      })
    : applicants;

  const clearFilters = () => {
    setFilters({
      status: [],
      experience: [],
      dateRange: "all",
      location: [],
    });
  };

  return (
    <div className={ApplicationsStyles.applications}>
      <div className={ApplicationsStyles.header}>
        <div className={ApplicationsStyles.headerContent}>
          <h1>Applications</h1>
          <p>Manage and track all job applications in one place</p>
        </div>

        <div className={ApplicationsStyles.searchContainer}>
          <Search className={ApplicationsStyles.searchIcon} />
          <input
            type="text"
            placeholder="Search applications..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={ApplicationsStyles.searchInput}
          />
        </div>
      </div>

      <div className={ApplicationsStyles.controls}>
        <div className={ApplicationsStyles.filterSection}>
          <button
            className={`${ApplicationsStyles.filterButton} ${
              showFilters ? ApplicationsStyles.active : ""
            }`}
            onClick={() => setShowFilters(!showFilters)}>
            <Filter size={20} />
            <span>Filters</span>
            <ChevronDown
              size={16}
              className={showFilters ? ApplicationsStyles.rotate : ""}
            />
          </button>

          {showFilters && (
            <div className={ApplicationsStyles.filterPopup}>
              <div className={ApplicationsStyles.filterHeader}>
                <h3>Filter Applications</h3>
                <button
                  onClick={clearFilters}
                  className={ApplicationsStyles.clearButton}>
                  Clear all
                </button>
              </div>

              <div className={ApplicationsStyles.filterContent}>
                <div className={ApplicationsStyles.filterGroup}>
                  <h4>Status</h4>
                  <div className={ApplicationsStyles.optionsGrid}>
                    {statusOptions.map((option) => (
                      <button
                        key={option.value}
                        className={`${ApplicationsStyles.optionButton} ${
                          filters.status.includes(option.value)
                            ? ApplicationsStyles.selected
                            : ""
                        }`}
                        onClick={() => toggleFilter("status", option.value)}>
                        {filters.status.includes(option.value) && (
                          <Check size={14} />
                        )}
                        {option.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className={ApplicationsStyles.filterGroup}>
                  <h4>Experience</h4>
                  <div className={ApplicationsStyles.optionsGrid}>
                    {experienceOptions.map((option) => (
                      <button
                        key={option.value}
                        className={`${ApplicationsStyles.optionButton} ${
                          filters.experience.includes(option.value)
                            ? ApplicationsStyles.selected
                            : ""
                        }`}
                        onClick={() =>
                          toggleFilter("experience", option.value)
                        }>
                        {filters.experience.includes(option.value) && (
                          <Check size={14} />
                        )}
                        {option.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className={ApplicationsStyles.filterGroup}>
                  <h4>Date Range</h4>
                  <div className={ApplicationsStyles.optionsGrid}>
                    {dateRangeOptions.map((option) => (
                      <button
                        key={option.value}
                        className={`${ApplicationsStyles.optionButton} ${
                          filters.dateRange === option.value
                            ? ApplicationsStyles.selected
                            : ""
                        }`}
                        onClick={() =>
                          setFilters((prev) => ({
                            ...prev,
                            dateRange: option.value,
                          }))
                        }>
                        {filters.dateRange === option.value && (
                          <Check size={14} />
                        )}
                        {option.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className={ApplicationsStyles.filterActions}>
                <button
                  className={ApplicationsStyles.applyButton}
                  onClick={() => setShowFilters(false)}>
                  Apply Filters
                </button>
              </div>
            </div>
          )}
        </div>

        <div className={ApplicationsStyles.viewControls}>
          <button
            className={`${ApplicationsStyles.viewButton} ${
              view === "table" ? ApplicationsStyles.active : ""
            }`}
            onClick={() => setView("table")}>
            <FileSpreadsheet size={20} />
            <span>Table View</span>
          </button>
          <button
            className={`${ApplicationsStyles.viewButton} ${
              view === "card" ? ApplicationsStyles.active : ""
            }`}
            onClick={() => setView("card")}>
            <Grid size={20} />
            <span>Card View</span>
          </button>
        </div>
      </div>
      <div className={ApplicationsStyles.content}>
        {loading ? (
          <div className={ApplicationsStyles.loadingState}>
            <Loader2 className={ApplicationsStyles.spinner} size={40} />
            <p>Loading applications...</p>
          </div>
        ) : error ? (
          <div className={ApplicationsStyles.errorState}>
            <AlertCircle size={40} />
            <p>{error}</p>
          </div>
        ) : filteredApplicants?.length === 0 ? (
          <div className={ApplicationsStyles.emptyState}>
            <Search size={40} />
            <p>No applications found</p>
            <span>Try adjusting your search or filters</span>
          </div>
        ) : view === "table" ? (
          <TableView
            applicants={filteredApplicants}
            jobs={jobs}
            selectedColumns={selectedColumns}
          />
        ) : (
          <CardView applicants={filteredApplicants} jobs={jobs} />
        )}
      </div>
    </div>
  );
};

export default Applications;
