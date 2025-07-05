import React from 'react';
import Navbar from './Navbar/Navbar';
import ComunityOverview from './Comunity/ComunityOverview';
// import ComunityCard from './Comunity/ComunityCard';
const Comunity: React.FC = () => {
  return (
    <div>
      <Navbar />
      <ComunityOverview />
      {/* <ComunityCard /> */}
    </div>
  );
};

export default Comunity;
