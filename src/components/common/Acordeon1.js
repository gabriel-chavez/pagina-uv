import React from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeSanitize from 'rehype-sanitize';

const Acordeon1 = ({ acordeon }) => {
  return (
    <div className="insurance-details__faq">
      <div className="accrodion-grp faq-one-accrodion" data-grp-name="faq-one-accrodion-1">
        {acordeon.map((accordion, index) => (
          <div className={`accrodion ${index === 0 ? 'active' : ''}`} key={index}>
            <div className="accrodion-title">
              <h4>{accordion.titulo}</h4>
            </div>
            <div className="accrodion-content">
              <div className="inner">
                <ReactMarkdown rehypePlugins={[rehypeSanitize]}>{accordion.contenido}</ReactMarkdown>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Acordeon1;
