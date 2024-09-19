import Acordeon1 from "@/components/common/Acordeon1";
import MarkdownRenderer from '@/utils/MarkdownRenderer';
export default function SeccionAcordeonTipo1({ seccion }) {
    const acordeon = [];

    seccion.datos.forEach(fila => {        
        acordeon.push({
            titulo: fila[0].datoTexto,
            contenido: fila[1].datoTexto
        });
    });
    return (
        <section className="container mt-2">
            <div className="section-title text-left">
                <div className="section-title__tagline-box">
                    <p className="section-title__tagline">{seccion.titulo}</p>
                </div>
                <h2 className="section-title__title">
                    <MarkdownRenderer content={seccion.subTitulo} />
                </h2>
            </div>
            <Acordeon1 acordeon={acordeon} />
        </section>
    )
}