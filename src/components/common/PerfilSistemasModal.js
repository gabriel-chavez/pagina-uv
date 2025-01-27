import React, { useState, useEffect } from 'react';

const PerfilSistemasModal = ({
  show,
  onClose,
  onSave,
  selectedSistema, // Registro que se está editando
  ParPrograma,
  ParNivelConocimiento,
}) => {
  const [programa, setPrograma] = useState('');
  const [nivelConocimiento, setNivelConocimiento] = useState('');
  const [errors, setErrors] = useState({});

  // Efecto para actualizar los valores del formulario cuando `selectedSistema` cambia
  useEffect(() => {
    if (selectedSistema) {
      setPrograma(selectedSistema.parProgramaId || '');
      setNivelConocimiento(selectedSistema.parNivelConocimientoId || '');
    } else {
      setPrograma('');
      setNivelConocimiento('');
    }
  }, [selectedSistema]); // Se ejecuta cada vez que `selectedSistema` cambia

  // Si el modal no debe mostrarse, no renderizar nada
  if (!show) return null;

  const handleSave = () => {
    const newErrors = {};
    if (!programa) newErrors.programa = 'Debe seleccionar un programa/sistema/paquete.';
    if (!nivelConocimiento) newErrors.nivelConocimiento = 'Debe seleccionar un nivel de conocimiento.';

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    onSave({ programa, nivelConocimiento });

    // Opcional: reiniciar el formulario
    setPrograma('');
    setNivelConocimiento('');
  };

  const handleClose = () => {
    setPrograma('');
    setNivelConocimiento('');
    setErrors({});
    onClose();
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
            <h5 className="modal-title">
              {selectedSistema ? 'Editar Sistema' : 'Agregar Sistema'}
            </h5>
            <button type="button" className="btn-close" onClick={handleClose}></button>
          </div>
          <div className="modal-body">
            <form>
              {/* Campo Programa */}
              <div className="mb-3">
                <label htmlFor="programa" className="form-label">Programa/Sistema/Paquete</label>
                <select
                  id="programa"
                  className={`form-control ${errors.programa ? 'is-invalid' : ''}`}
                  value={programa}
                  onChange={(e) => setPrograma(e.target.value)}
                >
                  <option value="">Selecciona una opción</option>
                  {ParPrograma.map((programa) => (
                    <option value={programa.id} key={programa.id}>
                      {programa.descripcion}
                    </option>
                  ))}
                </select>
                {errors.programa && <div className="invalid-feedback">{errors.programa}</div>}
              </div>

              {/* Campo Nivel Conocimiento */}
              <div className="mb-3">
                <label htmlFor="nivelConocimiento" className="form-label">Nivel Conocimiento</label>
                <select
                  id="nivelConocimiento"
                  className={`form-control ${errors.nivelConocimiento ? 'is-invalid' : ''}`}
                  value={nivelConocimiento}
                  onChange={(e) => setNivelConocimiento(e.target.value)}
                >
                  <option value="">Selecciona una opción</option>
                  {ParNivelConocimiento.map((nivel) => (
                    <option value={nivel.id} key={nivel.id}>
                      {nivel.descripcion}
                    </option>
                  ))}
                </select>
                {errors.nivelConocimiento && (
                  <div className="invalid-feedback">{errors.nivelConocimiento}</div>
                )}
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={handleClose}>
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

export default PerfilSistemasModal;
