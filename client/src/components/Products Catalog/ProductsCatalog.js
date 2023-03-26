import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PublicContext } from "../../contexts/PublicationContext";
import ProductItem from "./ProductItem";
import Spinner from "../Spinner/Spinner";
import styles from "./styles/productsCatalog.module.css";

const ProductsCatalog = () => {
    const [products, setProducts] = useState([]);
    const { getAllProducts } = useContext(PublicContext);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            getAllProducts()
                .then(result => {
                    setLoading(false);
                    setProducts(result)
                });
        }, [1500]);
    }, [getAllProducts]);

    return (
        <div className={styles["main-wrapper"]}>
            <Link className={styles["catalog-recipes"]} to="/catalog-recipes">
                Catalog Recipes
            </Link>
            <Link className={styles["catalog-products"]} to="/catalog-products">
                Catalog Products
            </Link>
            <section className={styles["catalog"]}>
                {loading
                    ? <Spinner />
                    :
                    <>
                        {
                            products.length > 0
                                ?
                                <>
                                    {products.map(product => <ProductItem key={product._id} {...product} />)}
                                </>
                                :
                                <>
                                    <h1
                                        className={`${styles["no-content"]}`}
                                    >
                                        There are no products created yet.
                                    </h1>
                                </>
                        }
                    </>
                }
            </section>
        </div>

    );
}

export default ProductsCatalog;