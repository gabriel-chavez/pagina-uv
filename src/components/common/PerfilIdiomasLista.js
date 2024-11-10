import React, { useState } from 'react';
import Estilos from '@/estilos/InfoAcademica.module.css';

const PerfilIdiomasLista = ({ idiomasLista, onEditClick }) => {
    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const [selectedIdioma, setSelectedIdioma] = useState(null);

    const handleDeleteClick = (idioma) => {
        setSelectedIdioma(idioma);
        setShowConfirmModal(true);
    };

    const handleConfirmDelete = () => {
        console.log(`Idioma ${selectedIdioma?.idioma} eliminado`);
        setShowConfirmModal(false);
        setSelectedIdioma(null);
    };

    return (
        <div>
            <table className={Estilos.academicTable}>
                <thead>
                    <tr>
                        <th>Idioma</th>
                        <th>Nivel Lectura</th>
                        <th>Nivel Escritura</th>
                        <th>Nivel Comprensión</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {idiomasLista.map((idioma) => (
                        <tr key={idioma.id}>
                            <td>{idioma.idioma}</td>
                            <td>{idioma.nivelLectura}</td>
                            <td>{idioma.nivelEscritura}</td>
                            <td>{idioma.nivelComprension}</td>
                            <td>
                                <button onClick={() => onEditClick(idioma.id)}>
                                    <span className="fa fa-edit"></span>
                                </button>
                                &nbsp;
                                <button onClick={() => handleDeleteClick(idioma)}>
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
                        <p>¿Estás seguro de que deseas eliminar el idioma {selectedIdioma?.idioma}?</p>
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

export default PerfilIdiomasLista;
