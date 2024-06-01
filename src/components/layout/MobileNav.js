const MobileNav = () => {
    return (
      <>
        <div className="mobile-nav__overlay mobile-nav__toggler"></div>
        {/* /.mobile-nav__overlay */}
        <div className="mobile-nav__content">
          <span className="mobile-nav__close mobile-nav__toggler"><i className="fa fa-times"></i></span>
  
          <div className="logo-box">
            {/* index-2.html */}
            <a href="#" aria-label="logo image"><img src="/assets/images/resources/logo-univida-2.png" width="150" alt="" /></a>
          </div>
          {/* /.logo-box */}
          <div className="mobile-nav__container"></div>
          {/* /.mobile-nav__container */}
  
          <ul className="mobile-nav__contact list-unstyled">
            <li>
              <i className="fa fa-envelope"></i>
              <a href="mailto:needhelp@packageName__.com">atencionalcliente@univida.bo</a>
            </li>
            <li>
              <i className="fa fa-phone-alt"></i>
              <a href="tel:(591-2) 2151000">(591-2) 2151000</a>
            </li>
          </ul>
          {/* /.mobile-nav__contact */}
          <div className="mobile-nav__top">
            <div className="mobile-nav__social">
              <a href="#" className="fab fa-twitter"></a>
              <a href="#" className="fab fa-facebook-square"></a>
              <a href="#" className="fab fa-pinterest-p"></a>
              <a href="#" className="fab fa-instagram"></a>
            </div>
            {/* /.mobile-nav__social */}
          </div>
          {/* /.mobile-nav__top */}
        </div>
        {/* /.mobile-nav__content */}
      </>
    );
  };
  
  export default MobileNav;
  