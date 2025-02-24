import React from 'react';
import Logo from '../../assets/logo.png';
import styles from './css/CommunityYour.module.css';
import CommunityJoined from './CommunityJoined';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const communityList = [
    {
        name: 'Harvard Business Review Group',
        description: 'At Harvard Business Review, we believe in management. If the world’s organizations and institutions were run more effectively, if our leaders made better decisions, if people worked more productively, we believe that all of us...',
        logo:  Logo, 
    },
    {
        name: 'Social Media Marketing Group by Josh Turner',
        description: 'This Social Media Marketing group is the largest LinkedIn group in the world focused on digital marketing and aims to help businesses of any size leverage social media to get more followers, sales...',
        logo:  Logo,
    },
    {
        name: 'Brain Expansion Group',
        description: 'Engaging in the exchange of knowledge is a powerful catalyst for personal and collective growth. By delving into the realms of motivation, technology...',
        logo:  Logo,
    },
];

const CommunityYour = () => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <span>Your Communities</span>
                <ExpandMoreIcon />
            </div>
            <div className={styles.communities}>
                {communityList.map((community, index) => (
                    <CommunityJoined
                        key={index}
                        name={community.name}
                        description={community.description}
                        logo={community.logo}
                    />
                ))}
            </div>
            <button className={styles.showMore}>
                    Show more <ExpandMoreIcon />
            </button>
        </div>
    );
};

export default CommunityYour;
