import styles from "./styles/header.module.css";
import logo from "./images/logo.png";
import { Link } from "react-router-dom";

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
                        <Link to="/">Home</Link>
                    </li>
                    <li className={styles["nav-item"]}>
                        <Link to="/catalog">Calatog</Link>
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
                        <Link to="/login">Log In</Link>
                    </li>
                    <li className={styles["nav-item"]}>
                        <Link to="/register">Sign Up</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;