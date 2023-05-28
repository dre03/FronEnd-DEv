import StyledMovie from './Movie.styled';

//Component Movie menerima props
const Movie = (props) =>{
    // melakukan destruting props
    const {movie} = props;
    return(
        <StyledMovie>
        <div>
            <img src={movie.poster} alt='Internet Terputus' />
            <h3>{movie.title}</h3>
            <p>{movie.year}</p>
        </div>
        </StyledMovie>
    )
}
export default Movie;
