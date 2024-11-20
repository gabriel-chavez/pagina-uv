import React, { useState } from 'react';

import Estilos from '@/estilos/InfoAcademica.module.css';

const PerfilReferenciaLaboralLista = ({ referenciaLaboralLista, onEditClick }) => {
    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const [selectedRefLaboral, setSelectedRefLaboral] = useState(null);

    const handleDeleteClick = (referenciaLaboral) => {
        setSelectedRefLaboral(referenciaLaboral);
        setShowConfirmModal(true);
    };

    const handleConfirmDelete = () => {
        console.log(`Referencia laboral ${selectedRefLaboral?.empresa} eliminada`);
        setShowConfirmModal(false);
        setSelectedRefLaboral(null);
    };
    
    return (
        <div>
            <table className={Estilos.academicTable}>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Empresa</th>
                        <th>Cargo</th>
                        <th>Relación laboral</th>
                        <th>Teléfono</th>
                        <th>Celular</th>
                        <th>Correo electrónico</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {referenciaLaboralLista.map((referenciaLaboral) => (
                        <tr>
                            <td>{referenciaLaboral.nombre}</td>
                            <td>{referenciaLaboral.empresa}</td>
                            <td>{referenciaLaboral.cargo}</td>
                            <td>{referenciaLaboral.relacionLaboral}</td>
                            <td>{referenciaLaboral.telefono}</td>
                            <td>{referenciaLaboral.celular}</td>
                            <td>{referenciaLaboral.correoElectronico}</td>
                            <td>
                                <button onClick={() => onEditClick(referenciaLaboral.id)}>
                                    <span className="fa fa-edit"></span>
                                </button>
                                &nbsp;
                                <button onClick={() => handleDeleteClick(referenciaLaboral)}>
                                    <span className="fa fa-trash"></span>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
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
                        <p>¿Estás seguro de que deseas eliminar la referencia Laboral {selectedRefLaboral?.empresa}?</p>
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
        </div>
    );
};

export default PerfilReferenciaLaboralLista;