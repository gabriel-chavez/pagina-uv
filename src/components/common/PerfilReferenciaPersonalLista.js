import React, { useState } from 'react';
import Swal from 'sweetalert2';
import Estilos from '@/estilos/InfoAcademica.module.css';

import { obtenerPerfilReferenciaPersonal } from '@/services/convocatoriaService';
import { eliminarPerfilReferenciaPersonal } from '@/services/convocatoriaService';

const PerfilReferenciaPersonalLista = ({ referenciaPersonalLista, onEditClick, idPerfil }) => {
    const [referenciaPersonal, setReferenciaPersonal] = useState(referenciaPersonalLista);
    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const [selectedRefPersonal, setSelectedRefPersonal] = useState(null);

    const handleDeleteClick = (referenciaPersonal) => {
        setSelectedRefPersonal(referenciaPersonal);
        setShowConfirmModal(true);
    };

    const handleConfirmDelete = async () => {
        try {
            const result = await eliminarPerfilReferenciaPersonal(selectedRefPersonal?.id);

            Swal.fire({
                title: '¡Éxito!',
                text: result.mensaje || 'Referencia Personal eliminado correctamente',
                icon: 'success',
                confirmButtonText: 'Aceptar',
            }).then(async () => {
                setShowConfirmModal(false);
                setSelectedRefPersonal(null);

                const perfilRefPersonal = await obtenerPerfilReferenciaPersonal(idPerfil);
                setReferenciaPersonal(perfilRefPersonal);
            });
        } catch (error) {
            Swal.fire({
                title: 'Error',
                text: 'Hubo un problema al eliminar la referencia persona.',
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
                        <th>Parentesco</th>
                        <th>Teléfono</th>
                        <th>Celular</th>
                        <th>Correo electrónico</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {referenciaPersonal && referenciaPersonal.length > 0 ? (
                        referenciaPersonal.map((referenciaPersonal) => (
                            <tr key={referenciaPersonal.id}>
                                <td>{referenciaPersonal.nombre}</td>
                                <td>{referenciaPersonal.empresa}</td>
                                <td>{referenciaPersonal.cargo}</td>
                                <td>{referenciaPersonal.parParentescoId}</td>
                                <td>{referenciaPersonal.telefono}</td>
                                <td>{referenciaPersonal.telefonoMovil}</td>
                                <td>{referenciaPersonal.email}</td>
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