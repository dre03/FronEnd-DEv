import { useEffect } from "react";
import Hero from "../../components/Hero/Hero";
import axios from "axios";
import Movies from "../../components/Movies/Movies";
import ENDPOINTS from "../../utils/constants/endpoints";
import { useDispatch } from "react-redux";
import { updateMovies } from "../../features/moviesSlice";

function NowPlayingMovie(){
    const dispatch = useDispatch()

    // eslint-disable-next-line react-hooks/exhaustive-deps
    async function getNowplayingMovie(){
        const response = await axios(ENDPOINTS.NOWPLAYING);
        const movies = response.data.results;
        dispatch(updateMovies(movies));
    }

    useEffect(() =>{
        getNowplayingMovie()
    }, [getNowplayingMovie])
    return(
    <>
        <Hero />
        <Movies title="Now Playing" />
    </>
    )
}
export default NowPlayingMovie;