import { useState } from "react";
import AddMovieForm from "../components/AddMovieForm/AddMovieForm";
import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";
import data from "../utils/constants/data";
import Counter from "../Counter";

const Main = () =>{
    //state baru
    const [movies, setMovies] = useState(data)
    return(
        <main>
            <Hero />
            <Movies movies={movies} setMovies={setMovies}/>
            <AddMovieForm movies={movies} setMovies={setMovies}/>
        </main>
   )

// return(
//     <Counter />
// )
}

const Home = () =>{
    return(
        <div>
            <Main />
        </div>
    )
}

export default Home;