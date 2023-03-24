import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/UserContext";
import RecipeCatalogItem from "./RecipeItem";

import styles from "./styles/recipesCatalog.module.css";
import resp from "./styles/responsive.module.css";

const RecipesCatalog = () => {
    const { getAllRecipes } = useContext(AuthContext);
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        getAllRecipes()
            .then(result => setRecipes(result));
    }, [getAllRecipes]);

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
                {recipes.length > 0
                    ?
                    recipes.map(recipe => (
                            <RecipeCatalogItem key={recipe._id} {...recipe} />
                    ))
                    :
                    <>
                        <h1
                            className={`${styles["no-content"]} ${resp["no-content"]}`}
                        >
                            There are no recipes created yet.
                        </h1>
                    </>
                }
            </section>
        </div>

    );
}

export default RecipesCatalog;