import styles from "./styles/home.module.css";
import salmon from "./images/salmon.png";
import background from "./images/backgr.jpg";

const Home = () => {
    ;
    return (
        <><img className={styles["background-img"]} src={background} alt="background" />
            <article className={styles["heading-info"]}>
                <h1 className={styles["heading"]}>Your favourite food - Delivered hot &amp; fresh</h1>
                <p className={styles["heading-para"]}>
                    Healthy switcher chefs do all the prep work like peeling, chopping &amp;
                    marinating, so you can cook a fresh food.
                </p>
                <a className={styles["heading-link"]} href="/">
                    Recipes Catalog
                </a>
                <div className={styles["header-empty"]} />
            </article>
            <section className={styles["info"]}>
                <article className={styles["time"]}>
                    <i className="fas fa-clock" />
                    <p>07:00 - 22:00</p>
                </article>
                <article className={styles["address"]}>
                    <i className="fas fa-map-marker-alt" />
                    <p>Sofia, bul. Hristo Botev 72 Str.</p>
                </article>
                <article className={styles["phone"]}>
                    <i className="fas fa-phone-alt" />
                    <p>+38 (063)833 24 15</p>
                </article>
            </section>
            <section className={styles["about-food"]}>
                <img className={styles["salmon-fish"]} src={salmon} alt="salmon" />
                <article>
                    <h4 className={styles["about-heading"]}>About</h4>
                    <h1 className={styles["food-heading"]}>
                        Food is An Important Part Of A Balance Diet
                    </h1>
                    <p className={styles["food-information"]}>
                        A balanced diet contains differing kinds of foods in certain quantities
                        and proportions so that the requirement for calories, proteins,
                        minerals, vitamins and alternative nutrients is adequate and a small
                        provision is reserved for additional nutrients to endure the short
                        length of leanness.
                    </p>
                    <a className={styles["about-link"]} href="/">
                        Learn more
                    </a>
                </article>
            </section>
            <h2 className={styles["last-recipes-heading"]}>New recipes...</h2>
            <section className={styles["last-recipes"]}>
                <article className={styles["recipe-one"]}>
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLpyUBeuso0JIz0uvwEUW8ieyBzNsnSe4GiA&usqp=CAU"
                        alt="pizza"
                    />
                    <h3 className={styles["recipe-title"]}>Pizza</h3>
                    <p className={styles["recipe-category"]}>Category: Main Dishes</p>
                    <a className={styles["last-recipes-btn"]} href="/">
                        Details
                    </a>
                </article>
                <article className={styles["recipe-two"]}>
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR0rj8bAmN9DzOGOjQCxl0OSFB7ZLCSnx7ZA&usqp=CAU"
                        alt="cheseburger"
                    />
                    <h3 className={styles["recipe-title"]}>cheseburger</h3>
                    <p className={styles["recipe-category"]}>Category: Main Dishes</p>
                    <a className={styles["last-recipes-btn"]} href="/">
                        Details
                    </a>
                </article>
                <article className={styles["recipe-three"]}>
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSzVckk56tjs02IpGWe5352U7p7DsAx764vA&usqp=CAU"
                        alt="muffin"
                    />
                    <h3 className={styles["recipe-title"]}>Choco Muffin</h3>
                    <p className={styles["recipe-category"]}>Category: Main Dishes</p>
                    <a className={styles["last-recipes-btn"]} href="/">
                        Details
                    </a>
                </article>
            </section>
        </>
    );
}

export default Home;