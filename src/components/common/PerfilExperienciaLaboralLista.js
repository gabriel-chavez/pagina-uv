import React, { useState } from 'react';

import Estilos from '@/estilos/InfoAcademica.module.css';

const PerfilExperienciaLaboralLista = ({ experienciaLaboralLista, onEditClick }) => {
    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const [selectedExpLaboral, setSelectedExpLaboral] = useState(null);

    const handleDeleteClick = (experienciaLaboral) => {
        setSelectedExpLaboral(experienciaLaboral);
        setShowConfirmModal(true);
    };

    const handleConfirmDelete = () => {
        console.log(`Experiencia Laboral ${selectedExpLaboral?.experienciaLaboral} eliminada`);
        setShowConfirmModal(false);
        setSelectedExpLaboral(null);
    };
    
    return (
        <>
        {experienciaLaboralLista.map((experienciaLaboral) => (
                <div className={Estilos.experienceContainer}>
                    <div className={Estilos.experienceHeader}>
                        <div>
                            <strong>Empresa:</strong> {experienciaLaboral.empresa}
                        </div>
                        <div>
                            <strong>Cargo:</strong> {experienciaLaboral.cargo}
                        </div>
                        <div>
                            <strong>Sector:</strong> {experienciaLaboral.sector}
                        </div>
                        <div className={Estilos.actions}>
                            <button onClick={() => onEditClick(experienciaLaboral.id)}>
                                <span className="fa fa-edit"></span>
                            </button>
                            &nbsp;
                            <button onClick={() => handleDeleteClick(experienciaLaboral)}>
                                <span className="fa fa-trash"></span>
                            </button>
                        </div>
                    </div>

                    <div className={Estilos.experienceDetails}>
                        <div>
                            <strong>Nro. Dependientes:</strong> {experienciaLaboral.dependientes}
                        </div>
                        <div>
                            <strong>Nombre del superior:</strong> {experienciaLaboral.nombreSuperior}
                        </div>
                        <div>
                            <strong>Cargo del superior:</strong> {experienciaLaboral.cargoSuperior}
                        </div>
                        <div>
                            <strong>Teléfono empresa:</strong> {experienciaLaboral.telefonoEmpresa}
                        </div>
                    </div>

                    <div className={Estilos.experienceContent}>
                        <div className={Estilos.leftColumn}>
                            <strong>Principales funciones:</strong>
                            <p>{experienciaLaboral.funciones}</p>
                        </div>
                        <div className={Estilos.rightColumn}>
                            <div>
                                <strong>Fecha Inicio:</strong> {experienciaLaboral.fechaInicio}
                            </div>
                            <div>
                                <strong>Fecha Término:</strong> {experienciaLaboral.fechaTermino}
                            </div>
                            <div>
                                <strong>Total experiencia:</strong> {experienciaLaboral.experiencia}
                            </div>
                            <div>
                                <strong>Motivo de Desvinculación:</strong> {experienciaLaboral.motivoDesvinculacion}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            {/* Modal de confirmación de eliminación */}
            {showConfirmModal && (
                <div style={{
                    position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.2)',
                    display: 'flex', justifyContent: 'center', alignItems: 'center',
                    zIndex: 1000,
                }}>
                    <div style={{
                        backgroundColor: 'white', padding: '20px', borderRadius: '8px',
                        width: '500px', textAlign: 'center', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                    }}>
                        <h2>Confirmar eliminación</h2>
                        <p>¿Estás seguro de que deseas eliminar la experiencia laboral {selectedExpLaboral?.expLaboral}?</p>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
                            <button
                                style={{
                                    background: 'transparent', border: 'none', color: '#6666ff',
                                    cursor: 'pointer', fontWeight: 'bold',
                                }}
                                onClick={() => setShowConfirmModal(false)}
                            >
                                Cancelar
                            </button>
                            <button
                                style={{
                                    backgroundColor: '#6666ff', color: 'white', border: 'none',
                                    padding: '10px 20px', borderRadius: '5px', cursor: 'pointer',
                                    fontWeight: 'bold',
                                }}
                                onClick={handleConfirmDelete}
                            >
                                Confirmar
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default PerfilExperienciaLaboralLista;