import Link from 'next/link';
import { obtenerMenuPrincipal } from '@/services/cmsService';

import MenuCliente from './MenuCliente';

export const revalidate = 10; 
export default async function Header() {

  const resultado = await obtenerMenuPrincipal(); 
  const menu = resultado.datos.sort((a, b) => a.orden - b.orden);

  return (
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
                <MenuCliente menu={menu}  />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
