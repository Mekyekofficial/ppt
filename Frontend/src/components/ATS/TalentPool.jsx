import React from "react";
import SearchBar from "./TalentPool/SearchBar";
import Folders from "./TalentPool/Folders";
import "./css/TalentPool.css";

const TalentPool = () => {
    return (
        <div className="talent-pool">
            <SearchBar />
            <Folders />
        </div>
    );
};

export default TalentPool;