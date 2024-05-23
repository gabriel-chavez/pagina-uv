const SeccionDescargaApp = () => {
  return (
    <section className="download-app">
      <div className="download-app__shape-2 float-bob-x">
        <img src="assets/images/shapes/download-app-shape-2.png" alt="" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xl-6">
            <div className="download-app__left">
              <h3 className="download-app__title">Descarga Nuestra Aplicación Móvil</h3>
              <p className="download-app__text">Descarga nuestra aplicación móvil UnividaApp de forma GRATUITA disponible en google play y App Store</p>
              <div className="download-app__store">
                <a href="#">
                  <div className="download-app__store-icon">
                    <span className="icon-square"></span>
                  </div>
                  <div className="download-app__store-content">
                    <p>Obtenlo en</p>
                    <h3>Google Play</h3>
                  </div>
                </a>
                <a href="#">
                  <div className="download-app__store-icon">
                    <span className="icon-square"></span>
                  </div>
                  <div className="download-app__store-content">
                    <p>Descarga desde</p>
                    <h3>App Store</h3>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="download-app__right wow slideInRight animated" data-wow-delay="100ms" data-wow-duration="2500ms" style={{visibility: 'visible', animationDuration: '2500ms', animationDelay: '100ms', animationName: 'slideInRight'}}>
              <div className="download-app__img-1">
                <img src="assets/images/resources/download-app-img-1.png" alt="" />
              </div>
              <div className="download-app__img-2">
                <img src="assets/images/resources/download-app-img-2.png" alt="" />
              </div>
              <div className="download-app__shape-1 float-bob-y">
                <img src="assets/images/shapes/download-app-shape-1.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SeccionDescargaApp;
