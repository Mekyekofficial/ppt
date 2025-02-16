import React, { useState } from "react";
import styles from "./css/ProfileAbout.module.css";
import { FiEdit2 } from "react-icons/fi";

import ProfileAboutEdit from "./Edit/ProfileAboutEdit";

const ProfileAbout = ({user}) => {
  const [edit, setEdit] = useState(false);
    const handleEdit = () => {
      setEdit(!edit);
    }

  return (
    <div className={styles.aboutContainer}>
      <div className={styles.aboutHeader}>
        <span className={styles.aboutTitle}>About</span>
        <svg className={styles.editIcon} onClick={handleEdit} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M41.6667 158.333H53.5417L135 76.875L123.125 65L41.6667 146.458V158.333ZM25 175V139.583L146.875 18.125L181.667 53.75L60.4167 175H25ZM128.958 71.0417L123.125 65L135 76.875L128.958 71.0417Z" fill="black"/>
        </svg>
      </div>
      <p className={styles.aboutText}>
        {user?.about || "Add your about information here"}
      </p>
      {edit && <ProfileAboutEdit isOpen={edit} onClose={handleEdit} userId={user?._id}/>}
    </div>
  );
};

export default ProfileAbout;
