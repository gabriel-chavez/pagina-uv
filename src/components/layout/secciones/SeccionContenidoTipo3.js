import React from 'react';
import Contenido3 from '@/components/common/Contenido3';

const SeccionContenidoTipo3 = ({ seccion }) => {



    return (      
        <section className="mt-2">
            {seccion.datos.map((fila, index) => (
                <div key={index} className="fila-contenidos">
                    <Contenido3
                        key={index} 
                        titulo={fila[0]?.datoTexto} 
                        texto={fila[1]?.datoTexto} 
                        fondo={index % 2 !== 0} 
                    />
                </div>
            ))}
        </section>
    );
};

export default SeccionContenidoTipo3;
