import React, { useState } from "react";
import styles from "./css/CompanyRegistrationPopup.module.css";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, Select, MenuItem, CircularProgress } from "@mui/material";
import { CheckCircle, Cancel } from "@mui/icons-material";

const CompanyRegistrationPopup = ({ open, onClose }) => {
  const [formData, setFormData] = useState({
    companyName: "",
    address: "",
    email: "",
    motto: "",
    type: "Private",
    website: "",
    domain: "",
    gstNumber: "",
    corporateId: "",
  });

  const [verification, setVerification] = useState({ gst: null, corporateId: null });
  const [loading, setLoading] = useState({ gst: false, corporateId: false });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const verifyGST = async () => {
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

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>Register Your Company</DialogTitle>
      <DialogContent>
        <TextField label="Company Name" name="companyName" value={formData.companyName} onChange={handleChange} fullWidth margin="dense" />
        <TextField label="Address" name="address" value={formData.address} onChange={handleChange} fullWidth margin="dense" />
        <TextField label="Company Email ID" name="email" value={formData.email} onChange={handleChange} fullWidth margin="dense" />
        <TextField label="Company Motto" name="motto" value={formData.motto} onChange={handleChange} fullWidth margin="dense" />
        <Select name="type" value={formData.type} onChange={handleChange} fullWidth displayEmpty>
          <MenuItem value="Private">Private</MenuItem>
          <MenuItem value="Government">Government</MenuItem>
        </Select>
        <TextField label="Company Website" name="website" value={formData.website} onChange={handleChange} fullWidth margin="dense" />
        <TextField label="Company Domain" name="domain" value={formData.domain} onChange={handleChange} fullWidth margin="dense" />

        {/* GST Number Verification */}
        <div className={styles.inputWithButton}>
          <TextField label="GST Number" name="gstNumber" value={formData.gstNumber} onChange={handleChange} fullWidth margin="dense" />
          <Button variant="contained" onClick={verifyGST} disabled={loading.gst}>
            {loading.gst ? <CircularProgress size={24} /> : "Verify"}
          </Button>
          {verification.gst === "valid" && <CheckCircle color="success" />}
          {verification.gst === "invalid" && <Cancel color="error" />}
        </div>

        {/* Corporate ID Verification */}
        <div className={styles.inputWithButton}>
          <TextField label="Corporate ID" name="corporateId" value={formData.corporateId} onChange={handleChange} fullWidth margin="dense" />
          <Button variant="contained" onClick={verifyCorporateId} disabled={loading.corporateId}>
            {loading.corporateId ? <CircularProgress size={24} /> : "Verify"}
          </Button>
          {verification.corporateId === "valid" && <CheckCircle color="success" />}
          {verification.corporateId === "invalid" && <Cancel color="error" />}
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button variant="contained" color="primary">Register</Button>
      </DialogActions>
    </Dialog>
  );
};

export default CompanyRegistrationPopup;
