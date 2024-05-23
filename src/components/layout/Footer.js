import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="site-footer__shape-1 float-bob-x">
        <img src="assets/images/shapes/site-footer-shape-1.png" alt="" />
      </div>
      <div className="site-footer__top">
        <div className="container">
          <div className="site-footer__top-inner">
            <div className="row">
              <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="100ms">
                <div className="footer-widget__column footer-widget__about">
                  <div className="footer-widget__logo">
                    <Link href="/">
                      <img src="assets/images/resources/logo-univida-2.png" style={{ height: '70px' }} alt="" />
                    </Link>
                  </div>
                  <p className="footer-widget__about-text">Av. Camacho, Edificio la Urbana N° 1485. Piso 3, Ciudad de La Paz.</p>
                  <div className="footer-widget__emergency-call">
                    <a href="tel:+59122151000">+591-2-2151000</a>
                  </div>
                  <div className="footer-widget__emergency-call">
                    <a href="mailto:atencionalcliente@univida.bo">atencionalcliente@univida.bo</a>
                  </div>
                  <div className="footer-widget__social">
                    <a href="#"><span className="icon-facebook"></span></a>
                    <a href="#"><span className="icon-instagram-1"></span></a>
                    <a href="#"><span className="icon-tik-tok"></span></a>
                    <a href="#"><span className="icon-youtube"></span></a>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="200ms">
                <div className="footer-widget__column footer-widget__navigation">
                  <ul className="footer-widget__navigation-list list-unstyled">
                    <li><Link href="/">Inicio</Link></li>
                    <li><Link href="/contact">Contacto</Link></li>
                    <li><Link href="/insurance">Direcciones y horarios</Link></li>
                    <li><Link href="/work-with-us">Trabaja con nosotros</Link></li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="300ms">
                <div className="footer-widget__column footer-widget__quick-link">
                  <ul className="footer-widget__navigation-list list-unstyled">
                    <li><Link href="/reprint-invoice">Reimprima su factura</Link></li>
                    <li><Link href="/faq">Preguntas frecuentes</Link></li>
                    <li><Link href="/suggestions">Sugerencias</Link></li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="300ms">
                <div className="footer-widget__column footer-widget__quick-link">
                  <ul className="footer-widget__navigation-list list-unstyled">
                    <li><Link href="/announcements">Comunicados</Link></li>
                    <li><Link href="/medical-centers">Centros médicos</Link></li>
                    <li><Link href="/insurance-culture">Cultura de seguros</Link></li>
                    <li><Link href="/claim-point">Punto de reclamo</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="site-footer__bottom">
        <div className="container">
          <div className="site-footer__bottom-inner">
            <p className="site-footer__bottom-text">Univida S.A. 2024 Todos los derechos reservados</p>
          </div>
        </div>
      </div>
      <div className="site-footer__bottom" style={{ backgroundColor: 'white' }}>
        <div className="container">
          <div style={{ padding: '25px' }}>
            <p className="">ESTE OPERADOR ESTA BAJO LA FISCALIZACIÓN Y CONTROL DE LA AUTORIDAD DE FISCALIZACIÓN Y CONTROL DE PENSIONES Y SEGUROS -APS</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
