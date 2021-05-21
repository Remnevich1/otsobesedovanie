const Overlay = ({setActiveId, activeMovie}) => {
    return <div className="overlay">
    <div className="modal">
        {(activeMovie.Poster !== 'N/A') && <img src={activeMovie.Poster} alt="Poster" />}
        <p>{activeMovie.Title}</p>
        <button className="modal__close" onClick={() => setActiveId(null)}>X</button>
    </div>
</div>
}

export default Overlay