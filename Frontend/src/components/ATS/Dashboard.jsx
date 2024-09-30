import React from 'react';
import './css/Dashboard.css';

import Card from './Dashboard/Card';
import TodoList from './Dashboard/TodoList';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <TodoList />
      <div className="stats-cards">
        <Card title="Total Jobs" value="0" details="Last 7 Days : 0" />
        <Card title="Talent Pool" value="0" details="Last 7 Days : 0" />
        <Card title="Total User" value="0" details="Last 7 Days : 0" />
        <Card title="Offer Made" value="0" details="Last 7 Days : 0" />
      </div>
      <div className="bottom-panels">
        <div className="bottom-panel"></div>
        <div className="bottom-panel"></div>
      </div>
    </div>
  );
};

export default Dashboard;
