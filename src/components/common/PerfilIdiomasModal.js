import React, { useState, useEffect } from 'react';

const PerfilIdiomasModal = ({
  show,
  onClose,
  onSave,
  selectedIdioma,
  ParIdioma,
  ParNivelConocimiento,
}) => {
  const [idioma, setIdioma] = useState('');
  const [nivelLectura, setNivelLectura] = useState('');
  const [nivelEscritura, setNivelEscritura] = useState('');
  const [nivelComprension, setNivelComprension] = useState('');
  const [errors, setErrors] = useState({});

  useEffect(() => {
    // Solo actualizar los valores si selectedIdioma tiene datos
    if (selectedIdioma) {
      setIdioma(selectedIdioma.parIdiomaId || '');
      setNivelLectura(selectedIdioma.parNivelConocimientoLecturaId || '');
      setNivelEscritura(selectedIdioma.parNivelConocimientoEscrituraId || '');
      setNivelComprension(selectedIdioma.parNivelConocimientoConversacionId || '');
    }
  }, [selectedIdioma]); // Este efecto se dispara cada vez que selectedIdioma cambia

  if (!show) return null;

  const handleSave = () => {
    const newErrors = {};

    if (!idioma) newErrors.idioma = 'Debe seleccionar un idioma.';
    if (!nivelLectura) newErrors.nivelLectura = 'Debe seleccionar un nivel de lectura.';
    if (!nivelEscritura) newErrors.nivelEscritura = 'Debe seleccionar un nivel de escritura.';
    if (!nivelComprension) newErrors.nivelComprension = 'Debe seleccionar un nivel de comprensión.';

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    // Llama a la función onSave con los datos capturados
    onSave({
      idioma,
      nivelLectura,
      nivelEscritura,
      nivelComprension,
    });

    // Reiniciar el formulario si es necesario
    setIdioma('');
    setNivelLectura('');
    setNivelEscritura('');
    setNivelComprension('');
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
            <h5 className="modal-title">Agregar Idioma</h5>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            <form>
              {/* Campo Idioma */}
              <div className="mb-3">
                <label className="form-label">Idioma</label>
                <select
                  className={`form-control ${errors.idioma ? 'is-invalid' : ''}`}
                  id="idioma"
                  value={idioma}
                  onChange={(e) => setIdioma(e.target.value)}
                >
                  <option value="">Selecciona una opción</option>
                  {ParIdioma.map((Idioma) => (
                    <option value={Idioma.id} key={Idioma.id}>
                      {Idioma.descripcion}
                    </option>
                  ))}
                </select>
                {errors.idioma && <div className="invalid-feedback">{errors.idioma}</div>}
              </div>

              {/* Campo Nivel Lectura */}
              <div className="mb-3">
                <label className="form-label">Nivel Lectura</label>
                <select
                  className={`form-control ${errors.nivelLectura ? 'is-invalid' : ''}`}
                  id="nivelLectura"
                  value={nivelLectura}
                  onChange={(e) => setNivelLectura(e.target.value)}
                >
                  <option value="">Selecciona una opción</option>
                  {ParNivelConocimiento.map((NivelConocimiento) => (
                    <option value={NivelConocimiento.id} key={NivelConocimiento.id}>
                      {NivelConocimiento.descripcion}
                    </option>
                  ))}
                </select>
                {errors.nivelLectura && <div className="invalid-feedback">{errors.nivelLectura}</div>}
              </div>

              {/* Campo Nivel Escritura */}
              <div className="mb-3">
                <label className="form-label">Nivel Escritura</label>
                <select
                  className={`form-control ${errors.nivelEscritura ? 'is-invalid' : ''}`}
                  id="nivelEscritura"
                  value={nivelEscritura}
                  onChange={(e) => setNivelEscritura(e.target.value)}
                >
                  <option value="">Selecciona una opción</option>
                  {ParNivelConocimiento.map((NivelConocimiento) => (
                    <option value={NivelConocimiento.id} key={NivelConocimiento.id}>
                      {NivelConocimiento.descripcion}
                    </option>
                  ))}
                </select>
                {errors.nivelEscritura && <div className="invalid-feedback">{errors.nivelEscritura}</div>}
              </div>

              {/* Campo Nivel Comprensión */}
              <div className="mb-3">
                <label className="form-label">Nivel Comprensión</label>
                <select
                  className={`form-control ${errors.nivelComprension ? 'is-invalid' : ''}`}
                  id="nivelComprension"
                  value={nivelComprension}
                  onChange={(e) => setNivelComprension(e.target.value)}
                >
                  <option value="">Selecciona una opción</option>
                  {ParNivelConocimiento.map((NivelConocimiento) => (
                    <option value={NivelConocimiento.id} key={NivelConocimiento.id}>
                      {NivelConocimiento.descripcion}
                    </option>
                  ))}
                </select>
                {errors.nivelComprension && <div className="invalid-feedback">{errors.nivelComprension}</div>}
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

export default PerfilIdiomasModal;
