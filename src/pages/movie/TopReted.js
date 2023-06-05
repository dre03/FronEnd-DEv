import axios from "axios";
import { useEffect, useState } from "react";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";

function TopRetedMovie(){
    const API_KEY = process.env.REACT_APP_API_KEY;
    const URL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`;

    const [movies, setMovies] = useState([]);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    async function geTopretedMovie(){
        const response = await axios(URL);
        setMovies(response.data.results)
    }

    useEffect(() =>{
        geTopretedMovie()
    }, [geTopretedMovie])


    // https://api.themoviedb.org/3/movie/top_rated?

    return(
    <>
        <Hero />
        <Movies movies={movies} />
    </>
    )
}
export default TopRetedMovie;