import React, { useState } from 'react';
import Swal from 'sweetalert2';
import Estilos from '@/estilos/InfoAcademica.module.css';

import { obtenerPerfilCursos } from '@/services/convocatoriaService'; 
import { eliminarPerfilCurso } from '@/services/convocatoriaService';

const PerfilCursosLista = ({ cursosLista, setCursos, onEditClick, idPerfil }) => {
    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const [selectedCurso, setSelectedCurso] = useState(null);

    const handleDeleteClick = (curso) => {
        setSelectedCurso(curso);
        setShowConfirmModal(true);
    };

    const handleConfirmDelete = async () => {
        try {
            const result = await eliminarPerfilCurso(selectedCurso?.id);

            Swal.fire({
                title: '¡Éxito!',
                text: result.mensaje || 'Curso eliminado correctamente',
                icon: 'success',
                confirmButtonText: 'Aceptar',
            }).then(async () => {
                setShowConfirmModal(false);
                setSelectedCurso(null);

                const perfilCursos = await obtenerPerfilCursos(idPerfil);
                setCursos(perfilCursos); 
            });
        } catch (error) {
            Swal.fire({
                title: 'Error',
                text: 'Hubo un problema al eliminar el curso.',
                icon: 'error',
                confirmButtonText: 'Intentar nuevamente',
            });
        }
    };

    const formatFecha = (fecha) => {
        const date = new Date(fecha);
        return date.toLocaleDateString('es-ES', {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
        });
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
                {cursosLista && cursosLista.length > 0 ? (
                    cursosLista.map((curso) => (
                    <tr key={curso.id}>
                        <td>{curso.parTipoCapacitacion.descripcion}</td>
                        <td>{curso.nombre}</td>
                        <td>{curso.centroEstudios}</td>
                        <td>{curso.pais}</td>
                        <td>{curso.horasAcademicas} Hrs.</td>
                        <td>{curso.modalidad}</td>
                        <td>{formatFecha(curso.fechaInicio)}</td>
                        <td>{formatFecha(curso.fechaFin)}</td>
                        <td>
                            <button className='btn-edit' onClick={() => onEditClick(curso.id)}>
                                <span className="fa fa-edit"></span>
                            </button>
                            &nbsp;
                            <button className='btn-delete' onClick={() => handleDeleteClick(curso)}>
                                <span className="fa fa-trash"></span>
                            </button>
                        </td>
                    </tr>
                    ))
                ) : (
                    <tr><td colSpan="9">No hay formaciones disponibles.</td></tr>
                )}
            </tbody>
        </table>
        {/* Modal de confirmación de eliminación */}
        {showConfirmModal && (
            <div style={{
                position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.2)',
                display: 'flex', justifyContent: 'center', alignItems: 'start',
                    zIndex: 1000,
                }}>
                    <div style={{
                        backgroundColor: 'white', padding: '20px', borderRadius: '8px',
                        width: '500px', textAlign: 'center', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', margin: '30px 0 0 0'
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
