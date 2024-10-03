import Link from 'next/link';

const Tarjeta6 = ({ imagenUrl, iconClass, titulo, href, detalle }) => {
    const isExternal = href.startsWith('http') || href.startsWith('https');

    return (
        <div className="wow fadeInLeft" data-wow-delay="100ms">
            <div className="services-four__single">
                <div className="services-four__img-box">
                    <div className="services-four__img">
                        <img src={imagenUrl} alt="" />
                    </div>
                    <div className="services-four__content">
                        <div className="services-four__icon">
                            <span className={iconClass}></span>
                        </div>
                        <h3 className="services-four__title">
                            <Link href={href} target={isExternal ? "_blank" : undefined} rel={isExternal ? "noopener noreferrer" : undefined}>
                                {titulo}
                            </Link>
                        </h3>
                    </div>
                    <div className="services-four__arrow">
                        <Link href={href} target={isExternal ? "_blank" : undefined} rel={isExternal ? "noopener noreferrer" : undefined}>
                            <span className="icon-next"></span>
                        </Link>
                    </div>
                    <div className="services-four__hover-content">
                        <div className="services-four__hover-icon">
                            <span className={iconClass}></span>
                        </div>
                        <h3 className="services-four__hover-title">
                            <Link href={href} target={isExternal ? "_blank" : undefined} rel={isExternal ? "noopener noreferrer" : undefined}>
                                {titulo}
                            </Link>
                        </h3>
                        <p className="services-four__hover-text">{detalle}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Tarjeta6;
