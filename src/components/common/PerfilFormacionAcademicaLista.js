import React, { useState } from 'react';
import Swal from 'sweetalert2';
import Estilos from '@/estilos/InfoAcademica.module.css';

import { obtenerPerfilFormacionAcademica } from '@/services/convocatoriaService';
import { eliminarPerfilFormacionAcademica } from '@/services/convocatoriaService';

const PerfilFormacionAcademicaLista = ({ formacionLista, onEditClick, idPerfil}) => {
    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const [selectedFormacionAcademica, setSelectedFormacionAcademica] = useState(null);

    const handleDeleteClick = (formacion) => {
        setSelectedFormacionAcademica(formacion);
        setShowConfirmModal(true);
    };

    const handleConfirmDelete = async () => {
        try {
            const result = await eliminarPerfilFormacionAcademica(selectedFormacionAcademica?.id);

            Swal.fire({
                title: '¡Éxito!',
                text: result.mensaje || 'Formación Académica eliminado correctamente',
                icon: 'success',
                confirmButtonText: 'Aceptar',
            }).then(async () => {
                setShowConfirmModal(false);
                setSelectedFormacionAcademica(null);

                const perfilFormacion = await obtenerPerfilFormacionAcademica(idPerfil);
                setFormacionAcademica(perfilFormacion);
            });
        } catch (error) {
            Swal.fire({
                title: 'Error',
                text: 'Hubo un problema al eliminar la Formación Académica.',
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
                  <th>Nivel de Formación</th>
                  <th>Centro Educativo</th>
                  <th>Título obtenido</th>
                  <th>Fecha Título</th>
                  <th>Ciudad</th>
                  <th>País</th>
                  <th>Acciones</th>
              </tr>
          </thead>
          <tbody>
            {formacionLista && formacionLista.length > 0 ? (
                formacionLista.map((formacion) => (
                    <tr key={formacion.id}>
                        <td>{formacion.parNivelFormacionId}</td>
                        <td>{formacion.centroEstudios}</td>
                        <td>{formacion.tituloObtenido}</td>
                        <td>{formatFecha(formacion.fechaTitulo)}</td>
                        <td>{formacion.ciudad}</td>
                        <td>{formacion.pais}</td>
                        <td>
                            <button onClick={() => onEditClick(formacion.id)}>
                                <span className="fa fa-edit"></span>
                            </button>
                            &nbsp;
                            <button onClick={() => handleDeleteClick(formacion)}>
                                <span className="fa fa-trash"></span>
                            </button>
                        </td>
                    </tr>
                ))
            ) : (
                <tr><td colSpan="7">No hay formaciones disponibles.</td></tr>
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
                        <p>¿Estás seguro de que deseas eliminar la formación académica {selectedFormacionAcademica?.formacionAcademica}?</p>
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

export default PerfilFormacionAcademicaLista;
