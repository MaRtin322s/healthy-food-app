import { useContext, useReducer, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/UserContext";
import * as service from "../../services/productService";
import { initData, reducer } from "./data/data";
import { changeHandler } from "../../utils/handleChangeEvent";
import Error from '../Error/Error';
import styles from "./styles/createProduct.module.css";
import resp from "./styles/responsive.module.css";
import useFileReader from "../../hooks/useFileReader";

const CreateProduct = () => {
    const [state, dispatch] = useReducer(reducer, initData);
    const navigate = useNavigate();
    const [dataUrl, setUrl] = useFileReader();
    const { user } = useContext(AuthContext);
    const [error, setError] = useState({
        status: 'false',
        message: '',
        show: false
    });

    const submitHandler = (ev, data) => {
        ev.preventDefault();
        const nutrition = data.nutrition.split("\n");
        data = { ...data, imageUrl: dataUrl.dataURL };

        service.createProduct({ ...data, nutrition }, user.accessToken, user._id)
            .then((res) => {
                if (res.message) {
                    setError(() => ({
                        status: true,
                        message: res.message.errors.imageUrl?.properties.message,
                        show: true
                    }));
                } else {
                    navigate("/catalog-products", { replace: true });
                }
            });


        setTimeout(() => {
            setError(state => ({
                ...state,
                show: false
            }));
        }, 5000);
    };

    return (
        <>
            {error.show && <Error message={error.message} />}
            <section className={`${styles["create-page"]} ${resp["create-page"]}`}>
                <form
                    className={`${styles["create"]} ${resp["create"]}`}
                    onSubmit={(ev) => submitHandler(ev, state)}
                >
                    <h1 className={`${styles["create-heading"]} ${resp["create-heading"]}`}
                    >
                        Share Products
                    </h1>
                    <div className={`${styles["links"]} ${resp["links"]}`}>
                        <Link className={`${styles["create-recipe"]} ${resp["create-recipe"]}`}
                            to="/create-recipes"
                            replace
                        >
                            Share Recipe
                        </Link>
                        <Link
                            className={`${styles["create-product"]} ${resp["create-product"]}`}
                            to="/create-products"
                            replace
                        >
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
                            onChange={(ev) => changeHandler(ev, dispatch)}
                            value={state.title}
                            required
                        />
                    </div>
                    <label htmlFor="type">Type:</label>
                    <div>
                        <input
                            type="text"
                            id="type"
                            name="type"
                            placeholder="Fruits..."
                            onChange={(ev) => changeHandler(ev, dispatch)}
                            value={state.type}
                            required
                        />
                    </div>
                    <label htmlFor="imageUrl">Image:</label>
                    <div>
                        <input
                            type="file"
                            id="imageUrl"
                            placeholder="https://..."
                            onChange={(ev) => setUrl(ev, dispatch)}
                            name={dataUrl.imageUrl}
                            required
                        />
                    </div>
                    <label htmlFor="nutrition">Nutrition information:</label>
                    <p className={`${styles["ingredients-note"]} ${resp["ingredients-note"]}`}
                    >
                        NOTE: Every nutrition must be on the new line!
                    </p>
                    <div>
                        <textarea
                            cols={20}
                            rows={5}
                            id="nutrition"
                            name="nutrition"
                            placeholder="Calories: 1500"
                            onChange={(ev) => changeHandler(ev, dispatch)}
                            value={state.nutrition}
                            required
                        />
                    </div>
                    <label htmlFor="description">Description:</label>
                    <div>
                        <textarea
                            cols={20}
                            rows={5}
                            id="description"
                            name="description"
                            placeholder="Product description..."
                            onChange={(ev) => changeHandler(ev, dispatch)}
                            value={state.description}
                            required
                        />
                    </div>
                    <div>
                        <input
                            className={`${styles["create-btn"]} ${resp["create-btn"]}`}
                            type="submit"
                            value={"Share product"}
                        />
                    </div>
                </form>
            </section>
        </>
    );
}

export default CreateProduct;