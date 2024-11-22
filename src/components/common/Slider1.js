'use client';

import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeSanitize from 'rehype-sanitize';

const Slider1 = ({ slides }) => {
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  useEffect(() => {
    const handlePageLoad = () => {
      setIsPageLoaded(true);
      
    };

    if (document.readyState === "complete") {
      // Si la página ya está completamente cargada
      handlePageLoad();
    } else {
      // Escuchar el evento DOMContentLoaded si aún no está cargado
      window.addEventListener("DOMContentLoaded", handlePageLoad);
    }

    // Cleanup del evento al desmontar el componente
    return () => {
      window.removeEventListener("DOMContentLoaded", handlePageLoad);
    };
  }, []);

  const handleVideoPlay = (event) => {
    const videos = document.querySelectorAll('video');
    videos.forEach((video) => {
      if (video !== event.target) {
        video.pause();
      }
    });
  };

  useEffect(() => {
    if (typeof window !== 'undefined' && isPageLoaded) {
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
  }, [isPageLoaded]);

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
                      className={`main-slider-five__bg ${
                        slide.video ? 'main-slider-five__video-bg' : ''
                      }`}
                      style={{
                        backgroundImage: slide.video
                          ? 'none'
                          : `url(${slide.imagen})`,
                      }}
                    >
                      {slide.video && isPageLoaded && (
                        <video
                          src={slide.video}
                          controls
                          autoPlay
                          muted
                          loop
                          onPlay={handleVideoPlay}
                          className="main-slider-five__video"
                        />
                      )}
                    </div>
                    <div className="container">
                      <div className="main-slider-five__main-content-inner">
                        <h2 className="main-slider-five__title">
                          <ReactMarkdown rehypePlugins={[rehypeSanitize]} breaks={true}>
                            {slide.titulo.replace(/\n/g, '  \n')}
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
