import styles from "./styles/home.module.css";

const RecipeItem = () => {
    return (
        <article className={styles["recipe-one"]}>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLpyUBeuso0JIz0uvwEUW8ieyBzNsnSe4GiA&usqp=CAU"
                alt="pizza"
            />
            <h3 className={styles["recipe-title"]}>Pizza</h3>
            <p className={styles["recipe-category"]}>Category: Main Dishes</p>
            <Link className={styles["last-recipes-btn"]} to="/details">
                Details
            </Link>
        </article>
    );
}

export default RecipeItem;