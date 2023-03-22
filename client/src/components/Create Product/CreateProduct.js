import { Link } from "react-router-dom";

import styles from "./styles/createProduct.module.css";
import background from "./images/backgr.jpg";

const CreateProduct = () => {
    return (
        <>
            <section className={styles["create-page"]}>
                <article className={styles["info"]}>
                    <ul className={styles["steps"]}>
                        <li>Create products information:</li>
                        <li>The title specifies the name of the product.</li>
                        <li>
                            Nutrition information list: A list of all the information of the products like calories, fat and ect.
                            NOTE: Every nutrition must be on the new line!
                        </li>
                        <li>
                            Description: Products description.
                        </li>
                        <li>
                            Type - specifies the type of the product - Vegetable, fruits and ect.
                        </li>
                    </ul>
                </article>
                <form className={styles["create"]}>
                    <h1 className={styles["create-heading"]}>Create Products</h1>
                    <div className="links">
                        <Link className={styles["create-recipe"]} to="/create-recipes" replace>
                            Create Recipe
                        </Link>
                        <Link className={styles["create-product"]} to="/create-products" replace>
                            Create Product
                        </Link>
                    </div>
                    <label htmlFor="title">Title:</label>
                    <div>
                        <input type="text" id="title" name="title" placeholder="Title..."/>
                    </div>
                    <label htmlFor="type">Type:</label>
                    <div>
                        <input type="text" id="type" name="type" placeholder="Fruits..."/>
                    </div>
                    <label htmlFor="imageUrl">Image Url:</label>
                    <div>
                        <input type="text" id="imageUrl" name="imageUrl" placeholder="https://..."/>
                    </div>
                    <label htmlFor="nutrition">Nutrition information:</label>
                    <div>
                        <textarea
                            cols={20}
                            rows={5}
                            id="nutrition"
                            name="nutrition"
                            defaultValue={""}
                            placeholder="Calories: 1500"
                        />
                    </div>
                    <label htmlFor="description">Description:</label>
                    <div>
                        <textarea
                            cols={20}
                            rows={5}
                            id="description"
                            name="description"
                            defaultValue={""}
                            placeholder="Product description..."
                        />
                    </div>
                    <div>
                        <input
                            className={styles["create-btn"]}
                            type="submit"
                            value={"Create product"}
                        />
                    </div>
                </form>
                <img className={styles["background-img"]} src={background} alt="background" />
            </section>
        </>
    );
}

export default CreateProduct;