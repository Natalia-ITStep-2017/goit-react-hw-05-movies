import axios from "axios";

export const searchMovies = async (searchText) => {
  const options = {
    page: 1,
    query: searchText
  }

  const response = await axios.get(`https://api.themoviedb.org/3/search/movie`, {
    params: options,
    headers: { 'Authorization': "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZDk4NjcxMTNlZTg0MDg0Y2ZjNjU2ODVmMzIwNmMwYyIsInN1YiI6IjY0N2Y4MzY2Mzg1MjAyMDBhZjE0ZTgyZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VNCNKNuK7_TGGjg30gNSY2nOQUtJtqUaOBiIeuk9KhE" },
  });
  return response.data
}
