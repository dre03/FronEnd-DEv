import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "../../components/ui/Button";
import styled from "styled-components";
import Recomen from "../../components/Recomen/Recomen";
function Detail (){
    const StyledDetail = styled.div`
        // Mobile Screen
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  text-align: center;
  img {
    border-radius: 25px;
    max-width: 100%;
    height: auto;
  }
  h2 {
    font-size: 2.44rem;
    margin-bottom: 0.5rem;
    color: ${({ theme }) => theme.colors.navi};
  }
  h3 {
    font-size: 1.59rem;
    margin-bottom: 0.5rem;
    color: ${({ theme }) => theme.colors.yellow};
  }
  p {
    text-align: justify;
    margin-bottom: 2rem;
    color: ${({ theme }) => theme.colors.black};
  }
  // Medium Screen: 768px
  @media screen and (min-width: 768px) {
    flex-direction: row;
    text-align: left;
    .poster {
      flex-basis: 40%;
    }
    .info {
      flex-basis: 60%;
    }
  }
  // Large Screen
  @media screen and (min-width: 992px) {
  }
`;
    const {id} = useParams();
    const API_KEY = process.env.REACT_APP_API_KEY;
    const [movie, setMovie] = useState('')
    const genres = movie && movie.genres.map((genre) => genre.name).join(", ");
    const idTrailer = movie && `https://www.youtube.com/watch?v=${movie.videos.results[0].key}`;

    useEffect(() =>{
        getDetail();
    }, [getDetail, id])

    // eslint-disable-next-line react-hooks/exhaustive-deps
    async function getDetail(){
        const URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=videos`
        const respose = await axios(URL);

        setMovie(respose.data)
    }
    return(
        <div>
        <StyledDetail>
            <div className="poster">
                <img className="hero__image" src={`https://image.tmdb.org/t/p/w400/${movie.poster_path}`} alt='Internet Terputus'/>
            </div>
            <div className="info">
                <h2>{movie.title}</h2>
                <h3>{genres}</h3>
                <p>{movie.overview}</p>
                <Button as="a" href={idTrailer}>Watch</Button>
            </div>
        </StyledDetail>
        <Recomen />
        </div>
    )
}

export default Detail;