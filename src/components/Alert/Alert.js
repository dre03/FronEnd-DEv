import styles from '../AddMovieForm/AddMovieForm.module.css'
function Alert (props){
    //children adalah pros khusus
    //berisi konten/children yang ada di dalam component
    const {children} = props;
    return(
        <div>
            <span className={styles.eror}>{children}</span>
        </div>
    );
}
export default Alert;