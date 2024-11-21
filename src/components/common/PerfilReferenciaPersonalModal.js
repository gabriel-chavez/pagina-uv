import React from 'react';

const PerfilRefPersonalModal = ({
  show,
  onClose,
  onSave,
  selectedRefPersonal,
  parParentesco
}) => {
  if (!show) return null; // No renderizar nada si el modal no debe mostrarse

  return (
    <div className="modal fade show d-block" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)',}} tabIndex="-1" role="dialog">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Agregar Referencia Personal</h5>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            <form>
              <div className="mb-3">
                <label className="form-label">Nombre</label>
                <input type="text" id='nombre' className="form-control" defaultValue={selectedRefPersonal?.nombre || ''} required />
              </div>
              <div className="mb-3">
                <label className="form-label">Empresa</label>
                <input type="text" id='empresa' className="form-control" defaultValue={selectedRefPersonal?.empresa || ''} />
              </div>
              <div className="mb-3">
                <label className="form-label">Cargo</label>
                <input type="text" id='cargo' className="form-control" defaultValue={selectedRefPersonal?.cargo || ''} />
              </div>
              <div className="mb-3">
                <label className="form-label">Parentesco</label>
                <select
                  className="form-control"
                  id="parentesco"
                  defaultValue={selectedRefPersonal?.parParentescoId || ''}
                  required
                >
                  <option value="">Selecciona una opción</option>
                  {parParentesco.map((Parentesco) => (
                    <option value={Parentesco.id} key={Parentesco.id}>
                      {Parentesco.descripcion}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-3">
                <label className="form-label">Teléfono</label>
                <input type="tel" id='telefono' className="form-control" defaultValue={selectedRefPersonal?.telefono || ''} required />
              </div>
              <div className="mb-3">
                <label className="form-label">Celular</label>
                <input type="tel" id='telefonoMovil' className="form-control" defaultValue={selectedRefPersonal?.celular || ''} required />
              </div>
              <div className="mb-3">
                <label className="form-label">Correo electrónico</label>
                <input type="email" id='email' className="form-control" defaultValue={selectedRefPersonal?.correoElectronico || ''} required />
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

export default PerfilRefPersonalModal;