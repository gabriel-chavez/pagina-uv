"use client";

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import EncabezadoConvocatoria from '@/components/common/EncabezadoConvocatoria';

const fetchConvocatoriaDetails = async (id) => {
  const convocatorias = [
    { id: 1, cargo: 'Analista de marketing', referencia: '067/2024', fechaInicio: '20/07/2024', fechaFin: '30/07/2024', vacantes: '1 vacante', oficina: 'Oficina La Paz', tipoConvocatoria: 'Externa', descripcion: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.', formacionAcademica: 'Título en provisión nacional a nivel Licenciatura en Informática, Ingeniería de Sistemas o ramas afines.', experienciaGeneral: 'Experiencia general de cinco (5) años.', experienciaEspecifica: 'Tres (3) años en Desarrollo y/o Mantenimiento de Software, de los cuales al menos un (1) año debe ser específicamente en Desarrollo de Software Contable y/o de Seguros', otrosRequisitos: 'Conocimiento en el desarrollo de sistemas Back-end utilizando tecnologías .Net' },

    { id: 2, cargo: 'Jefe de marketing', referencia: '068/2024', fechaInicio: '16/07/2024', fechaFin: '20/07/2024', vacantes: '1 vacante', oficina: 'Oficina La Paz', tipoConvocatoria: 'Mixta', descripcion: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.', formacionAcademica: 'Título en provisión nacional a nivel Licenciatura en Informática, Ingeniería de Sistemas o ramas afines.', experienciaGeneral: 'Experiencia general de cinco (5) años.', experienciaEspecifica: 'Tres (3) años en Desarrollo y/o Mantenimiento de Software, de los cuales al menos un (1) año debe ser específicamente en Desarrollo de Software Contable y/o de Seguros', otrosRequisitos: 'Conocimiento en el desarrollo de sistemas Back-end utilizando tecnologías .Net' },

    { id: 3, cargo: 'Gerente de marketing', referencia: '068/2024', fechaInicio: '16/07/2024', fechaFin: '20/07/2024', vacantes: '1 vacante', oficina: 'Oficina La Paz', tipoConvocatoria: 'Mixta', descripcion: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?', formacionAcademica: 'Título en provisión nacional a nivel Licenciatura en Informática, Ingeniería de Sistemas o ramas afines.', experienciaGeneral: 'Experiencia general de cinco (5) años.', experienciaEspecifica: 'Tres (3) años en Desarrollo y/o Mantenimiento de Software, de los cuales al menos un (1) año debe ser específicamente en Desarrollo de Software Contable y/o de Seguros', otrosRequisitos: 'Conocimiento en el desarrollo de sistemas Back-end utilizando tecnologías .Net' }
  ];
  return convocatorias.find(convocatoria => convocatoria.id === parseInt(id, 10));
};

const ConvocatoriaDetail = ({ params }) => {
  const [convocatoria, setConvocatoria] = useState(null);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [showDaysField, setShowDaysField] = useState(false);
  const [showRelativeNameField, setShowRelativeNameField] = useState(false);
  const id = params.id;

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchConvocatoriaDetails(id);
        console.log("Datos obtenidos:", data);
        setConvocatoria(data);
      } catch (error) {
        console.error("Error obteniendo datos de la convocatoria:", error);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      console.log("Id a obtener", id); 
      loadData();
    } else {
      setLoading(false);
    }
  }, [id]);

  if (loading) {
    return <div><h1 className='text-center'>Cargando</h1></div>;
  }

  if (!convocatoria) {
    return <div>Convocatoria no encontrada para el ID: {id}</div>; // Muestra el ID en el mensaje
  }

  return (
    <div>
      <EncabezadoConvocatoria
        backgroundImage="/assets/images/backgrounds/page-header-bg.jpg"
        title={convocatoria.cargo}
      />
      <section className="insurance-details">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-7">
              <div className="insurance-details__left">
                <h3 className="insurance-details__convocatoria-title">Descripción del Cargo</h3>
                <p>{convocatoria.descripcion}</p>

                <h3 className="insurance-details__convocatoria-title">Formación Académica</h3>
                <p>{convocatoria.formacionAcademica}</p>

                <h3 className="insurance-details__convocatoria-title">Experiencia General</h3>
                <p>{convocatoria.experienciaGeneral}</p>

                <h3 className="insurance-details__convocatoria-title">Experiencia Específica</h3>
                <p>{convocatoria.experienciaEspecifica}</p>

                <h3 className="insurance-details__convocatoria-title">Otros requisitos</h3>
                <p>{convocatoria.otrosRequisitos}</p>
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
                    <p>{convocatoria.referencia}</p>
                  </div>
                  <div className="insurance-details__convocatoria">        
                    <h3 className="insurance-details__convocatoria-title">Plazo Postulación</h3>
                    <p>Desde: {convocatoria.fechaInicio}</p>
                    <p>Hasta: {convocatoria.fechaFin}</p>
                  </div>
                  <div className="insurance-details__convocatoria">        
                    <h3 className="insurance-details__convocatoria-title">Vacantes</h3>
                    <p>{convocatoria.vacantes}</p>
                  </div>
                  <div className="insurance-details__convocatoria">        
                    <h3 className="insurance-details__convocatoria-title">Ciudad</h3>
                    <p>{convocatoria.oficina}</p>
                  </div>
                  <div className="insurance-details__convocatoria">        
                    <h3 className="insurance-details__convocatoria-title">Tipo de Convocatoria</h3>
                    <p>{convocatoria.tipoConvocatoria}</p>
                  </div>

                  <div className="insurance-details__convocatoria">
                    <p>
                      <a href="../convocatorias" class="insurance-details__need-help-btn thm-btn w-100 text-center">Regresar a convocatorias</a>
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
                    <input type="text" className="form-control" placeholder="Ingrese su pretensión salarial" />
                  </div>

                  <div className="form-group">
                    <label>Disponibilidad Inmediata</label><br />
                    <input type="radio" name="availability" onClick={() => setShowDaysField(false)} /> Sí
                    &nbsp;&nbsp;
                    <input type="radio" name="availability" onClick={() => setShowDaysField(true)} /> No
                    {showDaysField && (
                      <input type="number" className="form-control mt-2" placeholder="Ingrese el número de días" />
                    )}
                  </div>

                  <div className="form-group">
                    <label>¿Tiene parentesco con algún trabajador de la empresa?</label><br />
                    <input type="radio" name="relative" onClick={() => setShowRelativeNameField(true)} /> Sí
                    &nbsp;&nbsp;
                    <input type="radio" name="relative" onClick={() => setShowRelativeNameField(false)} /> No
                    {showRelativeNameField && (
                      <input type="text" className="form-control mt-2" placeholder="Ingrese el nombre de la persona" />
                    )}
                  </div>

                  <div className="form-group form-check">
                    <input type="checkbox" className="form-check-input" id="confirmData" />
                    <label className="form-check-label" htmlFor="confirmData">
                    Yo <strong>(Nombre persona)</strong> con CI <strong>(4932402)</strong> al participar del presente proceso de reclutamiento y selección de personal de UNIVIDA S.A., manifiesto de mi libre voluntad, mi compromiso a cumplir todas las condiciones de selección y evaluación que determine UNIVIDA S.A. Asimismo, declaro que la información brindada en el formulario de postulación es verdadera y mi obligación el sustentarla con los respaldos originales y doy mi autorización para que puedan verificar las referencias del formulario de postulación. Por último, concozco y acepto que es causal de rechazo de la postulación al proceso, sin lugar a reclamo, el tener en los últimos 5 años alguna denuncia o conflicto legal, laboral, administrativo o financiero contra Univida S.A.<br /><br /> UNIVIDA S.A. se reserva el derecho de anular la postulación en caso de que se eviencie alguna irregularidad por parte del postulante en cualquier etapa de evaluación.
                    </label>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary">Confirmar Postulación</button>
                <button type="button" className="btn btn-secondary" onClick={() => setModalOpen(false)}>Cerrar</button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default ConvocatoriaDetail;