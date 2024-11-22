'use client';

import { useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeSanitize from 'rehype-sanitize';

const Slider = ({ slides }) => {
  const handleVideoPlay = (event) => {
    // Detener otros videos en reproducción
    const videos = document.querySelectorAll('video');
    videos.forEach((video) => {
      if (video !== event.target) {
        video.pause();
      }
    });
  };

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
    <section className="main-slider-three">
      <div
        className="main-slider-three__carousel main-slider-carousel owl-carousel owl-theme thm-owl__carousel"
        data-owl-options='{"loop": true, "items": 1, "navText": ["<span className=\"icon-left-arrow\"></span>","<span className=\"icon-right-arrow\"></span>"], "margin": 0, "dots": false, "nav": false, "animateOut": "slideOutDown", "animateIn": "fadeIn", "active": true, "smartSpeed": 1000, "autoplay": true, "autoplayTimeout": 7000, "autoplayHoverPause": false}'
      >
        {slides.map((slide, index) => (
          <div className="item main-slider-three__slide-1" key={index}>

            {slide.video ? (
              <>
                {console.log("Renderizando video con URL:", slide.video)}
                <div className="video-wrapper">
                  <video
                    src={slide.video}
                    controls
                    autoPlay
                    muted
                    loop
                    onPlay={handleVideoPlay}
                    className="centered-video"
                  />
                </div>
              </>
            ) : (
              <div className="main-slider-three__img">
                <img src={slide.imagen} alt="" className="float-bob-y" />
              </div>
            )}




            <div className="main-slider-three__shape-2 img-bounce">
              <img
                src="/assets/images/shapes/main-slider-three-shape-2.png"
                alt=""
              />
            </div>
            <div className="main-slider-three__shape-4 float-bob-y"></div>
            <div className="main-slider-three__shape-5 zoominout"></div>
            <div className="container">
              <div className="main-slider-three__content">
                <h2 className="main-slider-three__title titulo-slider">
                  <ReactMarkdown rehypePlugins={[rehypeSanitize]} breaks={true}>
                    {slide.titulo.replace(/\n/g, '  \n')}
                  </ReactMarkdown>
                </h2>
                <div className="main-slider-three__text">
                  <ReactMarkdown rehypePlugins={[rehypeSanitize]} breaks={true}>
                    {slide.texto.replace(/\n/g, '  \n')}
                  </ReactMarkdown>
                </div>
                <div className="main-slider-three__btn-and-text-box">
                  <a
                    href={slide.enlace}
                    className="main-slider-three__btn thm-btn"
                  >
                    Más información
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Slider;
