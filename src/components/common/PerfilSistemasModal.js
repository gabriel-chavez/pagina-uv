'use client';

import React, { useState } from 'react';

const PerfilSistemasModal = ({
  show,
  onClose,
  onSave,
  selectedSistema,
  ParPrograma,
  ParNivelConocimiento,
}) => {
  const [programa, setPrograma] = useState(selectedSistema?.parProgramaId || '');
  const [nivelConocimiento, setNivelConocimiento] = useState(selectedSistema?.parNivelConocimientoId || '');
  const [errors, setErrors] = useState({});

  // Asegurarse de no renderizar el modal si `show` es false
  if (!show) return null;

  const handleSave = () => {
    const newErrors = {};
    if (!programa) newErrors.programa = 'Debe seleccionar un programa/sistema/paquete.';
    if (!nivelConocimiento) newErrors.nivelConocimiento = 'Debe seleccionar un nivel de conocimiento.';

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    // Llama a la función onSave con los datos capturados
    onSave({ programa, nivelConocimiento });

    // Reiniciar el formulario si es necesario
    setPrograma('');
    setNivelConocimiento('');
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
            <h5 className="modal-title">Agregar Sistema</h5>
            <button type="button" className="btn-close" onClick={onClose}></button>
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
                {errors.nivelConocimiento && <div className="invalid-feedback">{errors.nivelConocimiento}</div>}
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

export default PerfilSistemasModal;
