import { useCallback, useState } from 'react';
import { useEffect } from 'react';
import Button from '../ui/Button';
import StyledHero from './Hero.styled';
import axios from 'axios';

const Hero = () =>{

// Membuat State movie
  const [movie, setMovie] = useState("");
  const API_KEY = process.env.REACT_APP_API_KEY;
  const genres = movie && movie.genres.map((genre) => genre.name).join(", ");
  const idTrailer = movie && `https://www.youtube.com/watch?v=${movie.videos.results[0].key}`;
//   console.log(idTrailer);

  /**
   * Mengambil 1 data dari trending movie.
   * Karena data dari trending tidak lengkap.
   * Solusinya: ambil detail movie by id.
   */
  // eslint-disable-next-line react-hooks/exhaustive-deps
  async function getTrendingMovie() {
    const URL = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`;
    const response = await axios(URL);
    return response.data.results[0];
  }

  /**
   * Membuat fungsi getDetailMovie.
   * Mengambil detail movie berdasarkan id
   */

    const getDetailMovie = useCallback(async () => {
            const trendingMovie = await getTrendingMovie();
            const id = trendingMovie.id;
            const URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=videos`;
            const response = await axios.get(URL);
            setMovie(response.data);
    }, [API_KEY, getTrendingMovie]);
  /**
   * Menjalankan useEffect.
   * Parameter kedua digunakan untuk custom lifecycle update.
   * Jika state di dalam array berubah, maka jalankan useEffect lagi (lifecycle update).
   * Jika state di dalam array kosong, maka jalankan sekali (lifecycle mount).
   */
    useEffect(() => {
        getDetailMovie();
    }, [getDetailMovie]);


    return(
    <StyledHero>
    <div>
        <section className="hero">
            <div className="hero__left">
                <h3 className="hero__title">{movie.title}</h3>
                <h5 className="hero__genre">Genre : {genres}</h5>
                <p className="hero__description">{movie.overview}</p>
                {/* <button className={styles.hero__btn}>Watch</button> */}
                <Button variant="navi" size="lg" as="a" href={idTrailer}
            target="_blank">Watch Movie</Button>
            </div>
            <div className="hero__right">
                <img className="hero__image" src={`https://image.tmdb.org/t/p/w400/${movie.backdrop_path}`} alt='Internet Terputus'/>
            </div>
        </section>
    </div>
    </StyledHero>
    )
}
export default Hero;