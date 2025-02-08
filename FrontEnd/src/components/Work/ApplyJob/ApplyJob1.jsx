import React from "react";
import styles from "./css/ApplyJob1.module.css";
import { TextField, Button, InputAdornment, MenuItem } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import CloseIcon from "@mui/icons-material/Close";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import { ReactComponent as IndiaFlag } from "../../../assets/india-flag.svg"; // Use an SVG of the Indian flag

const ApplyJob1 = ({formData, updateFormData, onNext, onClose}) => {
    const countryCodes = [
        { code: "+91", country: "India" },
        { code: "+1", country: "United States" },
        { code: "+44", country: "United Kingdom" },
        { code: "+61", country: "Australia" },
    ];


  return (
    <div className={styles.container}>
      {/* Header Section */}
      <div className={styles.header}>
        <ArrowBackIosNewIcon className={styles.backIcon} onClick={onClose} />
        <div className={styles.progressBar}>
          <div className={styles.progress}></div>
        </div>
        <CloseIcon className={styles.exitIcon} onClick={onClose} />
      </div>

      {/* Contact Info Form */}
      <h2 className={styles.title}>Add Your Contact Information</h2>

      <div className={styles.form}>
        <TextField label="First Name" variant="outlined" fullWidth className={styles.input} 
          onChange={(e) => updateFormData({firstName: e.target.value})}
          value={formData.firstName}
        />
        <TextField label="Last Name" variant="outlined" fullWidth className={styles.input} 
          onChange={(e) => updateFormData({lastName: e.target.value})}
          value={formData.lastName}
        />

        {/* Email Input */}
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          className={styles.input}
          onChange={(e) => updateFormData({email: e.target.value})}
          value={formData.email}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <CheckCircleIcon className={styles.verifiedIcon} />
              </InputAdornment>
            ),
          }}
        />

        {/* City, State */}
        <TextField label="City, State" variant="outlined" fullWidth className={styles.input} 
          onChange={(e) => updateFormData({cityStateCountry: e.target.value})}
          value={formData.cityStateCountry}
        />
        <p className={styles.changeCountry}>
          Not from India? <span className={styles.link}>Change Country</span>
        </p>

        {/* Area */}
        <TextField label="Area" variant="outlined" fullWidth className={styles.input} 
          onChange={(e) => updateFormData({area: e.target.value})}
          value={formData.area}
        />

        {/* Phone Number */}
        <TextField
            select
            variant="outlined"
            className={styles.countryCode}
            onChange={(e) => updateFormData({countryCode: e.target.value})}
            value={formData.countryCode}
        >
            {countryCodes.map((option) => (
            <MenuItem key={option.code} value={option.code}>
                {option.code} ({option.country})
            </MenuItem>
            ))}
        </TextField>

        <TextField
            type="tel"
            label="Phone Number"
            variant="outlined"
            fullWidth
            className={styles.input}
            value={formData.phoneNumber}
            onChange={(e) => updateFormData({phoneNumber: e.target.value})}
        />


        {/* Continue Button */}
        <Button variant="contained" className={styles.continueButton} fullWidth onClick={onNext}>
          Continue
        </Button>
      </div>
    </div>
  );
};

export default ApplyJob1;
