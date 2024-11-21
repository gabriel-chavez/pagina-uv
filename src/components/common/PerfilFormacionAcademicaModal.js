import React from 'react';

const PerfilFormacionAcademicaModal = ({
  show,
  onClose,
  onSave,
  selectedInfoAcademica,
  ParNivelFormacion,
}) => {
  if (!show) return null; // No renderizar nada si el modal no debe mostrarse

  return (
    <div className="modal fade show d-block" style={{
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
    }} tabIndex="-1" role="dialog">
        <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">Agregar Formación Académica</h5>
                    <button type="button" className="btn-close" onClick={onClose}></button>
                </div>
                <div className="modal-body">
                    <form>
                        <div className="mb-3">
                            <label className="form-label">Nivel de Formación</label>
                            <select className="form-control" id='NivelFormacionId' defaultValue={selectedInfoAcademica?.parNivelFormacionId || ''} required>
                                <option value="">Selecciona una opción</option>
                                {ParNivelFormacion.map((NivelFormacion) => (
                                    <option value={NivelFormacion.id}>{NivelFormacion.descripcion}</option>
                                ))};
                            </select>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Centro Educativo</label>
                            <input type="text" id='centroEstudios' className="form-control" defaultValue={selectedInfoAcademica?.centroEstudios || ''} required />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Título obtenido</label>
                            <input type="text" id='tituloObtenido' className="form-control" defaultValue={selectedInfoAcademica?.tituloObtenido || ''} required />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Fecha Título</label>
                            <input type="date" id='fechaTitulo' className="form-control" defaultValue={selectedInfoAcademica?.fechaTitulo || ''} required />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Ciudad</label>
                            <input type="text" id='ciudad' className="form-control" defaultValue={selectedInfoAcademica?.ciudad || ''} required />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">País</label>
                            <select className="form-control" id='pais' defaultValue={selectedInfoAcademica?.pais || ''} required>
                                <option value="Bolivia">Bolivia</option>
                                <option value="Otro">Otro</option>
                            </select>
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

export default PerfilFormacionAcademicaModal;