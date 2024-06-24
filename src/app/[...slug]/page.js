import { obtenerPaginaPorRuta, obtenerRutasDinamicas } from '@/services/cmsService';
import EncabezadoPagina from "@/components/common/EncabezadoPagina";
import { construirBreadcrumbsDesdeSlug } from '@/utils/construirBreadcrumbsDesdeSlug';
import SeccionDinamica from '@/components/layout/SeccionDinamica';

export default async function Page({ params }) {


  try {
    // Obtener slug de la URL
    const slug = params.slug
    console.log(slug)
    const breadcrumbs = construirBreadcrumbsDesdeSlug(slug)



    // Obtener todas las rutas dinámicas disponibles
    //const rutasDinamicas = await obtenerRutasDinamicas(ruta);

    // Obtener la página específica por una ruta
    const data = await obtenerPaginaPorRuta(slug);
    //console.log("Datos de la página", data.secciones[0].datos);

    return (
      <>
        {data.banners.length > 0 && (
          <EncabezadoPagina
            backgroundImage={data.banners[0].recurso.recursoEscritorio}
            title={data.banners[0].titulo}
            breadcrumbs={breadcrumbs}
          />
        )}
           
        <div className="app">
            {data.secciones.map((seccion, index) => (
          
                <SeccionDinamica key={index} seccion={seccion} />
            ))}
        </div>
                
      </>
    );
  } catch (error) {
    console.error("Error al obtener datos:", error);
    return (
      <>
        <p>Ocurrió un error al cargar la página.</p>
      </>
    );
  }
}
