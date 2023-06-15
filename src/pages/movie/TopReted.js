import axios from "axios";
import { useEffect } from "react";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";
import ENDPOINTS from "../../utils/constants/endpoints";
import { useDispatch } from "react-redux";
import { updateMovies } from "../../features/moviesSlice";

function TopRetedMovie(){

    const dispatch = useDispatch();

    // eslint-disable-next-line react-hooks/exhaustive-deps
    async function geTopretedMovie(){
        const response = await axios(ENDPOINTS.TOPRETED);
        const movies = response.data.results;
        dispatch(updateMovies(movies));
    }

    useEffect(() =>{
        geTopretedMovie()
    }, [geTopretedMovie])

    return(
    <>
        <Hero />
        <Movies title="Top Reated" />
    </>
    )
}
export default TopRetedMovie;