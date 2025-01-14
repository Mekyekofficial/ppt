import React from 'react';
import CardStyles from './css/Card.module.css';

const Card = ({ title, value, details }) => {
  return (
    <div className={CardStyles.card}>
      <h3>{title}</h3>
      <p className={CardStyles.value}>{value}</p>
      <p className={CardStyles.details}>{details}</p>
    </div>
  );
};

export default Card;
