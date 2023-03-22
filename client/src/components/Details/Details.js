import { Link } from "react-router-dom";

import styles from "./styles/details.module.css";

const Details = () => {
    return (
        <div className={styles["wrap-main"]}>
            <section className={styles["details"]}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLpyUBeuso0JIz0uvwEUW8ieyBzNsnSe4GiA&usqp=CAU" alt="pizza" />
                <article>
                    <h1 className={styles["details-heading"]}>Pizza "Margherita"</h1>
                    <section className={styles["recipe-data"]}>
                        {/* eslint-disable-next-line */}
                        <ul className={styles["ingredients"]} role={"list"}>
                            <li><h2>Ingredients:</h2></li>
                            <li>flour - 225 g</li>
                            <li>left - 1 tsp.</li>
                            <li>May - 1 tsp dry</li>
                            <li>olive oil</li>
                            <li>water - 6 tbsp. lukewarm</li>
                            <li>tomatoes - 6 pcs. sliced</li>
                            <li>mozzarella - 175 g</li>
                            <li>pepper</li>
                            <li>olive oil</li>
                            <li>basil</li>
                        </ul>
                        <div>
                            <h2>Preparation:</h2>
                            <p>
                                Sift the flour with the salt into a bowl and add the yeast. Make a hole in the center and pour in the water and oil.
                                Knead a soft pizza dough and leave it in a warm place for an hour. Knead once more and roll it into a thin crust. Transfer to a greased pan.
                                Cut the tomatoes and arrange them on the dough, put the mozzarella slices on them. Sprinkle with pepper and salt, basil and a little olive oil.
                                Bake the Margherita pizza in a 230 degree oven for 15-20 minutes.
                            </p>
                        </div>
                    </section>
                    <div className={styles["buttons"]}>
                        <Link className={styles["btn-details"]} to="/"><i className="fas fa-bookmark"></i>Save</Link>
                        <Link className={styles["btn-details"]} to="/"><i className="fas fa-edit"></i>Edit</Link>
                        <Link className={styles["btn-details"]} to="/"><i className="fas fa-trash-alt"></i>Delete</Link>
                    </div>
                </article>
            </section>
        </div>
    );
}

export default Details;