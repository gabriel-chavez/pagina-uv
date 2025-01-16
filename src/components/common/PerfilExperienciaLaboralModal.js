import React, { useState } from 'react';

const PerfilExperienciaLaboralModal = ({
  show,
  onClose,
  onSave,
  selectedExpLaboral,
}) => {
  const [currentlyWorking, setCurrentlyWorking] = useState(
    selectedExpLaboral?.fechaTermino ? false : true
  );

  const handleCheckboxChange = () => {
    setCurrentlyWorking(!currentlyWorking);
  };

  if (!show) return null;

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
            <h5 className="modal-title">Agregar Experiencia Laboral</h5>
            <button
              type="button"
              className="btn-close"
              onClick={onClose}
            ></button>
          </div>
          <div className="modal-body">
            <form>
              <div className="mb-3">
                <label className="form-label">Empresa</label>
                <input
                  type="text"
                  id="empresa"
                  className="form-control"
                  defaultValue={selectedExpLaboral?.empresa || ''}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Cargo</label>
                <input
                  type="text"
                  id="cargo"
                  className="form-control"
                  defaultValue={selectedExpLaboral?.cargo || ''}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Sector</label>
                <input
                  type="text"
                  id="sector"
                  className="form-control"
                  defaultValue={selectedExpLaboral?.sector || ''}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Nro. Dependientes</label>
                <input
                  type="number"
                  id="nroDependientes"
                  className="form-control"
                  defaultValue={selectedExpLaboral?.dependientes || ''}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Nombre del superior</label>
                <input
                  type="text"
                  id="nombreSuperior"
                  className="form-control"
                  defaultValue={selectedExpLaboral?.nombreSuperior || ''}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Cargo del superior</label>
                <input
                  type="text"
                  id="cargoSuperior"
                  className="form-control"
                  defaultValue={selectedExpLaboral?.cargoSuperior || ''}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Teléfono empresa</label>
                <input
                  type="tel"
                  id="telefono"
                  className="form-control"
                  defaultValue={selectedExpLaboral?.telefonoEmpresa || ''}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Principales funciones</label>
                <textarea
                  className="form-control"
                  id="principalesFunciones"
                  rows="3"
                  defaultValue={selectedExpLaboral?.funciones || ''}
                  required
                ></textarea>
              </div>
              <div className="mb-3">
                <label className="form-label">Fecha Inicio</label>
                <input
                  type="date"
                  id="fechaInicio"
                  className="form-control"
                  defaultValue={selectedExpLaboral?.fechaInicio || ''}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Fecha Término</label>
                <input
                  type="date"
                  id="fechaFin"
                  className="form-control"
                  defaultValue={currentlyWorking ? '' : selectedExpLaboral?.fechaTermino || ''}
                  disabled={currentlyWorking}
                  required={!currentlyWorking}
                />
              </div>
              <div className="form-check mb-3">
                <input
                  type="checkbox"
                  id="currentlyWorking"
                  className="form-check-input"
                  checked={currentlyWorking}
                  onChange={handleCheckboxChange}
                />
                <label className="form-check-label" htmlFor="currentlyWorking">
                  Actualmente trabajando
                </label>
              </div>
              {/* <div className="mb-3">
                <label className="form-label">Total experiencia</label>
                <input
                  type="text"
                  id="totalExperiencia"
                  className="form-control"
                  defaultValue={selectedExpLaboral?.experiencia || ''}
                  required
                />
              </div> */}
              <div className="mb-3">
                <label className="form-label">Motivo de Desvinculación</label>
                <input
                  type="text"
                  id="motivoDesvinculación"
                  className="form-control"
                  defaultValue={selectedExpLaboral?.motivoDesvinculacion || ''}
                  disabled={currentlyWorking} // Deshabilitar si 'currentlyWorking' es true
                  required={!currentlyWorking}
                />
              </div>
              
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={onClose}
            >
              Cancelar
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={onSave}
            >
              Guardar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerfilExperienciaLaboralModal;
