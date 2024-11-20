import ConvocatoriaLista from "@/components/common/ConvocatoriaLista";
import EncabezadoConvocatoria from "@/components/common/EncabezadoConvocatoria";

export default function Page() {
    const convocatorias = [
        { id: 1, cargo: 'Analista de marketing', referencia:'Referencia cargo Analista', oficina:'Oficina La Paz', plazo:'30/06/2024'},
        { id: 2, cargo: 'Jefe de marketing', referencia:'Referencia cargo Jefe', oficina:'Oficina La Paz', plazo:'30/06/2024'},
        { id: 3, cargo: 'Gerente de marketing', referencia:'Referencia cargo Gerente', oficina:'Oficina La Paz', plazo:'30/06/2024'}
    ];
    return (
        <>
            <EncabezadoConvocatoria
                backgroundImage="/assets/images/backgrounds/page-header-bg.jpg"
                title="Trabaja con Nosotros"
            />
            <section className="insurance-details">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12">
                            <div className="insurance-details__left"></div>
                            <ConvocatoriaLista convocatorias={convocatorias} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
