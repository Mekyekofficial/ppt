import React from 'react';
import './css/Card.css';

const Card = ({ title, value, details }) => {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p className="value">{value}</p>
      <p className="details">{details}</p>
    </div>
  );
};

export default Card;
