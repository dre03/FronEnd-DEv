import axios from "axios";
import { useEffect, useState } from "react";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";
import ENDPOINTS from "../../utils/constants/endpoints";

function TopRetedMovie(){
    const [movies, setMovies] = useState([]);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    async function geTopretedMovie(){
        const response = await axios(ENDPOINTS.TOPRETED);
        setMovies(response.data.results)
    }

    useEffect(() =>{
        geTopretedMovie()
    }, [geTopretedMovie])

    return(
    <>
        <Hero />
        <Movies title="Top Reated" movies={movies} />
    </>
    )
}
export default TopRetedMovie;