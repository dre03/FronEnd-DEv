import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Movies from "../../components/Movies/Movies";
import Hero from "../../components/Hero/Hero";
import ENDPOINTS from "../../utils/constants/endpoints";

function PopularMovie(){
    //membuat state movies
    const [movies, setMovies] = useState([]);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    async function getPopularMovie(){
    // Fetch data dari axios
        const response = await axios(ENDPOINTS.POPULAR);
    //simpan data ke state movie
        setMovies(response.data.results)
    }

    useEffect(() =>{
    getPopularMovie()
    }, [getPopularMovie])
    return(
    <>
        <Hero />
        <Movies title="Popular Movies" movies={movies} />
    </>
    )
}
export default PopularMovie;