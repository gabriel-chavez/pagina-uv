import React from 'react';
import MarkdownRenderer from '@/utils/MarkdownRenderer';
import styles from './contenido1.module.css';  // Importamos el archivo CSS como un módulo

const Contenido1 = ({ titulo1, titulo2, texto, imgSrc, porcentajeTamanioImagen }) => {
    const porcentajeFinal = porcentajeTamanioImagen || 100;

    return (
        <>
            {titulo1 && <h3 className="insurance-details__title-1 text-center"><MarkdownRenderer content={titulo1} /></h3>}
            {titulo2 && <h3 className="insurance-details__title-2 text-center">{titulo2}</h3>}
            {texto && (
                <div className="insurance-details__text-1 ">
                    <MarkdownRenderer content={texto} />
                </div>
            )}
            {imgSrc && (
                <div className="insurance-details__img-1 d-flex justify-content-center">
                     <img
                        src={imgSrc}
                        alt="Insurance Details"
                        className={styles.responsiveImg}  // Usamos styles para aplicar la clase del CSS Module
                        style={{ '--porcentaje-tamanio': `${porcentajeFinal}%` }}  // Pasamos el porcentaje como una variable CSS
                    />
                </div>
            )}
        </>
    );
};

export default Contenido1;
