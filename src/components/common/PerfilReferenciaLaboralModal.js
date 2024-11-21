import React from 'react';

const PerfilRefLaboralModal = ({
  show,
  onClose,
  onSave,
  selectedRefLaboral
}) => {
  if (!show) return null; // No renderizar nada si el modal no debe mostrarse

  return (
    <div className="modal fade show d-block" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)',}} tabIndex="-1" role="dialog">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Agregar Referencia Laboral</h5>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            <form>
              <div className="mb-3">
                <label className="form-label">Nombre</label>
                <input type="text" id='nombre' className="form-control" defaultValue={selectedRefLaboral?.nombre || ''} required />
              </div>
              <div className="mb-3">
                <label className="form-label">Empresa</label>
                <input type="text" id='empresa' className="form-control" defaultValue={selectedRefLaboral?.empresa || ''} />
              </div>
              <div className="mb-3">
                <label className="form-label">Cargo</label>
                <input type="text" id='cargo' className="form-control" defaultValue={selectedRefLaboral?.cargo || ''} />
              </div>
              <div className="mb-3">
                <label className="form-label">Relación Laboral</label>
                <input type="text" id='relacion' className="form-control" defaultValue={selectedRefLaboral?.relacion || ''} />
              </div>
              <div className="mb-3">
                <label className="form-label">Teléfono</label>
                <input type="tel" id='telefono' className="form-control" defaultValue={selectedRefLaboral?.telefono || ''} required />
              </div>
              <div className="mb-3">
                <label className="form-label">Celular</label>
                <input type="tel" id='telefonoMovil' className="form-control" defaultValue={selectedRefLaboral?.celular || ''} required />
              </div>
              <div className="mb-3">
                <label className="form-label">Correo electrónico</label>
                <input type="email" id='email' className="form-control" defaultValue={selectedRefLaboral?.correoElectronico || ''} required />
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

export default PerfilRefLaboralModal;