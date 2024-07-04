
import Acordeon1 from "@/components/common/Acordeon1";
import EncabezadoPagina from "@/components/common/EncabezadoPagina";
import SeccionSliderTipo1 from "../../components/layout/SeccionSliderTipo1";
import ServiciosSoat from "../../components/layout/SeccionSliderTipo2";
import SeccionContenidoTipo3 from "@/components/layout/SeccionContenidoTipo3";


export default function Page() {
    const breadcrumbs = [
        { label: 'Inicio', url: '/' },
        { label: 'Soat' }
    ];

    const requisitosSoat = `
- Certificado de extravío de la FELC
- Depósito de Bs.20 (veinte bolivianos 00/100) a la cuenta 1-25041009 del Banco Unión S.A.
- Comprobante factura SOAT
- Fotocopia de RUAT
- Fotocopia de la Cédula de Identidad
    `

    const coberturaSoat = `
- Si falleces por causa de un accidente automovilístico, tus beneficiarios reciben una indemnización de Bs. 22.000
- Te indemnizamos en caso de invalidez total y permanente con un monto de Bs. 22.000
- Te indemnizamos con gastos médicos con un monto de hasta Bs. 24.000
    `;
    const adquirirSoat = `
- **RENOVACIÓN**    

    Aquellos propietarios cuyo vehículo(s) ya cuente con el SOAT de la gestión anterior y con la respectiva ROSETA, podrán adquirir su SOAT solamente dictando o digitando el número de placa de su vehículo, en cualquiera de los puntos de comercialización presenciales y digitales, habilitados y autorizados

- **COMPRA NUEVA**

    Para aquellos propietarios de vehículos que adquieran el SOAT por primera vez (Vehículos 
             recién importados, vehículos que salgan de taller de carrozado, de reconstrucción por 
             accidente o que por alguna otra razón no hayan tramitado el SOAT correspondiente en 
             gestiones anteriores), deberán presentar cualquier documento que identifque al vehículo, 
             por ejemplo: RUAT, FVR o Póliza de importación y deberán hacerlo solamente en 
             sucursales y agencias de UNIVIDA S.A. para recabar la ROSETA correspondiente, además de 
             actualizar los datos del vehículo
`

    const acordeon = [
        {
            titulo: 'Paso 1 - Succeso del accidente de tránsito',
            contenido: `
- Las víctimas deben ser auxiliadas al centro médico más cercano
- Dar aviso del siniestro al Organismo Operativo de Tránsito
<script>asdasdasd</script>
`
        },
        {
            titulo: 'Paso 2 - Dar aviso del siniestro a Seguros y Reaseguros Personales UNIVIDA S.A. a través de:',
            contenido: `
- Línea gratuita del Call Center 800-10-8444 (habilitado las 24 horas y los 7 días de la semana)
- Correo electrónico o Página Web
- Sucursales y agencias de UNIVIDA S.A. de lunes a viernes en horarios de oficina
    
**Personas que pueden realizar la denuncia:**
- Personal del centro médico
- Personal del Organismo Operativo de Tránsito 
- Víctimas
- Conductor o propietario del vehículo
- Cualquier persona que acredite interés legal 

**Datos que debe proporcionar:**
- Nombre completo del accidentado
- Número de placa o número de roseta del vehículo
- Denuncia realizada a Tránsito
- Fecha de ocurrencia y descripción del hecho
- Centro médico al que fue evacuado el accidentado
- Datos de contacto del denunciante
    
    **Nota:** El plazo para realizar la denuncia es de 15 días luego del suceso del accidente.`
        },
        {
            titulo: 'Paso 3 - Apertura del reclamo y verificación de causales de exclusión de cobertura',
            contenido: `Con el aviso del siniestro, se procede a la asignación del código correspondiente al reclamo y a la apertura física del file con la documentación presentada. A su vez, se evalúan las circunstancias en las que ocurrió el siniestro para su cobertura, verificándose si éstas se enmarcan en alguna de las causales de exclusión de cobertura señaladas en el artículo 32 del Decreto Supremo 27295 de 20 de diciembre de 2003.`
        },
        {
            titulo: 'Paso 4 - Entrega de formulario de requisitos para la cobertura',
            contenido: `De acuerdo a la evaluación del siniestro y las coberturas requeridas, se entrega al cliente el formulario con la documentación necesaria para otorgar la cobertura correspondiente, de conformidad al artículo 29 del Decreto Supremo 27295 de 20 de diciembre de 2003.`
        },
        {
            titulo: 'Paso 5 - Entrega de la documentación',
            contenido: `
**Heridos**
- Documento que identifique al herido
- Certificado emitido por el organismo operativo de tránsito
- Certificado médico
    
    En caso de víctimas que hayan cancelado al centro médico se solicitará recibos y/o facturas a nombre de Seguros y Reaseguros Personales UNIVIDA S.A. al Nº de NIT 301204024.
    
**Fallecidos**
- Documento que identifique al fallecido
- Certificado emitido por el organismo operativo de tránsito
- Certificado médico forense o certificado médico (si corresponde)
    
**Incapacidad total y permanente**
- Documento que identifique al herido
- Certificado emitido por el organismo operativo de tránsito
- Dictamen de calificación de incapacidad emitido por la EEC
    
Seguros y reaseguros UNIVIDA S.A. A requerimiento de la víctima solicitará la calificación de incapacidad de conformidad al artículo 26 del D.S. 27295.`
        },
        {
            titulo: 'Paso 6 - Pago de la indemnización',
            contenido: `El plazo para el pago es de 15 días hábiles a partir de la recepción de todos los documentos necesarios.
    
**Indemnización por gastos médicos**
- Pago de las proformas al centro médico
- En caso de recibos y/o facturas de las víctimas se procede a su reembolso

**Indemnización por fallecimiento**
- Pago a los derechohabientes del fallecido

En caso de existir conflicto de intereses entre los derechohabientes se realiza un depósito judicial.

**Indemnización por incapacidad permanente**
- Pago de la indemnización a la víctima`
        },
        {
            titulo: 'Paso 7 - Ejercicio del Derecho de Repetición',
            contenido: `Se verifica la conclusión del reclamo con el pago de todas las indemnizaciones del siniestro. Inicio del proceso de repetición ante la autoridad competente. En caso de existir causales de repetición.`
        }
    ];
    
    const soat = [
        [
            {
               
                "datoTexto": "¿Qué es el **SOAT**?",
               
            },
            {
               
                "datoTexto": "El artículo 37 de la Ley N° 1883 de Seguros, señala que el SOAT es el “Seguro Obligatorio de Accidentes de Tránsito” que todo vehículo motorizado, público y/o privado, debe contar con carácter obligatorio, para poder transitar por vías públicas del territorio boliviano. Además, la norma señala que, el Seguro es incuestionable y de beneficio uniforme con coberturas por muerte, incapacidad total permanente y gastos médicos.",
               
                
            }
        ],
        [
            {
               
                "datoTexto": "¿Qué necesitas para adquirir el **SOAT?**",
              
            },
            {
               
                "datoTexto": "- **RENOVACIÓN**    \n\n    Aquellos propietarios cuyo vehículo(s) ya cuente con el SOAT de la gestión anterior y con la respectiva ROSETA, podrán adquirir su SOAT solamente dictando o digitando el número de placa de su vehículo, en cualquiera de los puntos de comercialización presenciales y digitales, habilitados y autorizados\n\n- **COMPRA NUEVA**\n\n    Para aquellos propietarios de vehículos que adquieran el SOAT por primera vez (Vehículos \n             recién importados, vehículos que salgan de taller de carrozado, de reconstrucción por \n             accidente o que por alguna otra razón no hayan tramitado el SOAT correspondiente en \n             gestiones anteriores), deberán presentar cualquier documento que identifque al vehículo, \n             por ejemplo: RUAT, FVR o Póliza de importación y deberán hacerlo solamente en \n             sucursales y agencias de UNIVIDA S.A. para recabar la ROSETA correspondiente, además de \n             actualizar los datos del vehículo",
               
            }
        ],
        [
            {
               
                "datoTexto": "¿Qué cubre **el SOAT?**",
                
            },
            {
                
                "datoTexto": "- Si falleces por causa de un accidente automovilístico, tus beneficiarios reciben una indemnización de Bs. 22.000\n- Te indemnizamos en caso de invalidez total y permanente con un monto de Bs. 22.000\n- Te indemnizamos con gastos médicos con un monto de hasta Bs. 24.000",
                
            }
        ],
        [
            {
               
                "datoTexto": "Requisitos para cambio de uso **PARTICULAR a PÚBLICO o PÚBLICO a PARTICULAR**",
                
            },
            {
               
                "datoTexto": "- Certificado de extravío de la FELC\n- Depósito de Bs.20 (veinte bolivianos 00/100) a la cuenta 1-25041009 del Banco Unión S.A.\n- Comprobante factura SOAT\n- Fotocopia de RUAT\n- Fotocopia de la Cédula de Identidad",
                
            }
        ]
    ];
    const contenido={
        datos:soat
    }

    return (
        <>
            <EncabezadoPagina
                backgroundImage="/assets/images/backgrounds/page-header-bg.jpg"
                title="S  O  A  T"
                breadcrumbs={breadcrumbs}
            />
            <SeccionContenidoTipo3 seccion={contenido}></SeccionContenidoTipo3>
            {/* <SeccionSliderTipo1></SeccionSliderTipo1> */}
            {/* <ServiciosSoat></ServiciosSoat> */}
            <section className="container mt-2">
                <div className="section-title text-left">
                    <div className="section-title__tagline-box">
                        <p className="section-title__tagline">Accidentes de tránsito</p>
                    </div>
                    <h2 className="section-title__title">
                        ¿Qué hacer en caso de
                        <br />
                        un accidente de tránsito?
                    </h2>
                </div>
                <Acordeon1 acordeon={acordeon} />
            </section>

        </>
    );
}
