'use client'
import { useEffect } from 'react';


const SliderSecundario = () => {
  useEffect(() => {

    if (typeof window !== 'undefined') {
      const $ = require('jquery');
      require('/public/assets/vendors/owl-carousel/owl.carousel.min.js');

      $(document).ready(function () {
        $('.main-slider-two__carousel').owlCarousel({
          loop: true,
          items: 1,
          navText: [
            '<span className="icon-left-arrow"></span>',
            '<span className="icon-right-arrow"></span>',
          ],
          margin: 0,
          dots: true,
          nav: false,
          animateOut: 'slideOutDown',
          animateIn: 'fadeIn',
          active: true,
          smartSpeed: 3000,
          autoplay: true,
          autoplayTimeout: 7000,
          autoplayHoverPause: false,
        });
      });
    };

  }, []);

  return (
    <>
      <section className="main-slider-two" >
        <div className="main-slider-two__carousel owl-carousel owl-theme thm-owl__carousel" >
          <div className="item main-slider-two__slide-1">
            <div className="main-slider-two__shape-1 float-bob-y">
              <img src="assets/images/shapes/main-slider-two-shape-1.png" alt="" />
            </div>
            <div className="main-slider-two__shape-2 float-bob-y">
              <img src="assets/images/shapes/main-slider-two-shape-2.png" alt="" />
            </div>
            <div className="main-slider-two__shape-3">
              {/* <img src="assets/images/shapes/main-slider-two-shape-logo.png" alt="" /> */}
            </div>
            <div className="main-slider-two__bg" style={{ backgroundImage: "url(assets/images/backgrounds/slider-2-1.jpg)" }}></div>
            <div className="container">
              <div className="main-slider-two__content">
                <div className="main-slider-two__content-top">
                  <div className="section-title text-left">
                    <div className="section-title__tagline-box">
                      <p className="section-title__tagline">SEGUROS OBLIGATORIOS</p>
                    </div>
                    <h2 className="section-title__title">SOAT<br />Accidentes de<br />Tránsito</h2>
                  </div>
                </div>
                <div className="main-slider-two__btn-and-call">
                  <a href="" className="main-slider-two__btn thm-btn">Más información</a>
                  <div className="main-slider-two__call">
                    {/* <div className="icon">
                    <span className="icon-phone-1"></span>
                  </div>
                  <a href="tel:+19993452577">+1 (999) 345 2577</a> */}
                  </div>
                </div>
                <div className="main-slider-two__video-link">
                  <a href="" className="video-popup">
                    <div className="main-slider-two__video-icon">
                      <span className="icon-play-2"></span>
                      <i className="ripple"></i>
                    </div>
                  </a>
                  <div className="main-slider-two__video-shape-1 img-bounce">
                    <img src="assets/images/shapes/main-slider-two-video-shape-1.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="item main-slider-two__slide-2">
            <div className="main-slider-two__shape-1 float-bob-y">
              <img src="assets/images/shapes/main-slider-two-shape-1.png" alt="" />
            </div>
            <div className="main-slider-two__shape-2 float-bob-y">
              <img src="assets/images/shapes/main-slider-two-shape-2.png" alt="" />
            </div>
            <div className="main-slider-two__shape-3">
              {/* <img src="assets/images/shapes/main-slider-two-shape-logo.png" alt="" /> */}
            </div>
            {/* <div className="main-slider-two__shape-4"></div>
  <div className="main-slider-two__shape-5"></div>
  <div className="main-slider-two__shape-6"></div> */}
            <div className="main-slider-two__bg" style={{ backgroundImage: "url(assets/images/backgrounds/slider-2-2.jpg)" }}></div>
            <div className="container">
              <div className="main-slider-two__content">
                <div className="main-slider-two__content-top">
                  <div className="section-title text-left">
                    <div className="section-title__tagline-box">
                      <p className="section-title__tagline">SEGUROS OBLIGATORIOS</p>
                    </div>
                    <h2 className="section-title__title">SOATC<br />Constructor<br />Seguro</h2>
                  </div>
                </div>
                <div className="main-slider-two__btn-and-call">
                  {/* about.html */}
                  <a href="" className="main-slider-two__btn thm-btn">Más información</a>
                  <div className="main-slider-two__call">
                    {/* <div className="icon">
            <span className="icon-phone-1"></span>
          </div>
          <a href="tel:+19993452577">+1 (999) 345 2577</a> */}
                  </div>
                </div>
                <div className="main-slider-two__video-link">
                  <a href="https://www.youtube.com/watch?v=Get7rqXYrbQ" className="video-popup">
                    <div className="main-slider-two__video-icon">
                      <span className="icon-play-2"></span>
                      <i className="ripple"></i>
                    </div>
                  </a>
                  <div className="main-slider-two__video-shape-1 img-bounce">
                    <img src="assets/images/shapes/main-slider-two-video-shape-1.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Añade más slides aquí */}
        </div>
      </section>
    </>
  );
};

export default SliderSecundario;
