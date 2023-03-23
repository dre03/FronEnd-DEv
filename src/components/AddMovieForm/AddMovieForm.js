import styles from './AddMovieForm.module.css';

const AddMovieForm = () =>{
    return(
        <div className={styles.container}>
            <section className={styles.herof}>
                <div className={styles.herof__left}>
                    <img className={styles.herof__img} src='https://picsum.photos/600/400' alt='Internet Terputus' />
                </div>
                <div className={styles.herof__right}>
                    <h1 className={styles.herof__title}>Add Movie</h1>
                    <form className={styles.herof__form}>
                        <label className={styles.herof__label}>Title</label>
                        <input className={styles.herof__input} type='text'/>
                        <label className={styles.herof__label}>Year</label>
                        <input className={styles.herof__input} type='text' />
                        <button className={styles.herof__btn}>Submit</button>
                    </form>
                </div>
            </section>
        </div>
    )
}
export default AddMovieForm;