import Link from 'next/link';

const EncabezadoPagina = ({ backgroundImage, title, breadcrumbs }) => {
  return (
    <section className="page-header">
      <div className="page-header__bg" style={{ backgroundImage: `url(${backgroundImage})` }}>
      </div>
      <div className="container">
        <div className="page-header__inner">
          <h2>{title}</h2>
          <div className="thm-breadcrumb__box">
            <ul className="thm-breadcrumb list-unstyled">
              {breadcrumbs.map((breadcrumb, index) => (
                <li key={index}>
                  {breadcrumb.url ? (
                    <>
                      <Link href={breadcrumb.url}>
                        {breadcrumb.label}
                      </Link>
                      {index < breadcrumbs.length - 1 && <span>-</span>}
                    </>
                  ) : (
                    breadcrumb.label
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EncabezadoPagina;
