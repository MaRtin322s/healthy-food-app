import { useContext, useEffect, useReducer } from "react";
import { AuthContext } from "../../contexts/UserContext";
import * as service from "../../services/userServices";
import * as recipeService from "../../services/recipeService";
import * as productService from "../../services/productService";
import RecipeItem from "./RecipeItem";
import ProductItem from "./ProductItem";
import { initialState, reducer } from "./data/data";
import styles from "./styles/profile.module.css";

const Profile = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        Promise.all([
            service.getUser(user._id),
            recipeService.getOwned(user._id),
            productService.getOwned(user._id),
            recipeService.getSavedRecipes(user._id, user.accessToken)
        ])
            .then(result => {
                dispatch({ type: "SET_DATA", data: result[0] })
                dispatch({ type: "SET_OWN_RECIPES", ownRecipes: result[1] })
                dispatch({ type: "SET_OWN_PRODUCTS", ownProducts: result[2] })
                dispatch({ type: "SET_SAVED", saved: result[3] })
            });
    }, [user._id, user.accessToken]);

    return (
        <>
            <section className={styles["profile-section"]}>
                <h1 className={styles["profile-heading"]}>Personal Information:</h1>
                <article className={styles["profile-info"]}>
                    <img
                        className={styles["profile-photo"]}
                        src={state.data.imageUrl}
                        alt="user"
                    />
                    {/* eslint-disable-next-line */}
                    <ul className={styles["personal-info"]} role={"list"}>
                        <li>First Name: {state.data.firstName}</li>
                        <li>Last Name: {state.data.lastName}</li>
                        <li>Email: {state.data.email}</li>
                        <li>
                        </li>
                        <li>
                            <div className={styles["actions"]}>
                                <p>Created Recipes: {state.ownRecipes.length}</p>
                                <p>Created Products: {state.ownProducts.length}</p>
                                <p>Saved Recipes: {state.saved.length}</p>
                            </div>
                        </li>
                    </ul>
                </article>
                <div className={styles["empty"]}></div>
                <h1 className={styles["profile-heading"]}>My Publications:</h1>
                <section className={styles["user-actions"]}>
                    <article className={styles["created-recipes"]}>
                        <h1>Created Recipes:</h1>
                        {/* eslint-disable-next-line */}
                        <ul className={styles["user-action"]} role={"list"}>
                            {state.ownRecipes.length > 0
                                ?
                                state.ownRecipes.map(x => <li key={x._id}><RecipeItem {...x} /></li>)
                                :
                                null
                            }
                        </ul>
                    </article>
                    <article className={styles["created-products"]}>
                        <h1>Created products:</h1>
                        {/* eslint-disable-next-line */}
                        <ul className={styles["user-action"]} role={"list"}>
                            {state.ownProducts.length > 0
                                ?
                                state.ownProducts.map(x => <li key={x._id}><ProductItem {...x} /></li>)
                                :
                                null
                            }
                        </ul>
                    </article>
                    <article className={styles["saved-recipes"]}>
                        <h1>Saved Recipes:</h1>
                        {/* eslint-disable-next-line */}
                        <ul className={styles["user-action"]} role={"list"}>
                            {state.saved.length > 0
                                ?
                                state.saved.map(x => <li key={x._id}><RecipeItem {...x} /></li>)
                                : null
                            }
                        </ul>
                    </article>
                </section>
            </section>
        </>
    );
};

export default Profile;