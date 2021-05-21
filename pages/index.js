import { useState, useEffect } from "react";
import Header from '../components/Header';
import Movie from '../components/Movie';
import Overlay from '../components/Overlay'
const API_KEY = "50bb475c";
const PAGE_LIMIT = 10;

const MoviePage = () => {
  const [movies, setMovies] = useState([]);
  const [activeId, setActiveId] = useState(null);
  const [activePage, setActivePage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const search = "action";

  useEffect(() => {
    setLoading(true)
    fetch(`http://www.omdbapi.com/?s=${search}&apikey=${API_KEY}&page=${activePage}`)
      .then(res => res.json())
      .then(data => {
        const {Search, totalResults, Response} = data;
        if (Response) {
          setMovies(Search);
          setTotalPages(Math.ceil(totalResults / PAGE_LIMIT));
          setLoading(false);
        }
      })
  }, [activePage])

  console.log(movies, totalPages)
  const activeMovie = movies.find(movie => movie.imdbID === activeId)

  if (loading) {
    return (
      <div className="container">
        Loading...
      </div>
    )
  }

  return (
    <div className="container">
      <Header activePage = {activePage} setActivePage = {setActivePage} totalPages = {totalPages}/>
      <div className="grid">
        {movies.map((movie, index) => (
          <div key={`${index}_${movie.imdbID}`} className="grid__cell">
              <Movie setActiveId = {setActiveId} movie={movie} />
          </div>
        ))}
      </div>
      {activeId && (
        <Overlay setActiveId = {setActiveId} activeMovie={activeMovie}/>
      )}
    </div>
  )
}

export default MoviePage