import React from 'react';

const PerfilCursosModal = ({
  show,
  onClose,
  onSave,
  selectedCurso,
  parTipoCapacitacion
}) => {
  if (!show) return null; // No renderizar nada si el modal no debe mostrarse

  return (
    <div 
        className="modal fade show d-block" 
        style={{backgroundColor: 'rgba(0, 0, 0, 0.2)',}} 
        tabIndex="-1" 
        role="dialog">
        <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">Agregar Curso/Taller</h5>
                    <button type="button" className="btn-close" onClick={onClose}></button>
                </div>
                <div className="modal-body">
                    <form>
                        <div className="mb-3">
                            <label className="form-label">Tipo</label>
                            <select
                                className="form-control"
                                id="tipoCapacitacion"
                                defaultValue={selectedCurso?.parTipoCapacitacionId || ''}
                                required
                                >
                                <option value="">Selecciona una opción</option>
                                {parTipoCapacitacion && parTipoCapacitacion.length > 0 ? (
                                    parTipoCapacitacion.map((TipoCapacitacion) => (
                                    <option value={TipoCapacitacion.id} key={TipoCapacitacion.id}>
                                        {TipoCapacitacion.descripcion}
                                    </option>
                                    ))
                                ) : (
                                    <option value="">Cargando opciones...</option>
                                )}
                            </select>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Nombre del Curso/Taller</label>
                            <input type="text" id='nombres' className="form-control" defaultValue={selectedCurso?.nombres || ''} required />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Centro de Estudio</label>
                            <input type="text" id='centroEstudio' className="form-control" defaultValue={selectedCurso?.centroEstudios || ''} required />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">País</label>
                            <select className="form-control" id='pais' defaultValue={selectedCurso?.pais || ''} required>
                                <option value="Bolivia">Bolivia</option>
                                <option value="Otro">Otro</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Duración</label>
                            <input type="text" className="form-control" id='duracion' defaultValue={selectedCurso?.horasAcademicas || ''} required />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Modalidad</label>
                            <select className="form-control" id='modalidad' defaultValue={selectedCurso?.modalidad || ''} required>
                                <option value="Presencial">Presencial</option>
                                <option value="En línea">En línea</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Fecha Inicio</label>
                            <input type="date" className="form-control" id='fechaInicio' defaultValue={selectedCurso?.fechaInicio || ''} required />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Fecha Fin</label>
                            <input type="date" className="form-control" id='fechaFin' defaultValue={selectedCurso?.fechaFin || ''} required />
                        </div>
                    </form>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" onClick={onClose}>
                        Cancelar
                    </button>
                    <button type="button" className="btn btn-primary" onClick={onSave}>
                        Guardar
                    </button>
                </div>
            </div>
        </div>
    </div>
  );
};

export default PerfilCursosModal;