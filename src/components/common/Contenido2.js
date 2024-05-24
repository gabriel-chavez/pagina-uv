import React from 'react';
import PropTypes from 'prop-types';

const InsuranceDetails = ({ titulo1, puntos, titulo2, texto }) => {
  return (
    <div className="insurance-details__points-and-text-box" style={{marginTop:"40px"}}>
      <div className="insurance-details__points-box">
        <h3 className="insurance-details__points-title">{titulo1}</h3>
        <ul className="insurance-details__points list-unstyled">
          {puntos.map((point, index) => (
            <li key={index}>
              <div className="icon">
                <span className="icon-check-mark-1"></span>
              </div>
              <p>{point}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="insurance-details__text-box">
        <h3>{titulo2}</h3>
        <p dangerouslySetInnerHTML={{ __html: texto }}></p>
      </div>
    </div>
  );
};


export default InsuranceDetails;
