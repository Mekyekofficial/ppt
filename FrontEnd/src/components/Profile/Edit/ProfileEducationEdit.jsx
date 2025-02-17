import { useState } from "react";
import styles from "./css/ProfileEducationEdit.module.css";
import { Dialog } from "@headlessui/react";
import { v4 as uuidv4 } from "uuid";
import API from "../../../api";
import { toast } from "react-toastify";

const ProfileEducationEdit = ({ isOpen, onClose, userId }) => {
  const [educationList, setEducationList] = useState([
    { name: "", stream: "", endDate: "" }
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
      { id: uuidv4(), name: "", stream: "", endDate: "" }
    ]);
  };

  const handleSave = async () => {
    try {
      const formData = new FormData();
      formData.append("userId", userId);
      formData.append("education", JSON.stringify(educationList));

      const response = await API.post("/profile/update", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.status === 201) {
        window.location.reload();
      } else {
        toast.error("Failed to update education");
      }
    } catch (error) {
      console.error("Failed to update education", error);
      toast.error("Failed to update education");
    }

    onClose();
  };

  return (
    <Dialog open={isOpen} onClose={onClose} className={styles.popupContainer}>
      <div className={styles.modal}>
        <h2 className={styles.header}>Add Education</h2>
        {educationList.map((edu) => (
          <div key={edu.id} className={styles.educationBlock}>
            <div className={styles.row}>
              <div className={styles.inputGroup}>
                <label>Institution Name*</label>
                <input
                  type="text"
                  value={edu.name}
                  onChange={(e) => handleChange(edu.id, "name", e.target.value)}
                />
              </div>
              <div className={styles.inputGroup}>
                <label>Stream*</label>
                <input
                  type="text"
                  value={edu.stream}
                  onChange={(e) => handleChange(edu.id, "stream", e.target.value)}
                />
              </div>
            </div>
            <div className={styles.inputGroup}>
              <label>End Date*</label>
              <input
                type="date"
                value={edu.endDate}
                onChange={(e) => handleChange(edu.id, "endDate", e.target.value)}
              />
            </div>
          </div>
        ))}
        <div className={styles.buttons}>
          <button className={styles.addMore} onClick={addMore}>
            + Add More
          </button>
          <button className={styles.save} onClick={handleSave}>
            Save
          </button>
        </div>
      </div>
      <div className={styles.overlay} onClick={onClose}></div>
    </Dialog>
  );
};

export default ProfileEducationEdit;
