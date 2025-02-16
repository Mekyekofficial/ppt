import { useState } from "react";
import styles from "./css/ProfileExperienceEdit.module.css";

const ProfileExperienceEdit = ({ onClose, onSave }) => {
  const [experiences, setExperiences] = useState([
    { company: "",title: "", jobType: "", startDate: "", endDate: "", description: "" },
  ]);

  const handleChange = (index, field, value) => {
    const updatedExperiences = [...experiences];
    updatedExperiences[index][field] = value;
    setExperiences(updatedExperiences);
  };

  const addExperience = () => {
    setExperiences([
      ...experiences,
      { company: "",title: "", jobType: "", startDate: "", endDate: "", description: "" },
    ]);
  };

  const handleSave = () => {
    onSave(experiences);
    onClose();
  };

  return (
    <div className={styles.popupContainer}>
      <div className={styles.popup}>
        <h2>Add your work Experience</h2>
        {experiences.map((exp, index) => (
          <div key={index} className={styles.experienceBlock}>
            <input
              type="text"
              placeholder="Title*"
              value={exp.title}
              onChange={(e) => handleChange(index, "title", e.target.value)}
            />
            <input
              type="text"
              placeholder="Company name*"
              value={exp.company}
              onChange={(e) => handleChange(index, "company", e.target.value)}
            />
            <select
              value={exp.jobType}
              onChange={(e) => handleChange(index, "jobType", e.target.value)}
            >
              <option value="">Type of Job/internship*</option>
              <option value="Full-time">Full-time</option>
              <option value="Part-time">Part-time</option>
              <option value="Internship">Internship</option>
            </select>
            <input
              type="date"
              placeholder="Start date*"
              value={exp.startDate}
              onChange={(e) => handleChange(index, "startDate", e.target.value)}
            />
            <input
              type="date"
              placeholder="End Date*"
              value={exp.endDate}
              onChange={(e) => handleChange(index, "endDate", e.target.value)}
            />
            <textarea
              placeholder="Add description*"
              value={exp.description}
              onChange={(e) => handleChange(index, "description", e.target.value)}
            />
          </div>
        ))}
        <button className={styles.addMoreButton} onClick={addExperience}>
          Add More +
        </button>
        <div className={styles.footer}>
          <button className={styles.saveButton} onClick={handleSave}>Save</button>
        </div>
      </div>
      <div className={styles.overlay} onClick={onClose}></div>
    </div>
  );
};

export default ProfileExperienceEdit;
