import styles from './Movie.module.css'

//Component Movie menerima props
const Movie = (props) =>{
    // melakukan destruting props
    const {movie} = props;
    return(
        <div className={styles.movie}>
            <img className={styles.movie__img} src={movie.poster} alt='Internet Terputus' />
            <h3 className={styles.movie__title}>{movie.title}</h3>
            <p className={styles.movie__date}>{movie.year}</p>
        </div>
    )
}
export default Movie;
