import { useEffect, useState } from "react";
import Hero from "../../components/Hero/Hero";
import axios from "axios";
import Movies from "../../components/Movies/Movies";
import ENDPOINTS from "../../utils/constants/endpoints";

function NowPlayingMovie(){
    const [movies, setMovies] = useState([]);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    async function getNowplayingMovie(){
        const response = await axios(ENDPOINTS.NOWPLAYING);

        setMovies(response.data.results)
    }

    useEffect(() =>{
        getNowplayingMovie()
    }, [getNowplayingMovie])
    return(
    <>
        <Hero />
        <Movies title="Now Playing" movies={movies}/>
    </>
    )
}
export default NowPlayingMovie;