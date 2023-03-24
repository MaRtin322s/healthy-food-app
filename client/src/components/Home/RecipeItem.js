import { Link } from "react-router-dom";
import styles from "./styles/home.module.css";

const RecipeItem = ({
    title,
    category,
    imageUrl,
    _id
}) => {
    return (
        <article className={styles["recipe-one"]}>
            <img
                src={imageUrl}
                alt={title}
            />
            <h3 className={styles["recipe-title"]}>{title}</h3>
            <p className={styles["recipe-category"]}>Category: {category}</p>
            <Link className={styles["last-recipes-btn"]} to={`/details/${_id}`}>
                Details
            </Link>
        </article>
    );
}

export default RecipeItem;