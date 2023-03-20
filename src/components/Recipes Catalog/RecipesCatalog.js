import { Link } from "react-router-dom";
import styles from "./styles/recipesCatalog.module.css";

const RecipesCatalog = () => {
    return (
        <div className={styles["main-wrapper"]}>
            <Link className={styles["catalog-recipes"]} to="/catalog-recipes" replace>
                Catalog Recipes
            </Link>
            <Link className={styles["catalog-products"]} to="/catalog-products" replace>
                Catalog Products
            </Link>
            <section className={styles["catalog"]}>
                <article className={styles["catalog-recipe"]}>
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLpyUBeuso0JIz0uvwEUW8ieyBzNsnSe4GiA&usqp=CAU"
                        alt="pizza"
                    />
                    <h3 className={styles["catalog-recipe-title"]}>Pizza</h3>
                    <p className={styles["catalog-recipe-category"]}>Category: Main Dishes</p>
                    <a className={styles["details-btn"]} href="/">
                        Details
                    </a>
                </article>
                <article className={styles["catalog-recipe"]}>
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLpyUBeuso0JIz0uvwEUW8ieyBzNsnSe4GiA&usqp=CAU"
                        alt="pizza"
                    />
                    <h3 className={styles["catalog-recipe-title"]}>Pizza</h3>
                    <p className={styles["catalog-recipe-category"]}>Category: Main Dishes</p>
                    <a className={styles["details-btn"]} href="/">
                        Details
                    </a>
                </article>
                <article className={styles["catalog-recipe"]}>
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLpyUBeuso0JIz0uvwEUW8ieyBzNsnSe4GiA&usqp=CAU"
                        alt="pizza"
                    />
                    <h3 className={styles["catalog-recipe-title"]}>Pizza</h3>
                    <p className={styles["catalog-recipe-category"]}>Category: Main Dishes</p>
                    <a className={styles["details-btn"]} href="/">
                        Details
                    </a>
                </article>
                <article className={styles["catalog-recipe"]}>
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLpyUBeuso0JIz0uvwEUW8ieyBzNsnSe4GiA&usqp=CAU"
                        alt="pizza"
                    />
                    <h3 className={styles["catalog-recipe-title"]}>Pizza</h3>
                    <p className={styles["catalog-recipe-category"]}>Category: Main Dishes</p>
                    <a className={styles["details-btn"]} href="/">
                        Details
                    </a>
                </article>
                <article className={styles["catalog-recipe"]}>
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLpyUBeuso0JIz0uvwEUW8ieyBzNsnSe4GiA&usqp=CAU"
                        alt="pizza"
                    />
                    <h3 className={styles["catalog-recipe-title"]}>Pizza</h3>
                    <p className={styles["catalog-recipe-category"]}>Category: Main Dishes</p>
                    <a className={styles["details-btn"]} href="/">
                        Details
                    </a>
                </article>
                <article className={styles["catalog-recipe"]}>
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLpyUBeuso0JIz0uvwEUW8ieyBzNsnSe4GiA&usqp=CAU"
                        alt="pizza"
                    />
                    <h3 className={styles["catalog-recipe-title"]}>Pizza</h3>
                    <p className={styles["catalog-recipe-category"]}>Category: Main Dishes</p>
                    <a className={styles["details-btn"]} href="/">
                        Details
                    </a>
                </article>
                <article className={styles["catalog-recipe"]}>
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLpyUBeuso0JIz0uvwEUW8ieyBzNsnSe4GiA&usqp=CAU"
                        alt="pizza"
                    />
                    <h3 className={styles["catalog-recipe-title"]}>Pizza</h3>
                    <p className={styles["catalog-recipe-category"]}>Category: Main Dishes</p>
                    <a className={styles["details-btn"]} href="/">
                        Details
                    </a>
                </article>
                <article className={styles["catalog-recipe"]}>
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLpyUBeuso0JIz0uvwEUW8ieyBzNsnSe4GiA&usqp=CAU"
                        alt="pizza"
                    />
                    <h3 className={styles["catalog-recipe-title"]}>Pizza</h3>
                    <p className={styles["catalog-recipe-category"]}>Category: Main Dishes</p>
                    <a className={styles["details-btn"]} href="/">
                        Details
                    </a>
                </article>
                <article className={styles["catalog-recipe"]}>
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLpyUBeuso0JIz0uvwEUW8ieyBzNsnSe4GiA&usqp=CAU"
                        alt="pizza"
                    />
                    <h3 className={styles["catalog-recipe-title"]}>Pizza</h3>
                    <p className={styles["catalog-recipe-category"]}>Category: Main Dishes</p>
                    <a className={styles["details-btn"]} href="/">
                        Details
                    </a>
                </article>
                <article className={styles["catalog-recipe"]}>
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLpyUBeuso0JIz0uvwEUW8ieyBzNsnSe4GiA&usqp=CAU"
                        alt="pizza"
                    />
                    <h3 className={styles["catalog-recipe-title"]}>Pizza</h3>
                    <p className={styles["catalog-recipe-category"]}>Category: Main Dishes</p>
                    <a className={styles["details-btn"]} href="/">
                        Details
                    </a>
                </article>
                <article className={styles["catalog-recipe"]}>
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLpyUBeuso0JIz0uvwEUW8ieyBzNsnSe4GiA&usqp=CAU"
                        alt="pizza"
                    />
                    <h3 className={styles["catalog-recipe-title"]}>Pizza</h3>
                    <p className={styles["catalog-recipe-category"]}>Category: Main Dishes</p>
                    <a className={styles["details-btn"]} href="/">
                        Details
                    </a>
                </article>
                <article className={styles["catalog-recipe"]}>
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLpyUBeuso0JIz0uvwEUW8ieyBzNsnSe4GiA&usqp=CAU"
                        alt="pizza"
                    />
                    <h3 className={styles["catalog-recipe-title"]}>Pizza</h3>
                    <p className={styles["catalog-recipe-category"]}>Category: Main Dishes</p>
                    <a className={styles["details-btn"]} href="/">
                        Details
                    </a>
                </article>
            </section>
        </div>

    );
}

export default RecipesCatalog;