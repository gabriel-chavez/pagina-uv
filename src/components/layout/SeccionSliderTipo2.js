'use client'
import { useEffect } from 'react';
import Tarjeta6 from '../common/Tarjeta6'
import MarkdownRenderer from '@/utils/MarkdownRenderer';
const SeccionSliderTipo2 = ({ seccion }) => {
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const $ = require('jquery');
            require('/public/assets/vendors/owl-carousel/owl.carousel.min.js');
            $(document).ready(function () {
                $('.services-one__carousel').owlCarousel({
                    loop: false,
                    autoplay: false,
                    margin: 30,
                    nav: true,
                    dots: false,
                    smartSpeed: 500,
                    autoplayTimeout: 10000,
                    navText: [
                        '<span className="icon-prev1"></span>',
                        '<span className="icon-next"></span>',
                    ],
                    responsive: {
                        0: {
                            items: 1,
                        },
                        768: {
                            items: 2,
                        },
                        992: {
                            items: 3,
                        },
                        1200: {
                            items: 3,
                        },
                    },
                });
            });
        }
    }, []);

    return (
        <>
            <section>

                <div className="container mt-5">
                    <div className="section-title text-left">
                        <div className="section-title__tagline-box">
                            <p className="section-title__tagline">{seccion.titulo}</p>
                        </div>
                        <h2 className="section-title__title">
                            <MarkdownRenderer content={seccion.subTitulo} />
                        </h2>
                    </div>
                    <div className="services-one__carousel owl-carousel owl-theme thm-owl__carousel">
                        {seccion.datos.map((fila, index) =>
                            <Tarjeta6
                                key={index}                                
                                titulo={fila[0].datoTexto}
                                detalle={fila[1].datoTexto}
                                iconClass={fila[2].datoTexto}
                                imagenUrl={fila[3].recurso.recursoEscritorio}               
                                href={fila[4].datoUrl}       
                                
                               
                            />
                        )}
                    </div>
                </div>
            </section>
        </>
    );
};

export default SeccionSliderTipo2;
