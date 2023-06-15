// import { useState } from "react";
import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";
// import data from "../utils/constants/data";
// import Counter from "../Counter";

const Main = () =>{
    //state baru
    // const [ movies, setMovies] = useState(data)
    return(
        <main>
            <Hero />
            <Movies title="Latest Movie" />
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
