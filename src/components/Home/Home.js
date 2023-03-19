import "./styles/home.css";
import "./styles/responsive.css";
import salmon from "./images/salmon.png";

const Home = () => {
    return (
        <>
            <section className="info">
                <article className="time">
                    <i className="fas fa-clock" />
                    <p>07:00 - 22:00</p>
                </article>
                <article className="address">
                    <i className="fas fa-map-marker-alt" />
                    <p>Sofia, bul. Hristo Botev 72 Str.</p>
                </article>
                <article className="phone">
                    <i className="fas fa-phone-alt" />
                    <p>+38 (063)833 24 15</p>
                </article>
            </section>
            <section className="about-food">
                <img className="salmon-fish" src={salmon} alt="salmon" />
                <article>
                    <h4 className="about-heading">About</h4>
                    <h1 className="food-heading">
                        Food is An Important Part Of A Balance Diet
                    </h1>
                    <p className="food-information">
                        A balanced diet contains differing kinds of foods in certain quantities
                        and proportions so that the requirement for calories, proteins,
                        minerals, vitamins and alternative nutrients is adequate and a small
                        provision is reserved for additional nutrients to endure the short
                        length of leanness.
                    </p>
                    <a className="about-link" href="/">
                        Learn more
                    </a>
                </article>
            </section>
            <h2 className="last-recipes-heading">New recipes...</h2>
            <section className="last-recipes">
                <article className="recipe-one">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLpyUBeuso0JIz0uvwEUW8ieyBzNsnSe4GiA&usqp=CAU"
                        alt="pizza"
                    />
                    <h3 className="recipe-title">Pizza</h3>
                    <p className="recipe-category">Category: Main Dishes</p>
                    <a className="last-recipes-btn" href="/">
                        Details
                    </a>
                </article>
                <article className="recipe-two">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR0rj8bAmN9DzOGOjQCxl0OSFB7ZLCSnx7ZA&usqp=CAU"
                        alt="cheseburger"
                    />
                    <h3 className="recipe-title">cheseburger</h3>
                    <p className="recipe-category">Category: Main Dishes</p>
                    <a className="last-recipes-btn" href="/">
                        Details
                    </a>
                </article>
                <article className="recipe-three">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSzVckk56tjs02IpGWe5352U7p7DsAx764vA&usqp=CAU"
                        alt="muffin"
                    />
                    <h3 className="recipe-title">Choco Muffin</h3>
                    <p className="recipe-category">Category: Main Dishes</p>
                    <a className="last-recipes-btn" href="/">
                        Details
                    </a>
                </article>
            </section>
        </>
    );
}

export default Home;