import React from 'react';
import Logo from '../../assets/logo.png';
import styles from './css/CommunityYour.module.css';
import CommunityJoined from './CommunityJoined';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const CommunityYour = ({communityList}) => {
    if (!communityList) {
        communityList = [];
    }
    console.log(communityList);
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
                        name={community?.name}
                        description={community?.description}
                        logo={community?.profilePhoto}
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
