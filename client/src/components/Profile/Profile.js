import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/UserContext";
import * as service from "../../services/userServices";
import * as recipeService from "../../services/recipeService";
import * as productService from "../../services/productService";
import styles from "./styles/profile.module.css";
import RecipeItem from "./RecipeItem";
import ProductItem from "./ProductItem";

const Profile = () => {
    const { user } = useContext(AuthContext);
    const [data, setData] = useState({});
    const [ownRecipes, setRecipes] = useState([]);
    const [ownProducts, setProducts] = useState([]);

    useEffect(() => {
        service.getUser(user._id)
            .then(result => setData(result));
        recipeService.getOwned(user._id)
            .then(result => setRecipes(result));
        productService.getOwned(user._id)
            .then(result => setProducts(result));
    }, [user._id]);

    return (
        <section className={styles["profile-section"]}>
            <h1 className={styles["profile-heading"]}>Personal Information:</h1>
            <article className={styles["profile-info"]}>
                <img
                    className={styles["profile-photo"]}
                    src={data.imageUrl}
                    alt="user"
                />
                {/* eslint-disable-next-line */}
                <ul className={styles["personal-info"]} role={"list"}>
                    <li>First Name: {data.firstName}</li>
                    <li>Last Name: {data.lastName}</li>
                    <li>Email: {data.email}</li>
                    <div className={styles["actions"]}>
                        <h1>Created Recipes: {ownRecipes.length}</h1>
                        <h1>Saved Recipes: 0</h1>
                        <h1>Created Products: 0</h1>
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
                        {ownRecipes.length > 0
                            ?
                            ownRecipes.map(x => <li key={x._id}><RecipeItem {...x} /></li>)
                            :
                            null
                        }
                    </ul>
                </article>
                <article className={styles["created-products"]}>
                    <h1>Created products:</h1>
                    {/* eslint-disable-next-line */}
                    <ul className={styles["user-action"]} role={"list"}>
                        {ownProducts.length > 0
                            ?
                            ownProducts.map(x => <li key={x._id}><ProductItem {...x} /></li>)
                            :
                            null
                        }
                    </ul>
                </article>
                <article className={styles["saved-recipes"]}>
                    <h1>Saved Recipes:</h1>
                    {/* eslint-disable-next-line */}
                    <ul className={styles["user-action"]} role={"list"}></ul>
                </article>
            </section>
        </section>
    );
}

export default Profile;