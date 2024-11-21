import React from 'react';

const PerfilIdiomasModal = ({
  show,
  onClose,
  onSave,
  selectedIdioma,
  ParIdioma,
  ParNivelConocimiento,
}) => {
  if (!show) return null; // No renderizar nada si el modal no debe mostrarse

  return (
    <div
      className="modal fade show d-block"
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
      tabIndex="-1"
      role="dialog"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Agregar Idioma</h5>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            <form>
              <div className="mb-3">
                <label className="form-label">Idioma</label>
                <select
                  className="form-control"
                  id="idioma"
                  defaultValue={selectedIdioma?.parIdiomaId || ''}
                  required
                >
                  <option value="">Selecciona una opción</option>
                  {ParIdioma.map((Idioma) => (
                    <option value={Idioma.id} key={Idioma.id}>
                      {Idioma.descripcion}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-3">
                <label className="form-label">Nivel Lectura</label>
                <select
                  className="form-control"
                  id="nivelLectura"
                  defaultValue={selectedIdioma?.parNivelConocimientoLecturaId || ''}
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
              <div className="mb-3">
                <label className="form-label">Nivel Escritura</label>
                <select
                  className="form-control"
                  id="nivelEscritura"
                  defaultValue={selectedIdioma?.parNivelConocimientoEscrituraId || ''}
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
              <div className="mb-3">
                <label className="form-label">Nivel Comprensión</label>
                <select
                  className="form-control"
                  id="nivelComprension"
                  defaultValue={selectedIdioma?.parNivelConocimientoConversacionId || ''}
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

export default PerfilIdiomasModal;