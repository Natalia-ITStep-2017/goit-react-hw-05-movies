import { useParams, useLocation, Link, Outlet } from "react-router-dom";
import { useEffect, useState, Suspense, useRef } from "react";
import { getMovieById } from "api/getMovieById";
import BackButton from "../components/movieCard/backButton";
import MovieCard from "../components/movieCard/movieCard";

const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHrefRef = useRef(location.state?.from ?? "/");

  const [movie, setMovie] = useState(null);
  const [isCardRendered, setIsCardRendered] = useState(false);

  useEffect(() => {
    if (!isCardRendered) {
      async function fetchGetMovieById(Id) {
        try {
          const response = await getMovieById(Id);
          setMovie({ ...response });
          setIsCardRendered(true)
        } catch (error) {
          console.log(error);
        }
      }
      fetchGetMovieById(movieId);
    }
  }, [movie, isCardRendered, movieId]);


  return (
    <div>
      <BackButton to={backLinkHrefRef.current} />
      {movie && <MovieCard movie={movie} />}
      <div>
        <p>Additional information</p>
        <ul>
          <li>
            <Link to="credits">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </div>
      <Suspense fallback={< div > Loading page...</div>} >
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetails