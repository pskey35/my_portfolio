
import React from 'react';

const InfoBlock = ({ icon, title, subtitle, description, className = '' }) => {
  return (
    <div className={`info-block ${className}`}>
      <div className="info-block__icon">
        {icon}
      </div>
      <h3 className="info-block__title">{title}</h3>
      <p className="info-block__subtitle">{subtitle}</p>
      {description && (
        <div className="info-block__description">
          {description}
        </div>
      )}
    </div>
  );
};


export default InfoBlock;
