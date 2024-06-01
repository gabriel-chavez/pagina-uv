
import Contenido3 from "@/components/common/Contenido3";
import EncabezadoPagina from "@/components/common/EncabezadoPagina";
import Plan from "@/components/common/Plan";
export default function Home() {
    const breadcrumbs = [
        { label: 'Inicio', url: '/' },
        { label: 'Seguros', url: '/Seguros' },
        { label: 'Seguro de vida' }
    ];

    const puntosCobertura = [
        { texto: 'En caso de fallecimiento por cualquier causa, tus beneficiarios recibirán una indemnización.', marcado: true },
        { texto: 'Te indemnizaremos en caso de invalidez total y permanente.', marcado: true },
        { texto: 'Indemnizaremos a tus beneficiarios por gastos de sepelio.', marcado: true }
    ];

    const puntosRequisitos = [
        { texto: 'Presenta una fotocopia de tu Cédula de Identidad vigente.', marcado: true },
        { texto: 'Completa los formularios proporcionados por nuestra entidad.', marcado: true }
    ];

    const puntosExclusiones = [
        { texto: 'Intervención directa o indirecta del Asegurado en actos delictivos y/o penados por la Ley.', marcado: false },
        { texto: 'Accidentes ocurridos previo al inicio de la Cobertura Individual del Asegurado y sus consecuencias posteriores.', marcado: false },
        { texto: 'Además de las exclusiones detalladas en las Condiciones Generales de la Póliza del Seguro.', marcado: false }
    ];

    const tituloCoberturaHtml = '<span>¿Qué cubre el <b>Seguro de Vida Individual?</b></span>'
    const tituloBeneficiosHtml = `<span>¿Qué es el <b>Seguro de Vida Individual?</b></span>`;
    const textoBeneficiosHtml = `<p>Es un plan de protección creado para usted y su familia, consistente en otorgar un apoyo económico a la familia del asegurado ante el fallecimiento de este por cualquier causa, (salvo exclusiones específicas).</p>
    <p>
     Por ejemplo con el Plan A de nuestro Seguro de Vida Individual, en caso de invalidez total y permanente el asegurado recibirá un monto de Bs.7.500. En caso de fallecimiento la empresa pagará Bs.15.000 a los beneficiarios, además de Bs.1.500 para gastos de sepelio</p>`
    const textoRequisitosHtml = '<span>¿Cómo <b>Asegurarte?</b></span>'
    const textoExclusionesHtml = '<span>Exclusiones del <b>Seguro de Vida Individual</b></span>'
    const coberturasYMonto = [
        { cobertura: "Muerte por cualquier causa", monto: 70000 },
        { cobertura: "Invalidez total y permanente", monto: 35000 },
        { cobertura: "Gastos de sepelio", monto: 6000 }
    ];
    const planes = [
        {
            nombre: "Plan A",
            precio: 45,
            coberturas: [
                { cobertura: "Cobertura 1", monto: 10000 },
                { cobertura: "Cobertura 2", monto: 20000 },
                { cobertura: "Cobertura 3", monto: 30000 }
            ],
            beneficios: ["Beneficio 1", "Beneficio 2", "Beneficio 3"]
        },
        {
            nombre: "Plan A",
            precio: 45,
            coberturas: [
                { cobertura: "Cobertura 1", monto: 10000 },
                { cobertura: "Cobertura 2", monto: 20000 },
                { cobertura: "Cobertura 3", monto: 30000 }
            ],
            beneficios: ["Beneficio 1", "Beneficio 2", "Beneficio 3"]
        },
        {
            nombre: "Plan A",
            precio: 45,
            coberturas: [
                { cobertura: "Cobertura 1", monto: 10000 },
                { cobertura: "Cobertura 2", monto: 20000 },
                { cobertura: "Cobertura 3", monto: 30000 }
            ],
            beneficios: ["Beneficio 1", "Beneficio 2", "Beneficio 3"]
        },
        {
            nombre: "Plan A",
            precio: 45,
            coberturas: [
                { cobertura: "Cobertura 1", monto: 10000 },
                { cobertura: "Cobertura 2", monto: 20000 },
                { cobertura: "Cobertura 3", monto: 30000 }
            ],
            beneficios: ["Beneficio 1", "Beneficio 2", "Beneficio 3"]
        }

    ];
    return (
        <>
            <EncabezadoPagina
                backgroundImage="/assets/images/backgrounds/page-header-bg.jpg"
                title="Seguro de vida"
                breadcrumbs={breadcrumbs}
            />
            <section class="mt-5">
                <Contenido3
                    titulo={tituloBeneficiosHtml}
                    texto={textoBeneficiosHtml}
                />
                <Contenido3
                    titulo={tituloCoberturaHtml}
                    puntos={puntosCobertura}
                    fondo={true}
                />
                <div class="container-fluid">
                    <div class="text-center m-4">
                        <h3 class="color-tiulo-uv">Elige tu plan de <b>Seguro de Vida Individual</b> </h3>
                    </div>
                    <div className="row ">
                        <div className="d-flex flex-wrap justify-content-center align-items-start">
                            {planes.map((plan, index) => (
                                <div className="mb-4" key={index}>
                                    <Plan
                                        nombrePlan={plan.nombre}
                                        precioAnual={plan.precio}
                                        coberturas={coberturasYMonto}
                                        textoBoton="Solicitar Seguro"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div class="text-center m-5">
                        <h4 class="color-tiulo-uv m-2">Precio único para todas las edades (Edad mínima 18 años y edad máxima 60 años)</h4>
                        <h3 class="color-tiulo-uv m-2 fw-bold fst-italic">Cláusula Adicional de Aviso de Siniestro 10 días.</h3>
                    </div>
                    <div class="container ">
                        <div className="row m-5">
                            <div class="col-md-8">
                                <h5 className="text-info">Puedes contactarte con nuestros ejecutivos o auxiliares comerciales para adrquirir el seguro que se acomode a tus necesidades</h5>
                            </div>
                            <div class="col-md-4">
                                <div className="d-grid gap-2">
                                    <button className="btn btn-info btn-block text-white btn-md p-3">Contactar un ejecutivo comercial</button>
                                </div>

                            </div>
                        </div>

                    </div>

                </div>





                <Contenido3
                    titulo={textoRequisitosHtml}
                    puntos={puntosRequisitos}
                    fondo={true}
                />
                <Contenido3
                    titulo={textoExclusionesHtml}
                    puntos={puntosExclusiones}
                />

            </section>
        </>
    );
}
