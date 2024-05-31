import Contenido3 from "@/components/common/Contenido3";
import EncabezadoPagina from "@/components/common/EncabezadoPagina";
import CompraSoat from "../../components/layout/SeccionCompraSoat";
import ServiciosSoat from "../../components/layout/SeccionServiciosSoat";

export default function Page() {
    const breadcrumbs = [
        { label: 'Inicio', url: '/' },        
        { label: 'Soat' }
    ];

    const requisitosSoat = [
        { texto: 'Certifcado de extravío de la FELC' },
        { texto: 'Depósito de Bs.20 (veinte bolivianos 00/100) a la cuenta 1-25041009 del Banco Unión S.A.' },
        { texto: 'Comprobante factura SOAT.' },
        { texto: 'Fotocopia de RUAT.' },
        { texto: 'Fotocopia de la Cédula de Identidad.' },

    ];

    const coberturaSoat = [
        { texto: 'Si falleces por causa de un accidente automovilístico, tus benefciarios reciben una indemnización de Bs. 22.000', marcado: true },
        { texto: 'Te indemnizamos en caso de invalidez total y permanente con un monto de Bs. 22.000.', marcado: true },
        { texto: 'Te indemnizamos con gastos médicos con un monto de hasta Bs. 24.000.', marcado: true },

    ];

    const adquirirSoat = [
        {
            texto: `Aquellos propietarios cuyo vehículo(s) ya cuente con el SOAT de la gestión anterior y con la 
            respectiva ROSETA, podrán adquirir su SOAT solamente dictando o digitando el número de 
            placa de su vehículo, en cualquiera de los puntos de comercialización presenciales y 
            digitales, habilitados y autorizados` , marcado: true
        },
        {
            texto: `Para aquellos propietarios de vehículos que adquieran el SOAT por primera vez (Vehículos 
            recién importados, vehículos que salgan de taller de carrozado, de reconstrucción por 
            accidente o que por alguna otra razón no hayan tramitado el SOAT correspondiente en 
            gestiones anteriores), deberán presentar cualquier documento que identifque al vehículo, 
            por ejemplo: RUAT, FVR o Póliza de importación y deberán hacerlo solamente en 
            sucursales y agencias de UNIVIDA S.A. para recabar la ROSETA correspondiente, además de 
            actualizar los datos del vehículo`, marcado: true
        },

    ];

    return (
        <>
            <EncabezadoPagina
                backgroundImage="/assets/images/backgrounds/page-header-bg.jpg"
                title="S  O  A  T"
                breadcrumbs={breadcrumbs}
            />
            <section className="mt-5">
                <Contenido3
                    titulo='¿Que es el <b>SOAT?</b>'
                    texto='El artículo 37 de la Ley N° 1883 de Seguros, señala que el SOAT es el “Seguro Obligatorio de 
                    Accidentes de Tránsito” que todo vehículo motorizado, público y/o privado, debe contar 
                    con carácter obligatorio, para poder transitar por vías públicas del territorio boliviano. 
                    Además, la norma señala que, el Seguro es incuestionable y de benefcio uniforme con 
                    coberturas por muerte, incapacidad total permanente y gastos médicos. '
                />
                <Contenido3
                    titulo='¿Qué necesitas para adquirir el <b> SOAT?</b>'
                    puntos={adquirirSoat}
                    fondo={true}
                />

                <Contenido3
                    titulo='¿Qué cubre<b> el SOAT?</b>'
                    puntos={coberturaSoat}
                    fondo={false}
                />

                <Contenido3
                    titulo='Requisitos para cambio de uso<b> PARTICULAR a PÚBLICO o PÚBLICO a PARTICULAR </b>'
                    puntos={requisitosSoat}
                    fondo={true}
                />
                <CompraSoat></CompraSoat>
                <ServiciosSoat></ServiciosSoat>




            </section>
        </>
    );
}
