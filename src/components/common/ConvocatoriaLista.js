import React from 'react';
import Link from 'next/link';

const ConvocatoriaLista = ({ convocatorias }) => {
  const formatFecha = (fecha) => {
    const date = new Date(fecha);
    return date.toLocaleDateString('es-ES', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
  };
  
  return (
    <div className="insurance-details__convocatoria_lista">        
      <h3 className="insurance-details__convocatoria_titulo">Convocatorias</h3>
      <ul className="insurance-details__convocatoria_detalle">
        {convocatorias.map((convocatoria) => (
          <li key={convocatoria.id}>
              <div className='row'>
                <div className='col-md-1 d-none d-md-block'>
                  <img src='/assets/images/icon/icon-univida.png' width="100%" className="insurance-details__convocatoria_icono" alt="Icono Univida"/>
                </div>
                <div className='col-md-11'>
                  <div className='row'>
                    <div className='insurance-details__convocatoria_lista_titulo col-md-6'>
                      <h4 className='postulacionCargo'>{convocatoria.nombre}</h4>
                      <div className='postulacionDescripcion'>
                        <small>
                          {convocatoria.descripcion.split(' ').slice(0, 15).join(' ')}...
                        </small>
                      </div>
                    </div>
                    <div className='col-md-4'>
                      <div className='postulacionCodigo'>
                        <em className='fa fa-file'/>
                        Ref: {convocatoria.codigo}
                      </div>
                      <div className='postulacionFecha'>
                        <em className='fa fa-calendar'/>
                        Fecha límite de postulación: {formatFecha(convocatoria.fechaFin)}
                      </div>
                    </div>
                    <div className='col-md-2 col-button'>
                      <Link className='btn-postular' href={`/convocatorias/${convocatoria.id}`}>
                        Postular
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ConvocatoriaLista;
