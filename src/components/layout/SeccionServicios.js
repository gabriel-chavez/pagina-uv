// Services.js
import SeccionSliderTipo1 from './SeccionSliderTipo1';
import { obtenerSeguros } from '@/services/cmsService';

export  default async function SeccionServicios() {
  const seguros = await obtenerSeguros();
  
  const seccion = {
    titulo: "NUESTROS SEGUROS",
    subTitulo: "Grandes soluciones\nen Seguros",
    datos: seguros.map(seguro => [
      { datoTexto: seguro.nombreCorto },
      { datoTexto: seguro.icono },
      { recurso: { recursoEscritorio: seguro.recurso.recursoEscritorio } },
      { datoUrl: seguro.menuPrincipal[0].urlCompleta, datoTexto: "Ver más" }
    ])
  };
  
  return (
    <>
      <SeccionSliderTipo1 seccion={seccion}></SeccionSliderTipo1>      
    </>
  );
};


