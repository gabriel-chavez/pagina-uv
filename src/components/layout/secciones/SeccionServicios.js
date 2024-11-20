// Services.js
import SeccionSliderTipo1 from './SeccionSliderTipo1';
import { obtenerSeguros } from '@/services/cmsService';

export  default async function SeccionServicios() {
  const resultado = await obtenerSeguros();
  const seguros=resultado.datos 
  const seccion = {
    titulo: "NUESTROS SEGUROS",
    subTitulo: "Grandes soluciones\nen Seguros",
    datos: seguros.map(seguro => [
      { datoTexto: seguro.nombreCorto },
      { datoTexto: seguro.icono },
      { recurso: { recursoEscritorio: seguro.recurso.recursoEscritorio } },
      { datoUrl: seguro.menuPrincipal.urlCompleta},
      { datoTexto: "Ver más" }
    ])
  };
  console.log(seccion.datos)
  return (
    <>
      <SeccionSliderTipo1 seccion={seccion}></SeccionSliderTipo1>      
    </>
  );
};


