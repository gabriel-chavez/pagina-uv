'use client';

import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeSanitize from 'rehype-sanitize';
const Slider1 = () => {
    const [slides, setSlides] = useState([
        {
            imagen: '/assets/images/backgrounds/slider-5-2.jpg',
            titulo: `Protección creada 
          
para **Usted**  
y toda su  
Familia`,
            texto: `Consiste en otorgar un apoyo económico a la familia del asegurado 
          ante el fallecimiento del mismo por cualquier causa`,
            enlace: 'about.html',
        },
        {
            imagen: '/assets/images/resources/slider-1-1.png',
            titulo: `Trusted &

Smart Way

Insurance Agency`,
            texto: `Consiste en otorgar un apoyo económico a la familia del asegurado 
          ante el fallecimiento del mismo por cualquier causa`,
            enlace: 'about.html',
        },

    ]);
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const Swiper = require('swiper').default;

            new Swiper('#main-slider-five__carousel', {
                loop: true,
                spaceBetween: 30,
                pagination: {
                    el: '#main-slider-five__carousel-pagination',
                    clickable: true,
                },
                autoplay: {
                    delay: 7000,
                    disableOnInteraction: false,
                },
            });

            new Swiper('#main-slider-five__thumb', {
                loop: true,
                slidesPerView: 3,
                spaceBetween: 10,
                centeredSlides: true,
                slideToClickedSlide: true,
            });
        }
    }, []);

    return (
        <section className="main-slider-five">
            <div className="main-slider-five__inner">
                <div className="main-slider-five__main-content">
                    <div className="swiper-container" id="main-slider-five__carousel">
                        <div className="swiper-wrapper">
                            {slides.map((slide, index) => (
                                <div className="swiper-slide" key={index}>
                                    <div className="main-slider-five__main-content-inner-box">
                                        <div
                                            className="main-slider-five__bg"
                                            style={{
                                                backgroundImage: `url(${slide.imagen})`,

                                            }}
                                        ></div>

                                        <div className="container">
                                            <div className="main-slider-five__main-content-inner">
                                                <h2 className="main-slider-five__title">
                                                    <ReactMarkdown rehypePlugins={[rehypeSanitize]}>
                                                        {slide.titulo}
                                                    </ReactMarkdown>
                                                </h2>
                                                <div className="main-slider-five__btn-and-text-box">
                                                    <a
                                                        href={slide.enlace}
                                                        className="main-slider-five__btn thm-btn"
                                                    >
                                                        Más información
                                                    </a>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}


                        </div>
                    </div>
                    <div id="main-slider-five__carousel-pagination"></div>
                </div>


            </div>
        </section>
    );
};

export default Slider1;
