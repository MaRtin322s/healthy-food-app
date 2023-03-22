import { Link } from "react-router-dom";

import styles from "./styles/recipesCatalog.module.css";
import resp from "./styles/responsive.module.css";

const RecipesCatalog = () => {
    return (
        <div className={`${styles["main-wrapper"]} ${resp["main-wrapper"]}`}>
            <div className={`${styles["links-wrapper"]} ${resp["links-wrapper"]}`}>
                <Link className={`${styles["catalog-recipes"]} ${resp["catalog-recipes"]}`} to="/catalog-recipes" replace>
                    Catalog Recipes
                </Link>
                <Link className={`${styles["catalog-products"]} ${resp["catalog-products"]}`} to="/catalog-products" replace>
                    Catalog Products
                </Link>
            </div>
            <section className={`${styles["catalog"]} ${resp["catalog"]}`}>
                <h1
                    className={`${styles["no-content"]} ${resp["no-content"]}`}
                >
                    There are no recipes created yet.
                </h1>
                {/* <article className={styles["catalog-recipe"]}>
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLpyUBeuso0JIz0uvwEUW8ieyBzNsnSe4GiA&usqp=CAU"
                        alt="pizza"
                    />
                    <h3 className={styles["catalog-recipe-title"]}>Pizza</h3>
                    <p className={styles["catalog-recipe-category"]}>Category: Main Dishes</p>
                    <Link className={styles["details-btn"]} to="/details">
                        Details
                    </Link>
                </article> */}
            </section>
        </div>

    );
}

export default RecipesCatalog;