import { useEffect, useState } from "react";
import Hero from "../../components/Hero/Hero";
import axios from "axios";
import Movies from "../../components/Movies/Movies";

function NowPlayingMovie(){
    const API_KEY = process.env.REACT_APP_API_KEY;
    const URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`;

    const [movies, setMovies] = useState([]);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    async function getNowplayingMovie(){
        const response = await axios(URL);

        setMovies(response.data.results)
    }

    useEffect(() =>{
        getNowplayingMovie()
    }, [getNowplayingMovie])
    return(
    <>
        <Hero />
        <Movies movies={movies}/>
    </>
    )
}
export default NowPlayingMovie;