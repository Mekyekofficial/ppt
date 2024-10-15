import React from "react";
import SearchBar from "./TalentPool/SearchBar";
import Folders from "./TalentPool/Folders";
import TalentPoolStyles from "./css/TalentPool.module.css";

const TalentPool = () => {
    return (
        <div className={TalentPoolStyles["talent-pool"]}>
            <SearchBar />
            <Folders />
        </div>
    );
};

export default TalentPool;