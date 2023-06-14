import Movie from '../Movie/Movie';
import styles from './Movies.module.css';
// import {nanoid} from 'nanoid';

const Movies = (props) =>{
    // membuat variabel movies
    const {title, movies} = props


    return(
        <div className={styles.container}>
            <section className={styles.movies}>
                <h2 className={styles.movies__title}>{title}</h2>
                <div className={styles.movie__container}>
                    {/* looping movie array
                    Render Component Movie dan kirim props movie  */}
                    {movies.map((movie) =>{
                        return <Movie key={movie.id} movie={movie} />;
                    })}
                </div>
            </section>
        </div>
    )
}
export default Movies;