import React from 'react';
import styles from './css/WorkDetails.module.css';
import WorkTitle from './WorkTitle';
import WorkAbout from './WorkAbout';
import WorkAboutCompany from './WorkAboutCompany';
import WorkOtherCompanies from './WorkOtherCompanies';

const WorkDetails = () => {
    return (
        <div className={styles["work-details"]}>
            <WorkTitle />
            <WorkAbout />
            <WorkAboutCompany />
            <WorkOtherCompanies />
        </div>
    );
};

export default WorkDetails;