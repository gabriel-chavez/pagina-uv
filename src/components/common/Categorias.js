import React from 'react';


const Categorias = ({ categorias }) => {
  return (
    <div className="insurance-details__catagories">        
      <h3 className="insurance-details__catagories-title">Categorías</h3>
      <ul className="insurance-details__catagories-list list-unstyled">
        {categorias.map((category, index) => (
          <li key={index} className={category.active ? 'active' : ''}>
            <a href={category.url}>{category.name}<span className="icon-next"></span></a>
          </li>
        ))}
      </ul>
    </div>
  );
};



export default Categorias;
