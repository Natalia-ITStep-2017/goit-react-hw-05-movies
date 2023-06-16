
import { useState, useEffect } from "react"
import Searchbar from "../components/movies/searchbar"
import MoviesList from "../components/movies/moviesList"
import { searchMovies } from "api/searchMovie"
import { useSearchParams } from "react-router-dom";


const Moveis = () => {

  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");

  const [movies, setMovies] = useState(null);
  const [isMoviesRendered, setIsMoviesRendered] = useState(false);

  const onSubmit = () => {
    setIsMoviesRendered(false);
  }

  useEffect(() => {

    if (query) {
      if (!isMoviesRendered) {
        async function fetchSearchMovies(searchText) {
          try {
            const response = await searchMovies(searchText);
            setMovies([...response.results]);
            setIsMoviesRendered(true)
          } catch (error) {
            console.log(error);
          }
        }
        fetchSearchMovies(query);
      }
    }
  }, [movies, isMoviesRendered, query]);

  return (
    <div className="{css.App}">
      <Searchbar onSubmit={onSubmit} />
      {query && movies && <MoviesList movies={movies} to="/movies/" />}
      {query && movies && movies.length === 0 && <h3>There is no results for your search </h3>}
    </div>
  )
};

export default Moveis

