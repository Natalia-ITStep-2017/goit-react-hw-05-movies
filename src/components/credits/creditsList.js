import PropTypes from "prop-types";
import { CreditIcon } from '../icons/icons';
import css from './credits.module.css';

const CreditsList = ({ credits }) => {
  return (
    <ul className={css.creditsList}>
      {credits.map(({ name, profile_path, character, id }) => (
        <li key={id}>
          {profile_path ? (
            <img src={`https://image.tmdb.org/t/p/w200/${profile_path}`}
              alt={name}
              width="200" height="300" />
          ) : (
            <CreditIcon />
          )}
          <p className={css.actorName}>{name}</p>
          <p>Character: {character}</p>
        </li >)
      )}
    </ul >
  );
};

PropTypes.propTypes = {
  reviews: PropTypes.shape({
    name: PropTypes.string.isRequired,
    profile_path: PropTypes.string.isRequired,
    character: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired
};

export default CreditsList



