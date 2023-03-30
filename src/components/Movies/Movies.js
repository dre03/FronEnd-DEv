import Movie from '../Movie/Movie';
import styles from './Movies.module.css';
import data from '../../utils/constants/data';
//import useStat
import {useState} from 'react'
import {nanoid} from 'nanoid'
const Movies = () =>{

    // membuat variabel movies
    const [movies, setMovies] = useState(data) 
    //funsi menambah data vilem
    const handleClick = ()=>{
        const newFilm = {
            id: nanoid(),
            title: "Jigsaw",
            year: 2023,
            type: "movie",
            poster: "https://picsum.photos/300/400"
        }
        //update state movie: setmovie
        setMovies([...movies, newFilm]);
    }
    return(
        <div className={styles.container}>
            <section className={styles.movies}>
                <h2 className={styles.movies__title}>Latest Movies</h2>
                <div className={styles.movie__container}>
                    {/* looping movie array
                    Render Component Movie dan kirim props movie  */}
                    {movies.map((movie) =>{
                        return <Movie key={movie.id} movie={movie} />;
                    })}
                </div>
                {/* menambahkan butoon / event */}
                <button className={styles.button} onClick={handleClick}>Add Movie</button>
            </section>
        </div>
    )
}
export default Movies;