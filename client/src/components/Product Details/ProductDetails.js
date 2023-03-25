import { Link, useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/UserContext";
import styles from "./styles/productDetails.module.css";
import * as service from "../../services/productService";
import { PublicContext } from "../../contexts/PublicationContext";
import Delete from "../Delete Products/DeleteProducts";

const ProductDetails = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const { productId } = useParams();
    const [product, setProduct] = useState([]);
    const [showDelete, setShowDelete] = useState(false);
    const { getOneProduct } = useContext(PublicContext);

    useEffect(() => {
        getOneProduct(productId)
            .then(result => setProduct(result));
    }, [getOneProduct, productId]);

    const deleteHandler = (ev, productId, token) => {
        ev.preventDefault();
        service.deleteProduct(productId, token)
            .then(() => navigate("/catalog-products", { replace: true }));
    }

    const closeHandler = () => {
        setShowDelete(false);
    }

    const showDeleteProduct = () => {
        setShowDelete(true);
    }

    return (
        <>
            {showDelete &&
                <Delete
                    closeHandler={closeHandler}
                    title={product.title}
                    type="product"
                    deleteHandler={deleteHandler}
                    _id={productId}
                />
            }
            <div className={styles["wrap-main"]}>
                <section className={styles["details"]}>
                    <img src={product.imageUrl} alt="pizza" />
                    <article>
                        <h1 className={styles["details-heading"]}>{product.title}</h1>
                        <section className={styles["recipe-data"]}>
                            {/* eslint-disable-next-line */}
                            <ul className={styles["ingredients"]} role={"list"}>
                                <li className={styles["first-item"]}>Nutrition: </li>
                                {product.nutrition?.map(x => <li key={x}>{x}</li>)}
                            </ul>
                            <div>
                                <h2>Description:</h2>
                                <p>{product.description}</p>
                            </div>
                        </section>
                        <div className={styles["buttons"]}>
                            {user._id === product._ownerId
                                ?
                                <>
                                    <Link 
                                        className={styles["btn-details"]} 
                                        to={`/details/edit/products/${productId}`}
                                    >
                                        <i className="fas fa-edit"></i>
                                        Edit
                                    </Link>
                                    <Link
                                        className={styles["btn-details"]}
                                        onClick={() => showDeleteProduct()}
                                    >
                                        <i className="fas fa-trash-alt"></i>
                                        Delete
                                    </Link>
                                </>
                                :
                                <>
                                    <Link className={styles["btn-details"]} to="/"><i className="fas fa-bookmark"></i>Save</Link>
                                    <Link className={styles["btn-details"]} to="/"><i class="far fa-calendar-times"></i>Unsave</Link>
                                </>
                            }
                        </div>
                    </article>
                </section>
            </div>
        </>
    );
}

export default ProductDetails;