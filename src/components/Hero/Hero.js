import styles from './Hero.module.css';
const Hero = () =>{
    return(
    <div className={styles.container}>
        <section className={styles.hero}>
            <div className={styles.hero__left}>
                <h2 className={styles.hero__title}>Superman</h2>
                <h3 className={styles.hero__genre}>Genre : Thiller, Drama, Action</h3>
                <p className={styles.hero__description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                <button className={styles.hero__btn}>Watch</button>
            </div>
            <div className={styles.hero__right}>
                <img className={styles.hero__image} src='https://picsum.photos/600/400' alt='Internet Terputus'/>
            </div>
        </section>
    </div>
    )
}
export default Hero;