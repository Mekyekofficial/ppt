import { useState } from "react";
import styles from "./css/ProfileSkillEdit.module.css";
import API from "../../../api";
import { toast } from "react-toastify";

const ProfileSkillEdit = ({ onClose, onSave, userId }) => {
  const [skills, setSkills] = useState({
    technicalKnowledge: [{ language: "", framework: "" }],
    coreKnowledge: [""],
    languages: [{ name: "", level: "" }],
  });

  const handleTechnicalChange = (index, field, value) => {
    const updatedSkills = [...skills.technicalKnowledge];
    updatedSkills[index][field] = value;
    setSkills({ ...skills, technicalKnowledge: updatedSkills });
  };

  const handleCoreChange = (index, value) => {
    const updatedCore = [...skills.coreKnowledge];
    updatedCore[index] = value;
    setSkills({ ...skills, coreKnowledge: updatedCore });
  };

  const handleLanguageChange = (index, field, value) => {
    const updatedLanguages = [...skills.languages];
    updatedLanguages[index][field] = value;
    setSkills({ ...skills, languages: updatedLanguages });
  };

  const addTechnicalKnowledge = () => {
    setSkills({
      ...skills,
      technicalKnowledge: [...skills.technicalKnowledge, { language: "", framework: "" }],
    });
  };

  const addCoreKnowledge = () => {
    setSkills({ ...skills, coreKnowledge: [...skills.coreKnowledge, ""] });
  };

  const addLanguage = () => {
    setSkills({
      ...skills,
      languages: [...skills.languages, { name: "", level: "" }],
    });
  };

  const handleSave = async () => {
    try {
      const formData = new FormData();
      formData.append("userId", userId);
      formData.append("skills", JSON.stringify(skills));

      const responce = await API.post("/profile/update", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (responce.status === 201) {
        window.location.reload();
      } else {
        toast.error("Failed to update profile", responce.data);
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to update profile", error);
    }
    onClose();
  };

  return (
    <div className={styles.popupContainer}>
      <div className={styles.popup}>
        <h2>Add your Skills</h2>

        {/* Technical Knowledge */}
        <h3>Add Technical Knowledge</h3>
        {skills.technicalKnowledge.map((tech, index) => (
          <div key={index} className={styles.row}>
            <input
              type="text"
              placeholder="Add Languages"
              value={tech.language}
              onChange={(e) => handleTechnicalChange(index, "language", e.target.value)}
            />
            <input
              type="text"
              placeholder="Add Frameworks"
              value={tech.framework}
              onChange={(e) => handleTechnicalChange(index, "framework", e.target.value)}
            />
            <button onClick={addTechnicalKnowledge}>+</button>
          </div>
        ))}

        {/* Core Knowledge */}
        <h3>Add Core Knowledge</h3>
        {skills.coreKnowledge.map((core, index) => (
          <div key={index} className={styles.row}>
            <input
              type="text"
              placeholder="Add Core Knowledge"
              value={core}
              onChange={(e) => handleCoreChange(index, e.target.value)}
            />
            <button onClick={addCoreKnowledge}>+</button>
          </div>
        ))}

        {/* Languages */}
        <h3>Add Languages</h3>
        {skills.languages.map((lang, index) => (
          <div key={index} className={styles.row}>
            <input
              type="text"
              placeholder="Add Languages"
              value={lang.name}
              onChange={(e) => handleLanguageChange(index, "name", e.target.value)}
            />
            <input
              type="text"
              placeholder="Add Level"
              value={lang.level}
              onChange={(e) => handleLanguageChange(index, "level", e.target.value)}
            />
            <button onClick={addLanguage}>+</button>
          </div>
        ))}

        <div className={styles.footer}>
          <button className={styles.saveButton} onClick={handleSave}>Save</button>
        </div>
      </div>
      <div className={styles.overlay} onClick={onClose}></div>
    </div>
  );
};

export default ProfileSkillEdit;
