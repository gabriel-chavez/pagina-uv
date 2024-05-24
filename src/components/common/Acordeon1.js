import React from 'react';

const Acordeon1 = ({ acordeon }) => {
  return (
    <div className="insurance-details__faq">
      <div className="accrodion-grp faq-one-accrodion" data-grp-name="faq-one-accrodion-1">
        {acordeon.map((accordion, index) => (
          <div className={`accrodion ${accordion.active ? 'active' : ''}`} key={index}>
            <div className="accrodion-title">
              <h4>{accordion.title}</h4>
            </div>
            <div className="accrodion-content">
              <div className="inner">
                <p>{accordion.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Acordeon1;
