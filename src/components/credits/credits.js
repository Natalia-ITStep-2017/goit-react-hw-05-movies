import { getMovieCredits } from "api/getMovieCredits"
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import CreditsList from "./creditsList";


const Credits = () => {
  const { movieId } = useParams();

  const [credits, setCredits] = useState(null);
  const [isCreditsRendered, setIsCreditsRendered] = useState(false);

  useEffect(() => {
    if (!isCreditsRendered) {
      async function fetchGetMovieCredits(Id) {
        try {
          const response = await getMovieCredits(Id);
          setCredits([...response.cast]);
          setIsCreditsRendered(true)
        } catch (error) {
          console.log(error);
        }
      }
      fetchGetMovieCredits(movieId);
    }
  }, [credits, isCreditsRendered, movieId]);

  return (
    <>
      {credits && <CreditsList credits={credits} />}
      {credits && credits.length === 0 && <h3>There are no data</h3>}
    </>
  );
};

export default Credits;