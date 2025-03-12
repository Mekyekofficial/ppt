import React, { useState, useEffect } from "react";
import Styles from "./css/Profile.module.css";
import CompanyProfileBanner from "./CompanyProfile/CompanyProfileBanner";
import CompanyProfileAbout from "./CompanyProfile/CompanyProfileAbout";
import Posts from './CompanyProfile/Posts';
import API from "../api";
import { toast } from "react-toastify";

const CompanyProfile = () => {
  const [company, setCompany] = useState(null);
  const [companyId, setCompanyId] = useState(null);
  const [Companyinfo, setCompanyInfo] = useState(null);
  const [profileOwner, setProfileOwner] = useState(false);
  const [profileCategory, setProfileCategory] = useState("Home");

  useEffect(() => {
    const companyinfo = JSON.parse(localStorage.getItem("company-info"));
    setCompanyInfo(companyinfo);
    const companyId = window.location.pathname.split("/").pop();
    setCompanyId(companyId);
    if (!companyId) {
      toast.error("Company ID not found in URL");
      return;
    }

    const fetchUser = async () => {
      try {
        const response = await API.get(`/company/getCompany?_id=${companyId}`); // Ensure your backend route is correct
        setCompany(response.data.company);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    fetchUser();

    if (companyinfo && companyinfo._id === company?.companyId) {
      setProfileOwner(true);
    }

  }, []);

  return (
    <div className={Styles.container}>
      <div className={Styles.mainContent}>
        <CompanyProfileBanner user={company} profileOwner={profileOwner} setProfileCategory={setProfileCategory} />
        <CompanyProfileAbout user={company} profileOwner={profileOwner} />
        <Posts profileCategory={profileCategory} companyId={companyId}/>
      </div>
      <div className={Styles.rightSideBar}>
      </div>
      <div className={Styles.back} onClick={() => window.history.back()}>
        <svg
          viewBox="0 0 631 586"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M289.206 195.334L184.039 293.001L289.206 390.667M446.956 390.667L341.789 293.001L446.956 195.334"
            stroke="#292556"
            stroke-width="57.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
  );
};

export default CompanyProfile;
