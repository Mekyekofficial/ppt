import React from "react";
import styles from "./css/userSuggestions.module.css";
import ProfileImage from "../../assets/profile-image.png";
import { ChevronDown } from "lucide-react"; // For the down arrow icon

const users = [
  {
    name: "Alex Chen",
    avatar: ProfileImage, // Replace with actual image path
  },
  {
    name: "Emma Watson",
    avatar: ProfileImage, // Replace with actual image path
  },
];

const UserSuggestions = () => {
  return (
    <div className={styles.suggestionsBox}>
      <h3 className={styles.heading}>Suggested connections</h3>
      <ul className={styles.userList}>
        {users.map((user, index) => (
          <li key={index} className={styles.userItem}>
            <img src={user.avatar} alt={user.name} className={styles.avatar} />
            <span className={styles.name}>{user.name}</span>
            <span className={styles.follow}>Follow</span>
          </li>
        ))}
      </ul>
      <div className={styles.dropdown}>
        <ChevronDown size={20} />
      </div>
    </div>
  );
};

export default UserSuggestions;
