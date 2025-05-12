import React, { useState } from 'react';
import Swal from 'sweetalert2';
import Estilos from '@/estilos/InfoAcademica.module.css';

import { obtenerPerfilReferenciaLaboral } from '@/services/convocatoriaService';
import { eliminarPerfilReferenciaLaboral } from '@/services/convocatoriaService';

const PerfilReferenciaLaboralLista = ({ referenciaLaboralLista, setReferenciaLaboral, onEditClick, idPerfil }) => {
    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const [selectedRefLaboral, setSelectedRefLaboral] = useState(null);

    const handleDeleteClick = (referenciaLaboral) => {
        setSelectedRefLaboral(referenciaLaboral);
        setShowConfirmModal(true);
    };

    const handleConfirmDelete = async () => {
        try {
            const result = await eliminarPerfilReferenciaLaboral(selectedRefLaboral?.id);

            Swal.fire({
                title: '¡Éxito!',
                text: result.mensaje || 'Referencia Laboral eliminada correctamente',
                icon: 'success',
                confirmButtonText: 'Aceptar',
            }).then(async () => {
                setShowConfirmModal(false);
                setSelectedRefLaboral(null);

                const perfilRefLaboral = await obtenerPerfilReferenciaLaboral(idPerfil);
                setReferenciaLaboral(perfilRefLaboral.datos);
            });
        } catch (error) {
            Swal.fire({
                title: 'Error',
                text: 'Hubo un problema al eliminar la referencia laboral.',
                icon: 'error',
                confirmButtonText: 'Intentar nuevamente',
            });
        }
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
                    {referenciaLaboralLista && referenciaLaboralLista.length > 0 ? (
                        referenciaLaboralLista.map((referenciaLaboral) => (
                            <tr key={referenciaLaboral.id}>
                                <td>{referenciaLaboral.nombre}</td>
                                <td>{referenciaLaboral.empresa}</td>
                                <td>{referenciaLaboral.cargo}</td>
                                <td>{referenciaLaboral.relacion}</td>
                                <td>{referenciaLaboral.telefono}</td>
                                <td>{referenciaLaboral.telefonoMovil}</td>
                                <td>{referenciaLaboral.email}</td>
                                <td>
                                    <button className='btn-edit' onClick={() => onEditClick(referenciaLaboral.id)}>
                                        <span className="fa fa-edit"></span>
                                    </button>
                                    &nbsp;
                                    <button className='btn-delete' onClick={() => handleDeleteClick(referenciaLaboral)}>
                                        <span className="fa fa-trash"></span>
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr><td colSpan="8">No hay formaciones disponibles.</td></tr>
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