import React from 'react';
import MarkdownRenderer from '@/utils/MarkdownRenderer';

const SeccionContenidoTipo4 = ({ seccion }) => {
    return (
        <section className="about-three about-six">
            {seccion.datos.map((fila, index) => (
                <div className="container mt-5" key={index} >
                    <div className="row">
                        <div className="col-xl-5">
                            <div className="about-three__left">
                                <div
                                    className="about-three__img-box wow slideInLeft"
                                    data-wow-delay="100ms"
                                    data-wow-duration="2500ms"
                                >
                                    <div className="about-three__img">
                                        <img
                                            src={fila[3].recurso.recursoEscritorio}
                                            alt="About Image 1"
                                        />
                                    </div>
                                    <div className="about-three__img-2">
                                        <img
                                            src={fila[4].recurso.recursoEscritorio}
                                            alt="About Image 2"
                                        />
                                    </div>
                                    <div className="about-three__img-3">
                                        <img
                                            src={fila[5].recurso.recursoEscritorio}
                                            alt="About Image 3"
                                        />
                                    </div>
                                    <div className="about-three__shape-1">
                                        <img src="assets/images/shapes/about-three-shape-1.png" alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-7">
                            <div className="about-three__right">
                                <div className="section-title text-left">
                                    <div className="section-title__tagline-box">
                                        <div className="section-title__tagline">
                                            <MarkdownRenderer content={fila[0].datoTexto} />
                                        </div>
                                    </div>
                                    <h2 className="section-title__title">
                                        <MarkdownRenderer content={fila[1].datoTexto} />
                                    </h2>
                                </div>
                                <div className="about-three__text">
                                    <MarkdownRenderer content={fila[2].datoTexto} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

        </section>
    );
};

export default SeccionContenidoTipo4;
