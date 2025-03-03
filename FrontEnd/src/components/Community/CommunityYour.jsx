import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Logo from '../../assets/logo.png';
import styles from './css/CommunityYour.module.css';
import CommunityJoined from './CommunityJoined';

const CommunityYour = ({ communityList = [] }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [visibleCommunities, setVisibleCommunities] = useState([]);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
        setVisibleCommunities(communityList.slice(0, 3));
    }, [communityList]);

    const handleShowMore = () => {
        if (isExpanded) {
            setVisibleCommunities(communityList.slice(0, 3));
        } else {
            setVisibleCommunities(communityList);
        }
        setIsExpanded(!isExpanded);
    };

    return (
        <div className={`${styles.container} ${isVisible ? styles.visible : ''}`}>
            <div className={styles.header}>
                <span className={styles.title}>Your Communities</span>
                <button 
                    className={`${styles.expandButton} ${isExpanded ? styles.expanded : ''}`}
                    onClick={handleShowMore}
                >
                    {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
            </div>
            
            <div className={styles.communities}>
                {visibleCommunities.map((community, index) => (
                    <CommunityJoined
                        key={community?.id || index}
                        name={community?.name}
                        description={community?.description}
                        logo={community?.profilePhoto}
                        style={{
                            animationDelay: `${index * 0.1}s`
                        }}
                    />
                ))}
            </div>

            {communityList.length > 3 && (
                <button 
                    className={styles.showMoreButton}
                    onClick={handleShowMore}
                >
                    {isExpanded ? 'Show Less' : 'Show More'}
                    {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>
            )}
        </div>
    );
};

export default CommunityYour;
