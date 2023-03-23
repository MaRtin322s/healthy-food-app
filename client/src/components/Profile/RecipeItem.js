import styles from "./RecipeItem";

const RecipeItem = () => {
    return (
        <article className={styles["catalog-recipe"]}>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLpyUBeuso0JIz0uvwEUW8ieyBzNsnSe4GiA&usqp=CAU"
                alt="pizza"
            />
            <h3 className={styles["catalog-recipe-title"]}>Pizza</h3>
            <p className={styles["catalog-recipe-category"]}>Category: Main Dishes</p>
            <a className={styles["details-btn"]} href="/">
                Details
            </a>
        </article>
    );
}

export default RecipeItem;