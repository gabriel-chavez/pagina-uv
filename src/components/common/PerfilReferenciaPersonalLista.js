import React, { useState } from 'react';

import Estilos from '@/estilos/InfoAcademica.module.css';

const PerfilReferenciaPersonalLista = ({ referenciaPersonalLista, onEditClick }) => {
    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const [selectedRefPersonal, setSelectedRefPersonal] = useState(null);

    const handleDeleteClick = (referenciaPersonal) => {
        setSelectedRefPersonal(referenciaPersonal);
        setShowConfirmModal(true);
    };

    const handleConfirmDelete = () => {
        console.log(`Referencia Personal ${selectedIdioma?.idioma} eliminada`);
        setShowConfirmModal(false);
        setSelectedRefPersonal(null);
    };

    return (
        <div>
            <table className={Estilos.academicTable}>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Empresa</th>
                        <th>Cargo</th>
                        <th>Parentesco</th>
                        <th>Teléfono</th>
                        <th>Celular</th>
                        <th>Correo electrónico</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {referenciaPersonalLista.map((referenciaPersonal) => (
                        <tr>
                            <td>{referenciaPersonal.nombre}</td>
                            <td>{referenciaPersonal.empresa}</td>
                            <td>{referenciaPersonal.cargo}</td>
                            <td>{referenciaPersonal.parentesco}</td>
                            <td>{referenciaPersonal.telefono}</td>
                            <td>{referenciaPersonal.celular}</td>
                            <td>{referenciaPersonal.correoElectronico}</td>
                            <td>
                                <button onClick={() => onEditClick(referenciaPersonal.id)}>
                                    <span className="fa fa-edit"></span>
                                </button>
                                &nbsp;
                                <button onClick={() => handleDeleteClick(referenciaPersonal)}>
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
                        <p>¿Estás seguro de que deseas eliminar la Referencia personal {selectedRefPersonal?.nombre}?</p>
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

export default PerfilReferenciaPersonalLista;