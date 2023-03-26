import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/UserContext";
import RecipeCatalogItem from "./RecipeItem";
import Spinner from "../Spinner/Spinner";

import styles from "./styles/recipesCatalog.module.css";
import resp from "./styles/responsive.module.css";

const RecipesCatalog = () => {
    const { getAllRecipes } = useContext(AuthContext);
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(recipes.length / 12);
    const indexOfLastItem = currentPage * 12;
    const indexOfFirstItem = indexOfLastItem - 12;
    const currentItems = recipes.slice(indexOfFirstItem, indexOfLastItem);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            getAllRecipes()
                .then(result => {
                    setRecipes(result);
                    setLoading(false);
                });
        }, 1500);
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
            {currentPage > 1 && (
                <button
                    className={styles["btn-pagination"]}
                    onClick={() => setCurrentPage(currentPage - 1)}
                >
                    Previous Page
                </button>
            )}
            {currentPage < totalPages && (
                <>
                    <button
                        className={styles["btn-pagination"]}
                        onClick={() => setCurrentPage(currentPage + 1)}
                    >
                        Next Page
                    </button>
                </>
            )}
            <h1 className={styles["curr-page"]}>Current Page: {currentPage}</h1>
            <section className={`${styles["catalog"]} ${resp["catalog"]}`}>
                {loading
                    ?
                    <Spinner />
                    :
                    <>
                        {recipes.length > 0
                            ?
                            currentItems.map(recipe => (
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
                    </>
                }
            </section>
        </div>

    );
}

export default RecipesCatalog;