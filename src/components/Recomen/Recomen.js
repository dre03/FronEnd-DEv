import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Movies from "../../components/Movies/Movies";
import ENDPOINTS from "../../utils/constants/endpoints";

function Recomen() {
  // Simpan movies (state), id (params), API_KEY ke variable
  const [movies, setMovies] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getRecommendationMovies();
  }, [getRecommendationMovies, id]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  async function getRecommendationMovies() {
    const response = await axios.get(ENDPOINTS.DETAIL(id));
    setMovies(response.data.results);
  }

  return (
    <>
      <Movies title="Recommendation Movies" movies={movies} />
    </>
  );
}

export default Recomen;