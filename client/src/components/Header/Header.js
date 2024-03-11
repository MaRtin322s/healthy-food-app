import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../contexts/UserContext";

import styles from "./styles/header.module.css";
import resp from "./styles/responsive.module.css";
import logo from "./images/logo.png";

const Header = () => {
    const { user } = useContext(AuthContext);
    return (
        <header className={`${styles["navigation"]} ${resp["navigation"]}`}>
            <nav>
                {/* eslint-disable-next-line */}
                <ul className={`${styles["nav-bar"]} ${resp["nav-bar"]}`} role={"list"}>
                    <li className={styles["nav-bar-logo"]}>
                        <img src={logo} alt="logo" />
                    </li>
                    <li className={styles["nav-item"]}>
                        <NavLink
                            to="/"
                            style={({ isActive }) =>
                                isActive ? { backgroundColor: 'black', color: 'white' } : {}
                            }
                        >
                            <i className="fas fa-home"></i>
                            Home
                        </NavLink>
                    </li>
                    <li className={styles["nav-item"]}>
                        <NavLink
                            to="/catalog-recipes"
                            style={({ isActive }) =>
                                isActive ? { backgroundColor: 'black', color: 'white' } : {}
                            }
                        >
                            <i className="fas fa-calendar-check"></i>
                            Calatog
                        </NavLink>
                    </li>
                    {user.accessToken
                        ?
                        <>
                            <li className={styles["nav-item"]}>
                                <NavLink
                                    to="/create-recipes"
                                    style={({ isActive }) =>
                                        isActive ? { backgroundColor: 'black', color: 'white' } : {}
                                    }
                                >
                                    <i className="fas fa-share"></i>
                                    Share
                                </NavLink>
                            </li>
                            <li className={styles["nav-item"]}>
                                <NavLink
                                    to="/profile"
                                    style={({ isActive }) =>
                                        isActive ? { backgroundColor: 'black', color: 'white' } : {}
                                    }
                                >
                                    <i className="fas fa-user-circle"></i>
                                    Profile
                                </NavLink>
                            </li>
                            <li className={styles["nav-item"]}>
                                <NavLink
                                    to="/bmi-calculator"
                                    style={({ isActive }) =>
                                        isActive ? { backgroundColor: 'black', color: 'white' } : {}
                                    }
                                >
                                    <i className="fas fa-calculator"></i>
                                    Daily Plan Generator
                                </NavLink>
                            </li>
                            <li className={styles["nav-item"]}>
                                <NavLink
                                    to="/logout"
                                    style={({ isActive }) =>
                                        isActive ? { backgroundColor: 'black', color: 'white' } : {}
                                    }
                                >
                                    <i className="fas fa-sign-out-alt"></i>
                                    Logout
                                </NavLink>
                            </li>
                        </>
                        :
                        <>
                            <li className={styles["nav-item"]}>
                                <NavLink
                                    to="/login"
                                    style={({ isActive }) =>
                                        isActive ? { backgroundColor: 'black', color: 'white' } : {}
                                    }
                                >
                                    <i className="fas fa-sign-in-alt"></i>
                                    Log In
                                </NavLink>
                            </li>
                            <li className={styles["nav-item"]}>
                                <NavLink
                                    to="/register"
                                    style={({ isActive }) =>
                                        isActive ? { backgroundColor: 'black', color: 'white' } : {}
                                    }
                                >
                                    <i className="fas fa-user-plus"></i>
                                    Sign Up
                                </NavLink>
                            </li>
                        </>
                    }
                </ul>
            </nav>
        </header>
    );
}

export default Header;