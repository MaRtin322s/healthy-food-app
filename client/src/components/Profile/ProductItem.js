import styles from "./styles/profile.module.css";

const ProductItem = () => {
    return (
        <article className={styles["catalog-recipe"]}>
            <img
                src="https://www.collinsdictionary.com/images/full/tomato_281240360.jpg"
                alt="tomatoes"
            />
            <h3 className={styles["catalog-recipe-title"]}>Tomatoes</h3>
            <p className={styles["catalog-recipe-category"]}>Type: Vegetables</p>
            <a className={styles["details-btn"]} href="/">
                Details
            </a>
        </article>
    );
}

export default ProductItem;