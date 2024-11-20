// Slider.js
'use client'

import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeSanitize from 'rehype-sanitize';

const Slider = () => {
  const [slides, setSlides] = useState([
    {
      imagen: '/assets/images/resources/main-slider-three-img-1.png',
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
      titulo: `Protección creada 
      
para **Usted**  
y toda su  
Familia`,
      texto: `Consiste en otorgar un apoyo económico a la familia del asegurado 
      ante el fallecimiento del mismo por cualquier causa`,
      enlace: 'about.html',
    },
    
  ]);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const $ = require('jquery');
      require('/public/assets/vendors/owl-carousel/owl.carousel.min.js');
      $(document).ready(function () {
        $('.main-slider-carousel').owlCarousel({
          loop: true,
          items: 1,
          navText: [
            '<span class="icon-left-arrow"></span>',
            '<span class="icon-right-arrow"></span>',
          ],
          margin: 0,
          dots: false,
          nav: false,
          animateOut: 'slideOutDown',
          animateIn: 'fadeIn',
          active: true,
          smartSpeed: 2000,
          autoplay: false,
          autoplayTimeout: 10000,
          autoplayHoverPause: false,
        });
      });
    }
  }, []);

  return (
    <>

      <section className="main-slider-three">
        <div
          className="main-slider-three__carousel main-slider-carousel owl-carousel owl-theme thm-owl__carousel"
          data-owl-options='{"loop": true, "items": 1, "navText": ["<span className=\"icon-left-arrow\"></span>","<span className=\"icon-right-arrow\"></span>"], "margin": 0, "dots": false, "nav": false, "animateOut": "slideOutDown", "animateIn": "fadeIn", "active": true, "smartSpeed": 1000, "autoplay": true, "autoplayTimeout": 7000, "autoplayHoverPause": false}'
        >
          {slides.map((slide, index) => (
            <div className="item main-slider-three__slide-1" key={index}>
              <div className="main-slider-three__img">
                {/*imagen principal*/}

                <img
                  src={slide.imagen}
                  alt=""
                  className="float-bob-y"
                />
              </div>
              <div className="main-slider-three__shape-2 img-bounce">
                <img
                  src="/assets/images/shapes/main-slider-three-shape-2.png"
                  alt=""
                />
              </div>
              {/* <div className="main-slider-three__shape-3 float-bob-x">
                <img
                  src="/assets/images/shapes/main-slider-three-shape-3.png"
                  alt=""
                />
              </div> */}
              <div className="main-slider-three__shape-4 float-bob-y"></div>
              <div className="main-slider-three__shape-5 zoominout"></div>
              <div className="container">
                <div className="main-slider-three__content">
                  {/*titulo*/}

                  <h2 className="main-slider-three__title titulo-slider">
                    <ReactMarkdown rehypePlugins={[rehypeSanitize]}>
                      {slide.titulo}
                    </ReactMarkdown>
                  </h2>

                  {/*subtitulo*/}
                  <div className="main-slider-three__text">
                    <ReactMarkdown rehypePlugins={[rehypeSanitize]}>
                      {slide.texto}
                    </ReactMarkdown>

                  </div>
                  {/*titulo*/}
                  <div className="main-slider-three__btn-and-text-box">
                    <a href={slide.enlace} className="main-slider-three__btn thm-btn">Más información</a>
                  </div>
                </div>
              </div>
            </div>
          ))}




        </div>
      </section>
    </>
  );
};

export default Slider;
