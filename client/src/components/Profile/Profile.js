import { useContext, useEffect, memo, useReducer } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../../contexts/UserContext";
import * as service from "../../services/userServices";
import * as recipeService from "../../services/recipeService";
import * as productService from "../../services/productService";
import RecipeItem from "./RecipeItem";
import ProductItem from "./ProductItem";
import Delete from "./Delete";
import EditProfile from "../Edit Profile/EditProfile";
import { initialState, reducer } from "./data/data";

import styles from "./styles/profile.module.css";
import { showDeleteModal } from "../../utils/showModalHandlers";

const Profile = memo(() => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { user, userLogout } = useContext(AuthContext);
    const navigate = useNavigate();

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

    const closeDeleteModal = () => dispatch({ type: "SET_SHOW_DELETE", showDelete: false });
    const showEditModal = () => dispatch({ type: "SET_SHOW_EDIT", showEdit: true });
    const closeEditModal = () => dispatch({ type: "SET_SHOW_EDIT", showEdit: false });

    const deleteHandler = (userId) => {
        Promise.all([
            service.deleteAccount(userId),
            recipeService.deleteComment(userId)
        ])
            .then(() => {
                userLogout();
                navigate("/", { replace: true });
            });
    };

    const submitHandler = (ev, data, id, token) => {
        ev.preventDefault();

        service.updateUser(id, data, token)
            .then(() => {
                service.getUser(id)
                    .then((res) => {
                        dispatch({ type: "SET_DATA", data: res });
                    })
                closeEditModal();
                navigate("/profile", { replace: true });
            });
    };

    return (
        <>
            {state.showDelete &&
                <Delete
                    userId={user._id}
                    closeDeleteModal={closeDeleteModal}
                    deleteHandler={deleteHandler}
                />
            }

            {state.showEdit &&
                <EditProfile
                    closeEditModal={closeEditModal}
                    {...state.data}
                    token={user.accessToken}
                    submitHandler={submitHandler}
                />
            }
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
                        <button
                            className={`${styles["delete-account"]} ${styles["delete-icon-logo"]}`}
                            onClick={() => showDeleteModal(dispatch)}
                        >
                            <i className="fas fa-trash-alt"></i>
                        </button>
                        <button
                            className={`${styles["edit-account"]} ${styles["edit-icon-logo"]}`}
                            onClick={() => showEditModal()}
                        >
                            <i className="fas fa-edit"></i>
                        </button>
                        <li>First Name: {state.data.firstName}</li>
                        <li>Last Name: {state.data.lastName}</li>
                        <li>Email: {state.data.email}</li>
                        <div className={styles["actions"]}>
                            <p>Created Recipes: {state.ownRecipes.length}</p>
                            <p>Created Products: {state.ownProducts.length}</p>
                            <p>Saved Recipes: {state.saved.length}</p>
                        </div>
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
});

export default Profile;