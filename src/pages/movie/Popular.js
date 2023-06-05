import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Movies from "../../components/Movies/Movies";
import Hero from "../../components/Hero/Hero";

function PopularMovie(){
    //Simpan API_KEY dan URL ke variabel 
    const API_KEY = process.env.REACT_APP_API_KEY;
    const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`

    //membuat state movies
    const [movies, setMovies] = useState([]);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    async function getPopularMovie(){
    // Fetch data dari axios
        const response = await axios(URL);
    //simpan data ke state movie
        setMovies(response.data.results)
    }

    useEffect(() =>{
    getPopularMovie()
    }, [getPopularMovie])
    return(
    <>
        <Hero />
        <Movies movies={movies} />
    </>
    )
}
export default PopularMovie;