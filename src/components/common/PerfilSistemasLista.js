import React, { useState } from 'react';
import Estilos from '@/estilos/InfoAcademica.module.css';

const PerfilSistemasLista = ({ sistemasLista, onEditClick }) => {
    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const [selectedSistema, setSelectedSistema] = useState(null);

    const handleDeleteClick = (sistema) => {
        setSelectedSistema(sistema);
        setShowConfirmModal(true);
    };

    const handleConfirmDelete = () => {
        console.log(`Sistema ${selectedCurso?.curso} eliminado`);
        setShowConfirmModal(false);
        setSelectedSistema(null);
    };
    
    return (
        <div>
            <table className={Estilos.academicTable}>
                <thead>
                    <tr>
                        <th>Programa/Sistema/Paquete</th>
                        <th>Nivel Conocimiento</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {sistemasLista.map((sistema) => (
                        <tr key={sistema.id}>
                            <td>{sistema.sistema}</td>
                            <td>{sistema.nivelConocimiento}</td>
                            <td>
                                <button onClick={() => onEditClick(sistema.id)}>
                                    <span className="fa fa-edit"></span>
                                </button>
                                &nbsp;
                                <button onClick={() => handleDeleteClick(sistema)}>
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
                        <p>¿Estás seguro de que deseas eliminar el sistema {selectedSistema?.sistema}?</p>
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

export default PerfilSistemasLista;
