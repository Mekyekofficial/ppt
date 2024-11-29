import React from 'react';
import styles from './css/CourseSettings.module.css';
import { Switch } from '@mui/material';
import ProfileImg from '../../assets/user-avatar-profile.png';
import Bagde from '../../assets/Golden-Badge-Transparent.png';

const CourseSettings = () => {
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <div className={styles.activity}>
            <p>Your Activity</p>
            <p>🔥 0 mins</p>
            <p>🚶 0 Days</p>
        </div>
        <div className={styles.menu}>
            <p>Settings</p>
            <p>Manage Courses</p>
            <p>Manage Updates</p>
            <p>Preferences</p>
            <p>Dashboard</p>
        </div>
      </div>

      <div className={styles.mainContent}>
        <div className={styles.analysis}>
          <h2>Analization</h2>
          <div className={styles.profile}> 
            <img src={ProfileImg} alt="profile" className={styles.profileImg}/>
            <img src={Bagde} alt="Bagde"  className={styles.bagde}/>
          </div>
          <div className={styles.stats}>
            <div>10 Following</div>
            <div>20 Certificates</div>
            <div>20k mins watched</div>
          </div>
          <div className={styles.attendees}>
            <p>Attendees</p>
            <div className={styles.days}>
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, index) => (
                <div key={index} className={index === 0 ? styles.activeDay : styles.day}>
                  <div className={styles.circle}></div>{day}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.notifications}>
          <h3>Notifications</h3>
          <div>
            <p>It will gain you access to the latest updates regarding the new Videos of top Tutors and quizzes, mock tests.</p>
            <Switch defaultChecked color='success' />
          </div>
          <div>
            <p>It will gain you access to the latest updates regarding the new Videos of top Tutors and quizzes, mock tests.</p>
            <Switch color='success'/>
          </div>
        </div>

        <div className={styles.customizeNotifications}>
          <h3>Customize Your Notification</h3>
          <div>
            <p>It will gain you access to the latest updates regarding the new Videos of top Tutors and quizzes, mock tests.</p>
            <Switch color='success'defaultChecked />
          </div>
          <div>
            <p>It will gain you access to the latest updates regarding the new Videos of top Tutors and quizzes, mock tests.</p>
            <Switch color='success'/>
          </div>
        </div>

        <div className={styles.progress}>
          <h3>You Are In Top 48.59%</h3>
          <p>Max Streak: 20 days</p>
          <div className={styles.barGraph}>
            {Array.from({ length: 20 }, (_, i) => (
              <div key={i} className={styles.bar} style={{ height: `${(i + 1) * 5}%` }}></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseSettings;
