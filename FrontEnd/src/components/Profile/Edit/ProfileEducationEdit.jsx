import { useState } from "react";
import styles from "./css/ProfileEducationEdit.module.css";
import { Dialog } from "@headlessui/react";
import { v4 as uuidv4 } from "uuid";

const ProfileEducationEdit = ({ isOpen, onClose }) => {
  const [educationList, setEducationList] = useState([
    { id: uuidv4(), university: "", stream: "", endDate: "", school: "", schoolStream: "", schoolEndDate: "" }
  ]);

  const handleChange = (id, field, value) => {
    setEducationList((prev) =>
      prev.map((edu) =>
        edu.id === id ? { ...edu, [field]: value } : edu
      )
    );
  };

  const addMore = () => {
    setEducationList((prev) => [
      ...prev,
      { id: uuidv4(), university: "", stream: "", endDate: "", school: "", schoolStream: "", schoolEndDate: "" },
    ]);
  };

  const handleSave = () => {
    console.log("Saved Data:", educationList);
    onClose();
  };

  return (
    <Dialog open={isOpen} onClose={onClose} className={styles.popupContainer}>
      <div className={styles.modal}>
        <h2 className={styles.header}>Add Education</h2>
        {educationList.map((edu, index) => (
          <div key={edu.id} className={styles.educationBlock}>
            <div className={styles.row}>
              <div className={styles.inputGroup}>
                <label>University Name*</label>
                <input type="text" value={edu.university} onChange={(e) => handleChange(edu.id, "university", e.target.value)} />
              </div>
              <div className={styles.inputGroup}>
                <label>Add Stream*</label>
                <input type="text" value={edu.stream} onChange={(e) => handleChange(edu.id, "stream", e.target.value)} />
              </div>
            </div>
            <div className={styles.inputGroup}>
              <label>End Date*</label>
              <input type="date" value={edu.endDate} onChange={(e) => handleChange(edu.id, "endDate", e.target.value)} />
            </div>
            <div className={styles.row}>
              <div className={styles.inputGroup}>
                <label>School Name*</label>
                <input type="text" value={edu.school} onChange={(e) => handleChange(edu.id, "school", e.target.value)} />
              </div>
              <div className={styles.inputGroup}>
                <label>Add Stream</label>
                <input type="text" value={edu.schoolStream} onChange={(e) => handleChange(edu.id, "schoolStream", e.target.value)} />
              </div>
            </div>
            <div className={styles.inputGroup}>
              <label>End Date*</label>
              <input type="date" value={edu.schoolEndDate} onChange={(e) => handleChange(edu.id, "schoolEndDate", e.target.value)} />
            </div>
          </div>
        ))}
        <div className={styles.buttons}>
          <button className={styles.addMore} onClick={addMore}>+ Add More</button>
          <button className={styles.save} onClick={handleSave}>Save</button>
        </div>
      </div>
      <div className={styles.overlay} onClick={onClose}></div>
    </Dialog>
  );
};

export default ProfileEducationEdit;
