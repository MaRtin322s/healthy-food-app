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
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(products.length / 12);
    const indexOfLastItem = currentPage * 12;
    const indexOfFirstItem = indexOfLastItem - 12;
    const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            getAllProducts()
                .then(result => {
                    setLoading(false);
                    setProducts(result.reverse());
                });
        }, [1500]);
    }, [getAllProducts]);

    return (
        <div className={styles["main-wrapper"]}>
            <div>
                <Link className={styles["catalog-recipes"]} to="/catalog-recipes">
                    Catalog Recipes
                </Link>
                <Link className={styles["catalog-products"]} to="/catalog-products">
                    Catalog Products
                </Link>
            </div>
            {currentPage > 1 && (
                <button
                    className={styles["btn-pagination"]}
                    onClick={() => setCurrentPage(currentPage - 1)}
                >
                    Previous Page
                </button>
            )}
            {currentPage < totalPages && (
                <>
                    <button
                        className={styles["btn-pagination"]}
                        onClick={() => setCurrentPage(currentPage + 1)}
                    >
                        Next Page
                    </button>
                </>
            )}
            <h1 className={styles["curr-page"]}>Current Page: {currentPage}</h1>
            <section className={styles["catalog"]}>
                {loading
                    ? <Spinner />
                    :
                    <>
                        {
                            products.length > 0
                                ?
                                <>
                                    {currentItems.map(product => <ProductItem key={product._id} {...product} />)}
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