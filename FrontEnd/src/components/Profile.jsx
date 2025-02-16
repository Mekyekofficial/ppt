import React from 'react';
import Styles from './css/Profile.module.css';
import ProfileBanner from './Profile/ProfileBanner';
import ProfileAbout from './Profile/ProfileAbout';
import ProfileWorkExperience from './Profile/ProfileWorkExperience';
import ProfileSkills from './Profile/ProfileSkills';
import ProfileEducation from './Profile/ProfileEducation';
import ProfileCertificate from './Profile/ProfileCertificate';
import ProfileUrlAndHighlights from './Profile/ProfileUrlAndHighlights';
import ProfileFriends from './Profile/ProfileFriends';

const Profile = () => {
    return (
        <div className={Styles.container}>
            <div className={Styles.mainContent}>
                <ProfileBanner />
                <ProfileAbout />
                <ProfileWorkExperience />
                <ProfileSkills />
                <ProfileEducation />
                <ProfileCertificate />
            </div>
            <div className={Styles.rightSideBar}>
                <ProfileUrlAndHighlights />
                <ProfileFriends />
            </div>
            <div className={Styles.back} onClick={() => window.history.back()}> 
                <svg viewBox="0 0 631 586" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M289.206 195.334L184.039 293.001L289.206 390.667M446.956 390.667L341.789 293.001L446.956 195.334" stroke="#292556" stroke-width="57.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
        </div>
    );
};

export default Profile;