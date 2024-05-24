import Tarjeta2 from '../common/Tarjeta2'

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
            <Tarjeta2
              imgSrc="/assets/images/blog/noticia-1.jpg"
              dateDay="16"
              dateMonth="Abril"
              title="Prevención y control a nivel nacional."
              description="Ante el incremento de víctimas, Univida S.A. reforzará las acciones de prevención y control a nivel nacional."
              link="#"
            />
          </div>
          <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="200ms">
            <Tarjeta2
              imgSrc="/assets/images/blog/noticia-2.jpg"
              dateDay="16"
              dateMonth="Abril"
              title="Juegos Bolivarianos"
              description="Juegos Bolivarianos de la Juventud Sucre 2024: Univida S.A. otorga pólizas de seguro a deportistas nacionales e internacionales."
              link="#"
            />

          </div>
          <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="300ms">
            <Tarjeta2
              imgSrc="/assets/images/blog/noticia-3.jpg"
              dateDay="16"
              dateMonth="Abril"
              title="Operativos de control"
              description="Univida S.A. y la Policía Boliviana intensificarán los operativos de control en Semana Santa."
              link="#"
            />
            
          </div>
        </div>
      </div>
    </section>
  );
}

export default SeccionNoticias;
