
import Contenido3 from "@/components/common/Contenido3";
import EncabezadoPagina from "@/components/common/EncabezadoPagina";

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
                <p>Planes</p>
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
