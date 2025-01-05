
import Link from 'next/link';

const Tarjeta2 = ({ imgSrc, dateDay, dateMonth, title, description, link }) => {
  return (
    <div className="news-six__single">
      <div className="news-six__img-box">
        <div className="news-six__img">
          <img src={imgSrc} alt={title} />
        </div>
        <div className="news-six__date">
          <p>{dateDay}</p>
          <span>{dateMonth}</span>
        </div>
      </div>
      <div className="news-six__content">
        <div className="news-six__shape-1">
            <img src="assets/images/shapes/services-six-shape-1.png" alt="" />
        </div>
        <h3 className="news-six__title">
          {/* <Link href={link}> */}
            {title}
          {/* </Link> */}
        </h3>
        <p className="news-six__text">
          {description}
        </p>
        <div className="news-six__btn-box">
          {/* <Link href={link} className="news-six__btn thm-btn-three">          
              Leer Más<span className="icon-right-arrow1"></span>      
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Tarjeta2;
