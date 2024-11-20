import React, { useState } from 'react';
import Estilos from '@/estilos/InfoAcademica.module.css';

const PerfilCursosLista = ({ cursosLista, onEditClick }) => {
    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const [selectedCurso, setSelectedCurso] = useState(null);

    const handleDeleteClick = (curso) => {
        setSelectedCurso(curso);
        setShowConfirmModal(true);
    };

    const handleConfirmDelete = () => {
        console.log(`Curso ${selectedCurso?.curso} eliminado`);
        setShowConfirmModal(false);
        setSelectedCurso(null);
    };
    
    return (
        <div>
            <table className={Estilos.academicTable}>
            <thead>
                <tr>
                    <th>Tipo</th>
                    <th>Nombre del Curso/Taller</th>
                    <th>Centro de Estudio</th>
                    <th>País</th>
                    <th>Duración</th>
                    <th>Modalidad</th>
                    <th>Fecha Inicio</th>
                    <th>Fecha Fin</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {cursosLista.map((curso) => (
                    <tr>
                        <td>{curso.tipo}</td>
                        <td>{curso.nombreCurso}</td>
                        <td>{curso.centroEducativo}</td>
                        <td>{curso.pais}</td>
                        <td>{curso.duracion}</td>
                        <td>{curso.modalidad}</td>
                        <td>{curso.fechaInicio}</td>
                        <td>{curso.fechaFin}</td>
                        <td>
                            <button onClick={() => onEditClick(curso.id)}>
                                <span className="fa fa-edit"></span>
                            </button>
                            &nbsp;
                            <button onClick={() => handleDeleteClick(curso)}>
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
                    <p>¿Estás seguro de que deseas eliminar el curso {selectedCurso?.curso}?</p>
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

export default PerfilCursosLista;
