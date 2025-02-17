import { useState } from "react";
import styles from "./css/ProfileCertificateEdit.module.css";
import { Dialog } from "@headlessui/react";
import { v4 as uuidv4 } from "uuid";
import API from "../../../api";
import { toast } from "react-toastify";

const ProfileCertificateEdit = ({ isOpen, onClose, userId }) => {
  const [certificates, setCertificates] = useState([
    {id: uuidv4(), courseName: "", courseFrom: "", type: "", duration: "", description: "" }
  ]);

  const handleChange = (id, field, value) => {
    setCertificates((prev) =>
      prev.map((cert) => (cert.id === id ? { ...cert, [field]: value } : cert))
    );
  };

  const handleFileChange = (id, file) => {
    // setCertificates((prev) =>
    //   prev.map((cert) => (cert.id === id ? { ...cert, file } : cert))
    // );
    toast.success("File uploaded successfully");
  };

  const addMore = () => {
    setCertificates((prev) => [
      ...prev,
      {id: uuidv4(), courseName: "", courseFrom: "", type: "", duration: "", description: "" },
    ]);
  };

  const handleSave = async () => {
    try {
      const formData = new FormData();
      formData.append("userId", userId);
      formData.append("certificates", JSON.stringify(certificates));

      const response = await API.post("/profile/update", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.status === 201) {
        window.location.reload();
      } else {
        toast.error("Failed to update certificates");
      }
    } catch (error) {
      console.error("Failed to update certificates", error);
      toast.error("Failed to update certificates");
    }
    onClose();
  };

  return (
    <Dialog open={isOpen} onClose={onClose} className={styles.popupContainer}>
      <div className={styles.modal}>
        <h2 className={styles.header}>Add Certificate</h2>
        {certificates.map((cert, index) => (
          <div key={cert.id} className={styles.certBlock}>
            <div className={styles.row}>
              <div className={styles.inputGroup}>
                <label>Course Name*</label>
                <input type="text" value={cert.courseName} onChange={(e) => handleChange(cert.id, "courseName", e.target.value)} />
              </div>
              <div className={styles.inputGroup}>
                <label>Course Done From*</label>
                <input type="text" value={cert.courseFrom} onChange={(e) => handleChange(cert.id, "courseFrom", e.target.value)} />
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.inputGroup}>
                <label>Type of Course*</label>
                <input type="text" value={cert.type} onChange={(e) => handleChange(cert.id, "type", e.target.value)} />
              </div>
              <div className={styles.inputGroup}>
                <label>Duration of Course*</label>
                <input type="text" value={cert.duration} onChange={(e) => handleChange(cert.id, "duration", e.target.value)} />
              </div>
            </div>
            <div className={styles.inputGroup}>
              <label>Add Description</label>
              <textarea value={cert.description} onChange={(e) => handleChange(cert.id, "description", e.target.value)} />
            </div>
            <div className={styles.inputGroup}>
              <label>Upload Certificate</label>
              <input type="file" onChange={(e) => handleFileChange(cert.id, e.target.files[0])} />
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

export default ProfileCertificateEdit;
