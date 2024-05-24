import React from 'react';

const Tarjeta5 = ({ iconClass, titulo, subtitulo }) => {
    return (
        <div className="insurance-details__contact">
            <div className="insurance-details__contact-icon">
                <span className={iconClass}></span>
            </div>
            <div className="insurance-details__contact-content">
                <span>{titulo}</span>
                <p><a>{subtitulo}</a></p>
            </div>
        </div>
    );
};


export default Tarjeta5;
