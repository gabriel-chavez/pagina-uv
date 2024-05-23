const SearchPopup = () => {
    return (
      <div className="search-popup">
        <div className="search-popup__overlay search-toggler"></div>
        {/* /.search-popup__overlay */}
        <div className="search-popup__content">
          <form action="#">
            <label htmlFor="search" className="sr-only">Búsqueda</label>{/* /.sr-only */}
            <input type="text" id="search" placeholder="Búsqueda..." />
            <button type="submit" aria-label="search submit" className="thm-btn">
              <i className="fas fa-search"></i>
            </button>
          </form>
        </div>
        {/* /.search-popup__content */}
      </div>
    );
  };
  
  export default SearchPopup;
  