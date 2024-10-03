import Link from 'next/link';
import React from 'react';
import MarkdownRenderer from '@/utils/MarkdownRenderer';
const SeccionCardImagenTipo2 = ({ seccion }) => {
    return (
        <section className="">

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
                    {seccion.datos.map((item, index) => (
                        <div className="col-xl-4 col-lg-4" key={index}>
                            <div className="portfolio-three__single">
                                <div className="portfolio-three__img-box">
                                    <div className="portfolio-three__img">
                                        <img
                                            src={item[0].recurso?.recursoEscritorio}
                                            alt={`image ${index}`}
                                            style={{ width: '100%', height: 'auto' }}
                                        />
                                    </div>
                                    <div className="portfolio-three__content">
                                        <p className="portfolio-three__sub-title">{item[1].datoTexto}</p>
                                        <h3 className="portfolio-three__title">
                                 
                                            {item[2]?.recurso?.recursoEscritorio && item[2] && (
                                                <Link href={item[2]?.recurso?.recursoEscritorio} target="_blank">
                                                    {item[2].datoTexto}
                                                </Link>
                                            )}
                                        </h3>
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

export default SeccionCardImagenTipo2;
