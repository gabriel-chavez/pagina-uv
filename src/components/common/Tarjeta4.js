import React from 'react';
import Link from 'next/link';

const Tarejta4 = ({ backgroundImage, titulo, botonTexto, botonUrl }) => {
  return (
    <div className="insurance-details__need-help">
      <div className="insurance-details__need-help-bg" style={{backgroundImage: `url(${backgroundImage})`}}>
      </div>
      <h3 className="insurance-details__need-help-title">{titulo}</h3>
      <div className="insurance-details__need-help-btn-box">
        <Link href={botonUrl} className="insurance-details__need-help-btn thm-btn">
          {botonTexto}
        </Link>
      </div>
    </div>
  );
};

export default Tarejta4;
