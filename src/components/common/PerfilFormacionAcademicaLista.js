import React, { useState } from 'react';

import Estilos from '@/estilos/InfoAcademica.module.css';

const PerfilFormacionAcademicaLista = ({ formacionLista, onEditClick }) => {
    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const [selectedFormacionAcademica, setSelectedFormacionAcademica] = useState(null);

    const handleDeleteClick = (formacion) => {
        setSelectedFormacionAcademica(formacion);
        setShowConfirmModal(true);
    };

    const handleConfirmDelete = () => {
        console.log(`Formación académica ${selectedFormacionAcademica?.formacion} eliminada`);
        setShowConfirmModal(false);
        setSelectedFormacionAcademica(null);
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
          {formacionLista.map((formacion) => (
              <tr>
                  <td>{formacion.nivelFormacion}</td>
                  <td>{formacion.centroEducativo}</td>
                  <td>{formacion.tituloObtenido}</td>
                  <td>{formacion.fechaTitulo}</td>
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
