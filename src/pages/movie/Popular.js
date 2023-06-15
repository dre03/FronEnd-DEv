import axios from "axios";
import { useEffect } from "react";
import Movies from "../../components/Movies/Movies";
import Hero from "../../components/Hero/Hero";
import ENDPOINTS from "../../utils/constants/endpoints";
import { useDispatch } from "react-redux";
import { updateMovies } from "../../features/moviesSlice";

function PopularMovie(){
    // Buat dispatch: untuk trigger action redux
    const dispatch = useDispatch();

    // eslint-disable-next-line react-hooks/exhaustive-deps
    async function getPopularMovie(){
        const response = await axios(ENDPOINTS.POPULAR);
        const movies = response.data.results;
        dispatch(updateMovies(movies));
    }

    useEffect(() =>{
    getPopularMovie()
    }, [getPopularMovie])
    return(
    <>
        <Hero />
        <Movies title="Popular Movies"/>
    </>
    )
}
export default PopularMovie;