import React from 'react';
import SeccionContenidoTipo3 from './SeccionContenidoTipo3';
import SeccionSliderTipo1 from './SeccionSliderTipo1';
import SeccionSliderTipo2 from './SeccionSliderTipo2';
import SeccionAcordeonTipo1 from './SeccionAcordeonTipo1';
import SeccionContenidoTipo4 from './SeccionContenidoTipo4';
import SeccionContenidoTipo1 from './SeccionContenidoTipo1';
import SeccionCardTipo1 from './SeccionCardTipo1';
import SeccionCardImagenTipo1 from './SeccionCardImagenTipo1';
import SeccionCardImagenTipo2 from './SeccionCardImagenTipo2';
import SeccionContenedorIFrame from './SeccionContenedorIFrame';


// Importa otros componentes según sea necesario

const SeccionDinamica = ({ seccion }) => {
    switch (seccion.catTipoSeccion.nombre) {
        case 'SeccionContenidoTipo1':
            return <SeccionContenidoTipo1 seccion={seccion} />;
        case 'SeccionContenidoTipo3':
            return <SeccionContenidoTipo3 seccion={seccion} />;
        case 'SeccionContenidoTipo4':
            return <SeccionContenidoTipo4 seccion={seccion} />;
        case 'SeccionSliderTipo1':
            return <SeccionSliderTipo1 seccion={seccion} />;
        case 'SeccionSliderTipo2':
            return <SeccionSliderTipo2 seccion={seccion} />;
        case 'SeccionAcordeonTipo1':
            return <SeccionAcordeonTipo1 seccion={seccion} />;
        case 'SeccionCardTipo1':
            return <SeccionCardTipo1 seccion={seccion} />;
        case 'SeccionCardImagenTipo1':
            return <SeccionCardImagenTipo1 seccion={seccion} />;
        case 'SeccionCardImagenTipo2':
            return <SeccionCardImagenTipo2 seccion={seccion} />;
        case 'SeccionContenedorIFrame':
            return <SeccionContenedorIFrame seccion={seccion} />;
            



        default:
            return null; // Manejo de caso por defecto si el tipo de componente no está definido
    }
};


export default SeccionDinamica;
