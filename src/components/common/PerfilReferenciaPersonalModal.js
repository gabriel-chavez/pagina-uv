import React, { useState, useEffect } from 'react';

const PerfilRefPersonalModal = ({
  show,
  onClose,
  onSave,
  selectedRefPersonal,
  parParentesco
}) => {
  const [formData, setFormData] = useState({
    nombres: '',
    empresa: '',
    cargo: '',
    parentesco: '',
    telefono: '',
    telefonoMovil: '',
    emailParentesco: '',
  });

  const [errors, setErrors] = useState({});

  // Sincronizar el estado del formulario con `selectedRefPersonal` cuando cambia
  useEffect(() => {
    if (selectedRefPersonal) {
      setFormData({
        nombres: selectedRefPersonal.nombres || '',
        empresa: selectedRefPersonal.empresa || '',
        cargo: selectedRefPersonal.cargo || '',
        parentesco: selectedRefPersonal.parParentescoId || '',
        telefono: selectedRefPersonal.telefono || '',
        telefonoMovil: selectedRefPersonal.celular || '',
        email: selectedRefPersonal.correoElectronico || '',
      });
    }
  }, [selectedRefPersonal]);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    const key = id.replace(/Parentesco$/, ''); // Ajustar el nombre del campo
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleGuardarRefPersonal = () => {
    const newErrors = {};

    if (!formData.nombres) newErrors.nombres = 'El nombre es obligatorio.';
    if (!formData.parentesco) newErrors.parentesco = 'Debe seleccionar un parentesco.';
    if (!formData.telefonoMovil) newErrors.telefonoMovil = 'El teléfono móvil es obligatorio.';

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    onSave(formData);

    setFormData({
      nombres: '',
      empresa: '',
      cargo: '',
      parentesco: '',
      telefono: '',
      telefonoMovil: '',
      email: '',
    });
  };

  if (!show) return null;

  return (
    <div className="modal fade show d-block" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }} tabIndex="-1" role="dialog">
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
                <input
                  type="text"
                  id="nombresParentesco"
                  className={`form-control ${errors.nombres ? 'is-invalid' : ''}`}
                  value={formData.nombres}
                  onChange={handleInputChange}
                />
                {errors.nombres && <div className="invalid-feedback">{errors.nombres}</div>}
              </div>
              <div className="mb-3">
                <label className="form-label">Empresa</label>
                <input
                  type="text"
                  id="empresa"
                  className="form-control"
                  value={formData.empresa}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Cargo</label>
                <input
                  type="text"
                  id="cargo"
                  className="form-control"
                  value={formData.cargo}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Parentesco</label>
                <select
                  id="parentesco"
                  className={`form-control ${errors.parentesco ? 'is-invalid' : ''}`}
                  value={formData.parentesco}
                  onChange={handleInputChange}
                >
                  <option value="">Selecciona una opción</option>
                  {parParentesco.map((Parentesco) => (
                    <option value={Parentesco.id} key={Parentesco.id}>
                      {Parentesco.descripcion}
                    </option>
                  ))}
                </select>
                {errors.parentesco && <div className="invalid-feedback">{errors.parentesco}</div>}
              </div>
              <div className="mb-3">
                <label className="form-label">Teléfono</label>
                <input
                  type="tel"
                  id="telefonoParentesco"
                  className="form-control"
                  value={formData.telefono}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Celular</label>
                <input
                  type="tel"
                  id="telefonoMovilParentesco"
                  className={`form-control ${errors.telefonoMovil ? 'is-invalid' : ''}`}
                  value={formData.telefonoMovil}
                  onChange={handleInputChange}
                />
                {errors.telefonoMovil && <div className="invalid-feedback">{errors.telefonoMovil}</div>}
              </div>
              <div className="mb-3">
                <label className="form-label">Correo electrónico</label>
                <input
                  type="email"
                  id="emailParentesco"
                  className="form-control"
                  value={formData.emailParentesco}
                  onChange={handleInputChange}
                />
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={onClose}>
              Cancelar
            </button>
            <button type="button" className="btn btn-primary" onClick={handleGuardarRefPersonal}>
              Guardar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerfilRefPersonalModal;
