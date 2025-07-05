import React from 'react';
import Navbar from './Navbar/Navbar';
import LearnOverview from './Learn/LearnOverview';
import Learncomponents from './Learn/Learncomponents';

const Learn: React.FC = () => {
  return (
    <div>
      <Navbar />
      <LearnOverview />
      <Learncomponents />
    </div>
  );
};

export default Learn;
