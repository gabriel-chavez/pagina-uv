import React, { useState } from 'react';
import Swal from 'sweetalert2';
import Estilos from '@/estilos/InfoAcademica.module.css';

import { obtenerPerfilSistemas } from '@/services/convocatoriaService';
import { eliminarPerfilSistema } from '@/services/convocatoriaService';

const PerfilSistemasLista = ({ sistemasLista, setSistemas, onEditClick, idPerfil }) => {
    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const [selectedSistema, setSelectedSistema] = useState(null);

    const handleDeleteClick = (sistema) => {
        setSelectedSistema(sistema);
        setShowConfirmModal(true);
    };

    const handleConfirmDelete = async () => {
        try {
            const result = await eliminarPerfilSistema(selectedSistema?.id);

            Swal.fire({
                title: '¡Éxito!',
                text: result.mensaje || 'Sistema eliminado correctamente',
                icon: 'success',
                confirmButtonText: 'Aceptar',
            }).then(async () => {
                setShowConfirmModal(false);
                setSelectedSistema(null);

                const perfilSistemas = await obtenerPerfilSistemas(idPerfil);
                setSistemas(perfilSistemas.datos); // Actualiza el estado con los sistemas actualizados
            });
        } catch (error) {
            Swal.fire({
                title: 'Error',
                text: result.mensaje,
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
                        <th>Programa/Sistema/Paquete</th>
                        <th>Nivel Conocimiento</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {sistemasLista && sistemasLista.length > 0 ? (
                        sistemasLista.map((sistema) => (
                            <tr key={sistema.id}>
                                <td>{sistema.parPrograma.descripcion}</td>
                                <td>{sistema.parNivelConocimiento.descripcion}</td>
                                <td>
                                    <button className='btn-edit' onClick={() => onEditClick(sistema.id)}>
                                        <span className="fa fa-edit"></span>
                                    </button>
                                    &nbsp;
                                    <button className='btn-delete' onClick={() => handleDeleteClick(sistema)}>
                                        <span className="fa fa-trash"></span>
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr><td colSpan="7">No hay sistemas disponibles.</td></tr>
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
