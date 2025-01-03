import React from 'react';
import Link from 'next/link';
/* eslint-disable @next/next/no-img-element */

const Tarjeta1 = ({ titulo, link, imgSrc, iconClass, textoBoton = "COMPRAR SOAT" }) => {
  const hasExtension = (url) => {
    const extensionPattern = /\.(pdf|docx|xlsx)$/i; // Extensiones de archivo
    return extensionPattern.test(url);
  };

  return (
    <div className="item tarjeta1-sombra">
      <div className="services-one__single">
        <div className="services-one__title-box">
          <h3 className="services-one__title">
            <Link href={link} legacyBehavior>
              <a>{titulo}</a>
            </Link>
          </h3>
        </div>
        <div className="services-one__img-box">
          <div className="services-one__img">
            <img
              src={imgSrc}
              alt={titulo}
              layout="responsive"
            />
          </div>
          <div className="services-one__icon">
            <span className={iconClass}></span>
          </div>
        </div>
        <div className="services-one__read-more">
          <Link href={link} legacyBehavior>
            <a
              // Si el link no tiene extensión, se abre en una nueva pestaña
              target={hasExtension(link) ? "_blank" : undefined}
              // Si tiene una extensión, se añade el atributo download
              download={hasExtension(link) ? true : undefined}
            >
              {textoBoton}<span className="icon-next"></span>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Tarjeta1;
