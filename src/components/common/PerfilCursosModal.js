import React, { useState } from 'react';

const PerfilCursosModal = ({
  show,
  onClose,
  onSave,
  selectedCurso,
  parTipoCapacitacion
}) => {
  const [tipoCapacitacion, setTipoCapacitacion] = useState(selectedCurso?.parTipoCapacitacionId || '');
  const [nombres, setNombres] = useState(selectedCurso?.nombres || '');
  const [centroEstudio, setCentroEstudio] = useState(selectedCurso?.centroEstudios || '');
  const [pais, setPais] = useState(selectedCurso?.pais || 'Bolivia');
  const [duracion, setDuracion] = useState(selectedCurso?.horasAcademicas || '');
  const [modalidad, setModalidad] = useState(selectedCurso?.modalidad || 'Presencial');
  const [fechaInicio, setFechaInicio] = useState(selectedCurso?.fechaInicio || '');
  const [fechaFin, setFechaFin] = useState(selectedCurso?.fechaFin || '');
  const [errors, setErrors] = useState({});

  if (!show) return null;

  const handleSave = () => {
    const newErrors = {};

    if (!tipoCapacitacion) newErrors.tipoCapacitacion = 'Debe seleccionar un tipo de capacitación.';
    if (!nombres) newErrors.nombres = 'El nombre del curso/taller es obligatorio.';
    if (!centroEstudio) newErrors.centroEstudio = 'El centro de estudio es obligatorio.';
    if (!duracion) newErrors.duracion = 'La duración es obligatoria.';
    if (!fechaInicio) newErrors.fechaInicio = 'La fecha de inicio es obligatoria.';
    if (!fechaFin) newErrors.fechaFin = 'La fecha de fin es obligatoria.';

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

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
                  required
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
                  required
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
                  required
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
                  required
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
                required
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
                  required
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
                  required
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
                  required
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
