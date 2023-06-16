import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import css from './movieCard.module.css';

const BackButton = ({ to }) => {
  return (
    <button type="button" className={css.backButton}>
      <Link to={to}>Go Back</Link>
    </button>
  )
}

PropTypes.propTypes = {
  to: PropTypes.string.isRequired,
};

export default BackButton