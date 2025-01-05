import Link from 'next/link';
import { obtenerMenuPrincipal } from '@/services/cmsService';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import MenuCliente from './MenuCliente';

export default async function Header() {

  const resultado = await obtenerMenuPrincipal(); 
  const menu = resultado.datos.sort((a, b) => a.orden - b.orden);

  return (
<<<<<<< HEAD
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
                  <ul className="main-menu__list">
                    {renderMenu(menu)}
                  </ul>
                </div>
=======
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
>>>>>>> 02aeeb5f127e3951b6a1a79abee37b068bae1e50
              </div>
              <div className="main-menu__main-menu-box">
                <MenuCliente menu={menu}  />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
