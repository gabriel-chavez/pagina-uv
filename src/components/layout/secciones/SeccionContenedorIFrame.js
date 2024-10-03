import MarkdownRenderer from '@/utils/MarkdownRenderer';

const SeccionContenedorIFrame = ({ seccion }) => {
    return (
        <section className="">
            <div className="container">
                {seccion.titulo && seccion.subTitulo && (


                    <div className="section-title text-center">
                        <div className="section-title__tagline-box">
                            <div className="section-title__tagline">
                                <MarkdownRenderer content={seccion.titulo} />
                            </div>
                        </div>
                        <h2 className="section-title__title">
                            <MarkdownRenderer content={seccion.subTitulo} />
                        </h2>
                    </div>
                )}
                <div className="row" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    {seccion.datos.map((fila, index) => (
                        <div className="col-md-12 mt-1" key={index}>
                            <iframe
                                src={fila[0].datoTexto.replace(/\\/g, '')}  // Reemplaza las barras inclinadas hacia atrás en la URL
                                width={fila[1]?.datoTexto || '100%'}
                                height={fila[2]?.datoTexto || '750px'}  // Ajuste para la altura por defecto
                                style={{ border: 'none' }}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SeccionContenedorIFrame;
