// Slider.js
'use client'
import { useEffect } from 'react';


const Slider = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const $ = require('jquery');
      require('/public/assets/vendors/owl-carousel/owl.carousel.min.js');
      $(document).ready(function () {
        $('.main-slider-three__carousel').owlCarousel({
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
          smartSpeed: 1000,
          autoplay: true,
          autoplayTimeout: 7000,
          autoplayHoverPause: false,
        });
      });
    }
  }, []);

  return (
    <>
      
      <section className="main-slider-three">
        <div
          className="main-slider-three__carousel owl-carousel owl-theme thm-owl__carousel"
          data-owl-options='{"loop": true, "items": 1, "navText": ["<span className=\"icon-left-arrow\"></span>","<span className=\"icon-right-arrow\"></span>"], "margin": 0, "dots": false, "nav": false, "animateOut": "slideOutDown", "animateIn": "fadeIn", "active": true, "smartSpeed": 1000, "autoplay": true, "autoplayTimeout": 7000, "autoplayHoverPause": false}'
        >
          <div className="item main-slider-three__slide-1">
            <div className="main-slider-three__img">
              <img
                src="/assets/images/resources/main-slider-three-img-1.png"
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
            <div className="main-slider-three__shape-3 float-bob-x">
              <img
                src="/assets/images/shapes/main-slider-three-shape-3.png"
                alt=""
              />
            </div>
            <div className="main-slider-three__shape-4 float-bob-y"></div>
            <div className="main-slider-three__shape-5 zoominout"></div>
            <div className="container">
              <div className="main-slider-three__content">
                <h2 className="main-slider-three__title">
                  Proteccion creada<br /> para <span className="main-slider-three__color-text">Usted</span> <br />
                  <span className="main-slider-three__color-text-two">y toda</span> su <br />
                  Familia
                </h2>
                <p className="main-slider-three__text">
                  Consiste en otorgar un apoyo económico a la familia del asegurado <br /> ante el fallecimiento del mismo por cualquier causa
                </p>
                <div className="main-slider-three__btn-and-text-box">
                  <a href="about.html" className="main-slider-three__btn thm-btn">Más información</a>
                </div>
              </div>
            </div>
          </div>

          <div className="item main-slider-three__slide-3">
            <div className="main-slider-three__img">
              <img
                src="/assets/images/resources/main-slider-three-img-1.png"
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
            <div className="main-slider-three__shape-3 float-bob-x">
              <img
                src="/assets/images/shapes/main-slider-three-shape-3.png"
                alt=""
              />
            </div>
            <div className="main-slider-three__shape-4 float-bob-y"></div>
            <div className="main-slider-three__shape-5 zoominout"></div>
            <div className="container">
              <div className="main-slider-three__content">
                <h2 className="main-slider-three__title">
                  Protege <br /> tu <span className="main-slider-three__color-text">Futuro</span> <br />
                  <span className="main-slider-three__color-text-two">con</span> nosotros <br />
                </h2>
                <p className="main-slider-three__text">
                  Consiste en otorgar un apoyo económico a la familia del asegurado <br /> ante el fallecimiento del mismo por cualquier causa
                </p>
                <div className="main-slider-three__btn-and-text-box">
                  <a href="about.html" className="main-slider-three__btn thm-btn">Más información</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Slider;
