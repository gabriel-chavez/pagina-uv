import ConvocatoriaLista from "@/components/common/ConvocatoriaLista";
import EncabezadoConvocatoria from "@/components/common/EncabezadoConvocatoria";
import { obtenerConvocatorias } from '@/services/convocatoriaService';

export default async function Page() {
    try {
        const resultado = await obtenerConvocatorias();
        const convocatorias = resultado.datos;
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
    } catch (error) {
       // console.error("Error al obtener datos:", error);
        return (
            <>
                <p>{error.message}</p>
            </>
        );
    }
}
