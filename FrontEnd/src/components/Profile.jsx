import React from 'react';
import Styles from './css/Profile.module.css';
import ProfileBanner from './Profile/ProfileBanner';
import ProfileAbout from './Profile/ProfileAbout';

const Profile = () => {
    return (
        <div className={Styles.container}>
            <div className={Styles.mainContent}>
                <ProfileBanner />
                <ProfileAbout />
            </div>
            <div className={Styles.rightSideBar}>

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