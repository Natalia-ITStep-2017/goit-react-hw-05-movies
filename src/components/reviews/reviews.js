import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovieReviews } from "api/getMovieReviews"
import ReviewsList from "./reviewsList";


const Reviews = () => {

  const { movieId } = useParams();

  const [reviews, setReviews] = useState(null);
  const [isReviewsRendered, setIsReviewsRendered] = useState(false);

  useEffect(() => {

    if (!isReviewsRendered) {
      async function fetchGetMovieReviews(Id) {
        try {
          const response = await getMovieReviews(Id);
          setReviews([...response.results]);
          setIsReviewsRendered(true)
        } catch (error) {
          console.log(error);
        }
      }
      fetchGetMovieReviews(movieId);
    }
  }, [reviews, isReviewsRendered, movieId]);


  return (
    <>
      {reviews && < ReviewsList reviews={reviews} />}
      {reviews && reviews.length === 0 &&
        <h3>There are no reviews</h3>}
    </>
  )
};

export default Reviews;