import React from 'react';

const PerfilSistemasModal = ({
  show,
  onClose,
  onSave,
  selectedSistema,
  ParPrograma,
  ParNivelConocimiento,
}) => {
  if (!show) return null; // No renderizar nada si el modal no debe mostrarse

  return (
    <div 
        className="modal fade show d-block" 
        style={{backgroundColor: 'rgba(0, 0, 0, 0.2)',}} 
        tabIndex="-1" 
        role="dialog"
        >
        <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">Agregar Sistema</h5>
                    <button type="button" className="btn-close" onClick={onClose}></button>
                </div>
                <div className="modal-body">
                    <form>
                        <div className="mb-3">
                            <label className="form-label">Programa/Sistema/Paquete</label>
                            <select
                                className="form-control"
                                defaultValue={selectedSistema?.parProgramaId || ''}
                                id='programa'
                                required
                                >
                                <option value="">Selecciona una opción</option>
                                {ParPrograma.map((Programa) => (
                                <option value={Programa.id} key={Programa.id}>
                                {Programa.descripcion}
                                </option>
                                ))}
                            </select>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Nivel Conocimiento</label>
                            <select
                                className="form-control"
                                defaultValue={selectedSistema?.parNivelConocimientoId || ''}
                                id='nivelConocimiento'
                                required
                                >
                                <option value="">Selecciona una opción</option>
                                {ParNivelConocimiento.map((NivelConocimiento) => (
                                <option value={NivelConocimiento.id} key={NivelConocimiento.id}>
                                {NivelConocimiento.descripcion}
                                </option>
                                ))}
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

export default PerfilSistemasModal;