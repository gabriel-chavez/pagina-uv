// Services.js
'use client'
import { useEffect } from 'react';
import Tarjeta6 from '../common/Tarjeta6'
const ServiciosSoat = () => {
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
                            <p className="section-title__tagline">Servicios SOAT</p>
                        </div>
                        <h2 className="section-title__title">
                            Explora nuestros servicios
                            <br />
                            relacionados con el SOAT
                        </h2>
                    </div>
                    <div className="services-one__carousel owl-carousel owl-theme thm-owl__carousel">
                        <Tarjeta6
                            imagenUrl="/assets/images/soat/precios-soat.jpg"
                            iconClass="bi bi-cash-coin"
                            titulo="Precios SOAT"
                            href="health-insurance.html"
                            detalle="Verifica el precio del SOAT para tu motorizado"
                        />

                        <Tarjeta6
                            imagenUrl="/assets/images/soat/datos-vehiculo.jpg"
                            iconClass="bi bi-car-front"
                            titulo="Datos Vehículo"
                            href="health-insurance.html"
                            detalle=" Modifica los datos de tu motorizado"
                        />
                        <Tarjeta6
                            imagenUrl="/assets/images/soat/comprobante-soat.jpg"
                            iconClass="bi bi-file-text"
                            titulo="Comprobante SOAT"
                            href="health-insurance.html"
                            detalle=" Adquiere el comprobante SOAT"
                        />
                    </div>
                </div>
            </section>
        </>
    );
};

export default ServiciosSoat;
