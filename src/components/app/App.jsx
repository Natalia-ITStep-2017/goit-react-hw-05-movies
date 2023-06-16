import { Routes, Route } from "react-router-dom";
import { lazy } from "react";
import  SharedLayout from "../header/sharedLayout";

const Home = lazy(() => import("../../pages/home"));;
const Movies = lazy(() => import("../../pages/movies"));;
const MoviesDetails = lazy(() => import("../../pages/movieDetails"));;
const Credits = lazy(() => import("../credits/credits"));;
const Reviews = lazy(() => import("../reviews/reviews"));;



export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MoviesDetails />} >
          <Route path="credits" element={<Credits />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
      <Route path="*" element={<div>NotFound</div>} />
    </Routes>
  );
};