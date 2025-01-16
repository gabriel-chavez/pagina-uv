"use client";

import { useEffect, useState } from 'react';
import EncabezadoConvocatoria from '@/components/common/EncabezadoConvocatoria';
import { obtenerConvocatoria } from '@/services/convocatoriaService';
import { registrarPostulacion } from '@/services/convocatoriaService';

const ConvocatoriaDetail = ({ params }) => {
  const [convocatoria, setConvocatoria] = useState(null);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [showDaysField, setShowDaysField] = useState(false);
  const [showRelativeNameField, setShowRelativeNameField] = useState(false);
  const [pretensionSalarial, setPretensionSalarial] = useState('');
  const [disponibilidadInmediata, setDisponibilidadInmediata] = useState(null);
  const [cantidadDiasDisponibilidad, setCantidadDiasDisponibilidad] = useState(0);
  const [tieneParentescoConFuncionario, setTieneParentescoConFuncionario] = useState(null);
  const [nombreParentescoFuncionario, setNombreParentescoFuncionario] = useState('');
  const [confirmData, setConfirmData] = useState(false);
  const id = params.id;
  const idPerfil = 1;

  useEffect(() => {
    const loadData = async () => {
      try {
        console.log('revision previa a la carga');
        const data = await obtenerConvocatoria(id);
        console.log(data);
        setConvocatoria(data);
      } catch (error) {
        console.error("Error obteniendo datos de la convocatoria:", error);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      loadData();
    } else {
      setLoading(false);
    }
  }, [id]);

  const handlePostulacion = async () => {
    if (!confirmData) {
      alert('Debe confirmar los términos antes de postularse.');
      return;
    }

    const postulacion = {
      convocatoriaId: convocatoria.id,
      postulanteId: idPerfil,
      pretensionSalarial: pretensionSalarial,
      disponibilidadInmediata: disponibilidadInmediata,
      cantidadDiasDisponibilidad: cantidadDiasDisponibilidad,
      tieneParentescoConFuncionario: tieneParentescoConFuncionario,
      nombreParentescoFuncionario: nombreParentescoFuncionario,
      experienciasLaborales: [
        {
          id: 1,
          experienciaGeneral: true,
          experienciaEspecifica: true
        }
      ]
    };

    console.log("Registro postulación:", JSON.stringify(postulacion, null, 2));

    try {
      const response = await registrarPostulacion(postulacion);
      console.log('Postulación exitosa:', response);
      alert('Postulación enviada exitosamente!');
    } catch (error) {
      console.error('Error al enviar la postulación:', error);
      alert('Hubo un error al enviar la postulación. Inténtalo de nuevo.');
    }
  };

  if (loading) {
    return <div><h1 className='text-center'>Cargando</h1></div>;
  }

  if (!convocatoria) {
    return <div>Convocatoria no encontrada para el ID: {id}</div>;
  }

  return (
    <div>
      <EncabezadoConvocatoria
        backgroundImage="/assets/images/backgrounds/page-header-bg.jpg"
        title={convocatoria.nombre}
      />
      <section className="insurance-details">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-7">
              <div className="insurance-details__left">
                <h3 className="insurance-details__convocatoria-title">Descripción del Cargo</h3>
                <p>{convocatoria.descripcion}</p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-5">
              <div className="insurance-details__right">
                <div className="insurance-details__convocatoria_info">
                  <div className="insurance-details__convocatoria">
                    <p>
                      <button
                        className="about-one__btn thm-btn w-100 text-center"
                        onClick={() => setModalOpen(true)}
                      >
                        Postular
                      </button>
                    </p>
                  </div>
                  <div className="insurance-details__convocatoria">        
                    <h3 className="insurance-details__convocatoria-title">Referencia</h3>
                    <p>{convocatoria.codigo}</p>
                  </div>
                  <div className="insurance-details__convocatoria">        
                    <h3 className="insurance-details__convocatoria-title">Plazo Postulación</h3>
                    <p>Desde: {convocatoria.fechaInicio}</p>
                    <p>Hasta: {convocatoria.fechaFin}</p>
                  </div>
                  <div className="insurance-details__convocatoria">        
                    <h3 className="insurance-details__convocatoria-title">Vacantes</h3>
                    <p>{convocatoria.codigo}</p>
                  </div>

                  <div className="insurance-details__convocatoria">
                    <p>
                      <a href="../convocatorias" className="insurance-details__need-help-btn thm-btn w-100 text-center">Regresar a convocatorias</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {modalOpen && (
        <div className="modal" style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          <div className="modal-dialog modal-dialog-wide">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Formulario de Postulación</h5>
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-group">
                    <label>Pretensión Salarial</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      placeholder="Ingrese su pretensión salarial" 
                      value={pretensionSalarial}
                      onChange={(e) => setPretensionSalarial(e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <label>Disponibilidad Inmediata</label><br />
                    <input type="radio" name="availability" onClick={() => { setShowDaysField(false); setDisponibilidadInmediata(true); }} /> Sí
                    &nbsp;&nbsp;
                    <input type="radio" name="availability" onClick={() => { setShowDaysField(true); setDisponibilidadInmediata(false); }} /> No
                    {showDaysField && (
                      <input 
                        type="number" 
                        className="form-control mt-2" 
                        placeholder="Ingrese el número de días" 
                        value={cantidadDiasDisponibilidad}
                        onChange={(e) => setCantidadDiasDisponibilidad(e.target.value)}
                      />
                    )}
                  </div>

                  <div className="form-group">
                    <label>¿Tiene parentesco con algún trabajador de la empresa?</label><br />
                    <input type="radio" name="relative" onClick={() => { setShowRelativeNameField(true); setTieneParentescoConFuncionario(true); }} /> Sí
                    &nbsp;&nbsp;
                    <input type="radio" name="relative" onClick={() => { setShowRelativeNameField(false); setTieneParentescoConFuncionario(false); }} /> No
                    {showRelativeNameField && (
                      <input 
                        type="text" 
                        className="form-control mt-2" 
                        placeholder="Ingrese el nombre de la persona" 
                        value={nombreParentescoFuncionario}
                        onChange={(e) => setNombreParentescoFuncionario(e.target.value)}
                      />
                    )}
                  </div>

                  <div className="form-group form-check">
                    <input 
                      type="checkbox" 
                      className="form-check-input" 
                      id="confirmData" 
                      onChange={(e) => setConfirmData(e.target.checked)}
                    />
                    <label className="form-check-label" htmlFor="confirmData">
                      Yo <strong>(Nombre persona)</strong> con CI <strong>(4932402)</strong> al participar del presente proceso de reclutamiento y selección de personal de UNIVIDA S.A., manifiesto de mi libre voluntad, mi compromiso a cumplir todas las condiciones de selección y evaluación que determine UNIVIDA S.A. Asimismo, declaro que la información brindada en el formulario de postulación es verdadera y mi obligación el sustentarla con los respaldos originales y doy mi autorización para que puedan verificar las referencias del formulario de postulación. Por último, conozco y acepto que es causal de rechazo de la postulación al proceso, sin lugar a reclamo, el tener en los últimos 5 años alguna denuncia o conflicto legal, laboral, administrativo o financiero contra Univida S.A.<br /><br /> UNIVIDA S.A. se reserva el derecho de anular la postulación en caso de que se evidencie alguna irregularidad por parte del postulante en cualquier etapa de evaluación.
                    </label>
                  </div>

                </form>
              </div>
              <div className="modal-footer">
                <button className="btn btn-primary" onClick={handlePostulacion}>Enviar Postulación</button>
                <button className="btn btn-secondary" onClick={() => setModalOpen(false)}>Cerrar</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ConvocatoriaDetail;
