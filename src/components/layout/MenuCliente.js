'use client';
import { useSession } from 'next-auth/react';
import Link from 'next/link';

export default function MenuCliente({ menu }) {
    const { data: session } = useSession();

    function renderMenu(menu) {
        return (
          <ul className="main-menu__list">
            {menu.map(item =>
              !item.idPadre ? (
                <li key={item.id} className={item.subMenus ? 'dropdown' : ''}>
                  {esEnlaceExterno(item.url) ? (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.nombre}
                    </a>
                  ) : (
                    <Link href={item.urlCompleta ? item.urlCompleta : '/'}>
                      {item.nombre}
                    </Link>
                  )}
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
        return subMenus
          .filter(subItem => {
            if (session) {
              return subItem.id !== 40 && subItem.id !== 39;
            } else {
              return ![37, 38].includes(subItem.id);
            }
          })
          .map(subItem => (
            <li key={subItem.id}>
              {esEnlaceExterno(subItem.url) ? (
                <a
                  href={subItem.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {subItem.nombre}
                </a>
              ) : (
                <Link href={subItem.urlCompleta}>{subItem.nombre}</Link>
              )}
              {subItem.subMenus && subItem.subMenus.length > 0 && (
                <ul className="submenu">
                  {renderSubMenu(subItem.subMenus, session)}
                </ul>
              )}
            </li>
          ));
      }

    return (
        <>
            <a href="#" className="mobile-nav__toggler">
                <i className="fa fa-bars"></i>
            </a>
            <ul className="main-menu__list">
                {renderMenu(menu)}
            </ul>
        </>

    );
}

function esEnlaceExterno(url) {
    return url?.startsWith('http:/') || url?.startsWith('https://');
}
