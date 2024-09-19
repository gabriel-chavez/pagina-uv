import React from 'react';

const SeccionVarios = () => {
  return (
    <section className="counter-one counter-two">
      <div className="counter-two__bg" style={{backgroundImage: "url(assets/images/backgrounds/counter-two-bg.jpg)"}}>
      </div>
      <div className="container">
        <div className="counter-one__inner">
          <ul className="counter-one__count-list list-unstyled">
            <li className="wow fadeInLeft" data-wow-delay="100ms">
              <div className="counter-one__icon">
                <span className="icon-team"></span>
              </div>
              <div className="counter-one__count count-box">

              </div>
              <p className="counter-one__text">GNAF</p>
            </li>
            <li className="wow fadeInLeft" data-wow-delay="300ms">
              <div className="counter-one__icon">
                <span className="icon-insurance"></span>
              </div>
              <div className="counter-one__count count-box">

              </div>
              <p className="counter-one__text">Consulta y Atención de Siniestros</p>
            </li>
            <li className="wow fadeInRight" data-wow-delay="600ms">
              <div className="counter-one__icon">
                <span className="icon-rating"></span>
              </div>
              <div className="counter-one__count count-box">

              </div>
              <p className="counter-one__text">Adquiere tu Seguro</p>
            </li>
            <li className="wow fadeInRight" data-wow-delay="600ms">
              <div className="counter-one__icon">
                <span className="icon-insurance"></span>
              </div>
              <div className="counter-one__count count-box">

              </div>
              <p className="counter-one__text">Transparencia</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default SeccionVarios;
