import React from 'react';

import "bootstrap-icons/font/bootstrap-icons.css";
import MarkdownRenderer from '@/utils/MarkdownRenderer';

const Contenido3 = ({ titulo, texto, fondo }) => {
  const containerClass = fondo ? 'color-fondo-uv' : '';

  return (
    <>
      <div className={containerClass}>
        <div className='container' >
          <div className="row pt-4 pb-4" >
            <div className="col-md-4">
              {titulo && (
                <div >
                  <h3 className="color-tiulo-uv parrafo-sin-margen" >
                    <MarkdownRenderer content={titulo}></MarkdownRenderer>
                  </h3>
                </div>
              )}
            </div>
            <div className="col-md-8">
              {texto && (
                <div className="insurance-details__text-box">
                  {/* <div dangerouslySetInnerHTML={{ __html: texto }}></div> */}
                  <div className="inner">
                    <MarkdownRenderer content={texto}></MarkdownRenderer>
                  </div>
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
