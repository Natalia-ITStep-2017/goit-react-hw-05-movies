import { Link, useLocation } from "react-router-dom";
import css from './movie.module.css';
import PropTypes from "prop-types";

const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <ul>
      {movies.map((movie) => (
        <li className={css.movieItem}
          key={movie.id}>
          <Link to={`/movies/${movie.id}`} state={{ from: location }} >
            {movie.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

PropTypes.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
  }).isRequired
  ).isRequired
};

export default MoviesList