import { useState } from 'react';
import { useEffect } from 'react';
import Button from '../ui/Button';
import StyledHero from './Hero.styled';
import axios from 'axios';

const Hero = () =>{

    const [movie, setMovie] = useState("");
    const API_KEY = process.env.REACT_APP_API_KEY;

    // async function fetchMovie(){
    //     const url = "https://www.omdbapi.com/?apikey=fcf50ae6&i=tt2975590"
    //     //melakukan side effect: fect data movie (api);
    //     const response = await fetch(url);
    //     const data = await response.json();
    //     //set movie dengan movie hasil fecth
    //     setMovie(data);
    // }

    useEffect(getDetailTranding, [])

    async function getTrandingMovies(){
    const URL = `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`
    const response = await axios(URL);
    console.log(response.data.results[0]);
    return response.data.results[0];

    //membuat fungsi untuk mendapatkan detail movis
    }

    async function getDetailTranding(){
        const trandingMovie = await getTrandingMovies();
        const id = trandingMovie.id;

        const URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=videos`
        const response = await axios (URL)
        console.log(id);
    }

    return(
    <StyledHero>
    <div>
        <section className="hero">
            <div className="hero__left">
                <h2 className="hero__title">{movie.Title}</h2>
                <h3 className="hero__genre">Genre : {movie.Genre}</h3>
                <p className="hero__description">{movie.Plot}</p>
                {/* <button className={styles.hero__btn}>Watch</button> */}
                <Button variant="navi" size="lg">Watch</Button>
            </div>
            <div className="hero__right">
                <img className="hero__image" src={movie.Poster} alt='Internet Terputus'/>
            </div>
        </section>
    </div>
    </StyledHero>
    )
}
export default Hero;