import React from 'react';
import PropTypes from 'prop-types';

const Plan = ({ nombrePlan, precioAnual, coberturas, textoBoton }) => {

    return (
        <div className="card-plan m-1">
            <div className="card text-center">
                <div className="card-header  text-white">
                    <div>{nombrePlan}</div>
                </div>
                <div className="card-body">
                    <div className="card-title">PRECIO ANUAL (POR PERSONA)</div>
                    <div className="display-3"><small>Bs.</small>{precioAnual}</div>
                    <ul className="list-unstyled">
                        {coberturas.map((item, index) => (
                            <li key={index}>{item.cobertura} <b>Bs.{item.monto}</b></li>
                        ))}
                    </ul>
                    <a href="#" className="btn btn-success">{textoBoton}</a>
                </div>
            </div>
        </div>
    );
};

Plan.propTypes = {
    nombrePlan: PropTypes.string.isRequired,
    precioAnual: PropTypes.number.isRequired,
    coberturas: PropTypes.arrayOf(
        PropTypes.shape({
            cobertura: PropTypes.string.isRequired,
            monto: PropTypes.number.isRequired
        })
    ).isRequired,
    textoBoton: PropTypes.string.isRequired,
};

export default Plan;
