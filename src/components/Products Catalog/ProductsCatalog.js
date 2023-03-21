import { Link } from "react-router-dom";
import styles from "./styles/productsCatalog.module.css";

const ProductsCatalog = () => {
    return (
        <div className={styles["main-wrapper"]}>
            <Link className={styles["catalog-recipes"]} to="/catalog-recipes">
                Catalog Recipes
            </Link>
            <Link className={styles["catalog-products"]} to="/catalog-products">
                Catalog Products
            </Link>
            <section className={styles["catalog"]}>
                <h1
                    className={`${styles["no-content"]}`}
                >
                    There are no recipes created yet.
                </h1>
                <article className={styles["catalog-recipe"]}>
                    <img
                        src="https://www.collinsdictionary.com/images/full/tomato_281240360.jpg"
                        alt="tomatoes"
                    />
                    <h3 className={styles["catalog-recipe-title"]}>Tomatoes</h3>
                    <p className={styles["catalog-recipe-category"]}>Type: Vegetables</p>
                    <a className={styles["details-btn"]} href="/">
                        Details
                    </a>
                </article>
                <article className={styles["catalog-recipe"]}>
                    <img
                        src="https://www.collinsdictionary.com/images/full/tomato_281240360.jpg"
                        alt="tomatoes"
                    />
                    <h3 className={styles["catalog-recipe-title"]}>Tomatoes</h3>
                    <p className={styles["catalog-recipe-category"]}>Type: Vegetables</p>
                    <a className={styles["details-btn"]} href="/">
                        Details
                    </a>
                </article>
                <article className={styles["catalog-recipe"]}>
                    <img
                        src="https://www.collinsdictionary.com/images/full/tomato_281240360.jpg"
                        alt="tomatoes"
                    />
                    <h3 className={styles["catalog-recipe-title"]}>Tomatoes</h3>
                    <p className={styles["catalog-recipe-category"]}>Type: Vegetables</p>
                    <a className={styles["details-btn"]} href="/">
                        Details
                    </a>
                </article>
                <article className={styles["catalog-recipe"]}>
                    <img
                        src="https://www.collinsdictionary.com/images/full/tomato_281240360.jpg"
                        alt="tomatoes"
                    />
                    <h3 className={styles["catalog-recipe-title"]}>Tomatoes</h3>
                    <p className={styles["catalog-recipe-category"]}>Type: Vegetables</p>
                    <a className={styles["details-btn"]} href="/">
                        Details
                    </a>
                </article>
                <article className={styles["catalog-recipe"]}>
                    <img
                        src="https://www.collinsdictionary.com/images/full/tomato_281240360.jpg"
                        alt="tomatoes"
                    />
                    <h3 className={styles["catalog-recipe-title"]}>Tomatoes</h3>
                    <p className={styles["catalog-recipe-category"]}>Type: Vegetables</p>
                    <a className={styles["details-btn"]} href="/">
                        Details
                    </a>
                </article>
                <article className={styles["catalog-recipe"]}>
                    <img
                        src="https://www.collinsdictionary.com/images/full/tomato_281240360.jpg"
                        alt="tomatoes"
                    />
                    <h3 className={styles["catalog-recipe-title"]}>Tomatoes</h3>
                    <p className={styles["catalog-recipe-category"]}>Type: Vegetables</p>
                    <a className={styles["details-btn"]} href="/">
                        Details
                    </a>
                </article>
                <article className={styles["catalog-recipe"]}>
                    <img
                        src="https://www.collinsdictionary.com/images/full/tomato_281240360.jpg"
                        alt="tomatoes"
                    />
                    <h3 className={styles["catalog-recipe-title"]}>Tomatoes</h3>
                    <p className={styles["catalog-recipe-category"]}>Type: Vegetables</p>
                    <a className={styles["details-btn"]} href="/">
                        Details
                    </a>
                </article>
                <article className={styles["catalog-recipe"]}>
                    <img
                        src="https://www.collinsdictionary.com/images/full/tomato_281240360.jpg"
                        alt="tomatoes"
                    />
                    <h3 className={styles["catalog-recipe-title"]}>Tomatoes</h3>
                    <p className={styles["catalog-recipe-category"]}>Type: Vegetables</p>
                    <a className={styles["details-btn"]} href="/">
                        Details
                    </a>
                </article>
                <article className={styles["catalog-recipe"]}>
                    <img
                        src="https://www.collinsdictionary.com/images/full/tomato_281240360.jpg"
                        alt="tomatoes"
                    />
                    <h3 className={styles["catalog-recipe-title"]}>Tomatoes</h3>
                    <p className={styles["catalog-recipe-category"]}>Type: Vegetables</p>
                    <a className={styles["details-btn"]} href="/">
                        Details
                    </a>
                </article>
                <article className={styles["catalog-recipe"]}>
                    <img
                        src="https://www.collinsdictionary.com/images/full/tomato_281240360.jpg"
                        alt="tomatoes"
                    />
                    <h3 className={styles["catalog-recipe-title"]}>Tomatoes</h3>
                    <p className={styles["catalog-recipe-category"]}>Type: Vegetables</p>
                    <a className={styles["details-btn"]} href="/">
                        Details
                    </a>
                </article>
                <article className={styles["catalog-recipe"]}>
                    <img
                        src="https://www.collinsdictionary.com/images/full/tomato_281240360.jpg"
                        alt="tomatoes"
                    />
                    <h3 className={styles["catalog-recipe-title"]}>Tomatoes</h3>
                    <p className={styles["catalog-recipe-category"]}>Type: Vegetables</p>
                    <a className={styles["details-btn"]} href="/">
                        Details
                    </a>
                </article>
                <article className={styles["catalog-recipe"]}>
                    <img
                        src="https://www.collinsdictionary.com/images/full/tomato_281240360.jpg"
                        alt="tomatoes"
                    />
                    <h3 className={styles["catalog-recipe-title"]}>Tomatoes</h3>
                    <p className={styles["catalog-recipe-category"]}>Type: Vegetables</p>
                    <a className={styles["details-btn"]} href="/">
                        Details
                    </a>
                </article>
            </section>
        </div>

    );
}

export default ProductsCatalog;