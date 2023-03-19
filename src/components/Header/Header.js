import styles from "./styles/header.module.css";
import logo from "./images/logo.png";
import backgrond from "./images/backgr.jpg";

const Header = () => {
    return (
        <header className={styles["navigation"]}>
            <nav>
                {/* eslint-disable-next-line */}
                <ul className={styles["nav-bar"]}role={"list"}>
                    <li className={styles["nav-bar-logo"]}>
                        <img src={logo} alt="logo" />
                    </li>
                    <li className={styles["nav-item"]}>
                        <a href="/">Home</a>
                    </li>
                    <li className={styles["nav-item"]}>
                        <a href="/catalog">Recipes Calatog</a>
                    </li>
                    <li className={styles["nav-item"]}>
                        <a href="/create">Create Recipe</a>
                    </li>
                    <li className={styles["nav-item"]}>
                        <a href="/profile">Profile</a>
                    </li>
                    <li className={styles["nav-item"]}>
                        <a href="/logout">Logout</a>
                    </li>
                    <li className={styles["nav-item"]}>
                        <a href="/login">Log In</a>
                    </li>
                    <li className={styles["nav-item"]}>
                        <a href="/register">Sign Up</a>
                    </li>
                </ul>
            </nav>
            <img className={styles["background-img"]} src={backgrond} alt="background" />
            <article className={styles["heading-info"]}>
                <h1 className={styles["heading"]}>Your favourite food - Delivered hot &amp; fresh</h1>
                <p className={styles["heading-para"]}>
                    Healthy switcher chefs do all the prep work like peeling, chopping &amp;
                    marinating, so you can cook a fresh food.
                </p>
                <a className={styles["heading-link"]} href="/">
                    Recipes Catalog
                </a>
                <div className={styles["header-empty"]} />
            </article>
        </header>
    );
}

export default Header;