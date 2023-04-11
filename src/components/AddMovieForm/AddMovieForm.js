import { useState } from 'react';
import styles from './AddMovieForm.module.css';
import { nanoid } from 'nanoid';
import Alert from '../Alert/Alert';

const AddMovieForm = (props) =>{
    // membuat state
    const [title, setTitle] = useState ("");
    const [date, setDate] = useState ("");
    const [poster, setPoster] = useState ("");
    const [type, setType] = useState ("");
    const {movies, setMovies} = props;

    //membuat state untuk error
    const [isTitleError, setisTitleError] = useState(false);
    const [isDateError, setisDateError] = useState(false);
    const [isPosterError, setisPosterError] = useState(false)
    const [isTypeError, setisTypeError] = useState(false)
    
    // membuat fungsi hadle title
    function handleTitle(event) {
        setTitle(event.target.value);
    }
    //membuat fungsi handle date
    function handleDate(event) {
        setDate(event.target.value);
    }
    //membuat fungsi hadle poster
    function handlePoster(event){
        setPoster(event.target.value);
    }
    function hadleType(event){
        setType(event.target.value);
    }

    //handle submit
    function handleSubmit(event) {
        //mencegah prilakku default : refresh
       event.preventDefault();
       // jika title kosong, maka set error title true
       if(title === ""){
           setisTitleError(true);
        }
        // jika date kosong, maka set error date true
       else if(date === ""){
        setisTitleError(false);
        setisDateError(true);
       }
       else if(poster === ""){
        setisDateError(false);
        setisPosterError(true)
       }
       else if(type === ""){
        setisPosterError(false);
        setisTypeError(true)
       }
       //jika tidak kosong tambahkan data
       else{
           //siapkan movie yang ingin di input
           const movie = {
            id: nanoid(),
            title: title,
            year: date,
            poster: poster,
            type: type
           };
           setMovies([...movies, movie])
           setisTitleError(false);
           setisDateError(false);
           setisPosterError(false);
           setisTypeError(false);
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
                        <input className={styles.herof__input} type='text' value={title} onChange={handleTitle}/>
                        {/* jika error title true muncul error
                        jika error title false munculkan string kosong */}
                        {isTitleError && <Alert>Title Wajib diisi</Alert>}
                        <label className={styles.herof__label}>Year</label>
                        <input className={styles.herof__input} type='number' value={date} onChange={handleDate}/>
                        {isDateError && <Alert>Date Wajib diisi</Alert>}
                        <label className={styles.herof__label}>Poster</label>
                        <input className={styles.herof__input} type='text' value={poster} onChange={handlePoster}/>
                        {isPosterError && <Alert>Poster Wajib diisi</Alert>}
                        <select className={styles.herof__input} value={type} onChange={hadleType}>
                            <option>Pilih Kategori</option>
                            <option value="movie">Movie</option>
                            <option value="drama">Drama</option>
                            <option selected value="horor">Horror</option>
                            <option value="comedy">Comedy</option>
                        </select>
                        {isTypeError && <Alert>Kategori Wajib diisi</Alert>}
                        <button className={styles.herof__btn}>Submit</button>
                    </form>
                </div>
            </section>
        </div>
    )
}
export default AddMovieForm;