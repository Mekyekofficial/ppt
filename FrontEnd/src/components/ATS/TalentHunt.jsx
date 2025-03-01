import React, { useState, useEffect } from "react";
import SearchBar from "./TalentHunt/SearchBar";
import TalentPoolStyles from "./css/TalentHunt.module.css";
import API from "../../api";
import Card from "./TalentHunt/Card";

const TalentPool = () => {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    const fetchProfiles = async () => {
      const response = await API.get("/profile/getAll");
      const data = response.data;
      setProfiles(data);
    };

    fetchProfiles();
  }, []);

  return (
    <div className={TalentPoolStyles["talent-hunt"]}>
      <SearchBar />
      <div className={TalentPoolStyles.cards}>
        {profiles.map((profile) => (
          <Card profile={profile} />
        ))}
      </div>
    </div>
  );
};

export default TalentPool;
