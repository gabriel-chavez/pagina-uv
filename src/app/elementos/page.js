import Acordeon1 from "@/components/common/Acordeon1";
import Categorias from "@/components/common/Categorias";
import Contenido1 from "@/components/common/Contenido1";
import Contenido2 from "@/components/common/Contenido2";
import Contenido3 from "@/components/common/Contenido3";
import EncabezadoPagina from "@/components/common/EncabezadoPagina";
import Tarejta4 from "@/components/common/Tarjeta4";
import Tarjeta5 from "@/components/common/Tarjeta5";


export default function Home() {
    const breadcrumbs = [
        { label: 'Inicio', url: '/' },
        { label: 'Seguros', url: '/Seguros' },
        { label: 'Seguro de vida' }
    ];
    const puntos = [
        'Aliquam accumsan et ante id',
        'Lorem ipsum dolor sit dgdr',
        'Maecenas varius tortor'
    ];

    const textoHtml = `Lorem ipsum dolor sit amet, consectetur adipiscing <br />elit. Maecenas varius
                              tortor nibh, sit amet tempor<br /> finibus et. Aenean eu enim justo. Vestibulum`;
    const tituloHtml = `<span>¿Que es el <b>Seguro de Vida Individual?</b></span>`;
    const textoHtml2=  `Es un plan de protección creado para usted y su familia, consistente en otorgar un apoyo 
    económico a la familia del asegurado ante el fallecimiento de este por cualquier causa, 
    (salvo exclusiones específicas).
     Por ejemplo con el Plan A de nuestro Seguro de Vida Individual, en caso de invalidez total 
    y permanente el asegurado recibirá un monto de Bs.7.500. En caso de fallecimiento la 
    empresa pagará Bs.15.000 a los beneficiarios, además de Bs.1.500 para gastos de sepelio`
    const acordeon = [
        {
            title: 'Descripción del acordeón número 1',
            content: 'Es posible que su solicitante tenga una experiencia limitada en el servicio de asistencia técnica. En ese caso, busque solicitantes que estén motivados para crecer y que tengan algún nibh finibus et transferible. Aenean eu enim justo. Vestibulum aliquam hendrerit moles accumsan',
            active: false
        },
        {
            title: 'Información sobre el acordeón número 2',
            content: 'Es posible que su solicitante tenga una experiencia limitada en el servicio de asistencia técnica. En ese caso, busque solicitantes que estén motivados para crecer y que tengan algún nibh finibus et transferible. Aenean eu enim justo. Vestibulum aliquam hendrerit moles accumsan',
            active: true
        },
        {
            title: 'Especificaciones del acordeón número 3',
            content: 'Es posible que su solicitante tenga una experiencia limitada en el servicio de asistencia técnica. En ese caso, busque solicitantes que estén motivados para crecer y que tengan algún nibh finibus et transferible. Aenean eu enim justo. Vestibulum aliquam hendrerit moles accumsan',
            active: false
        },
        {
            title: 'Características del acordeón número 4',
            content: 'Es posible que su solicitante tenga una experiencia limitada en el servicio de asistencia técnica. En ese caso, busque solicitantes que estén motivados para crecer y que tengan algún nibh finibus et transferible. Aenean eu enim justo. Vestibulum aliquam hendrerit moles accumsan',
            active: false
        }
    ];
    const categorias = [
        { name: 'Seguro de Vida', url: 'life-insurance.html', active: true },
        { name: 'Seguro de Salud', url: 'health-insurance.html', active: false },
        { name: 'Seguro de Auto', url: 'auto-insurance.html', active: false },
        { name: 'Seguro de Hogar', url: 'home-insurance.html', active: false },
        { name: 'Seguro Familiar', url: 'family-insurance.html', active: false },
        { name: 'Seguro de Negocios', url: 'business-insurance.html', active: false }
    ];
    return (
        <>
            <EncabezadoPagina
                backgroundImage="/assets/images/backgrounds/page-header-bg.jpg"
                title="Seguro de vida"
                breadcrumbs={breadcrumbs}
            />
            <section class="insurance-details">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-8 col-lg-7">
                            <div class="insurance-details__left"></div>
                            <Contenido1
                                titulo1="Atendemos una amplia variedad de seguros"
                                texto="Adoptamos el desarrollo integral y el apoyo a los empleados con el objetivo de ser el empleador de primera elección dentro de nuestros sectores. A través de una combinación única de disciplinas y experiencia en ingeniería, construcción y diseño."
                                imgSrc="/assets/images/services/insurance-details-img-4.jpg"
                            />
                            <Contenido1
                                titulo2="Seguro de vida"
                                texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius tortor nibh, sit amet tempor nibh finibus et. Aenean eu enim justo. Vestibulum aliquam hendrerit molestie. Mauris malesuada nisi sit amet augue accumsan tincidunt. Maecenas tincidunt, velit ac porttitor pulvinar, tortor eros facilisis libero, vitae commodo nunc quam et ligula"
                            />
                            <Contenido2
                                titulo1="Nuestras metas"
                                puntos={puntos}
                                titulo2="Los desafios"
                                texto={textoHtml}
                            />
                            <Contenido3
                                titulo={tituloHtml}
                                // puntos={puntos}                           
                                texto={textoHtml2}
                            />
                            <Acordeon1 acordeon={acordeon} />
                        </div>
                        <div class="col-xl-4 col-lg-5">
                            <div class="insurance-details__right">
                                <Categorias categorias={categorias} />
                                <Tarejta4
                                    backgroundImage='assets/images/backgrounds/insurance-details-need-help-bg.jpg'
                                    titulo='¿Necesita algún tipo de servicio de nuestra parte?'
                                    botonTexto='Contáctanos'
                                    botonUrl='contact.html'
                                />
                                <Tarjeta5
                                    iconClass="icon-telephone-1"
                                    titulo="Llame en cualquier momento"
                                    subtitulo="800-10-9119"
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
}
