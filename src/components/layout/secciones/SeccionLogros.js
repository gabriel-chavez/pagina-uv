import React from 'react';

const SeccionLogros = () => {
  const backgroundImageStyle = {
    backgroundImage: "url(/assets/images/shapes/work-step-one-bg-shape.png)"
  };

  return (
    <section className="work-step-one">
      <div className="work-step-one__bg-shape" style={backgroundImageStyle}></div>
      <div className="container">
        <div className="section-title text-center">
          <div className="section-title__tagline-box">
            <p className="section-title__tagline">Nuestra calificación de riesgo</p>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="100ms">
            <div className="work-step-one__single">
              <div className="work-step-one__icon">
                <span> <b>A</b><span style={{fontSize: "smaller"}}>1</span></span>
                <div className="work-step-one__shape-1">
                  <img src="/assets/images/shapes/work-step-one-shape-1.png" alt="" />
                </div>
                <div className="work-step-one__hover-shape-1">
                  <img src="/assets/images/shapes/work-step-one-hover-shape-1.png" alt="" />
                </div>
              </div>
              <h3 className="work-step-one__title"><a href="">AESA Ratings</a></h3>
            </div>
          </div>
          <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="300ms">
            <div className="work-step-one__single">
              <div className="work-step-one__icon">
                <span> <b>AA</b><span style={{fontSize: "smaller"}}>3</span></span>
                <div className="work-step-one__shape-1">
                  <img src="/assets/images/shapes/work-step-one-shape-1.png" alt="" />
                </div>
                <div className="work-step-one__hover-shape-1">
                  <img src="/assets/images/shapes/work-step-one-hover-shape-1.png" alt="" />
                </div>
              </div>
              <h3 className="work-step-one__title"><a href="">Moody's Local</a></h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SeccionLogros;
