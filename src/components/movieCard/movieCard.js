import PropTypes from "prop-types";
import { MovieIcon } from '../icons/icons';
import css from './movieCard.module.css';


const MovieCard = ({ movie }) => {
  const { poster_path, title, genres, overview, vote_average } = movie
  return (
    <main>
      <div className={css.movieCard}>
        {poster_path ? (<img src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
          alt={`${title} poster`}
          width="300" height="450"
          className={css.movieImg}
        />) : (
          <MovieIcon />)}
        <div className={css.movieInfo}>
          <h1>{title}</h1>
          <p>User Score: {(vote_average / 10 * 100).toFixed(1)}%</p>
          <h2>Overview</h2>
          <p>{overview}</p>
          <h3>Genres</h3>
          <p>{genres.map(genre => `${genre.name} `)}</p>
        </div>
      </div>

    </main >
  )
}

PropTypes.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string,
    title: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    vote_average: PropTypes.number.isRequired,
  }),
};

export default MovieCard
