// Services.js
'use client'
import { useEffect } from 'react';

const SeccionServicios = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const $ = require('jquery');
      require('/public/assets/vendors/owl-carousel/owl.carousel.min.js');
      $(document).ready(function () {
        $('.services-one__carousel').owlCarousel({
          loop: true,
          autoplay: false,
          margin: 30,
          nav: true,
          dots: false,
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
              <p className="section-title__tagline">NUESTROS SEGUROS</p>
            </div>
            <h2 className="section-title__title">
              Grandes soluciones
              <br />
              en Seguros
            </h2>
          </div>
          <div className="services-one__bottom">
            <div className="services-one__carousel owl-carousel owl-theme thm-owl__carousel">
              {/*Services One Single Start*/}
              <div className="item">
                <div className="services-one__single">
                  <div className="services-one__title-box">
                    <h3 className="services-one__title">
                      <a href="#">Accidentes Personales</a>
                    </h3>
                  </div>
                  <div className="services-one__img-box">
                    <div className="services-one__img">
                      <img
                        src="/assets/images/services/Seguro-de-accidentes-1.jpg"
                        alt=""
                      />
                    </div>
                    <div className="services-one__icon">
                      <span className="icon-healthcare"></span>
                    </div>
                  </div>
                  <div className="services-one__read-more">
                    <a href="#">
                      LEER MÁS<span className="icon-next"></span>
                    </a>
                  </div>
                </div>
              </div>
              {/*Services One Single End*/}

              {/* Repeat for other services */}
              <div className="item">
                <div className="services-one__single">
                  <div className="services-one__title-box">
                    <h3 className="services-one__title">
                      <a href="#">Seguro de vida</a>
                    </h3>
                  </div>
                  <div className="services-one__img-box">
                    <div className="services-one__img">
                      <img
                        src="/assets/images/services/seguro-vida.jpg"
                        alt=""
                      />
                    </div>
                    <div className="services-one__icon">
                      <span className="icon-family-insurance"></span>
                    </div>
                  </div>
                  <div className="services-one__read-more">
                    <a href="#">
                      LEER MÁS<span className="icon-next"></span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="item">
                <div className="services-one__single">
                  <div className="services-one__title-box">
                    <h3 className="services-one__title">
                      <a href="">Seguro de desgravamen</a>
                    </h3>
                  </div>
                  <div className="services-one__img-box">
                    <div className="services-one__img">
                      <img
                        src="/assets/images/services/seguro-desgravamen.jpg"
                        alt=""
                      />
                    </div>
                    <div className="services-one__icon">
                      <span className="icon-risk-management"></span>
                    </div>
                  </div>
                  <div className="services-one__read-more">
                    <a href="">
                      LEER MÁS<span className="icon-next"></span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="item">
                <div className="services-one__single">
                  <div className="services-one__title-box">
                    <h3 className="services-one__title">
                      <a href="">Seguro de cesantia</a>
                    </h3>
                  </div>
                  <div className="services-one__img-box">
                    <div className="services-one__img">
                      <img
                        src="/assets/images/services/services-1-1.jpg"
                        alt=""
                      />
                    </div>
                    <div className="services-one__icon">
                      <span className="icon-family-insurance"></span>
                    </div>
                  </div>
                  <div className="services-one__read-more">
                    <a href="">
                      LEER MÁS<span className="icon-next"></span>
                    </a>
                  </div>
                </div>
              </div>
              {/* Add other services similarly */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SeccionServicios;
