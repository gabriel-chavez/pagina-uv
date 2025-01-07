import { obtenerSeguroPorRuta } from '@/services/cmsService';
import EncabezadoPagina from "@/components/common/EncabezadoPagina";
import Contenido3 from "@/components/common/Contenido3";
import Plan from "@/components/common/Plan";
import MarkdownRenderer from '@/utils/MarkdownRenderer';

export default async function Page({ params }) {


    try {
        // Obtener slug de la URL
        const slug = params.slug

        var ruta = encodeURIComponent("/nuestros-seguros/" + slug);
        // Obtener la página específica por una ruta
        const resultado = await obtenerSeguroPorRuta(ruta);
        const data = resultado.datos
       // console.log(data);
        const breadcrumbs = [
            { label: 'Inicio', url: '/' },
            { label: 'Nuestros Seguros', url: '/nuestros-seguros' },
            { label: data.nombreCorto }
        ];

        //console.log(data.bannerPagina[0].recurso.recursoEscritorio)

        return (
            <>
                {data.bannerPagina.length > 0 && (
                    <EncabezadoPagina
                        backgroundImage={data.bannerPagina[0].recurso.recursoEscritorio}
                        //title={data.bannerPagina[0].titulo}
                        title={data.nombreCorto}
                        breadcrumbs={breadcrumbs}
                    />
                )}

                {data.seguroDetalles && data.seguroDetalles.length >= 2 && (
                    <>
                        <section className="mt-5">
                            <Contenido3
                                titulo={data.seguroDetalles[0]?.titulo}
                                texto={data.seguroDetalles[0]?.respuesta}
                            />
                            <Contenido3
                                titulo={data.seguroDetalles[1]?.titulo}
                                texto={data.seguroDetalles[1]?.respuesta}
                                fondo={true}
                            />
                        </section>

                        <section>
                            <div className="container-fluid">
                                <div className="text-center m-4">
                                    <h3 className="color-tiulo-uv">Elige tu plan de <b>{data.nombre}</b></h3>
                                </div>
                                <div className="row">
                                    <div className="d-flex flex-wrap justify-content-center align-items-start">
                                        {data.planes.map((plan, index) => (
                                            <div className="mb-4" key={index}>
                                                <Plan
                                                    nombrePlan={plan.titulo}
                                                    subTituloPlan={plan.subTitulo}
                                                    precio={plan.precio}
                                                    cobertura={plan.cobertura}
                                                    textoBoton="Solicitar Seguro"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="text-center m-5">
                                    <h4 className="color-tiulo-uv m-2 seguros-detalle-adicional">
                                        <MarkdownRenderer content={data.detalleAdicional}></MarkdownRenderer>
                                    </h4>
                                </div>
                                <div className="container">
                                    <div className="row m-5">
                                        <div className="col-md-8">
                                            <h5 className="text-info">Puedes contactarte con nuestros ejecutivos o auxiliares comerciales para adquirir el seguro que se acomode a tus necesidades</h5>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="d-grid gap-2">
                                                <button className="btn btn-info btn-block text-white btn-md p-3">Contactar un ejecutivo comercial</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="mt-5">
                            {data.seguroDetalles.slice(2, 4).map((detalle, index) => (
                                <Contenido3
                                    key={index}
                                    titulo={detalle.titulo}
                                    texto={detalle.respuesta}
                                    fondo={index === 0} // Aplica `fondo={true}` solo en el primer elemento del bucle
                                />
                            ))}
                        </section>
                    </>
                )}
            </>
        );

    } catch (error) {
        //console.error("Error al obtener datos:", error);
        return (
            <>
                <p>{error.message}</p>
            </>
        );
    }
}
