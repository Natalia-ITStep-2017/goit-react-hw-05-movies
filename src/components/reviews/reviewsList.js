import PropTypes from "prop-types";

const ReviewsList = ({ reviews }) => {
  return (
    < ul >
      {reviews.map(({ author, content, id }) => {
        return (<li key={id}>
          <p>Author: {author}</p>
          <p>{content}</p>
        </li>)
      })}
    </ul >
  );
};

PropTypes.propTypes = {
  reviews: PropTypes.shape({
    author: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired
};

export default ReviewsList