import { useContext, useReducer, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import resp from "./styles/responsive.module.css";

import { AuthContext } from "../../contexts/UserContext";
import * as validations from "../../utils/validations";
import * as service from "../../services/userServices";
import { initData, reducer } from "./data/data";
import Error from "../Error/Error";

import styles from "./styles/register.module.css";
import useFileReader from "../../hooks/useFileReader";

const Register = () => {
    const navigate = useNavigate();
    // eslint-disable-next-line
    const [image, setImage] = useFileReader();
    const { userLogin } = useContext(AuthContext);
    const emailRegExp = new RegExp('^([a-zA-Z0-9._%+-]+)@([a-zA-Z0-9.-]+.[a-zA-Z]{2})$');
    const [state, dispatch] = useReducer(reducer, initData);
    const [notification, setNotification] = useState('');
    const [error, setError] = useState({
        firstName: false,
        lastName: false,
        email: false,
        imageUrl: false,
        rePass: false
    });

    const chnageHandler = (ev) => {
        const { name, value } = ev.target;
        dispatch({ type: 'SET_FIELD', field: name, value });
    }

    const submitHandler = (ev, userData, imageUrl) => {
        ev.preventDefault();

        if (!Object.values(error).some(x => x === true)) {
            if (userData.password.length < 8
                || !/[A-Z]/.test(userData.password)
                || !/[0-9]/.test(userData.password)
            ) {
                alert("Please enter a valid password!");
            } else {
                if (userData.password !== userData.rePass) {
                    window.alert("Invalid data provided!");
                } else {
                    userData.imageUrl = imageUrl;
                    try {
                        if (emailRegExp.test(userData.email)) {
                            service.registerUser(userData)
                                .then(result => {
                                    if (typeof result !== "string") {
                                        userLogin(result);
                                        navigate("/", { replace: true });
                                    } else {
                                        throw result;
                                    };
                                })
                                .catch(err => {
                                    setNotification(err);
                                });
                        };
                    } catch (err) {
                        alert(err.message);
                    };
                };
            }
        }
    };

    return (
        <>
            {notification && <Error message={notification} />}
            <section className={`${styles["register-page"]} ${resp["register-page"]}`}>
                <form
                    className={`${styles["register"]} ${resp["register"]}`}
                    onSubmit={(ev) => submitHandler(ev, state, image.dataURL)}
                >
                    <h1 className={styles["register-heading"]}>Register new users</h1>
                    <p className={styles["register-info"]}>
                        Hey, enter your details to get your new account.
                    </p>
                    <article className={styles["user-info"]}>
                        <h4>User Information</h4>
                        <label htmlFor="firstName">First Name:</label>
                        <div>
                            <input
                                style={error.firstName ? { border: '2px solid red' } : {}}
                                className={styles["email"]}
                                type="text"
                                id="firstName"
                                name="firstName"
                                placeholder="Enter your first name..."
                                value={state.firstName}
                                required
                                onChange={(ev) => chnageHandler(ev)}
                                onBlur={() => validations.minLength(3, state.firstName, "firstName", setError)}
                            />
                            {error.firstName &&
                                <p className={styles["form-error"]}>First name should be at least 3 characters long!</p>
                            }
                        </div>

                        <label htmlFor="lastName">Last Name:</label>
                        <div>
                            <input
                                style={error.lastName ? { border: '2px solid red' } : {}}
                                className={styles["email"]}
                                type="text"
                                id="lastName"
                                name="lastName"
                                placeholder="Enter your last name..."
                                value={state.lastName}
                                required
                                onChange={(ev) => chnageHandler(ev)}
                                onBlur={() => validations.minLength(3, state.lastName, "lastName", setError)}
                            />
                            {error.lastName &&
                                <p className={styles["form-error"]}>Last name should be at least 3 characters long!</p>
                            }
                        </div>

                        <label htmlFor="email">Email:</label>
                        <div>
                            <input
                                style={error.email ? { border: '2px solid red' } : {}}
                                className={styles["email"]}
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Enter your email..."
                                value={state.email}
                                required
                                onChange={(ev) => chnageHandler(ev)}
                            />
                            {error.email &&
                                <p className={styles["form-error"]}>Email is not valid!</p>
                            }
                        </div>

                        <label htmlFor="imageUrl">Image:</label>
                        <div>
                            <input
                                className={styles["email"]}
                                type="file"
                                id="imageUrl"
                                name="imageUrl"
                                value={state.image}
                                required
                                onChange={(ev) => setImage(ev)}
                            />
                        </div>

                        <label htmlFor="secret">Account Backup Word:</label>
                        <div>
                            <input

                                className={styles["email"]}
                                type="text"
                                id="secret"
                                name="secretWord"
                                placeholder="Secret word..."
                                value={state.secretWord}
                                onChange={(ev) => chnageHandler(ev)}
                                required
                            />
                        </div>

                        <label htmlFor="password">Password:</label>
                        <div>
                            <p
                                className={`
                                    ${styles["characters"]}
                                    ${state.password.length >= 8 ? styles["correct"] : styles["wrong"]}
                                `}
                            >
                                1. At least 8 characters long
                            </p>
                            <p
                                className={`
                                    ${styles["upper-case"]}
                                    ${/[A-Z]/.test(state.password) ? styles["correct"] : styles["wrong"]}
                                `}
                            >
                                2. At least 1 upper case character
                            </p>
                            <p
                                className={`
                                    ${styles["numeric"]}
                                    ${/[0-9]/.test(state.password) ? styles["correct"] : styles["wrong"]}
                                `}
                            >
                                3. At least 1 numeric character
                            </p>
                        </div>
                        <div className={styles["password-container"]}>
                            <input
                                className={styles["password"]}
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Enter password..."
                                value={state.password}
                                required
                                onChange={(ev) => chnageHandler(ev)}
                            />
                        </div>

                        <label htmlFor="confirm-password">Confirm Password:</label>
                        <div className={styles["password-container"]}>
                            <input
                                className={styles["password"]}
                                type="password"
                                id="confirm-password"
                                name="rePass"
                                placeholder="Confirm your password..."
                                value={state.rePass}
                                required
                                onChange={(ev) => chnageHandler(ev)}
                                onBlur={() =>
                                    validations.passwordsMatch(state.password, state.rePass, "rePass", setError)}
                            />
                            {error.rePass &&
                                <p className={styles["form-error"]}>Passwords do not match!</p>
                            }
                        </div>
                        <p>
                            Already registered? <Link to="/login" replace>Log in</Link>
                        </p>
                        <input className={styles["btn-register"]} type="submit" value={"Register"} />
                    </article>
                </form>
            </section>
        </>
    );
};

export default Register;