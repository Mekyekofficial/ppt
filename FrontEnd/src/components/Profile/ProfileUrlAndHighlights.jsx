import styles from "./css/ProfileUrlAndHighlights.module.css";
// import microsoftLogo from "/assets/microsoft-logo.png"; // Replace with actual image path
// import harvardLogo from "/assets/harvard-logo.png"; // Replace with actual image path
// import editIcon from "/assets/edit-icon.png"; // Replace with actual image path
import DemoImage from "../../assets/flipkart.png";
import Demo from "../../assets/user-avatar-profile.png";

const ProfileUrlAndHighlights = () => {
  return (
    <div className={styles.card}>
      <svg className={styles.editIcon} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M41.6667 158.333H53.5417L135 76.875L123.125 65L41.6667 146.458V158.333ZM25 175V139.583L146.875 18.125L181.667 53.75L60.4167 175H25ZM128.958 71.0417L123.125 65L135 76.875L128.958 71.0417Z" fill="black"/>
        </svg>

      {/* Microsoft Internship */}
      <div className={styles.item}>
        <img src={DemoImage} alt="Microsoft" className={styles.logo} />
        <span className={styles.text}>Intern at Flipkark</span>
      </div>

      {/* Harvard Education */}
      <div className={styles.item}>
        <img src={Demo} alt="Harvard" className={styles.logo} />
        <span className={styles.text}>Studying in Harvard university</span>
      </div>

      {/* Public Profile URL */}
      <div className={styles.publicProfile}>
        <span className={styles.title}>Public Profile & URL</span>
        <span className={styles.url}>WWW.mekyek.com/in/Alexrosan</span>
      </div>
    </div>
  );
};

export default ProfileUrlAndHighlights;
