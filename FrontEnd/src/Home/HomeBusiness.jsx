import React from "react";
import styles from "./css/HomeBusiness.module.css";
import { FaUsers, FaHandsHelping, FaBuilding, FaGlobe } from "react-icons/fa";
import { MdOutlineAssignmentTurnedIn } from "react-icons/md";

const HomeBusiness = () => {
  return (
    <div className={styles.container}>
      <div className={styles.banner}>
        <div className={styles.content}>
          <h2>
            Helping a local <br />
            <span>business reinvent itself</span>
          </h2>
          <p>We reached here with our hard work and dedication</p>
        </div>
        <div className={styles.stats}>
          <div className={styles.statItem}>
            <FaUsers className={styles.icon} />
            <p>
              <strong>11M+</strong> <br /> Active users
            </p>
          </div>
          <div className={styles.statItem}>
            <FaHandsHelping className={styles.icon} />
            <p>
              <strong>132k+</strong> <br /> Opportunities
            </p>
          </div>
          <div className={styles.statItem}>
            <FaBuilding className={styles.icon} />
            <p>
              <strong>42k+</strong> <br /> Organizations
            </p>
          </div>
          <div className={styles.statItem}>
            <FaGlobe className={styles.icon} />
            <p>
              <strong>72+</strong> <br /> Countries
            </p>
          </div>
          <div className={styles.statItem}>
            <MdOutlineAssignmentTurnedIn className={styles.icon} />
            <p>
              <strong>23.3M+</strong> <br /> Assessments
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBusiness;
