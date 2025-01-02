import React, { useState } from 'react';
import Swal from 'sweetalert2';
import Estilos from '@/estilos/InfoAcademica.module.css';

import { obtenerPerfilExperienciaLaboral } from '@/services/convocatoriaService'; 
import { eliminarPerfilExperienciaLaboral } from '@/services/convocatoriaService';

const PerfilExperienciaLaboralLista = ({ experienciaLaboralLista, onEditClick, idPerfil }) => {
    const [experienciaLaboral, setExperienciaLaboral] = useState(experienciaLaboralLista); 
    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const [selectedExpLaboral, setSelectedExpLaboral] = useState(null);

    const handleDeleteClick = (experienciaLaboral) => {
        setSelectedExpLaboral(experienciaLaboral);
        setShowConfirmModal(true);
    };

    const handleConfirmDelete = async () => {
        try {
            const result = await eliminarPerfilExperienciaLaboral(selectedExpLaboral?.id);

            Swal.fire({
                title: '¡Éxito!',
                text: result.mensaje || 'Experiencia laboral eliminada correctamente',
                icon: 'success',
                confirmButtonText: 'Aceptar',
            }).then(async () => {
                setShowConfirmModal(false);
                setExperienciaLaboral(null);

                const perfilExpLaboral = await obtenerPerfilExperienciaLaboral(idPerfil);
                setExperienciaLaboral(perfilExpLaboral);
            });
        } catch (error) {
            Swal.fire({
                title: 'Error',
                text: 'Hubo un problema al eliminar la experiencia laboral.',
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
        <>
        {experienciaLaboral && experienciaLaboral.length > 0 ? (
            experienciaLaboral.map((expLaboral) => (
                <div className={Estilos.experienceContainer} key={expLaboral.id}>
                    <div className={Estilos.experienceHeader}>
                        <div>
                            <strong>Empresa:</strong> {expLaboral.empresa}
                        </div>
                        <div>
                            <strong>Cargo:</strong> {expLaboral.cargo}
                        </div>
                        <div>
                            <strong>Sector:</strong> {expLaboral.sector}
                        </div>
                        <div className={Estilos.actions}>
                            <button className={Estilos.btnEditar} onClick={() => onEditClick(expLaboral.id)}>
                                <span className="fa fa-edit"></span>
                            </button>
                            &nbsp;
                            <button className={Estilos.btnEliminar} onClick={() => handleDeleteClick(expLaboral)}>
                                <span className="fa fa-trash"></span>
                            </button>
                        </div>
                    </div>

                    <div className={Estilos.experienceDetails}>
                        <div>
                            <strong>Nro. Dependientes:</strong> {expLaboral.nroDependientes}
                        </div>
                        <div>
                            <strong>Nombre del superior:</strong> {expLaboral.nombreSuperior}
                        </div>
                        <div>
                            <strong>Cargo del superior:</strong> {expLaboral.cargoSuperior}
                        </div>
                        <div>
                            <strong>Teléfono empresa:</strong> {expLaboral.telefonoEmpresa}
                        </div>
                    </div>

                    <div className={Estilos.experienceContent}>
                        <div className={Estilos.leftColumn}>
                            <strong>Principales funciones:</strong>
                            <div dangerouslySetInnerHTML={{ __html: expLaboral.funciones }} />
                        </div>
                        <div className={Estilos.rightColumn}>
                            <div>
                                <strong>Fecha Inicio:</strong> {formatFecha(expLaboral.fechaInicio)}
                            </div>
                            <div>
                                <strong>Fecha Término:</strong> {formatFecha(expLaboral.fechaConclusion)}
                            </div>
                            <div>
                                <strong>Total experiencia:</strong> 
                            </div>
                            <div>
                                <strong>Motivo de Desvinculación:</strong> {expLaboral.motivoDesvinculacion}
                            </div>
                        </div>
                    </div>
                </div>
                ))
            ) : (
                <tr><td colSpan="7">No hay formaciones disponibles.</td></tr>
            )}
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