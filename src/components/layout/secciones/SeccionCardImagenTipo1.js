import React from 'react';
import MarkdownRenderer from '@/utils/MarkdownRenderer';

const SeccionCardImagenTipo1 = ({ seccion }) => {
    
    return (
        <section className="">
            <div className="container">
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
                <div className="row" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    {seccion.datos[0].map((fila, index) => (
                        <div className="col-md-6" key={index}>
                            <div className="testimonial-one__single" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <div className="">
                                    {/* Agregamos el enlace a la imagen */}
                                    <a href={fila.datoUrl} target="_blank" rel="noopener noreferrer">
                                        <img
                                            src={fila.recurso?.recursoEscritorio}
                                            alt={`imagen ${index}`}
                                            style={{ width: '100%', height: 'auto' }}
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SeccionCardImagenTipo1;
