

import EncabezadoPagina from "@/components/common/EncabezadoPagina";
import Tarjeta1 from '@/components/common/Tarjeta1'
import { obtenerSeguros } from '@/services/cmsService';
import Link from 'next/link';
export default async function Page() {
    try {
        const breadcrumbs = [
            { label: 'Inicio', url: '/' },
            { label: 'Nuestros seguros' },
        ];
        const data = await obtenerSeguros();
  
        return (
            <>
                <EncabezadoPagina
                    backgroundImage="/assets/images/backgrounds/page-header-bg.jpg"
                    title="Nuestros seguros"
                    breadcrumbs={breadcrumbs}
                />
                <section className="insurence-page">
                    <div className="container">
                        <div className="row justify-content-center">
                            {data.map((seguro) => (
                                <div className="col-xl-4 col-lg-4">
                                    <Tarjeta1
                                        key={seguro.id}
                                        titulo={seguro.nombreCorto}
                                        link={seguro.menuPrincipal[0].urlCompleta}
                                        imgSrc={seguro.recurso.recursoEscritorio}
                                        iconClass={seguro.icono}
                                    />
                                </div>
                            ))}


                        </div>
                    </div>
                </section>
                <section className="cta-one cta-five" style={{ marginBottom: '-80px' }}>
                    <div className="container">
                        <div className="cta-one__inner">
                            <div
                                className="cta-one__bg"
                                style={{ backgroundImage: 'url(/assets/images/shapes/cta-three-bg-shape-2.png)' }}
                            ></div>
                            <div className="cta-one__title-box">
                                <h3>
                                    Obtenga una <span>Cotización</span> Ahora
                                </h3>
                                <p>Explore nuestra oferta sin preocupaciones ni costos adicionales</p>

                            </div>
                            <div className="cta-one__btn-box">
                                <Link href="/contact" className="cta-one__btn thm-btn">
                                    OBTENGA SU COTIZACIÓN GRATIS AHORA
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    } catch (error) {
        console.error("Error al obtener datos:", error);
        return (
            <>
                <p>{error.message}</p>
            </>
        );
    }

}
