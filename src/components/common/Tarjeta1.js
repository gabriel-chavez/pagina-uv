// components/ServiceItem.js

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Tarjeta1 = ({ titulo, link, imgSrc, iconClass, textoBoton="LEER MÁS" }) => {
  return (
    <div className="item tarjeta1-sombra">
        
      <div className="services-one__single">
        <div className="services-one__title-box">
          <h3 className="services-one__title">
            <Link href={link}>
             {titulo}
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
          <Link href={link}>
         
            {textoBoton}<span className="icon-next"></span>
           
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Tarjeta1;
