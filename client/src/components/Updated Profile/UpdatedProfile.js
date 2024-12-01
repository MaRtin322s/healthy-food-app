import { useContext, useEffect, useReducer, useState } from 'react';
import styles from './styles/updatedProfile.module.css';
import { AuthContext } from '../../contexts/UserContext';
import * as userService from "../../services/userServices";
import * as recipesService from '../../services/recipeService';
import * as productsService from '../../services/productService';
import { initialState, reducer } from './data/data';
import RecipeItem from '../Profile/RecipeItem';
import ProductItem from '../Profile/ProductItem';
import Delete from '../Profile/Delete';
import { useDeleteHandler } from '../../hooks/useDeleteHandler';
import EditProfile from '../Edit Profile/EditProfile';

/* eslint-disable jsx-a11y/anchor-has-content */
function UpdatedProfile() {
    const { user } = useContext(AuthContext);
    const deleteHandler = useDeleteHandler();
    const [state, dispatch] = useReducer(reducer, initialState);
    const [openDialog, setOpenDialog] = useState({
        edit: false,
        delete: false
    });

    console.dir(user);
    

    useEffect(() => {
        Promise.all([
            userService.getUser(user._id),
            recipesService.getOwned(user._id),
            productsService.getOwned(user._id),
            recipesService.getSavedRecipes(user._id, user.accessToken)
        ])
            .then(result => {
                dispatch({ type: "SET_DATA", data: result[0] });
                dispatch({ type: "SET_OWN_RECIPES", ownRecipes: result[1] });
                dispatch({ type: "SET_OWN_PRODUCTS", ownProducts: result[2] });
                dispatch({ type: "SET_SAVED", saved: result[3] });
            })
    }, [user._id, user.accessToken, state.data]);

    const closeDeleteModal = () => {
        setOpenDialog(state => ({
            ...state,
            delete: !state.delete
        }))
    };

    const closeEditModal = () => {
        setOpenDialog(state => ({
            ...state,
            edit: !state.edit
        }));
    };

    const submitHandler = (ev, userNewData, userId, token) => {
        ev.preventDefault();

        userService.updateUser(userId, userNewData, token)
            .then((updatedUser) => {
                dispatch({ type: "SET_DATA", data: updatedUser });
            });

        setOpenDialog(state => ({
            ...state,
            edit: !state.edit
        }));
    }

    return (
        <>
            {
                openDialog.delete &&
                <Delete
                    userId={user._id}
                    deleteHandler={deleteHandler}
                    closeDeleteModal={closeDeleteModal}
                />
            }
            {
                openDialog.edit &&
                <EditProfile
                    closeEditModal={closeEditModal}
                    {...state.data}
                    submitHandler={submitHandler}
                />
            }
            <div className="container-fluid newsfeed d-flex" id="wrapper">
                <div className="row newsfeed-size">
                    <div className="col-md-12 p-0">
                        <div className="row profile-right-side-content">
                            <div className={styles["user-profile"]}>
                                <div className={styles["profile-header-background"]}>
                                </div>
                                <div className="row profile-rows">
                                    <div className="col-md-3">
                                        <div className="profile-info-left">
                                            <div className="text-center">
                                                <div className="profile-img w-shadow">
                                                    <div className="profile-img-overlay" />
                                                    <img
                                                        src={state.data.imageUrl || user.imageUrl}
                                                        alt="Avatar"
                                                        className="avatar img-circle"
                                                    />
                                                </div>
                                                <p className="profile-fullname mt-3">{`${state.data.firstName || user.firstName} ${state.data.lastName || user.lastName}`}</p>
                                                <p className="profile-username mb-3 text-muted">
                                                    {state.data.email || user.email}
                                                </p>
                                            </div>
                                            <div className="intro mt-5 mv-hidden">
                                                <div className="intro-item d-flex justify-content-between align-items-center">
                                                    <p className="intro-title text-muted">
                                                        Created Recipes: {state.ownRecipes.length}
                                                    </p>
                                                    <p className="intro-title text-muted">
                                                        Created Products: {state.ownProducts.length}
                                                    </p>
                                                    <p className="intro-title text-muted">
                                                        Saved Recipes: {state.saved.length}
                                                    </p>
                                                </div>
                                                <div>
                                                    <button
                                                        className={styles['btn-edit']}
                                                        onClick={() => setOpenDialog(state => ({
                                                            ...state,
                                                            edit: !state.edit
                                                        }))}
                                                    >
                                                        Edit Profile
                                                    </button>

                                                    <button
                                                        className={styles['btn-delete']}
                                                        onClick={() => setOpenDialog(state => ({
                                                            ...state,
                                                            delete: !state.delete
                                                        }))}
                                                    >
                                                        Delete Profile
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-9 p-0" id={`${styles["wrapper"]}`}>
                                        <div className="profile-info-right">
                                            {/* Posts section */}
                                            <div className="row">
                                                <div className="col-md-9 profile-center">
                                                    <ul className={`${"list-inline profile-links d-flex justify-content-between w-shadow rounded"} ${"#wrapper div.col-md-9.p-0 ul"}`}>
                                                        <li className="list-inline-item profile-active">
                                                            <h3>Created Recipes</h3>
                                                            {/* eslint-disable-next-line */}
                                                            <ul className={styles["user-action"]} role={"list"}>
                                                                {state.ownRecipes.length > 0
                                                                    ?
                                                                    state.ownRecipes.map(x => <li key={x._id}><RecipeItem {...x} /></li>)
                                                                    :
                                                                    <p>There are no created recipes!</p>
                                                                }
                                                            </ul>
                                                        </li>
                                                        <li className="list-inline-item">
                                                            <h3>Created Products</h3>
                                                            {/* eslint-disable-next-line */}
                                                            <ul className={styles["user-action"]} role={"list"}>
                                                                {state.ownProducts.length > 0
                                                                    ?
                                                                    state.ownProducts.map(x => <li key={x._id}><ProductItem {...x} /></li>)
                                                                    :
                                                                    <p>There are no created products!</p>
                                                                }
                                                            </ul>
                                                        </li>
                                                        <li className="list-inline-item profile-active">
                                                            <h3>Saved Recipes</h3>
                                                            {/* eslint-disable-next-line */}
                                                            <ul className={`${styles["saved-recipes"]}`} role={"list"}>
                                                                {state.saved.length > 0
                                                                    ?
                                                                    state.saved.map(x => <li key={x._id}><RecipeItem {...x} /></li>)
                                                                    : <p>There are no saved recipes!</p>
                                                                }
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default UpdatedProfile;