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
            <Link href={`/convocatorias/${convocatoria.id}`}>
              <div className='row'>
                <div className='col-md-1 d-none d-md-block'>
                  <img src='/assets/images/icon/icon-univida.png' width="100%" className="insurance-details__convocatoria_icono" alt="Icono Univida"/>
                </div>
                <div className='col-md-11'>
                  <div className='row'>
                    <div className='insurance-details__convocatoria_lista_titulo col-md-12'>
                      <h4>{convocatoria.nombre}</h4>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-md-3'>
                      <em className='fa fa-building' /> 
                      {convocatoria.nombre}
                    </div>
                    <div className='col-md-6'>
                      <em className='fa fa-file'/>
                      {convocatoria.codigo}
                    </div>
                    <div className='col-md-3'>
                      <em className='fa fa-calendar'/>
                      {formatFecha(convocatoria.fechaFin)}
                    </div>
                  </div>
                  <div className='row d-none d-md-block'>
                    <div className='col-md-12'>
                      <hr />
                    </div>
                  </div>
                </div>
                <div className='col-md-1 d-block d-md-none'>
                  <button className='btn btn-primary w-100'>
                    Más detalle
                  </button>
                  <hr />
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ConvocatoriaLista;
