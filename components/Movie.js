const Movie = ({setActiveId, movie}) => {
    return <div className="movie" onClick={() => setActiveId(movie.imdbID)}>
    <div className="movie__poster">
    {(movie.Poster == 'N/A' ? <div className="noPoster">N/A</div> : <img src={movie.Poster} alt="Poster" />)}
    <div className="movie__poster_darkened"></div>
    </div>
    <div className="movie__info">
    <p className="movie__title">{movie.Title}</p>
    <p className="movie__year">{movie.Year}</p>
    </div>
</div>
}

export default Movie