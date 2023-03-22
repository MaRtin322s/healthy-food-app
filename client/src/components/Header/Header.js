import { useContext } from "react";
import { Link } from "react-router-dom";

import { AuthContext } from "../../contexts/UserContext";

import styles from "./styles/header.module.css";
import resp from "./styles/responsive.module.css";
import logo from "./images/logo.png";

const Header = () => {
    const { user } = useContext(AuthContext);
    return (
        <header className={styles["navigation"]}>
            <nav>
                {/* eslint-disable-next-line */}
                <ul className={`${styles["nav-bar"]} ${resp["nav-bar"]}`} role={"list"}>
                    <li className={styles["nav-bar-logo"]}>
                        <img src={logo} alt="logo" />
                    </li>
                    <li className={styles["nav-item"]}>
                        <Link to="/"><i class="fas fa-home"></i>Home</Link>
                    </li>
                    <li className={styles["nav-item"]}>
                        <Link to="/catalog-recipes">Calatog</Link>
                    </li>
                    {user.accessToken
                        ?
                        <>
                            <li className={styles["nav-item"]}>
                                <Link to="/create-recipes">Create</Link>
                            </li>
                            <li className={styles["nav-item"]}>
                                <Link to="/profile"><i class="fas fa-user-circle"></i>Profile</Link>
                            </li>
                            <li className={styles["nav-item"]}>
                                <Link to="/logout"><i class="fas fa-sign-out-alt"></i>Logout</Link>
                            </li>
                        </>
                        :
                        <>
                            <li className={styles["nav-item"]}>
                                <Link to="/login">Log In</Link>
                            </li>
                            <li className={styles["nav-item"]}>
                                <Link to="/register"><i class="fas fa-user-plus"></i>Sign Up</Link>
                            </li>
                        </>
                    }
                </ul>
            </nav>
        </header>
    );
}

export default Header;