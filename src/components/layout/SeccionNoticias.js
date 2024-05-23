
const SeccionNoticias = () => {
  return (
    <section className="news-six">
      <div className="container">
        <div className="section-title text-center">
          <div className="section-title__tagline-box">
            <p className="section-title__tagline">NUESTRAS NOTICIAS</p>
          </div>
          <h2 className="section-title__title">Lea nuestras últimas publicaciones</h2>
        </div>
        <div className="row">
          <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="100ms">
            <div className="news-six__single">
              <div className="news-six__img-box">
                <div className="news-six__img">
                  <img src="assets/images/blog/noticia-1.jpg" alt="" />
                </div>
                <div className="news-six__date">
                  <p>16</p>
                  <span>Abril</span>
                </div>
              </div>
              <div className="news-six__content">
                <div className="news-six__shape-1">
                  <img src="assets/images/shapes/services-six-shape-1.png" alt="" />
                </div>
                <h3 className="news-six__title"><a href="#">Prevención y control a nivel nacional.</a></h3>
                <p className="news-six__text">Ante el incremento de víctimas, Univida S.A. reforzará las acciones de prevención y control a nivel nacional.</p>
                <div className="news-six__btn-box">
                  <a href="#" className="news-six__btn thm-btn-three">Leer Más<span className="icon-right-arrow1"></span></a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="200ms">
            <div className="news-six__single">
              <div className="news-six__img-box">
                <div className="news-six__img">
                  <img src="assets/images/blog/noticia-2.jpg" alt="" />
                </div>
                <div className="news-six__date">
                  <p>28</p>
                  <span>Marzo</span>
                </div>
              </div>
              <div className="news-six__content">
                <div className="news-six__shape-1">
                  <img src="assets/images/shapes/services-six-shape-1.png" alt="" />
                </div>
                <h3 className="news-six__title"><a href="#">Juegos Bolivarianos</a></h3>
                <p className="news-six__text">Juegos Bolivarianos de la Juventud Sucre 2024: Univida S.A. otorga pólizas de seguro a deportistas nacionales e internacionales.</p>
                <div className="news-six__btn-box">
                  <a href="#" className="news-six__btn thm-btn-three">Leer Más<span className="icon-right-arrow1"></span></a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="300ms">
            <div className="news-six__single">
              <div className="news-six__img-box">
                <div className="news-six__img">
                  <img src="assets/images/blog/noticia-3.jpg" alt="" />
                </div>
                <div className="news-six__date">
                  <p>10</p>
                  <span>Enero</span>
                </div>
              </div>
              <div className="news-six__content">
                <div className="news-six__shape-1">
                  <img src="assets/images/shapes/services-six-shape-1.png" alt="" />
                </div>
                <h3 className="news-six__title"><a href="#">Operativos de control</a></h3>
                <p className="news-six__text">Univida S.A. y la Policía Boliviana intensificarán los operativos de control en Semana Santa.</p>
                <div className="news-six__btn-box">
                  <a href="#" className="news-six__btn thm-btn-three">Leer Más<span className="icon-right-arrow1"></span></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SeccionNoticias;
