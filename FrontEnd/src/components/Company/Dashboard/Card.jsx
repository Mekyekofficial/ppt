import React from 'react';
import CardStyles from './css/Card.module.css';

const Card = ({ title, value, details, icon: Icon }) => {
  return (
    <div className={CardStyles.card}>
      <div className={CardStyles.cardHeader}>
        {Icon && <Icon className={CardStyles.cardIcon} />}
        <h3 className={CardStyles.title}>{title}</h3>
      </div>
      <div className={CardStyles.cardContent}>
        <p className={CardStyles.value}>{value}</p>
        <p className={CardStyles.details}>{details}</p>
      </div>
    </div>
  );
};

export default Card;
