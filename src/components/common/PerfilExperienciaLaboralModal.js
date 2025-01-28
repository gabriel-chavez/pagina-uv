import React, { useState, useEffect } from 'react';

const PerfilExperienciaLaboralModal = ({
  show,
  onClose,
  onSave,
  selectedExpLaboral,
}) => {
  const [currentlyWorking, setCurrentlyWorking] = useState(false);
  const [formData, setFormData] = useState({
    empresa: '',
    cargo: '',
    sector: '',
    nroDependientes: '',
    nombreSuperior: '',
    cargoSuperior: '',
    telefono: '',
    principalesFunciones: '',
    fechaInicio: '',
    fechaFin: '',
    motivoDesvinculación: '',
  });

  const [errors, setErrors] = useState({});

  // Actualiza el formulario y el estado del checkbox al recibir un nuevo `selectedExpLaboral`
  useEffect(() => {
    if (selectedExpLaboral) {
      setFormData({
        empresa: selectedExpLaboral.empresa || '',
        cargo: selectedExpLaboral.cargo || '',
        sector: selectedExpLaboral.sector || '',
        nroDependientes: selectedExpLaboral.nroDependientes || '',
        nombreSuperior: selectedExpLaboral.nombreSuperior || '',
        cargoSuperior: selectedExpLaboral.cargoSuperior || '',
        telefonoEmpresa: selectedExpLaboral.telefonoEmpresa || '',
        principalesFunciones: selectedExpLaboral.funciones || '',
        fechaInicio: selectedExpLaboral.fechaInicio || '',
        fechaFin: selectedExpLaboral.fechaTermino || '',
        motivoDesvinculación: selectedExpLaboral.motivoDesvinculacion || '',
      });
      setCurrentlyWorking(!selectedExpLaboral.fechaTermino);
    }
  }, [selectedExpLaboral]);

  const handleCheckboxChange = () => {
    setCurrentlyWorking(!currentlyWorking);
    setFormData({
      ...formData,
      fechaFin: '',
      motivoDesvinculación: '',
    });
    setErrors({}); // Limpiar los errores al cambiar el estado del checkbox
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const validateForm = () => {
    const newErrors = {};

    // Validaciones obligatorias
    if (!formData.empresa) newErrors.empresa = 'El campo Empresa es obligatorio.';
    if (!formData.cargo) newErrors.cargo = 'El campo Cargo es obligatorio.';
    if (!formData.sector) newErrors.sector = 'El campo Sector es obligatorio.';
    if (!formData.nroDependientes) newErrors.nroDependientes = 'El campo Nro. Dependientes es obligatorio.';
    if (!formData.nombreSuperior) newErrors.nombreSuperior = 'El campo Nombre del superior es obligatorio.';
    if (!formData.cargoSuperior) newErrors.cargoSuperior = 'El campo Cargo del superior es obligatorio.';
    if (!formData.telefonoEmpresa) newErrors.telefono = 'El campo Teléfono empresa es obligatorio.';
    if (!formData.principalesFunciones) newErrors.principalesFunciones = 'El campo Principales funciones es obligatorio.';
    if (!formData.fechaInicio) newErrors.fechaInicio = 'El campo Fecha Inicio es obligatorio.';

    if (!currentlyWorking) {
      if (!formData.fechaFin) newErrors.fechaFin = 'El campo Fecha Término es obligatorio.';
      if (!formData.motivoDesvinculación) newErrors.motivoDesvinculación = 'El campo Motivo de Desvinculación es obligatorio.';
    }

    setErrors(newErrors);

    // Devuelve true si no hay errores
    return Object.keys(newErrors).length === 0;
  };

  const handleSave = () => {
    if (validateForm()) {
      // Si la validación es exitosa, se ejecuta onSave
      onSave(formData);
    }
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
                  value={formData.empresa}
                  onChange={handleInputChange}
                  required
                />
                {errors.empresa && <small className="text-danger">{errors.empresa}</small>}
              </div>
              <div className="mb-3">
                <label className="form-label">Cargo</label>
                <input
                  type="text"
                  id="cargo"
                  className="form-control"
                  value={formData.cargo}
                  onChange={handleInputChange}
                  required
                />
                {errors.cargo && <small className="text-danger">{errors.cargo}</small>}
              </div>
              <div className="mb-3">
                <label className="form-label">Sector</label>
                <input
                  type="text"
                  id="sector"
                  className="form-control"
                  value={formData.sector}
                  onChange={handleInputChange}
                  required
                />
                {errors.sector && <small className="text-danger">{errors.sector}</small>}
              </div>
              <div className="mb-3">
                <label className="form-label">Nro. Dependientes</label>
                <input
                  type="number"
                  id="nroDependientes"
                  className="form-control"
                  value={formData.nroDependientes}
                  onChange={handleInputChange}
                  required
                />
                {errors.nroDependientes && <small className="text-danger">{errors.nroDependientes}</small>}
              </div>
              <div className="mb-3">
                <label className="form-label">Nombre del superior</label>
                <input
                  type="text"
                  id="nombreSuperior"
                  className="form-control"
                  value={formData.nombreSuperior}
                  onChange={handleInputChange}
                  required
                />
                {errors.nombreSuperior && <small className="text-danger">{errors.nombreSuperior}</small>}
              </div>
              <div className="mb-3">
                <label className="form-label">Cargo del superior</label>
                <input
                  type="text"
                  id="cargoSuperior"
                  className="form-control"
                  value={formData.cargoSuperior}
                  onChange={handleInputChange}
                  required
                />
                {errors.cargoSuperior && <small className="text-danger">{errors.cargoSuperior}</small>}
              </div>
              <div className="mb-3">
                <label className="form-label">Teléfono empresa</label>
                <input
                  type="tel"
                  id="telefonoEmpresa"
                  className="form-control"
                  value={formData.telefono}
                  onChange={handleInputChange}
                  required
                />
                {errors.telefono && <small className="text-danger">{errors.telefono}</small>}
              </div>
              <div className="mb-3">
                <label className="form-label">Principales funciones</label>
                <textarea
                  className="form-control"
                  id="principalesFunciones"
                  rows="3"
                  value={formData.principalesFunciones}
                  onChange={handleInputChange}
                  required
                ></textarea>
                {errors.principalesFunciones && <small className="text-danger">{errors.principalesFunciones}</small>}
              </div>
              <div className="mb-3">
                <label className="form-label">Fecha Inicio</label>
                <input
                  type="date"
                  id="fechaInicio"
                  className="form-control"
                  value={formData.fechaInicio}
                  onChange={handleInputChange}
                  required
                />
                {errors.fechaInicio && <small className="text-danger">{errors.fechaInicio}</small>}
              </div>
              <div className="mb-3">
                <label className="form-label">Fecha Término</label>
                <input
                  type="date"
                  id="fechaFin"
                  className="form-control"
                  value={formData.fechaFin}
                  onChange={handleInputChange}
                  disabled={currentlyWorking}
                  required={!currentlyWorking}
                />
                {errors.fechaFin && <small className="text-danger">{errors.fechaFin}</small>}
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
              <div className="mb-3">
                <label className="form-label">Motivo de Desvinculación</label>
                <input
                  type="text"
                  id="motivoDesvinculación"
                  className="form-control"
                  value={formData.motivoDesvinculación}
                  onChange={handleInputChange}
                  disabled={currentlyWorking}
                  required={!currentlyWorking}
                />
                {errors.motivoDesvinculación && <small className="text-danger">{errors.motivoDesvinculación}</small>}
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
              onClick={handleSave}
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
