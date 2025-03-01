import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import { Box } from "@mui/system";
import styles from "./css/JobPopupForm.module.css";
import API from "../../../api";
import { toast } from "react-toastify";

const JobPopupForm = ({ open, onClose }) => {
  const [companyData, setCompanyData] = useState(null);
  const [companyLogoLoaded, setCompanyLogoLoaded] = useState(false);

  useEffect(() => {
    const company = localStorage.getItem("company-info");
    const companyId = localStorage.getItem("company-id");
    if (company) {
      try {
        setCompanyData(JSON.parse(company));
        setFormData((prev) => ({
          ...prev,
          companyId: companyId || "",
        }));
      } catch (error) {
        console.error("Error parsing company-info:", error);
      }
    }
  }, []);

  useEffect(() => {
    if (companyData?.companyLogo) {
      const img = new Image();
      img.src = companyData.companyLogo;
      img.onload = () => setCompanyLogoLoaded(true);
    }
  }, [companyData?.companyLogo]);

  const [formData, setFormData] = useState({
    companyName: "",
    companyEmail: "",
    companyLogo: null,
    companyId: "",
    qualifications: "",
    location: "",
    jobBenefits: "",
    jobDescription: "",
    role: "",
    industryType: "",
    department: "",
    employmentType: "",
    roleCategory: "",
    salary: "",
    experience: "",
    jobType: "",
    postedOn: "",
  });

  useEffect(() => {
    const companyId = localStorage.getItem("company-id");
    if (companyData) {
      setFormData((prev) => ({
        ...prev,
        companyName: companyData.companyName || "",
        companyEmail: companyData.companyEmail || "",
        companyLogo: companyData.companyLogo || null,
        companyId: companyId || "",
      }));
    }
  }, [companyData]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newFormData = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      newFormData.append(key, value);
    });

    console.log("Form Data Before Submit:", Object.fromEntries(newFormData.entries()));

    try {
      const response = await API.post("/posts/job", newFormData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      toast.success("Job posted successfully!");
      setFormData({
        qualifications: "",
        location: "",
        jobBenefits: "",
        jobDescription: "",
        role: "",
        industryType: "",
        department: "",
        employmentType: "",
        roleCategory: "",
        salary: "",
        experience: "",
        jobType: "",
        postedOn: "",
      });
      onClose(); // Close the popup on successful submission
    } catch (error) {
      toast.error("Failed to post job!");
      console.error("Failed to post job!", error);
    }
  };

  return (
    <Dialog open={open} onClose={onClose} className={styles.dialog}>
      <DialogTitle className={styles.DialogTitle}>Job Posting Form</DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit}>
          <Box display="flex" flexDirection="column" gap={2}>
            <TextField
              label="Qualifications"
              variant="outlined"
              fullWidth
              name="qualifications"
              value={formData.qualifications}
              onChange={handleChange}
            />
            <TextField
              label="Location"
              variant="outlined"
              fullWidth
              name="location"
              value={formData.location}
              onChange={handleChange}
            />
            <TextField
              label="Job Benefits"
              variant="outlined"
              fullWidth
              name="jobBenefits"
              value={formData.jobBenefits}
              onChange={handleChange}
            />
            <TextField
              label="Job Description"
              variant="outlined"
              fullWidth
              name="jobDescription"
              value={formData.jobDescription}
              onChange={handleChange}
            />
            <TextField
              label="Role"
              variant="outlined"
              fullWidth
              name="role"
              value={formData.role}
              onChange={handleChange}
            />
            <TextField
              label="Industry Type"
              variant="outlined"
              fullWidth
              name="industryType"
              value={formData.industryType}
              onChange={handleChange}
            />
            <TextField
              label="Department"
              variant="outlined"
              fullWidth
              name="department"
              value={formData.department}
              onChange={handleChange}
            />
            <TextField
              label="Salary"
              variant="outlined"
              fullWidth
              name="salary"
              value={formData.salary}
              onChange={handleChange}
            />
            <TextField
              label="Experience"
              variant="outlined"
              fullWidth
              name="experience"
              value={formData.experience}
              onChange={handleChange}
            />
            <FormControl fullWidth>
              <InputLabel>Employment Type</InputLabel>
              <Select
                name="employmentType"
                value={formData.employmentType}
                onChange={handleChange}
                label="Employment Type"
              >
                <MenuItem value="Full-time">Full-time</MenuItem>
                <MenuItem value="Part-time">Part-time</MenuItem>
                <MenuItem value="Remote">Remote</MenuItem>
              </Select>
            </FormControl>
            <TextField
              label="Role Category"
              variant="outlined"
              fullWidth
              name="roleCategory"
              value={formData.roleCategory}
              onChange={handleChange}
            />
            <FormControl fullWidth>
              <InputLabel>Job Type</InputLabel>
              <Select
                name="jobType"
                value={formData.jobType}
                onChange={handleChange}
                label="Job Type"
              >
                <MenuItem value="Permanent">Permanent</MenuItem>
                <MenuItem value="Project">Project</MenuItem>
                <MenuItem value="Internship">Internship</MenuItem>
              </Select>
            </FormControl>
            <TextField
              label="Posted On"
              variant="outlined"
              fullWidth
              type="date"
              name="postedOn"
              value={formData.postedOn}
              onChange={handleChange}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Box>
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleSubmit} color="primary">
          Post Job
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default JobPopupForm;
