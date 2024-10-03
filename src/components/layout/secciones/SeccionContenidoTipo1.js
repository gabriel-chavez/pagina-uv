import React from 'react';
import Contenido1 from '@/components/common/Contenido1';

const SeccionContenidoTipo1 = ({ seccion }) => {
    return (
        <div className='container'>
            <section className="mt-5">
                {seccion.datos.map((fila, index) => {
                    

                    // Si faltan datos, mostramos el mensaje de advertencia y el componente con valores por defecto
                    return (
                        <div key={index} className="fila-contenidos">                           
                            <Contenido1
                                titulo1={fila[0]?.datoTexto || ''}
                                titulo2={fila[1]?.datoTexto || ''}
                                texto={fila[2]?.datoTexto || ''}
                                imgSrc={fila[3]?.recurso?.recursoEscritorio || ''}
                                porcentajeTamanioImagen={fila[3]?.datoTexto || '100'}
                            />
                        </div>
                    );
                })}
            </section>
        </div>
    );
};

export default SeccionContenidoTipo1;
