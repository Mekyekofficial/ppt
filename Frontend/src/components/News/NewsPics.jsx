import React from 'react';
import logiNews from '../../assets/logiNews.png';
import appleNews from '../../assets/appleNews.png';
import styles from './css/NewsPics.module.css';

const NewsPics = () => {
  return (
    <div className={styles.newsPics}>
      <h2 className={styles.title}>Picks</h2>
      
      <div className={styles.picItem}>
        <img 
          className={styles.picImage} 
          src={logiNews} 
          alt="Logitech introduces new MX and Wave Keys" 
        />
        <p className={styles.picText}>Logitech introduces new MX and Wave Keys designed for the Mac</p>
      </div>

      <div className={styles.picItem}>
        <img 
          className={styles.picImage} 
          src={appleNews} 
          alt="Apple's iPhone security update guarantee outdone by Samsung" 
        />
        <p className={styles.picText}>Apple’s iPhone security update guarantee outdone by Samsung</p>
      </div>
    </div>
  );
};

export default NewsPics;
