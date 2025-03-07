import React, { useState, useEffect } from "react";
import styles from "./css/CommunityMain.module.css";
import { ChevronRight } from "lucide-react";
import CommunityYour from "./CommunityYour";
import DiscoverGroups from "./DiscoverGroups";
import API from "../../api";

const CommunityMain = () => {
  const [userInfo, setUserInfo] = useState({});
  const [yourCommunities, setYourCommunities] = useState([]);

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("user-info"));
    setUserInfo(userInfo);

    const fetchYourCommunities = async () => {
      try {
        const response = await API.get(
          `/comunity/getWithUserId?_id=${userInfo._id}`
        );
        setYourCommunities(response.data);
      } catch (error) {
        console.error("Error fetching communities:", error);
      }
    };

    if (userInfo?._id) {
      fetchYourCommunities();
    }
  }, []);

  return (
    <div className={styles.mainContent}>
      <div className={styles.yourCommunitiesSection}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Your Communities</h2>
          <ChevronRight size={20} className={styles.headerIcon} />
        </div>
        <CommunityYour communityList={yourCommunities} />
      </div>
      <div className={styles.discoverSection}>
        <DiscoverGroups />
      </div>
    </div>
  );
};

export default CommunityMain;
