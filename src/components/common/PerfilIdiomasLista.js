import React, { useState } from 'react';
import Swal from 'sweetalert2';
import Estilos from '@/estilos/InfoAcademica.module.css';

import { obtenerPerfilIdiomas } from '@/services/convocatoriaService'; 
import { eliminarPerfilIdioma } from '@/services/convocatoriaService';

const PerfilIdiomasLista = ({ idiomasLista, setIdiomas, onEditClick, idPerfil}) => {
    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const [selectedIdioma, setSelectedIdioma] = useState(null);
//console.log(idiomasLista);
    const handleDeleteClick = (idioma) => {
        setSelectedIdioma(idioma);
        setShowConfirmModal(true);
    };

    const handleConfirmDelete = async () => {
        try {
            const result = await eliminarPerfilIdioma(selectedIdioma?.id);

            Swal.fire({
                title: '¡Éxito!',
                text: result.mensaje || 'Idioma eliminado correctamente',
                icon: 'success',
                confirmButtonText: 'Aceptar',
            }).then(async () => {
                setShowConfirmModal(false);
                setSelectedIdioma(null);

                const perfilIdiomas = await obtenerPerfilIdiomas(idPerfil);
                setIdiomas(perfilIdiomas.datos); 
            });
        } catch (error) {
            Swal.fire({
                title: 'Error',
                text: 'Hubo un problema al eliminar el idioma.',
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
                        <th>Idioma</th>
                        <th>Nivel Lectura</th>
                        <th>Nivel Escritura</th>
                        <th>Nivel Comprensión</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {idiomasLista && idiomasLista.length > 0 ? (
                        idiomasLista.map((idioma) => (
                            <tr key={idioma.id}>
                                <td>{idioma.parIdioma.descripcion}</td>
                                <td>{idioma.parNivelConocimientoLectura.descripcion}</td>
                                <td>{idioma.parNivelConocimientoEscritura.descripcion}</td>
                                <td>{idioma.parNivelConocimientoConversacion.descripcion}</td>
                                <td>
                                    <button className='btn-edit' onClick={() => onEditClick(idioma.id)}>
                                        <span className="fa fa-edit"></span>
                                    </button>
                                    &nbsp;
                                    <button className='btn-delete' onClick={() => handleDeleteClick(idioma)}>
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
