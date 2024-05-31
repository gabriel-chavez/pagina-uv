// Services.js
'use client'
import { useEffect } from 'react';
import Tarjeta1 from '../common/Tarjeta1'
const CompraSoat = () => {
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
                            <p className="section-title__tagline">¿Cómo adquirir el SOAT?</p>
                        </div>
                        <h2 className="section-title__title">
                            Opciones para obtener tu
                            <br />
                            SOAT de manera rápida y sencilla
                        </h2>
                    </div>
                    <div className="services-one__bottom">
                        <div className="services-one__carousel owl-carousel owl-theme thm-owl__carousel">

                            <Tarjeta1
                                titulo="Página web
                                "
                                link="#"
                                imgSrc="/assets/images/soat/compra-web.jpg"
                                iconClass="bi bi-globe"
                                textoBoton='COMPRAR SOAT'
                            />

                            <Tarjeta1
                                titulo="UNIVidaApp"
                                link="#"
                                imgSrc="/assets/images/soat/unividaapp.jpg"
                                iconClass="bi bi-phone"
                                textoBoton='DESCARGAR APP'
                            />

                            <Tarjeta1
                                titulo="Puntos de venta "
                                link="#"
                                imgSrc="/assets/images/soat/puntos.jpg"
                                iconClass="bi bi-geo-alt"
                                textoBoton='VER PUNTOS'
                            />
                            <Tarjeta1
                                titulo="Redes sociales"
                                link="#"
                                imgSrc="/assets/images/soat/facebook-whatsapp.jpg"
                                iconClass="bi bi-chat-left-dots"
                                textoBoton='VER MÁS'
                            />

                        </div>
                    </div>
                </div>
                
            </section>
        </>
    );
};

export default CompraSoat;
