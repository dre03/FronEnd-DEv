import { Link } from 'react-router-dom';
import StyledMovie from './Movie.styled';

//Component Movie menerima props
const Movie = (props) =>{
    // melakukan destruting props
    const {movie} = props;
    return(
        <StyledMovie>
        <div>
            <img src={movie.poster || `https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt='Internet Terputus' />
            <h3><Link to={`/movie/${movie.id}`}>{movie.title}</Link></h3>
            <p>{movie.year || movie.release_date}</p>
        </div>
        </StyledMovie>
    )
}
export default Movie;
