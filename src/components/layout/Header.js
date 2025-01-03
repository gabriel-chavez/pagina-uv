import Link from 'next/link';
import { obtenerMenuPrincipal } from '@/services/cmsService';

function renderMenu(menu) {
  return (
    <ul className="main-menu__list">
      {menu.map(item =>
        !item.idPadre ? (
          <li key={item.id} className={item.subMenus ? 'dropdown' : ''}>
            <Link href={item.urlCompleta ? item.urlCompleta : '/'}>
              {item.nombre}
            </Link>
            {item.subMenus && item.subMenus.length > 0 && (
              <ul className="submenu">{renderSubMenu(item.subMenus)}</ul>
            )}
          </li>
        ) : null
      )}
    </ul>
  );
}

function renderSubMenu(subMenus) {
  return subMenus.map(subItem => (
    <li key={subItem.id}>
      <Link href={subItem.urlCompleta}>{subItem.nombre}</Link>
      {subItem.subMenus && subItem.subMenus.length > 0 && (
        <ul className="submenu">{renderSubMenu(subItem.subMenus)}</ul>
      )}
    </li>
  ));
}

export default async function Header() {
  const resultado = await obtenerMenuPrincipal();  
  const menu = resultado.datos.sort((a, b) => a.orden - b.orden);

  return (
    <>
      <header className="sticky-header">
        <nav className="main-menu">
          <div className="main-menu__wrapper">
            <div className="main-menu__wrapper-inner">
              <div className="main-menu__left">
                <div className="main-menu__logo">
                  <Link href="/">
                    <img
                      src="/assets/images/resources/logo-univida.png"
                      alt="Logo Univida"
                      style={{ height: '60px' }}
                    />
                  </Link>
                </div>
                <div className="main-menu__main-menu-box">
                  <a href="#" className="mobile-nav__toggler">
                    <i className="fa fa-bars"></i>
                  </a>
                  <ul className="main-menu__list">{renderMenu(menu)}</ul>
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
      <div className="stricky-header stricked-menu main-menu main-menu-four main-menu-five">
        <div className="sticky-header__content"></div>
      </div>
    </>

  );
}
