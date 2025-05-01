import React, { useState, useEffect } from "react";
import Styles from "./css/Profile.module.css";
import ProfileBanner from "./Profile/ProfileBanner";
import ProfileAbout from "./Profile/ProfileAbout";
import ProfileWorkExperience from "./Profile/ProfileWorkExperience";
import ProfileSkills from "./Profile/ProfileSkills";
import ProfileEducation from "./Profile/ProfileEducation";
import ProfileCertificate from "./Profile/ProfileCertificate";
import ProfileUrlAndHighlights from "./Profile/ProfileUrlAndHighlights";
import ProfileFriendRequest from "./Profile/ProfileFriendRequest";
import ProfileFriendsSuggestions from "./Profile/ProfileFriendsSuggestions";
import ProfileFriends from "./Profile/ProfileFriends";
import API from "../api";
import { toast } from "react-toastify";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [profileOwner, setProfileOwner] = useState(false);
  const [isProfileOwner, setIsProfileOwner] = useState(false);

  useEffect(() => {
    const userinfo = JSON.parse(localStorage.getItem("user-info"));
    console.log("userinfo", userinfo);
    setUser(userinfo);
    const profileId = window.location.pathname.split("/").pop();
    if (!profileId) {
      toast.error("User ID not found in URL");
      return;
    }

    if (userinfo && userinfo._id === profileId) {
      setIsProfileOwner(true);
    }

    const fetchUser = async () => {
      try {
        const response = await API.get(`/profile/get?_id=${profileId}`); // Ensure your backend route is correct
        setProfileOwner(response.data);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    fetchUser();
  }, []);

  return (
    <div className={Styles.container}>
      <div className={Styles.mainContent}>
        <ProfileBanner user={user} profileOwner={profileOwner} isProfileOwner={isProfileOwner} />
        <ProfileAbout user={user} profileOwner={profileOwner} isProfileOwner={isProfileOwner} />
        <ProfileWorkExperience user={user} profileOwner={profileOwner} isProfileOwner={isProfileOwner} />
        <ProfileSkills user={user} profileOwner={profileOwner} isProfileOwner={isProfileOwner} />
        <ProfileEducation user={user} profileOwner={profileOwner} isProfileOwner={isProfileOwner} />
        <ProfileCertificate user={user} profileOwner={profileOwner} isProfileOwner={isProfileOwner} />
      </div>
      <div className={Styles.rightSideBar}>
        <ProfileUrlAndHighlights user={user} profileOwner={profileOwner} isProfileOwner={isProfileOwner} />
        {isProfileOwner && <ProfileFriendRequest user={user} profileOwner={profileOwner} isProfileOwner={isProfileOwner} />}
        <ProfileFriendsSuggestions user={user} profileOwner={profileOwner} isProfileOwner={isProfileOwner} />
        {isProfileOwner && <ProfileFriends user={user} profileOwner={profileOwner} isProfileOwner={isProfileOwner} />}
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
