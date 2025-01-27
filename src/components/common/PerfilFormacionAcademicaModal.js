import React, { useState, useEffect } from 'react';

const PerfilFormacionAcademicaModal = ({
  show,
  onClose,
  onSave,
  selectedInfoAcademica,
  ParNivelFormacion,
}) => {
  const [formData, setFormData] = useState({
    nivelFormacion: '',
    centroEstudios: '',
    tituloObtenido: '',
    fechaTitulo: '',
    ciudad: '',
    pais: 'Bolivia', // Valor por defecto
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (selectedInfoAcademica) {
      setFormData({
        nivelFormacion: selectedInfoAcademica.parNivelFormacionId || '',
        centroEstudios: selectedInfoAcademica.centroEstudios || '',
        tituloObtenido: selectedInfoAcademica.tituloObtenido || '',
        fechaTitulo: selectedInfoAcademica.fechaTitulo || '',
        ciudad: selectedInfoAcademica.ciudad || '',
        pais: selectedInfoAcademica.pais || 'Bolivia', // Valor por defecto
      });
    }
  }, [selectedInfoAcademica]);

  if (!show) return null; // No renderizar nada si el modal no debe mostrarse

  // Maneja los cambios en los campos del formulario
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  // Función para guardar los datos
  const handleGuardarFormacionAcademica = async () => {
    const { nivelFormacion, centroEstudios, tituloObtenido, fechaTitulo, ciudad, pais } = formData;
  
    // Validación de campos
    const newErrors = {};
  
    if (!nivelFormacion) newErrors.nivelFormacion = 'El nivel de formación es obligatorio.';
    if (!centroEstudios) newErrors.centroEstudios = 'El centro de estudios es obligatorio.';
    if (!tituloObtenido) newErrors.tituloObtenido = 'El título obtenido es obligatorio.';
    if (!fechaTitulo) newErrors.fechaTitulo = 'La fecha del título es obligatoria.';
    if (!ciudad) newErrors.ciudad = 'La ciudad es obligatoria.';
    if (!pais) newErrors.pais = 'El país es obligatorio.';
  
    setErrors(newErrors);
  
    if (Object.keys(newErrors).length > 0) return;
  
    // Llamada a onSave con los datos del formulario
    onSave(formData);
  
    // Limpiar formulario después de guardar
    setFormData({
      nivelFormacion: '',
      centroEstudios: '',
      tituloObtenido: '',
      fechaTitulo: '',
      ciudad: '',
      pais: 'Bolivia',
    });
  };

  return (
    <div className="modal fade show d-block" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }} tabIndex="-1" role="dialog">
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
                <select
                  className={`form-control ${errors.nivelFormacion ? 'is-invalid' : ''}`}
                  id="nivelFormacion"
                  value={formData.nivelFormacion}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Selecciona una opción</option>
                  {ParNivelFormacion.map((NivelFormacion) => (
                    <option key={NivelFormacion.id} value={NivelFormacion.id}>
                      {NivelFormacion.descripcion}
                    </option>
                  ))}
                </select>
                {errors.nivelFormacion && <div className="invalid-feedback">{errors.nivelFormacion}</div>}
              </div>
              <div className="mb-3">
                <label className="form-label">Centro Educativo</label>
                <input
                  type="text"
                  id="centroEstudios"
                  className={`form-control ${errors.centroEstudios ? 'is-invalid' : ''}`}
                  value={formData.centroEstudios}
                  onChange={handleInputChange}
                  required
                />
                {errors.centroEstudios && <div className="invalid-feedback">{errors.centroEstudios}</div>}
              </div>
              <div className="mb-3">
                <label className="form-label">Título obtenido</label>
                <input
                  type="text"
                  id="tituloObtenido"
                  className={`form-control ${errors.tituloObtenido ? 'is-invalid' : ''}`}
                  value={formData.tituloObtenido}
                  onChange={handleInputChange}
                  required
                />
                {errors.tituloObtenido && <div className="invalid-feedback">{errors.tituloObtenido}</div>}
              </div>
              <div className="mb-3">
                <label className="form-label">Fecha Título</label>
                <input
                  type="date"
                  id="fechaTitulo"
                  className={`form-control ${errors.fechaTitulo ? 'is-invalid' : ''}`}
                  value={formData.fechaTitulo}
                  onChange={handleInputChange}
                  required
                />
                {errors.fechaTitulo && <div className="invalid-feedback">{errors.fechaTitulo}</div>}
              </div>
              <div className="mb-3">
                <label className="form-label">Ciudad</label>
                <input
                  type="text"
                  id="ciudad"
                  className={`form-control ${errors.ciudad ? 'is-invalid' : ''}`}
                  value={formData.ciudad}
                  onChange={handleInputChange}
                  required
                />
                {errors.ciudad && <div className="invalid-feedback">{errors.ciudad}</div>}
              </div>
              <div className="mb-3">
                <label className="form-label">País</label>
                <select
                  className={`form-control ${errors.pais ? 'is-invalid' : ''}`}
                  id="pais"
                  value={formData.pais}
                  onChange={handleInputChange}
                  required
                >
                  <option value="Bolivia">Bolivia</option>
                  <option value="Otro">Otro</option>
                </select>
                {errors.pais && <div className="invalid-feedback">{errors.pais}</div>}
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={onClose}>
              Cancelar
            </button>
            <button type="button" className="btn btn-primary" onClick={handleGuardarFormacionAcademica}>
              Guardar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerfilFormacionAcademicaModal;
