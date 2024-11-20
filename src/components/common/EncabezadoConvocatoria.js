import Link from 'next/link';

const EncabezadoConvocatoria = ({ backgroundImage, title, breadcrumbs }) => {
  return (
    <section className="page-header page-header-small">
      <div className="page-header__bg" style={{ backgroundImage: `url(${backgroundImage})` }}>
      </div>
      <div className="container">
        <div className="page-header__inner">
          <h2>{title}</h2>
        </div>
      </div>
    </section>
  );
};

export default EncabezadoConvocatoria;
