import React from "react";
import styles from "./css/ApplyJob3.module.css";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import { Switch, Button } from "@mui/material";

const ApplyJob3 = ({ formData, onSubmit, onClose, onBack }) => {
  return (
    <div className={styles.popupOverlay}>
      <div className={styles.popupContent}>
        {/* Header with Back & Close Icons */}
        <div className={styles.header}>
          <ArrowBackIosNewIcon className={styles.backIcon} onClick={onBack} />
          <CloseIcon className={styles.exitIcon} onClick={onClose} />
        </div>

        <div className={styles.progressBar}></div>

        <h2 className={styles.heading}>Please Review Your Application</h2>

        {/* Contact Information Section */}
        <p className={styles.subHeading}>Contact Information</p>
        <div className={styles.infoBox}>
          <div className={styles.infoRow}>
            <p>Full Name</p>
            <p className={styles.bold}>{formData.firstName || "N/A"}&nbsp;{formData.lastName || "N/A"}</p>
          </div>
          <div className={styles.infoRow}>
            <p>Email</p>
            <p className={styles.bold}>{formData.email || "N/A"}</p>
          </div>
          <div className={styles.infoRow}>
            <p>Phone Number</p>
            <p className={styles.bold}>{formData.phoneNumber || "N/A"}</p>
          </div>
          <div className={styles.infoRow}>
            <p>Area</p>
            <p className={styles.bold}>{formData.area || "N/A"}</p>
          </div>
          <div className={styles.infoRow}>
            <p>City, State, Country</p>
            <p className={styles.bold}>{formData.cityStateCountry || "N/A"}</p>
          </div>
        </div>

        {/* Resume Section */}
        <p className={styles.subHeading}>Resume</p>
        {formData.resume ? (
          <a href={formData.resume} target="_blank" rel="noopener noreferrer" className={styles.resumeBox}>
            <PictureAsPdfIcon className={styles.pdfIcon} />
            <p>View Resume</p>
          </a>
        ) : (
          <p className={styles.noResume}>No resume uploaded</p>
        )}

        {/* Email Updates Toggle */}
        <div className={styles.emailUpdates}>
          <p className={styles.bold}>Get Email Updates</p>
          <Switch />
        </div>

        {/* Terms & Conditions */}
        <p className={styles.terms}>
          By creating a job alert, you agree to our <span>Terms</span>. You can change your consent settings at any time by unsubscribing or as detailed in our terms.
        </p>
        <p className={styles.termsDetails}>
          By pressing apply: 1) you agree to our <span>Terms, Cookie and Privacy Policies</span>; 2) you consent to your application being transmitted to the Employer (Indeed does not guarantee receipt), and processed and analyzed in accordance with its and Indeed’s terms and privacy policies; 3) you acknowledge that, when you submit applications for jobs outside your country, it may involve you sending your personal data to countries with lower levels of data protection; and 4) you further acknowledge that we may hide your contact information until this employer moves forward with your application.
        </p>

        {/* Submit Button */}
        <Button variant="contained" className={styles.submitButton} onClick={onSubmit}>
          Submit Your Application
        </Button>
      </div>
    </div>
  );
};

export default ApplyJob3;
