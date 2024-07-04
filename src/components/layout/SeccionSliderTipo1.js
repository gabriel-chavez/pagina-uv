
'use client'
import { useEffect } from 'react';
import Tarjeta1 from '../common/Tarjeta1'
import MarkdownRenderer from '@/utils/MarkdownRenderer';

const SeccionSliderTipo1 = ({ seccion }) => {
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
                    dots: true,
                    smartSpeed: 500,
                    autoplayTimeout: 10000,
                    navText: [
                        '<span class="icon-prev1"></span>',
                        '<span class="icon-next"></span>',
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

            <section className="services-one">
                <div className="services-one__shape-1 float-bob-x">
                    <img
                        src="/assets/images/shapes/services-one-shape-1.png"
                        alt=""
                    />
                </div>
                <div className="services-one__shape-2 rotate-me">
                    <img
                        src="/assets/images/shapes/services-one-shape-2.png"
                        alt=""
                    />
                </div>
                <div className="container">
                    <div className="section-title text-left">
                        <div className="section-title__tagline-box">
                            <p className="section-title__tagline">{seccion.titulo}</p>
                        </div>
                        <h2 className="section-title__title">
                            <MarkdownRenderer content={seccion.subTitulo}/>                            
                        </h2>
                    </div>
                    <div className="services-one__bottom">
                        <div className="services-one__carousel owl-carousel owl-theme thm-owl__carousel">
                            {seccion.datos.map((fila, index) => (
                                <div key={index} className="fila-contenidos">
                                    <Tarjeta1
                                        key={index}
                                        titulo={fila[0].datoTexto}
                                        iconClass={fila[1].datoTexto}
                                        imgSrc={fila[2].recurso.recursoEscritorio}
                                        link={fila[3].datoUrl}
                                        textoBoton={fila[3].datoTexto}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </section>
        </>
    );
};

export default SeccionSliderTipo1;
