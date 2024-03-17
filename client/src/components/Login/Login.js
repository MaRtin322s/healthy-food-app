import { memo, useCallback, useContext, useReducer, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { AuthContext } from "../../contexts/UserContext";
import * as service from "../../services/userServices";
import { initData, reducer } from "./data/data";

import Error from "../Error/Error";
import styles from "./styles/login.module.css";
import resp from "./styles/responsive.module.css";

const Login = memo(() => {
    const { userLogin } = useContext(AuthContext);
    const navigate = useNavigate();
    const [state, dispatch] = useReducer(reducer, initData);
    const [show, setShow] = useState(false);
    const [showComponent, setShowComponent] = useState({
        title: "",
        show: false
    });

    const changeHandler = useCallback((ev) => {
        const { name, value } = ev.target;
        dispatch({ type: 'SET_FIELD', field: name, value });
    }, []);

    const showPasswordHandler = () => setShow(!show);

    const submitHandler = (ev, userData) => {
        ev.preventDefault();

        if (userData.email === "" || userData.password === "") {
            window.alert("All fields are required!");
        } else {
            service.loginUser(userData)
                .then(result => {
                    if (result.message) {
                        throw result.message;
                    } else {
                        userLogin(result);
                        navigate("/", { replace: true });
                    }
                })
                .catch((error) => {
                    setShowComponent(() => ({
                        title: error,
                        show: true
                    }));
                    setTimeout(() => {
                        setShowComponent(() => ({
                            title: "",
                            show: false
                        }));
                    }, [3000]);
                });
        };
    };

    return (
        <>
            {showComponent.show &&
                <Error message={showComponent.title} />
            }
            <section className={`${styles["login-page"]} ${resp["login-page"]}`}>
                <form
                    className={`${styles["login"]} ${resp["login"]}`}
                    onSubmit={(ev) => submitHandler(ev, state)}
                >
                    <h1 className={`${styles["login-heading"]} ${resp["login-heading"]}`}>Login for users</h1>
                    <p className={`${styles["login-info"]} ${resp["login-info"]}`}>
                        Hey, enter your details to get sign in to your account.
                    </p>
                    <article className={`${styles["user-info"]} ${resp["user-info"]}`}>
                        <h4>User Information</h4>
                        <label htmlFor="email">Email:</label>
                        <div>
                            <input
                                className={`${styles["email"]} ${resp["email"]}`}
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Enter email..."
                                required
                                value={state.email}
                                onChange={(ev) => changeHandler(ev)}
                                autoComplete="email"

                            />
                        </div>
                        <label htmlFor="password">Password:</label>
                        <div className={`${styles["password-container"]} ${resp["password-container"]}`}>
                            <input
                                className={`${styles["password"]} ${resp["password"]}`}
                                type={show ? 'text' : 'password'}
                                id="password"
                                name="password"
                                placeholder="Enter password..."
                                required
                                value={state.password}
                                onChange={(ev) => changeHandler(ev)}
                                autoComplete="current-password"
                            />
                            <input
                                type="checkbox"
                                name="show"
                                id="show"
                                checked={show}
                                onChange={() => showPasswordHandler()}
                                autoComplete="show"
                            />
                            <span>Show password</span>
                            {/* <i className={`${styles["eye-password"]} fas fa-eye`}></i> */}
                        </div>
                        <p>
                            Don't have an account? <Link to="/register" replace>Sign Up</Link>
                        </p>
                        <p>
                            Forgot your password? <Link to="/password-reset" replace>Click here</Link>
                        </p>
                        <input
                            className={`
                                ${styles["btn-login"]} 
                                ${resp["btn-login"]}`
                            } type="submit"
                            value={"Login"} />
                    </article>
                </form>
            </section>
        </>
    );
});

export default Login;