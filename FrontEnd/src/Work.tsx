import React from 'react';
import Navbar from './Navbar/Navbar';

const Work: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div style={{ padding: '20px', marginTop: '80px' }}>
        <h1>Work</h1>
        <p>Job opportunities and work-related content will be shown here.</p>
      </div>
    </div>
  );
};

export default Work;
