import React, { useState } from "react";
import styles from "./css/CompanyRegistrationPopup.module.css";
import {
  Dialog, DialogTitle, DialogContent, DialogActions,
  Button, TextField, CircularProgress, InputLabel
} from "@mui/material";
import { CheckCircle, Cancel } from "@mui/icons-material";
import { toast } from "react-toastify";
import API from "../api";
import { useNavigate } from 'react-router-dom';

const CompanyRegistrationPopup = ({ open, onClose }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    companyName: "",
    address: "",
    email: "",
    motto: "",
    website: "",
    domain: "",
    gstNumber: "",
    corporateId: "",
    userId: "",
    companyLogo: null,
  });

  const [verification, setVerification] = useState({ gst: null, corporateId: null });
  const [loading, setLoading] = useState({ gst: false, corporateId: false });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, companyLogo: e.target.files[0] });
  };

  const verifyGST = async () => {
    if (!formData.gstNumber) return;
    setLoading({ ...loading, gst: true });
    try {
      const response = await fetch(`https://api.example.com/verify-gst?gst=${formData.gstNumber}`);
      const data = await response.json();
      setVerification({ ...verification, gst: data.valid ? "valid" : "invalid" });
    } catch (error) {
      setVerification({ ...verification, gst: "error" });
    }
    setLoading({ ...loading, gst: false });
  };

  const verifyCorporateId = async () => {
    if (!formData.corporateId) return;
    setLoading({ ...loading, corporateId: true });
    try {
      const response = await fetch(`https://api.example.com/verify-corporate?id=${formData.corporateId}`);
      const data = await response.json();
      setVerification({ ...verification, corporateId: data.valid ? "valid" : "invalid" });
    } catch (error) {
      setVerification({ ...verification, corporateId: "error" });
    }
    setLoading({ ...loading, corporateId: false });
  };

  const handleSubmit = async () => {
    const formDataToSend = new FormData();
    const userinfo = localStorage.getItem("user-info");
    const user = JSON.parse(userinfo);
    const userId = user._id;
    formDataToSend.append("userId", userId);
    Object.entries(formData).forEach(([key, value]) => {
      formDataToSend.append(key, value);
    });
    try {
        const response = await API.post("/company/register", formDataToSend, {
            headers: { 'Content-Type': 'multipart/form-data' }
        });

        if (response.data.success) {
            toast.success("Company registered successfully.");
            setFormData({
                companyName: "",
                address: "",
                email: "",
                motto: "",
                website: "",
                domain: "",
                gstNumber: "",
                corporateId: "",
                userId: "",
                companyLogo: null,
            });
            const data = response.data;
            const company = data.company;
            const { companyName, email, companyLogo  } = company;
            const companyInfo = { companyName, companyEmail: email, companyLogo };

            localStorage.setItem("company-info", JSON.stringify(companyInfo));
            localStorage.setItem("company-id", company._id);
        
            onClose();
            navigate("/ATS");
        } else {
            toast.error(data.message || "Error registering company. Please try again.");
        }
    } catch (error) {
        toast.error("Error registering company. Please try again.");
    }    
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>Register Your Company</DialogTitle>
      <DialogContent>
        <TextField label="Company Name" name="companyName" value={formData.companyName} onChange={handleChange} fullWidth margin="dense" />
        <TextField label="Address" name="address" value={formData.address} onChange={handleChange} fullWidth margin="dense" />
        <TextField label="Company Email ID" name="email" value={formData.email} onChange={handleChange} fullWidth margin="dense" />
        <TextField label="Company Motto" name="motto" value={formData.motto} onChange={handleChange} fullWidth margin="dense" />
        <TextField label="Company Website" name="website" value={formData.website} onChange={handleChange} fullWidth margin="dense" />
        <TextField label="Company Domain" name="domain" value={formData.domain} onChange={handleChange} fullWidth margin="dense" />

        {/* Upload Company Logo */}
        <InputLabel className={styles.uploadLabel}>Upload Company Logo:</InputLabel>
        <input type="file" accept="image/*" onChange={handleFileChange} />

        {/* GST Number Verification (Optional) */}
        <div className={styles.inputWithButton}>
          <TextField label="GST Number (Optional)" name="gstNumber" value={formData.gstNumber} onChange={handleChange} fullWidth margin="dense" />
          <Button variant="contained" onClick={verifyGST} disabled={loading.gst}>
            {loading.gst ? <CircularProgress size={24} /> : "Verify"}
          </Button>
          {verification.gst === "valid" && <CheckCircle color="success" />}
          {verification.gst === "invalid" && <Cancel color="error" />}
        </div>

        {/* Corporate ID Verification (Optional) */}
        <div className={styles.inputWithButton}>
          <TextField label="Corporate ID (Optional)" name="corporateId" value={formData.corporateId} onChange={handleChange} fullWidth margin="dense" />
          <Button variant="contained" onClick={verifyCorporateId} disabled={loading.corporateId}>
            {loading.corporateId ? <CircularProgress size={24} /> : "Verify"}
          </Button>
          {verification.corporateId === "valid" && <CheckCircle color="success" />}
          {verification.corporateId === "invalid" && <Cancel color="error" />}
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button variant="contained" color="primary" onClick={handleSubmit}>Register</Button>
      </DialogActions>
    </Dialog>
  );
};

export default CompanyRegistrationPopup;
