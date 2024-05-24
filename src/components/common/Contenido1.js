const Contenido1 = ({ titulo1, titulo2, texto, imgSrc }) => {
    return (
        <>

            {titulo1 && <h3 className="insurance-details__title-1">{titulo1}</h3>}
            {titulo2 && <h3 className="insurance-details__title-2">{titulo2}</h3>}
            {texto && <p className="insurance-details__text-1">{texto}</p>}
            {imgSrc && (
                <div className="insurance-details__img-1">
                    <img src={imgSrc} alt="Insurance Details" />
                </div>
            )}

        </>
    );
};

export default Contenido1;
