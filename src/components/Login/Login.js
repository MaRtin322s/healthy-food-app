import styles from "./styles/login.module.css";
import background from "./images/backgr.jpg";

const Login = () => {
    return (
        <>
            <img className={styles["background-img"]} src={background} alt="background" />
            <section className={styles["login-page"]}>
                <ul className={styles["info-list"]}>
                    <li>Login Information</li>
                    <li>
                        Enter your email and password in the appropriate fields on the login page.
                    </li>
                    <li>
                        If you've forgotten your password, click the "Forgot password" link and
                        follow the instructions to reset your password.
                    </li>
                    <li>
                        If you're having trouble logging in, double-check that you're entering the
                        correct email or username and password combination. Remember that
                        passwords are case-sensitive.
                    </li>
                    <li>
                        Do not share your login credentials with anyone. Keep your password secure
                        and change it regularly to help protect your account.
                    </li>
                </ul>
                <form className={styles["login"]}>
                    <h1 className={styles["login-heading"]}>Login for users</h1>
                    <p className={styles["login-info"]}>
                        Hey, enter your details to get sign in to your account.
                    </p>
                    <article className={styles["user-info"]}>
                        <h4>User Information</h4>
                        <label htmlFor="email">Email:</label>
                        <div>
                            <input
                                className={styles["email"]}
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Enter email..."
                                required=""
                            />
                        </div>
                        <label htmlFor="password">Password:</label>
                        <div className={styles["password-container"]}>
                            <input
                                className={styles["password"]}
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Enter password..."
                                required=""
                            />
                        </div>
                        <p>
                            Don't have an account? <a href="/">Sign Up</a>
                        </p>
                        <p>
                            Forgot your password? <a href="/">Click here</a>
                        </p>
                        <input className={styles["btn-login"]} type="submit" value={"Login"} />
                    </article>
                </form>
            </section>
        </>
    );
}

export default Login;