import React, { useState } from 'react';

const PerfilRefLaboralModal = ({
  show,
  onClose,
  onSave,
  selectedRefLaboral
}) => {
  const [formData, setFormData] = useState({
      nombres: selectedRefLaboral?.nombres || '',
      empresa: selectedRefLaboral?.empresa || '',
      cargo: selectedRefLaboral?.cargo || '',
      parentesco: selectedRefLaboral?.parParentescoId || '',
      telefono: selectedRefLaboral?.telefono || '',
      telefonoMovil: selectedRefLaboral?.celular || '',
      email: selectedRefLaboral?.correoElectronico || '',
    });
  
    const [errors, setErrors] = useState({});
  
    // Maneja cambios en los campos del formulario
    const handleInputChange = (e) => {
      const { id, value } = e.target;
      const key = id.replace(/Referencia$/, ''); 
      setFormData((prev) => ({ ...prev, [key]: value }));
    };
  
    const handleGuardarRefLaboral = () => {
      const newErrors = {};
  
      if (!formData.nombres) newErrors.nombres = 'El nombre es obligatorio.';
      if (!formData.empresa) newErrors.empresa = 'La empresa es obligatoria.';
      if (!formData.cargo) newErrors.cargo = 'El cargo es obligatorio.';
      if (!formData.relacion) newErrors.relacion = 'La relación laboral es obligatoria.';
      if (!formData.telefonoMovil) newErrors.telefonoMovil = 'El teléfono móvil es obligatorio.';
  
      setErrors(newErrors);
  
      if (Object.keys(newErrors).length > 0) return;
  
      onSave(formData);
  
      setFormData({
        nombres: '',
        empresa: '',
        cargo: '',
        relacion: '',
        telefono: '',
        telefonoMovil: '',
        email: '',
      });
    };
  
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
                <input type="text" id='nombresReferencia' className={`form-control ${errors.nombres ? 'is-invalid' : ''}`} value={formData.nombres} onChange={handleInputChange} />
                {errors.nombres && <div className="invalid-feedback">{errors.nombres}</div>}
              </div>
              <div className="mb-3">
                <label className="form-label">Empresa</label>
                <input type="text" id='empresa' className={`form-control ${errors.empresa ? 'is-invalid' : ''}`} value={formData.empresa} onChange={handleInputChange} />
                {errors.empresa && <div className="invalid-feedback">{errors.empresa}</div>}
              </div>
              <div className="mb-3">
                <label className="form-label">Cargo</label>
                <input type="text" id='cargo' className={`form-control ${errors.cargo ? 'is-invalid' : ''}`} value={formData.cargo} onChange={handleInputChange} />
                {errors.cargo && <div className="invalid-feedback">{errors.cargo}</div>}
              </div>
              <div className="mb-3">
                <label className="form-label">Relación Laboral</label>
                <input type="text" id='relacion' className={`form-control ${errors.relacion ? 'is-invalid' : ''}`} value={formData.relacion} onChange={handleInputChange} />
                {errors.relacion && <div className="invalid-feedback">{errors.relacion}</div>}
              </div>
              <div className="mb-3">
                <label className="form-label">Teléfono</label>
                <input type="tel" id='telefonoReferencia' className="form-control" defaultValue={selectedRefLaboral?.telefono || ''} required />
              </div>
              <div className="mb-3">
                <label className="form-label">Celular</label>
                <input type="tel" id="telefonoMovilReferencia" className={`form-control ${errors.telefonoMovil ? 'is-invalid' : ''}`} value={formData.telefonoMovil} onChange={handleInputChange} />
                {errors.telefonoMovil && <div className="invalid-feedback">{errors.telefonoMovil}</div>}
              </div>
              <div className="mb-3">
                <label className="form-label">Correo electrónico</label>
                <input type="email" id='emailReferencia' className="form-control" defaultValue={selectedRefLaboral?.correoElectronico || ''} required />
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={onClose}>
              Cancelar
            </button>
            <button type="button" className="btn btn-primary" onClick={handleGuardarRefLaboral}>
              Guardar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerfilRefLaboralModal;