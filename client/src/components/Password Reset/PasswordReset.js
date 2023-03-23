import { useCallback, useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";

import * as service from "../../services/userServices";

import { initData, reducer } from "./data/data";
import styles from "./styles/password.module.css";
import background from "./images/backgr.jpg";

const PasswordReset = () => {
    const [state, dispatch] = useReducer(reducer, initData);
    const navigate = useNavigate();
    const [user, setUser] = useState({});

    const changeHandler = useCallback((ev) => {
        const { name, value } = ev.target;
        dispatch({ type: 'SET_FIELD', field: name, value });
    }, []);

    const passwordData = { password: state.password, rePass: state.rePass, userId: user._id };

    const submitHandler = (ev, data) => {
        ev.preventDefault();

        if (state.email !== "") {
            service.testForEmail({ email: state.email })
                .then(result => {
                    if (result.message) {
                        throw result
                    } else {
                        setUser(result);
                    }
                })
                .catch(err => alert(err.message));
        };

        if (user._id) {
            service.resetPassword(passwordData)
                .then(result => {
                    alert(`${result.message} Please log in to your account.`);
                    navigate("/login", { replace: true });
                });
        };
    };

    return (
        <>
            <img className={styles["background-img"]} src={background} alt="background" />
            <section className={styles["login-page"]}>
                <ul className={styles["info-list"]}>
                    <li>Password Reset Information</li>
                    <li>
                        Go to the login page for the website or application where you need to reset your password.
                    </li>
                    <li>
                        Click on the "Forgot Password" or "Reset Password" link.
                    </li>
                    <li>
                        Follow the instructions to reset your password.
                        This may involve entering a new password or verification code,
                        or answering security questions.
                    </li>
                    <li>
                        Choose a new password that is strong and unique,
                        and ensure that you remember it or store it in a secure location.
                    </li>
                    <li>
                        Log in with your new password and verify that you can access your account.
                    </li>
                </ul>
                <form
                    className={styles["login"]}
                    onSubmit={(ev) => submitHandler(ev, state)}
                >
                    <h1 className={styles["login-heading"]}>Reset your password</h1>
                    <p className={styles["login-info"]}>
                        Hey, create your new password and log in to your account again.
                    </p>
                    <article className={styles["user-info"]}>
                        <h4>New Password Information</h4>
                        <label htmlFor="email">Email:</label>
                        <div>
                            <input
                                className={styles["email"]}
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Enter your email..."
                                required
                                value={state.email}
                                onChange={(ev) => changeHandler(ev)}
                            />
                        </div>
                        {user._id
                            ?
                            <>
                                <label htmlFor="email">New Password:</label>
                                <div>
                                    <input
                                        className={styles["email"]}
                                        type="password"
                                        id="password"
                                        name="password"
                                        placeholder="Enter your new password..."
                                        required
                                        value={state.password}
                                        onChange={(ev) => changeHandler(ev)}
                                    />
                                </div>
                                <label htmlFor="rePass">Confirm New Password:</label>
                                <div className={styles["password-container"]}>
                                    <input
                                        className={styles["password"]}
                                        type="password"
                                        id="rePass"
                                        name="rePass"
                                        placeholder="Confirm your new password..."
                                        required
                                        value={state.rePass}
                                        onChange={(ev) => changeHandler(ev)}
                                    />
                                </div>
                            </>
                            : null
                        }
                        <input
                            className={styles["btn-login"]}
                            type="submit"
                            value={user._id ? "Reset Password" : "Find user"}
                        />
                    </article>
                </form>
            </section>
        </>
    );
};

export default PasswordReset;