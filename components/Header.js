const Header = ({activePage, setActivePage, totalPages}) => {
    return <div className="header">
      <span className="header__logo">FilmGlobe</span>
      <div className="header__pagination pagination">
        <button className="pagination__prev" onClick={() => {
          if (activePage > 0) {
            setActivePage(activePage - 1)
          }
        }}>Prev</button>
        <span className="pagination__pageNum">{activePage}/{totalPages}</span>
        <button className="pagination__next" onClick={() => {
          if (activePage < totalPages) {
            setActivePage(activePage + 1)
          }
        }}>Next</button>
      </div>
      </div>
}

export default Header