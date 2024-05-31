import Link from 'next/link';

export default function Header() {
  return (
    <>
      <header className="main-header">
      
        <nav className="main-menu">
          <div className="main-menu__wrapper">
            <div className="main-menu__wrapper-inner">
              <div className="main-menu__left">
                <div className="main-menu__logo">
                  <Link href="/index">                                        
                      <img src="/assets/images/resources/logo-univida.png" alt="" style={{ height: '60px' }} />
                  </Link>
                </div>
                <div className="main-menu__main-menu-box">
                  <a href="#" className="mobile-nav__toggler">
                    <i className="fa fa-bars"></i>
                  </a>
                  <ul className="main-menu__list">
                    <li className="dropdown">
                      <Link href="/index">
                        Inicio
                      </Link>                      
                    </li>
                    <li>
                      <Link href="/about">
                     Nuestros seguros
                      </Link>
                    </li>
                    <li className="dropdown">
                      <Link href="#">Seguros obligatorios</Link>
                     
                    </li>
                    <li className="dropdown">
                      <Link href="#">Sobre la empresa</Link>
                     
                    </li>
                    
                  </ul>
                </div>
              </div>
              <div className="main-menu__right">
                <div className="main-menu__search-box">
                  <form action="#" className="main-menu__search-form">
                    <input type="search" placeholder="Buscar...." />
                    <button type="submit">
                      <i className="icon-search"></i>
                    </button>
                  </form>
                </div>                              
              </div>
            </div>
          </div>
        </nav>
      </header>
      {/* <div className="stricky-header stricked-menu main-menu">
        <div className="sticky-header__content"></div>
        
      </div> */}
    
    </>
  );
}
