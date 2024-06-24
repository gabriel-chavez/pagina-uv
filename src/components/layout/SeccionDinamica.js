import React from 'react';
import SeccionContenidoTipo3 from './SeccionContenidoTipo3';
import SeccionSliderTipo1 from './SeccionSliderTipo1';
import SeccionSliderTipo2 from './SeccionSliderTipo2';
import SeccionAcordeonTipo1 from './SeccionAcordeonTipo1';

// Importa otros componentes según sea necesario

const SeccionDinamica = ({ seccion }) => {
    switch (seccion.catTipoSeccion.nombre) {

        case 'SeccionContenidoTipo3':
            return <SeccionContenidoTipo3 seccion={seccion} />;
        case 'SeccionSliderTipo1':
            return <SeccionSliderTipo1 seccion={seccion} />;
        case 'SeccionSliderTipo2':
            return <SeccionSliderTipo2 seccion={seccion} />;
        case 'SeccionAcordeonTipo1':
            return <SeccionAcordeonTipo1 seccion={seccion} />;
        default:
            return null; // Manejo de caso por defecto si el tipo de componente no está definido
    }
};


export default SeccionDinamica;
