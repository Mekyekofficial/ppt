import React from 'react';
import { Button, TextField, MenuItem } from '@mui/material';
import { Search, Settings } from '@mui/icons-material';
import { FaLocationCrosshairs } from "react-icons/fa6";
import Select from '@mui/material/Select';
import { Work, People, School, Event, Article } from '@mui/icons-material';
import GeminiIcon from '../assets/gemini-icon.png';
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
      <div className={styles.container1}>
        <div className={styles.content}>
          <header className={styles.header}>
            <span className={styles.poweredBy}>Powered by AI</span>
            <img src={GeminiIcon} alt="Gemini Icon" />
          </header>
          
          <h1 className={styles.heading}>Learn. Earn. Connect.</h1>
          <p className={styles.description}>
            Welcome to a platform where opportunities meet growth! Here, you can learn new skills, earn through real opportunities, and connect with like-minded individuals. Whether you're advancing your career or starting fresh, we've created a space for you to thrive in a supportive community. Your success story begins here!
          </p>
          
          <div className={styles.searchBar}>
            <div className={styles.search}>
              <input
                type="text"
                placeholder="Looking for a Web developer Job.."
                className={styles.input}
              />
              
              <FaLocationCrosshairs className={styles.icon} />

              <Select defaultValue="Jobs" className={styles.select}>
                <MenuItem value="Jobs">Jobs</MenuItem>
                <MenuItem value="Internships">Internships</MenuItem>
                <MenuItem value="Courses">Courses</MenuItem>
              </Select>
            </div>
            <Button variant="contained" className={styles.searchButton}>
              <Search /> Search
            </Button>
          </div>
        </div>
          <div className={styles.grid}>
            <div className={`${styles.card} ${styles.jobs}`}>
              <Work className={styles.icon2} />
              <div>
                <h2>Jobs</h2>
                <p>ATS<br />Post A Job<br />Find A Job<br />Talent Hunt</p>
              </div>
            </div>
            <div className={`${styles.card} ${styles.community}`}>
              <People className={styles.icon2} />
              <div>
                <h2>Community</h2>
                <p>Groups<br />Discussion<br />Category<br />Post</p>
              </div>
            </div>
            <div className={`${styles.card} ${styles.internship}`}>
              <Work className={styles.icon2} />
              <div>
                <h2>Internship & Gigs</h2>
                <p>Freelance market<br />Internship<br />Hourly jobs</p>
              </div>
            </div>
            <div className={`${styles.card} ${styles.courses}`}>
              <School className={styles.icon2} />
              <div>
                <h2>Courses</h2>
                <p>Learn courses<br />Multiple skills<br />Find A Job<br />Talent Hunt</p>
              </div>
            </div>
            <div className={`${styles.card} ${styles.events}`}>
              <Event className={styles.icon2} />
              <div>
                <h2>Events</h2>
                <p>Host & attend events<br />Live events<br />Find A Job<br />Talent Hunt</p>
              </div>
            </div>
            <div className={`${styles.card} ${styles.articles}`}>
              <Article className={styles.icon2} />
              <div>
                <h2>News & Articles</h2>
                <p>60 word news<br />Category driven<br />Audio embedded</p>
              </div>
            </div>
          </div>
      </div>

      <div className={styles.trusted}>
        <p>Trusted by</p>
        <div className={styles.logos}>
          {/* Add company logos here */}
        </div>
      </div>

      <div className={styles.numbers}>
        <span>Our Numbers</span>
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
      <div className={styles.container}>
        <div className={`${styles.tab} ${styles.jobs}`}>
          <Work className={styles.icon3} />
          <span>Jobs</span>
        </div>
        <div className={`${styles.tab} ${styles.community}`}>
          <People className={styles.icon3} />
          <span>Community</span>
        </div>
        <div className={`${styles.tab} ${styles.internship}`}>
          <Work className={styles.icon3} />
          <span>Internship & Gigs</span>
        </div>
        <div className={`${styles.tab} ${styles.courses}`}>
          <School className={styles.icon3} />
          <span>Courses</span>
        </div>
        <div className={`${styles.tab} ${styles.events}`}>
          <Event className={styles.icon3} />
          <span>Events</span>
        </div>
        <div className={`${styles.tab} ${styles.articles}`}>
          <Article className={styles.icon3} />
          <span>News & Articles</span>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
