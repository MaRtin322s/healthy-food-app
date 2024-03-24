import { useContext, useEffect, useReducer } from "react";
import { Link, useNavigate } from "react-router-dom";
import resp from './styles/responsive.module.css';
import { AuthContext } from "../../contexts/UserContext";
import * as service from "../../services/recipeService";
import { initData, reducer } from "./data/data";
import { changeHandler } from "../../utils/handleChangeEvent";
import styles from "./styles/createRecipe.module.css";
import useFileReader from "../../hooks/useFileReader";

const CreateRecipe = () => {
    const { user } = useContext(AuthContext);
    const [dataUrl, setUrl] = useFileReader();
    const navigate = useNavigate();
    const [state, dispatch] = useReducer(reducer, initData);
    const token = user.accessToken;
    const userId = user._id;

    useEffect(() => {
        dispatch({ type: 'SET_FIELD', field: 'imageUrl', value: dataUrl.dataURL });
        console.log('executed');
    }, [dataUrl.dataURL]);

    const submitHandler = (ev, data, token, userId) => {
        ev.preventDefault();
    
        const ingredients = state.ingredients.split("\n");
        if (Object.values(data).some(x => x === "")) {
            alert("All fields are required!");
        } else {
            service.createRecipe(token, { ...data, ingredients, _ownerId: userId })
                .then(() => navigate("/catalog-recipes", { replace: true }));
        }
    };

    return (
        <>
            <section className={`${styles["create-page"]} ${resp["create-page-resp"]}`}>
                <form
                    className={`${styles["create"]} ${resp["create"]}`}
                    onSubmit={(ev) => submitHandler(ev, state, token, userId)}
                >
                    <h1 className={styles["create-heading"]}>Share Recipes</h1>
                    <div className="links">
                        <Link className={styles["create-recipe"]} to="/create-recipes" replace>
                            Share Recipe
                        </Link>
                        <Link className={styles["create-product"]} to="/create-products" replace>
                            Share Product
                        </Link>
                    </div>
                    <label htmlFor="title">Title:</label>
                    <div>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            placeholder="Title..."
                            value={state.title}
                            onChange={(ev) => changeHandler(ev, dispatch)}
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
                            value={state.category}
                            onChange={(ev) => changeHandler(ev, dispatch)}
                            required
                        />
                    </div>
                    <label htmlFor="imageUrl">Image:</label>
                    <div>
                        <input
                            type="file"
                            id="imageUrl"
                            name={dataUrl.fileName}
                            placeholder="https://..."
                            onChange={(ev) => setUrl(ev, dispatch)}
                            required
                        />
                    </div>
                    <label htmlFor="ingredients">Ingredients:</label>
                    <p className={styles["ingredients-note"]}>NOTE: Every ingredient must be on the new line!</p>
                    <div>
                        <textarea
                            cols={20}
                            rows={5}
                            id="ingredients"
                            name="ingredients"
                            placeholder="1/2 teaspoon salt..."
                            value={state.ingredients}
                            onChange={(ev) => changeHandler(ev, dispatch)}
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
                            value={state.preparation}
                            onChange={(ev) => changeHandler(ev, dispatch)}
                            required
                        />
                    </div>
                    <div>
                        <input
                            className={styles["create-btn"]}
                            type="submit"
                            value={"Share recipe"}
                        />
                    </div>
                </form>
            </section>
        </>
    );
}

export default CreateRecipe;