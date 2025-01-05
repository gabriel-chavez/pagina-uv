import Slider from '@/components/common/Slider';
import Slider1 from '@/components/common/Slider1';
import { obtenerBannerPaginaPrincipal } from '@/services/cmsService';


const SeccionSliderPrincipal = async () => {

  const data = await obtenerBannerPaginaPrincipal(1);
  console.log("data:",data.datos)
  if (!data || !data.datos || !data.datos.bannerPaginaPrincipalDetalle) {
    return null; // No renderizar nada si no hay datos
  }

  const formatoSlides = data.datos.bannerPaginaPrincipalDetalle.map((detalle) => ({
    imagen:
      detalle.recurso.catTipoRecursoId === 1
        ? detalle.recurso.recursoEscritorio
        : null,
    video:
      detalle.recurso.catTipoRecursoId === 2
        ? detalle.recurso.recursoEscritorio
        : null,
    titulo: detalle.titulo || '',
    texto: detalle.texto || '',
    enlace: detalle.enlace || '#',
  }));

  const estiloBannerId = data.datos.catEstiloBannerId;
  console.log(estiloBannerId)


  switch (estiloBannerId) {
    case 1:
      return <Slider slides={formatoSlides} />;
    case 2:
      return <Slider1 slides={formatoSlides} />;
    default:
      return null;
  }
};

export default SeccionSliderPrincipal;
