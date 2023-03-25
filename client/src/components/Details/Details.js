import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../contexts/UserContext";
import Delete from "../Delete Recipes/DeleteRecipes";
import styles from "./styles/details.module.css";
import * as service from "../../services/recipeService";

const Details = () => {
    const { recipeId } = useParams();
    const navigate = useNavigate();
    const { getOneRecipe } = useContext(AuthContext);
    const [recipe, setRecipe] = useState({});
    const [saved, setSaved] = useState([]);
    const [showDelete, setShowDelete] = useState(false);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        getOneRecipe(recipeId)
            .then(result => setRecipe(result));
        service.getSavedRecipes(user._id)
            .then(result => setSaved(result.map(x => {
                return x._id;
            })));
    }, [getOneRecipe, recipeId, user._id]);

    const deleteHandler = (ev, recipeId, token) => {
        ev.preventDefault();

        service.deleteRecipe(recipeId, token)
            .then(() => navigate("/catalog-recipes", { replace: true }));
    }

    const showDeleteRecipe = () => {
        setShowDelete(true);
    }

    const closeHandler = () => {
        setShowDelete(false);
    }

    const saveHandler = (ev, recipeId, userId, token) => {
        ev.preventDefault();
        service.saveRecipe(recipeId, userId, token)
            .then((result) => {
                setSaved(result.map(x => {
                    return x._id;
                }));
                navigate(`/details/recipes/${recipeId}`, { replace: true })
            });
    }

    return (
        <>
            {showDelete &&
                <Delete
                    closeHandler={closeHandler}
                    title={recipe.title}
                    type="recipe"
                    deleteHandler={deleteHandler}
                    _id={recipeId}
                />
            }
            <div className={styles["wrap-main"]}>
                <section className={styles["details"]}>
                    <img src={recipe.imageUrl} alt="pizza" />
                    <article>
                        <h1 className={styles["details-heading"]}>{recipe.title}</h1>
                        <section className={styles["recipe-data"]}>
                            {/* eslint-disable-next-line */}
                            <ul className={styles["ingredients"]} role={"list"}>
                                <li className={styles["first-item"]}>Ingredients: </li>
                                {recipe.ingredients?.map(x => <li key={x}>{x}</li>)}
                            </ul>
                            <div>
                                <h2>Preparation:</h2>
                                <p>
                                    Sift the flour with the salt into a bowl and add the yeast. Make a hole in the center and pour in the water and oil.
                                    Knead a soft pizza dough and leave it in a warm place for an hour. Knead once more and roll it into a thin crust. Transfer to a greased pan.
                                    Cut the tomatoes and arrange them on the dough, put the mozzarella slices on them. Sprinkle with pepper and salt, basil and a little olive oil.
                                    Bake the Margherita pizza in a 230 degree oven for 15-20 minutes.
                                </p>
                            </div>
                        </section>
                        {saved.includes(recipeId)
                            ?
                            <p>
                                This recipe is saved to your profile.
                                You can see it <Link to="/profile" replace>here</Link>.
                            </p>
                            : null
                        }
                        <div className={styles["buttons"]}>
                            {user._id === recipe._ownerId
                                ?
                                <>
                                    <Link
                                        className={styles["btn-details"]}
                                        to={`/details/edit/${recipe._id}`}
                                        replace
                                    >
                                        <i className="fas fa-edit"></i>
                                        Edit
                                    </Link>
                                    <Link
                                        className={styles["btn-details"]}
                                        onClick={() => showDeleteRecipe()}
                                    >
                                        <i className="fas fa-trash-alt"></i>
                                        Delete
                                    </Link>
                                </>
                                :
                                <>
                                    {!saved.includes(recipeId)
                                        ?
                                        <>
                                            <Link
                                                className={styles["btn-details"]}
                                                onClick={(ev) =>
                                                    saveHandler(ev, recipeId, user._id, user.accessToken)}
                                            >
                                                <i className="fas fa-bookmark"></i>
                                                Save
                                            </Link>
                                        </>
                                        : null
                                    }
                                    <Link className={styles["btn-details"]} to="/" download><i className="fas fa-download"></i>Download</Link>
                                </>
                            }
                        </div>
                    </article>
                </section>
            </div>
        </>
    );
}

export default Details;