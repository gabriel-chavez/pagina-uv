import React, { useState, useEffect } from 'react';

const PerfilCursosModal = ({
  show,
  onClose,
  onSave,
  selectedCurso,
  parTipoCapacitacion
}) => {
  const [tipoCapacitacion, setTipoCapacitacion] = useState('');
  const [nombres, setNombres] = useState('');
  const [centroEstudio, setCentroEstudio] = useState('');
  const [pais, setPais] = useState('Bolivia');
  const [duracion, setDuracion] = useState('');
  const [modalidad, setModalidad] = useState('Presencial');
  const [fechaInicio, setFechaInicio] = useState('');
  const [fechaFin, setFechaFin] = useState('');
  const [errors, setErrors] = useState({});

  // Limpiar los errores cuando el formulario se cierre
  useEffect(() => {
    if (!show) {
      setErrors({});
    }
  }, [show]);

  // Actualizar los campos cuando el selectedCurso cambie
  useEffect(() => {
    if (selectedCurso) {
      setTipoCapacitacion(selectedCurso.parTipoCapacitacionId || '');
      setNombres(selectedCurso.nombres || '');
      setCentroEstudio(selectedCurso.centroEstudios || '');
      setPais(selectedCurso.pais || 'Bolivia');
      setDuracion(selectedCurso.horasAcademicas || '');
      setModalidad(selectedCurso.modalidad || 'Presencial');
      setFechaInicio(selectedCurso.fechaInicio || '');
      setFechaFin(selectedCurso.fechaFin || '');
    }
  }, [selectedCurso]);

  if (!show) return null;

  const handleSave = () => {
    const newErrors = {};

    // Validaciones
    if (!tipoCapacitacion) newErrors.tipoCapacitacion = 'Debe seleccionar un tipo de capacitación.';
    if (!nombres) newErrors.nombres = 'El nombre del curso/taller es obligatorio.';
    if (!centroEstudio) newErrors.centroEstudio = 'El centro de estudio es obligatorio.';
    if (!duracion) newErrors.duracion = 'La duración es obligatoria.';
    if (!fechaInicio) newErrors.fechaInicio = 'La fecha de inicio es obligatoria.';
    if (!fechaFin) newErrors.fechaFin = 'La fecha de fin es obligatoria.';
    if (fechaFin && fechaInicio && new Date(fechaFin) < new Date(fechaInicio)) {
      newErrors.fechaFin = 'La fecha de fin no puede ser anterior a la fecha de inicio.';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    // Guardar la información
    onSave({
      tipoCapacitacion,
      nombres,
      centroEstudio,
      pais,
      duracion,
      modalidad,
      fechaInicio,
      fechaFin,
    });

    // Reiniciar el formulario
    setTipoCapacitacion('');
    setNombres('');
    setCentroEstudio('');
    setPais('Bolivia');
    setDuracion('');
    setModalidad('Presencial');
    setFechaInicio('');
    setFechaFin('');
  };

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
            <h5 className="modal-title">Agregar Curso/Taller</h5>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            <form>
              {/* Campo Tipo Capacitación */}
              <div className="mb-3">
                <label className="form-label">Tipo</label>
                <select
                  className={`form-control ${errors.tipoCapacitacion ? 'is-invalid' : ''}`}
                  id="tipoCapacitacion"
                  value={tipoCapacitacion}
                  onChange={(e) => setTipoCapacitacion(e.target.value)}
                >
                  <option value="">Selecciona una opción</option>
                  {parTipoCapacitacion && parTipoCapacitacion.length > 0 ? (
                    parTipoCapacitacion.map((TipoCapacitacion) => (
                      <option value={TipoCapacitacion.id} key={TipoCapacitacion.id}>
                        {TipoCapacitacion.descripcion}
                      </option>
                    ))
                  ) : (
                    <option value="">Cargando opciones...</option>
                  )}
                </select>
                {errors.tipoCapacitacion && <div className="invalid-feedback">{errors.tipoCapacitacion}</div>}
              </div>

              {/* Campo Nombre Curso/Taller */}
              <div className="mb-3">
                <label className="form-label">Nombre del Curso/Taller</label>
                <input
                  type="text"
                  id="nombres"
                  className={`form-control ${errors.nombres ? 'is-invalid' : ''}`}
                  value={nombres}
                  onChange={(e) => setNombres(e.target.value)}
                />
                {errors.nombres && <div className="invalid-feedback">{errors.nombres}</div>}
              </div>

              {/* Campo Centro Estudio */}
              <div className="mb-3">
                <label className="form-label">Centro de Estudio</label>
                <input
                  type="text"
                  id="centroEstudio"
                  className={`form-control ${errors.centroEstudio ? 'is-invalid' : ''}`}
                  value={centroEstudio}
                  onChange={(e) => setCentroEstudio(e.target.value)}
                />
                {errors.centroEstudio && <div className="invalid-feedback">{errors.centroEstudio}</div>}
              </div>

              {/* Campo País */}
              <div className="mb-3">
                <label className="form-label">País</label>
                <select
                  className="form-control"
                  id="pais"
                  value={pais}
                  onChange={(e) => setPais(e.target.value)}
                >
                  <option value="Bolivia">Bolivia</option>
                  <option value="Otro">Otro</option>
                </select>
              </div>

              {/* Campo Duración */}
              <div className="mb-3">
                <label className="form-label">Duración (Hrs)</label>
                <input
                  type="text"
                  className={`form-control ${errors.duracion ? 'is-invalid' : ''}`}
                  id="duracion"
                  value={duracion}
                  onChange={(e) => {
                    const newValue = e.target.value;
                    if (/^\d*$/.test(newValue)) {
                      setDuracion(newValue);
                    }
                  }}
                  inputMode="numeric"
                />
                {errors.duracion && <div className="invalid-feedback">{errors.duracion}</div>}
              </div>

              {/* Campo Modalidad */}
              <div className="mb-3">
                <label className="form-label">Modalidad</label>
                <select
                  className="form-control"
                  id="modalidad"
                  value={modalidad}
                  onChange={(e) => setModalidad(e.target.value)}
                >
                  <option value="Presencial">Presencial</option>
                  <option value="En línea">En línea</option>
                </select>
              </div>

              {/* Campo Fecha Inicio */}
              <div className="mb-3">
                <label className="form-label">Fecha Inicio</label>
                <input
                  type="date"
                  className={`form-control ${errors.fechaInicio ? 'is-invalid' : ''}`}
                  id="fechaInicio"
                  value={fechaInicio}
                  onChange={(e) => setFechaInicio(e.target.value)}
                />
                {errors.fechaInicio && <div className="invalid-feedback">{errors.fechaInicio}</div>}
              </div>

              {/* Campo Fecha Fin */}
              <div className="mb-3">
                <label className="form-label">Fecha Fin</label>
                <input
                  type="date"
                  className={`form-control ${errors.fechaFin ? 'is-invalid' : ''}`}
                  id="fechaFin"
                  value={fechaFin}
                  onChange={(e) => setFechaFin(e.target.value)}
                />
                {errors.fechaFin && <div className="invalid-feedback">{errors.fechaFin}</div>}
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={onClose}>
              Cancelar
            </button>
            <button type="button" className="btn btn-primary" onClick={handleSave}>
              Guardar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerfilCursosModal;
