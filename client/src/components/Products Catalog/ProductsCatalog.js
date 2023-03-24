import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PublicContext } from "../../contexts/PublicationContext";
import ProductItem from "./ProductItem";

import styles from "./styles/productsCatalog.module.css";

const ProductsCatalog = () => {
    const [products, setProducts] = useState([]);
    const { getAllProducts } = useContext(PublicContext);

    useEffect(() => {
        getAllProducts()
            .then(result => setProducts(result));
    }, [getAllProducts]);

    console.log(products);

    return (
        <div className={styles["main-wrapper"]}>
            <Link className={styles["catalog-recipes"]} to="/catalog-recipes">
                Catalog Recipes
            </Link>
            <Link className={styles["catalog-products"]} to="/catalog-products">
                Catalog Products
            </Link>
            <section className={styles["catalog"]}>
                {products.length > 0
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
            </section>
        </div>

    );
}

export default ProductsCatalog;