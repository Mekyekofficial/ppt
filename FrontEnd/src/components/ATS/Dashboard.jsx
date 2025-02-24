import React from 'react';
import Card from './Dashboard/Card';
import TodoList from './Dashboard/TodoList';
import DashboardStyles from './css/Dashboard.module.css';

const Dashboard = () => {
  return (
    <div className={DashboardStyles["dashboard-container"]}>
      <div className={DashboardStyles["top-panel"]}>
        <TodoList />
        <div className={DashboardStyles["stats-cards"]}>
          <Card title="Total Jobs" value="0" details="Last 7 Days : 0" />
          <Card title="Talent Pool" value="0" details="Last 7 Days : 0" />
          <Card title="Total User" value="0" details="Last 7 Days : 0" />
          <Card title="Offer Made" value="0" details="Last 7 Days : 0" />
        </div>
      </div>
      <div className={DashboardStyles["bottom-panels"]}>
        <div className={DashboardStyles["bottom-panel"]}>
          <button className={DashboardStyles["post-course-button"]}>Post Course</button>
        </div>
        <div className={DashboardStyles["bottom-panel"]}>
          <button className={DashboardStyles["post-news-button"]}>Post News</button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
