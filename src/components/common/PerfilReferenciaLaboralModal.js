import React, { useState, useEffect } from 'react';

const PerfilRefLaboralModal = ({
  show,
  onClose,
  onSave,
  selectedRefLaboral
}) => {
  const [formData, setFormData] = useState({
    nombres: '',
    empresa: '',
    cargo: '',
    parentesco: '',
    telefono: '',
    telefonoMovil: '',
    email: '',
  });

  const [errors, setErrors] = useState({});

  // Usamos useEffect para actualizar los valores de formData cuando selectedRefLaboral cambia
  useEffect(() => {
    if (selectedRefLaboral) {
      setFormData({
        nombres: selectedRefLaboral.nombres || '',
        empresa: selectedRefLaboral.empresa || '',
        cargo: selectedRefLaboral.cargo || '',
        parentesco: selectedRefLaboral.parentesco || '',
        telefono: selectedRefLaboral.telefono || '',
        telefonoMovil: selectedRefLaboral.celular || '',
        email: selectedRefLaboral.correoElectronico || '',
      });
    }
  }, [selectedRefLaboral]); // Este useEffect se ejecuta cada vez que selectedRefLaboral cambia

  // Maneja los cambios de los campos
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    const key = id.replace(/Referencia$/, ''); // Se elimina la palabra 'Referencia' del id para acceder a la clave correcta
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleGuardarRefLaboral = () => {
    const newErrors = {};

    if (!formData.nombres) newErrors.nombres = 'El nombre es obligatorio.';
    if (!formData.empresa) newErrors.empresa = 'La empresa es obligatoria.';
    if (!formData.cargo) newErrors.cargo = 'El cargo es obligatorio.';
    if (!formData.relacion) newErrors.relacion = 'La relación laboral es obligatoria.';
    if (!formData.telefonoMovil) newErrors.telefonoMovil = 'El teléfono móvil es obligatorio.';
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'El correo electrónico es inválido.';
    if (formData.telefonoMovil && !/^\d{9}$/.test(formData.telefonoMovil)) newErrors.telefonoMovil = 'El teléfono móvil debe tener 9 dígitos.';
    if (formData.telefono && !/^\d{7,10}$/.test(formData.telefono)) newErrors.telefono = 'El teléfono debe tener entre 7 y 10 dígitos.';

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    onSave(formData);

    // Limpiar formulario después de guardar
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
    <div className="modal fade show d-block" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)', }} tabIndex="-1" role="dialog">
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
                <input type="tel" id='telefonoReferencia' className={`form-control ${errors.telefono ? 'is-invalid' : ''}`} value={formData.telefono} onChange={handleInputChange} />
                {errors.telefono && <div className="invalid-feedback">{errors.telefono}</div>}
              </div>
              <div className="mb-3">
                <label className="form-label">Celular</label>
                <input type="tel" id="telefonoMovilReferencia" className={`form-control ${errors.telefonoMovil ? 'is-invalid' : ''}`} value={formData.telefonoMovil} onChange={handleInputChange} />
                {errors.telefonoMovil && <div className="invalid-feedback">{errors.telefonoMovil}</div>}
              </div>
              <div className="mb-3">
                <label className="form-label">Correo electrónico</label>
                <input type="email" id='emailReferencia' className={`form-control ${errors.email ? 'is-invalid' : ''}`} value={formData.email} onChange={handleInputChange} />
                {errors.email && <div className="invalid-feedback">{errors.email}</div>}
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
