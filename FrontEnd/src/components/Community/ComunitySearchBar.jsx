import React from "react";
import styles from "./css/ComunitySearchBar.module.css";
import { Search, Filter, Users } from "lucide-react";

const ComunitySearchBar = () => {
  return (
    <div className={styles.container}>
      {/* Search Bar */}
      <div className={styles.searchBar}>
        <Search className={styles.searchIcon} size={18} />
        <input
          type="text"
          placeholder="Find Communities"
          className={styles.input}
        />
        <div className={styles.filter}>
          <Filter size={18} />
          <span>Filter</span>
        </div>
      </div>

      {/* Create Communities Button */}
      <button className={styles.createBtn}>
        <Users className={styles.createIcon} size={16} />
        Create Communities
      </button>
    </div>
  );
};

export default ComunitySearchBar;
