import React from 'react';
import { Button, TextField, MenuItem } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import styles from './css/HomeBanner.module.css';

const categories = [
  { name: "Jobs", color: "#FFC5A1", description: "ATS, Post A Job, Find A Job, Talent Hunt" },
  { name: "Community", color: "#C1F2EA", description: "Groups, Discussion, Category, Post" },
  { name: "Internship & Gigs", color: "#FBC8EB", description: "Freelance market, Internship, Hourly jobs" },
  { name: "Courses", color: "#DFE3E5", description: "Learn courses, multiple skills, Talent Hunt" },
  { name: "Events", color: "#D5FFE2", description: "Host & attend events, Live events, Talent Hunt" },
  { name: "News & Articles", color: "#FFEFA0", description: "60 word news, category driven, audio embedded" }
];

const HomeBanner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.content}>
        <h1 className={styles.title}>Learn. Earn. Connect.</h1>
        <p className={styles.description}>
          Welcome to a platform where opportunities meet growth!
          Here, you can learn new skills, earn through real opportunities, and connect with like-minded individuals. 
          Whether you’re advancing your career or starting fresh, we’ve created a space for you to thrive in a supportive community.
        </p>
        
        <div className={styles.searchContainer}>
          <TextField
            variant="outlined"
            placeholder="Looking for a Web developer Job..."
            className={styles.searchInput}
            InputProps={{ style: { padding: "10px" } }}
          />
          <TextField
            select
            variant="outlined"
            className={styles.dropdown}
            defaultValue="Jobs"
          >
            <MenuItem value="Jobs">Jobs</MenuItem>
            <MenuItem value="Courses">Courses</MenuItem>
          </TextField>
          <Button variant="contained" color="primary" className={styles.searchButton}>
            <SearchIcon /> Search
          </Button>
        </div>

        <div className={styles.categories}>
          {categories.map((category) => (
            <div key={category.name} className={styles.category} style={{ backgroundColor: category.color }}>
              <h3>{category.name}</h3>
              <p>{category.description}</p>
            </div>
          ))}
        </div>

        <div className={styles.trusted}>
          <p>Trusted by</p>
          <div className={styles.logos}>
            {/* Add company logos here */}
          </div>
        </div>

        <div className={styles.numbers}>
          <div className={styles.stat}>
            <h3>11M+</h3>
            <p>Active Users</p>
          </div>
          <div className={styles.stat}>
            <h3>23.3M+</h3>
            <p>Assessments</p>
          </div>
          <div className={styles.stat}>
            <h3>130K+</h3>
            <p>Opportunities</p>
          </div>
          <div className={styles.stat}>
            <h3>42K+</h3>
            <p>Organizations</p>
          </div>
          <div className={styles.stat}>
            <h3>72+</h3>
            <p>Countries</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
