import { useState } from 'react';
import { useEffect } from 'react';
import Button from '../ui/Button';
import StyledHero from './Hero.styled';

const Hero = () =>{

    const [movie, setMovie] = useState("");

    async function fetchMovie(){
        const url = "https://www.omdbapi.com/?apikey=fcf50ae6&i=tt2975590"
        //melakukan side effect: fect data movie (api);
        const response = await fetch(url);
        const data = await response.json();
        //set movie dengan movie hasil fecth
        setMovie(data);
    }

    useEffect(() => {
    fetchMovie();
    }, []);

    console.log(movie);
    return(
    <StyledHero>
    <div>
        <section className="hero">
            <div className="hero__left">
                <h2 className="hero__title">{movie.Title}</h2>
                <h3 className="hero__genre">Genre : {movie.Genre}</h3>
                <p className="hero__description">{movie.Plot}</p>
                {/* <button className={styles.hero__btn}>Watch</button> */}
                <Button variant="yellow" size="md">Watch</Button>
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