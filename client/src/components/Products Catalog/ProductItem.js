import { Link } from "react-router-dom";
import styles from "./styles/productsCatalog.module.css";

export const ProductItem = ({
    title,
    imageUrl,
    type,
    _id
}) => {
    return (
        <article className={styles["catalog-recipe"]}>
            <img
                src={imageUrl}
                alt={title}
            />
            <h3 className={styles["catalog-recipe-title"]}>{title}</h3>
            <p className={styles["catalog-recipe-category"]}>Type: {type}</p>
            <Link className={styles["details-btn"]} to={`/details/${_id}`}>
                Details
            </Link>
        </article>
    );
};

export default ProductItem;