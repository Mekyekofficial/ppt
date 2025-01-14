import React from 'react';
import styles from './css/CommunitySuggestions.module.css';
import CommunitySuggested from './CommunitySuggested';

const communityList = [
    { name: 'Law firm Leaders' },
    { name: 'Opportunities for CA freshers' },
    { name: 'Internship Group' },
    { name: 'Data Structures and Algorithm' },
];

const CommunitySuggestions = () => {
    return (
        <div className={styles.container}>
            <h3 className={styles.title}>Communities you might be interested in</h3>
            {communityList.map((community, index) => (
                <CommunitySuggested key={index} name={community.name} />
            ))}
            <button className={styles.showAllButton}>Show all</button>
        </div>
    );
};

export default CommunitySuggestions;
