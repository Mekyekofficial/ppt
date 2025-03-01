import React, { useState, useEffect } from "react";
import Styles from "./css/Profile.module.css";
import ProfileBanner from "./Profile/ProfileBanner";
import ProfileAbout from "./Profile/ProfileAbout";
import ProfileWorkExperience from "./Profile/ProfileWorkExperience";
import ProfileSkills from "./Profile/ProfileSkills";
import ProfileEducation from "./Profile/ProfileEducation";
import ProfileCertificate from "./Profile/ProfileCertificate";
import ProfileUrlAndHighlights from "./Profile/ProfileUrlAndHighlights";
import ProfileFriends from "./Profile/ProfileFriends";
import API from "../api";
import { toast } from "react-toastify";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [userinfo, setUserInfo] = useState(null);
  const [profileOwner, setProfileOwner] = useState(false);

  useEffect(() => {
    const userinfo = JSON.parse(localStorage.getItem("user-info"));
    setUserInfo(userinfo);
    const userId = window.location.pathname.split("/").pop();
    if (!userId) {
      toast.error("User ID not found in URL");
      return;
    }

    if (userinfo && userinfo._id === userId) {
      setProfileOwner(true);
    }

    const fetchUser = async () => {
      try {
        const response = await API.get(`/profile/get?_id=${userId}`); // Ensure your backend route is correct
        setUser(response.data);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    fetchUser();
  }, []);

  return (
    <div className={Styles.container}>
      <div className={Styles.mainContent}>
        <ProfileBanner user={user} profileOwner={profileOwner} />
        <ProfileAbout user={user} profileOwner={profileOwner} />
        <ProfileWorkExperience user={user} profileOwner={profileOwner} />
        <ProfileSkills user={user} profileOwner={profileOwner} />
        <ProfileEducation user={user} profileOwner={profileOwner} />
        <ProfileCertificate user={user} profileOwner={profileOwner} />
      </div>
      <div className={Styles.rightSideBar}>
        <ProfileUrlAndHighlights profileOwner={profileOwner} />
        <ProfileFriends profileOwner={profileOwner} />
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

export default Profile;
