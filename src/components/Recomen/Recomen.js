import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Movies from "../../components/Movies/Movies";
import ENDPOINTS from "../../utils/constants/endpoints";
import { useDispatch } from "react-redux";
import { updateMovies } from "../../features/moviesSlice";

function Recomen() {

  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    getRecommendationMovies();
  }, [getRecommendationMovies, id]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  async function getRecommendationMovies() {
    const response = await axios.get(ENDPOINTS.DETAIL(id));
    const movies = response.data.results;
    dispatch(updateMovies(movies))
  }

  return (
    <>
      <Movies title="Recommendation Movies" />
    </>
  );
}

export default Recomen;