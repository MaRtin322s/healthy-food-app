import { Link } from "react-router-dom";

import styles from "./styles/home.module.css";
import resp from "./styles/responsive.module.css";
import salmon from "./images/salmon.png";
import background from "./images/backgr.jpg";

const Home = () => {
    ;
    return (
        <>
            <img className={`${styles["background-img"]} ${resp["background-img"]}`} src={background} alt="background" />
            <article className={`${styles["heading-info"]} ${resp["heading-info"]}`}>
                <h1 className={`${styles["heading"]} ${resp["heading"]}`}>Your favourite food - Delivered hot &amp; fresh</h1>
                <p className={`${styles["heading-para"]} ${resp["heading-para"]}`}>
                    Healthy switcher chefs do all the prep work like peeling, chopping &amp;
                    marinating, so you can cook a fresh food.
                </p>
                <Link className={`${styles["heading-link"]} ${resp["heading-link"]}`} to="/catalog-recipes">
                    Recipes Catalog
                </Link>
                <div className={`${styles["header-empty"]} ${resp["header-empty"]}`} />
            </article>
            <section className={`${styles["info"]} ${resp["info"]}`}>
                <article className={styles["address"]}>
                    <i className="fas fa-map-marker-alt" />
                    <p>Sofia, bul. Hristo Botev 72 Str.</p>
                </article>
                <article className={styles["phone"]}>
                    <i className="fas fa-phone-alt" />
                    <p>+38 (063)833 24 15</p>
                </article>
            </section>
            <section className={`${styles["about-food"]} ${resp["about-food"]}`}>
                <img className={`${styles["salmon-fish"]} ${resp["salmon-fish"]}`} src={salmon} alt="salmon" />
                <article>
                    <h4 className={`${styles["about-heading"]} ${resp["about-heading"]}`}>About</h4>
                    <h1 className={`${styles["food-heading"]} ${resp["food-heading"]}`}>
                        Food is An Important Part Of A Balance Diet
                    </h1>
                    <p className={`${styles["food-information"]} ${resp["food-information"]}`}>
                        A balanced diet contains differing kinds of foods in certain quantities
                        and proportions so that the requirement for calories, proteins,
                        minerals, vitamins and alternative nutrients is adequate and a small
                        provision is reserved for additional nutrients to endure the short
                        length of leanness.
                    </p>
                    <Link
                        className={`${styles["about-link"]} ${resp["about-link"]}`}
                        to="https://www.narayanahealth.org/blog/importance-of-balanced-diet-for-a-healthy-lifestyle/"
                        target="_blank"
                    >
                        Learn more
                    </Link>
                </article>
            </section>
            <h2 className={styles["last-recipes-heading"]}>New recipes...</h2>
            <section className={`${styles["last-recipes"]} ${resp["last-recipes"]}`}>
                <article className={styles["recipe-one"]}>
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLpyUBeuso0JIz0uvwEUW8ieyBzNsnSe4GiA&usqp=CAU"
                        alt="pizza"
                    />
                    <h3 className={styles["recipe-title"]}>Pizza</h3>
                    <p className={styles["recipe-category"]}>Category: Main Dishes</p>
                    <Link className={styles["last-recipes-btn"]} to="/details">
                        Details
                    </Link>
                </article>
                <article className={styles["recipe-two"]}>
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR0rj8bAmN9DzOGOjQCxl0OSFB7ZLCSnx7ZA&usqp=CAU"
                        alt="cheseburger"
                    />
                    <h3 className={styles["recipe-title"]}>Cheseburger</h3>
                    <p className={styles["recipe-category"]}>Category: Main Dishes</p>
                    <Link className={styles["last-recipes-btn"]} to="/details">
                        Details
                    </Link>
                </article>
                <article className={styles["recipe-three"]}>
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSzVckk56tjs02IpGWe5352U7p7DsAx764vA&usqp=CAU"
                        alt="muffin"
                    />
                    <h3 className={styles["recipe-title"]}>Choco Muffin</h3>
                    <p className={styles["recipe-category"]}>Category: Main Dishes</p>
                    <Link className={styles["last-recipes-btn"]} to="/details">
                        Details
                    </Link>
                </article>
            </section>
        </>
    );
}

export default Home;