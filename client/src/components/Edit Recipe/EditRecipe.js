import { useNavigate, useParams } from "react-router-dom";
import * as service from "../../services/recipeService";
import { AuthContext } from "../../contexts/UserContext";
import styles from "./styles/edit.module.css";
import { useContext, useEffect, useState } from "react";

const EditRecipe = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const { recipeId } = useParams();
    const [recipe, setRecipe] = useState({
        title: "",
        category: "",
        imageUrl: "",
        ingredients: [],
        preparation: ""
    });

    const changeHandler = (ev) => {
        setRecipe(recipe => ({ 
            ...recipe, 
            [ev.target.name]: ev.target.value,

        }));
    };

    useEffect(() => {
        service.getOne(recipeId)
            .then(result => {
                setRecipe(result);
            });
    }, [recipeId]);

    const submitHandler = (ev, data, token, recipeId) => {
        ev.preventDefault();
        const ingredients = data.ingredients.split(',');
        service.editRecipe({ ...data, ingredients }, token, recipeId)
            .then(() => navigate(`/details/recipes/${recipeId}`, { replace: true }));
    };

    return (
        <div className={styles["wrapper-edit"]}>
            <section className={styles["create-page"]}>
                <article className={styles["info"]}>
                    <ul className={styles["steps"]}>
                        <li>Edit recipe information:</li>
                        <li>The title specifies the name of the recipe.</li>
                        <li>
                            Ingredients list: A list of all the ingredients required for the recipe.
                            NOTE: Every ingredient must be on the new line!
                        </li>
                        <li>
                            Preparation: Step-by-step instructions on how to prepare the recipe.
                        </li>
                        <li>
                            Category - specifies the type of the recipe - Appetizers, Soups and
                            stews, Salads, Main dishes, Side dishes, Desserts, Beverages and ect.
                        </li>
                    </ul>
                </article>
                <form
                    className={styles["create"]}
                    onSubmit={(ev) => submitHandler(ev, recipe, user.accessToken, recipeId)}
                >
                    <h1 className={styles["create-heading"]}>Edit Recipes</h1>
                    <label htmlFor="title">Title:</label>
                    <div>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            placeholder="Title..."
                            value={recipe.title}
                            onChange={(ev) => changeHandler(ev)}
                            required
                        />
                    </div>
                    <label htmlFor="category">Category:</label>
                    <div>
                        <input
                            type="text"
                            id="category"
                            name="category"
                            placeholder="Main dish...."
                            value={recipe.category}
                            onChange={(ev) => changeHandler(ev)}
                            required
                        />
                    </div>
                    <label htmlFor="imageUrl">Image Url:</label>
                    <div>
                        <input
                            type="text"
                            id="imageUrl"
                            name="imageUrl"
                            placeholder="https://..."
                            value={recipe.imageUrl}
                            onChange={(ev) => changeHandler(ev)}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="ingredients">Ingredients:</label>
                        <p className={styles["ingredients-note"]}>NOTE: Every ingredient must be on the new line!</p>
                        <div>
                            <textarea
                                cols={20}
                                rows={5}
                                id="ingredients"
                                name="ingredients"
                                placeholder="1/2 teaspoon salt..."
                                value={recipe.ingredients}
                                onChange={(ev) => changeHandler(ev)}
                                required
                            />
                        </div>
                        <label htmlFor="preparation">Preparation:</label>
                        <div>
                            <textarea
                                cols={20}
                                rows={5}
                                id="preparation"
                                name="preparation"
                                placeholder="Cooking preparation..."
                                value={recipe.preparation}
                                onChange={(ev) => changeHandler(ev)}
                                required
                            />
                        </div>
                    </div>
                    <div>
                        <input
                            className={styles["create-btn"]}
                            type="submit"
                            value={"Edit recipe"}
                        />
                    </div>
                </form>
            </section>
        </div>
    );
}

export default EditRecipe;