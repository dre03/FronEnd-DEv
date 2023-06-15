import { useState } from 'react';
import styles from './AddMovieForm.module.css';
import { nanoid } from 'nanoid';
import Alert from '../Alert/Alert';
import Button from '../ui/Button';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addMovie } from '../../features/moviesSlice';

const AddMovieForm = () =>{

    const navigation = useNavigate();
    const dispatch = useDispatch();
    //membuat state object
const [formData, setFormData] = useState({
        title: "",
        date: "",
        poster: "",
        type: "movie"
    })

    //membuat fungsi handleChange untuk semua input form
    function handleChange(event){
        const {name, value} = event.target;

        setFormData({
            ...formData,
            [name]: value,
        })

    }
    // membuat state objek error
    const [isErrors, setIsErrors] = useState({
    title: false,
    date: false,
    poster: false,
    type: false,
  });

    function validate() {
    const errors = {
      title: title === "",
      date: date === "",
      poster: poster === "",
      type: type === ""
    };

    setIsErrors(errors);

    return !Object.values(errors).some((error) => error);
  }

    // destructing
    const {title, date, poster, type} = formData
    
// membuat fungsi menambah movie
    function submitMovie(){
        const movie = {
            id: nanoid(),
            title: title,
            year: date,
            poster: poster,
            type: type
           };
           
           dispatch(addMovie(movie));
           //halaman redirect ke halaman home
           navigation("/")
        }

    //handle submit
    function handleSubmit(event) {
        //mencegah prilakku default : refresh
       event.preventDefault();
       if (validate()){
        submitMovie();
       }
    }
    return(
        <div className={styles.container}>
            <section className={styles.herof}>
                <div className={styles.herof__left}>
                    <img className={styles.herof__img} src='https://picsum.photos/600/400' alt='Internet Terputus' />
                </div>
                <div className={styles.herof__right}>
                    <h1 className={styles.herof__title}>Add Movie</h1>
                    <form className={styles.herof__form} onSubmit={handleSubmit}>
                        <label className={styles.herof__label}>Title</label>
                        <input className={styles.herof__input} type='text' name='title' value={title} onChange={handleChange}/>
                        {/* jika error title true muncul error
                        jika error title false munculkan string kosong */}
                        {isErrors.title && <Alert>Title Wajib diisi</Alert>}
                        <label className={styles.herof__label}>Year</label>
                        <input className={styles.herof__input} type='number' name='date' value={date} onChange={handleChange}/>
                        {isErrors.date && <Alert>Date Wajib diisi</Alert>}
                        <label className={styles.herof__label}>Poster</label>
                        <input className={styles.herof__input} type='text' name='poster' value={poster} onChange={handleChange}/>
                        {isErrors.poster && <Alert>Poster Wajib diisi</Alert>}
                        <select className={styles.herof__input} name='type' value={type} onChange={handleChange}>
                            <option>Pilih Kategori</option>
                            <option value="movie">Movie</option>
                            <option value="drama">Drama</option>
                            <option value="horor">Horror</option>
                            <option value="comedy">Comedy</option>
                        </select>
                        {isErrors.type && <Alert>Kategori Wajib diisi</Alert>}
                        <Button varian="navi" full>Submit</Button>
                    </form>
                </div>
            </section>
        </div>
    )
}
export default AddMovieForm;