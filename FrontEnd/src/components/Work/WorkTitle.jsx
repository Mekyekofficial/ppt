import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./css/WorkTitle.module.css";
import WorkIcon from "@mui/icons-material/Work";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import DateRangeIcon from "@mui/icons-material/DateRange";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import ShareIcon from "@mui/icons-material/Share";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ApplyJob1 from "./ApplyJob/ApplyJob1";
import ApplyJob2 from "./ApplyJob/ApplyJob2";
import ApplyJob3 from "./ApplyJob/ApplyJob3";
import API from "../../api";
import { toast } from "react-toastify";

const WorkTitle = ({ job }) => {
  const navigate = useNavigate();

  const [applyJobStep, setApplyJobStep] = useState(0);

  const nextApplyJobStep = () => setApplyJobStep((prev) => prev + 1);
  const prevApplyJobStep = () => setApplyJobStep((prev) => prev - 1);
  const closeApplyJobPopup = () => setApplyJobStep(0);

  const [formData, setFormData] = useState({
    jobID: job._id,
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    resume: null,
    area: "",
    cityStateCountry: "",
    getEmailUpdates: false,
  });

  const updateFormData = (newData) => {
    setFormData((prevData) => ({ ...prevData, ...newData }));
  };

  const handleSubmit = async () => {
    try {
      const formDataToSend = new FormData();
      Object.keys(formData).forEach((key) => {
        formDataToSend.append(key, formData[key]);
      });

      const response = await API.post("/company/job-apply", formDataToSend, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      console.log("Application Submitted:", response.data);
      toast.success("Application submitted successfully.");
      setFormData({
        jobID: job._id,
        firstName: "",
        lastName: "",
        email: "",
        countryCode: "+91",
        phoneNumber: "",
        resume: null,
        area: "",
        cityStateCountry: "",
        getEmailUpdates: false,
      });
      closeApplyJobPopup();
      navigate("/work");
    } catch (error) {
      console.error("Error submitting application:", error);
      toast.error("Error submitting application. Please try again.");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <img
          src={job.company.companyLogo}
          alt={`${job.company.companyName} logo`}
          className={styles.icon}
        />
        <div className={styles.details}>
          <h3>{job.jobType}</h3>
          <p>{job.company.companyName}</p>
        </div>
      </div>

      <div className={styles.infoSection}>
        <div className={styles.infoItem}>
          <WorkIcon className={styles.infoIcon} />
          <span>{job.experience}</span>
        </div>
        <div className={styles.infoItem}>
          <AccessTimeIcon />
          <span>{job.employmentType}</span>
        </div>
        <div className={styles.infoItem}>
          <LocationOnIcon />
          <span>{job.location}</span>
        </div>
        <div className={styles.infoItem}>
          <DateRangeIcon />
          <span>{new Date(job.postedOn).toDateString()}</span>
        </div>
      </div>

      <div className={styles["action-apply"]}>
        <div className={styles.actionSection}>
          <div className={styles.action}>
            Report <ReportProblemIcon />
          </div>
          <div className={styles.action}>
            Share <ShareIcon />
          </div>
          <div className={styles.action}>
            Save <BookmarkBorderIcon />
          </div>
        </div>

        <div className={styles.applySection}>
          <button
            className={styles.applyNow}
            onClick={() => setApplyJobStep(1)}>
            Apply Now
          </button>
          <button className={styles.quickApply}>Quick Apply</button>
        </div>
      </div>

      {applyJobStep === 1 && (
        <ApplyJob1
          formData={formData}
          updateFormData={updateFormData}
          onNext={nextApplyJobStep}
          onClose={closeApplyJobPopup}
        />
      )}
      {applyJobStep === 2 && (
        <ApplyJob2
          formData={formData}
          updateFormData={updateFormData}
          onNext={nextApplyJobStep}
          onBack={prevApplyJobStep}
          onClose={closeApplyJobPopup}
        />
      )}
      {applyJobStep === 3 && (
        <ApplyJob3
          formData={formData}
          onSubmit={handleSubmit}
          onBack={prevApplyJobStep}
          onClose={closeApplyJobPopup}
        />
      )}
    </div>
  );
};

export default WorkTitle;
