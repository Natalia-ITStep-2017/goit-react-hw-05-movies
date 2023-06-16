
import { useState, useEffect } from "react"
import MoviesList from "../components/movies/moviesList"
import { getTrendingMovies } from "api/getTrendingMovies"


const Home = () => {

  const [movies, setMovies] = useState([]);
  const [isFetchDone, setIsFetchDone] = useState(false);

  useEffect(() => {
    if (!isFetchDone) {
      async function fetchTrendMovies() {
        try {
          const response = await getTrendingMovies();
          setMovies([...response.results]);
          setIsFetchDone(true);
        } catch (error) {
          console.log(error);
        }
      }
      fetchTrendMovies();
    }
  }, [movies, isFetchDone]);


  return (
    <div className="{css.App}">
      <MoviesList movies={movies} to="/movies/" />
    </div>
  )
};

export default Home

