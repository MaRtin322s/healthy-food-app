import { Link, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/UserContext";
import styles from "./styles/productDetails.module.css";
import { PublicContext } from "../../contexts/PublicationContext";
import Delete from "../Delete Details/DeleteDetails";

const ProductDetails = () => {
    const { user } = useContext(AuthContext);
    const { productId } = useParams();
    const [product, setProduct] = useState([]);
    const [showDelete, setShowDelete] = useState(false);
    const { getOneProduct } = useContext(PublicContext);

    useEffect(() => {
        getOneProduct(productId)
            .then(result => setProduct(result));
    }, [getOneProduct, productId]);

    const closeHandler = () => {
        setShowDelete(false);
    }

    return (
        <>
            {showDelete && 
                <Delete 
                    closeHandler={closeHandler} 
                    title={product.title} 
                    type="product"
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
                            {user._id
                                ?
                                <>
                                    <Link className={styles["btn-details"]} to="/"><i className="fas fa-edit"></i>Edit</Link>
                                    <Link 
                                        className={styles["btn-details"]} 
                                    >
                                        <i className="fas fa-trash-alt"></i>
                                        Delete
                                    </Link>
                                </>
                                :
                                <>
                                    <Link className={styles["btn-details"]} to="/"><i className="fas fa-bookmark"></i>Save</Link>
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

export default ProductDetails;