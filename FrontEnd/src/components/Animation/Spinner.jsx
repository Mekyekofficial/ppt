import React from 'react';
import styles from './css/Spinner.module.css';

const Spinner = () => {
    return (
        <div id={styles.container}>
            <div className={styles.spinner}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
};

export default Spinner;