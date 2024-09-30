import React from 'react';
import './css/Views.css';

const Views = ({ setView }) => {
  return (
    <div className="views">
      <h3>Views</h3>
      <div className="view-options">
        <button onClick={() => setView('table')}>Table</button>
        <button onClick={() => setView('card')}>Cards</button>
      </div>
    </div>
  );
};

export default Views;
