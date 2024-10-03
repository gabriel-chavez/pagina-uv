import MarkdownRenderer from '@/utils/MarkdownRenderer';

const SeccionCardTipo1 = ({ seccion }) => {    
    return (
        <section className="testimonial-one testimonial-four">
            <div className="container">
                <div className="section-title text-center">
                    <div className="section-title__tagline-box">
                        <div className="section-title__tagline"> <MarkdownRenderer content={seccion.titulo} /></div>
                    </div>
                    <h2 className="section-title__title">
                        <MarkdownRenderer content={seccion.subTitulo} />
                    </h2>
                </div>
                <div className="row" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    {seccion.datos[0].map((fila, index) => (
                        <div className="col-md-4 mt-5" key={index}> 
                            <div className="testimonial-one__single" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <div className="testimonial-one__quote">
                                    <img src="/assets/images/icon/quote-icon-2.png" alt="Quote Icon" width={50} height={50} />
                                </div>
                                <div className="testimonial-one__text-box">
                                    <div className="testimonial-one__text">
                                        {fila.datoTexto}
                                    </div>
                                </div>
                                <div className="testimonial-one__client-info">
                                    <div className="testimonial-one__client-img" >
                                        <img
                                            src={fila.recurso?.recursoEscritorio}
                                            alt={`imagen ${index}`}
                                        />
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SeccionCardTipo1;
