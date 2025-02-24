import React, { useState, useEffect } from "react";
import styles from "./css/ApplyJob2.module.css";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { toast } from 'react-toastify';

const ApplyJob2 = ({formData, updateFormData, onNext, onBack, onClose }) => {

    const handleFileChange = (e) => {
        if (e.target.files.length > 0) {
            updateFormData({ resume: e.target.files[0] });
            toast.success('Resume uploaded successfully');
        }
    }

  return (
    <div className={styles.overlay}>
      <div className={styles.popup}>
        {/* Header Section */}
        <div className={styles.header}>
          <ArrowBackIcon className={styles.backIcon} onClick={onBack} />
          <span className={styles.progress}></span>
          <CloseIcon className={styles.closeIcon} onClick={onClose}/>
        </div>

        {/* Title */}
        <h2 className={styles.title}>Add A CV For The Employer</h2>

        {/* Upload Resume Box */}
        <div className={styles.uploadBox}>
          <CloudUploadIcon className={styles.uploadIcon} />
          <p className={styles.uploadTitle}>Upload Your Resume</p>
          <p className={styles.uploadSubtitle}>
            Upload or Drag and drop Your Resume here
          </p>
          <p className={styles.uploadInfo}>
            English Resume in PDF/DOCX/TXT Only. Max file size 10 MB
          </p>
          <input type="file" className={styles.fileInput} onChange={handleFileChange}/>
        </div>

        {/* OR Separator */}
        <p className={styles.orText}>OR</p>

        {/* Create Resume Button */}
        <button className={styles.createResume}>Create Your Resume</button>

        {/* Continue Button */}
        <button className={styles.continueButton} onClick={onNext}>
          Continue
        </button>
      </div>
    </div>
  );
};

export default ApplyJob2;
