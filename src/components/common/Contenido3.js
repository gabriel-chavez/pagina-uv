import React from 'react';
import "bootstrap-icons/font/bootstrap-icons.css";

const Contenido3 = ({ titulo, puntos, texto, fondo }) => {
  const containerClass = fondo ? 'color-fondo-uv' : '';

  return (
    <>
      <div className={containerClass}>
        <div className='container' >
          <div className="row pt-4 pb-4" >
            <div class="col-md-4">
              {titulo && (
                <div >
                  <h3 className="color-tiulo-uv" dangerouslySetInnerHTML={{ __html: titulo }}></h3>
                </div>
              )}
            </div>
            <div class="col-md-8">
              {puntos && puntos.length > 0 && (
                <div className="insurance-details__text-box">
                  <ul className="insurance-details__points list-unstyled">
                    {puntos.map((point, index) => (
                      <li key={index}>
                        <div className="icon font-weight-bold">
                          {point.marcado !== null && point.marcado !== undefined ? (
                            point.marcado ? (
                              <span className="bi bi-check-lg text-success"></span>
                            ) : (
                              <span className="bi bi-x-lg text-danger"></span>
                            )
                          ) : (
                            <span className="bi bi-dot"></span>
                          )}
                        </div>
                        <span className="m-1 ms-3">{point.texto}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {texto && (
                <div className="insurance-details__text-box">
                  <div dangerouslySetInnerHTML={{ __html: texto }}></div>
                </div>
              )}
            </div>

          </div>
        </div>
      </div>

    </>
  );
};

export default Contenido3;
