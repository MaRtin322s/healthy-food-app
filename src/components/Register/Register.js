import styles from "./styles/register.module.css";
import background from "./images/backgr.jpg"

const Register = () => {
    return (
        <>
            <img className={styles["register-background-img"]} src={background} alt="background" />
            <section className={styles["register-page"]}>
                <ul className={styles["info-list"]}>
                    <li>Register users information</li>
                    <li>
                        Fill in the registration form with your personal details,
                        such as your name, email address, and a chosen password.
                    </li>
                    <li>
                        Verify your email address, if required. Some websites/apps will send you a
                        verification email to confirm your registration. Click on the link provided in
                        the email to verify your email address.
                    </li>
                    <li>
                        Click on the "Submit" or "Register" button to complete the registration process.
                    </li>
                    <li>
                        Start using the website/app! Once you have completed the registration process, 
                        you should be able to log in and start using the features of the website/app.
                    </li>
                </ul>
                <form className={styles["register"]}>
                    <h1 className={styles["register-heading"]}>Register new users</h1>
                    <p className={styles["register-info"]}>
                        Hey, enter your details to get your new account.
                    </p>
                    <article className={styles["user-info"]}>
                        <h4>User Information</h4>
                        <label htmlFor="firstName">First Name:</label>
                        <div>
                            <input
                                className={styles["email"]}
                                type="text"
                                id="firstName"
                                name="firstName"
                                placeholder="Enter your first name..."
                                required
                            />
                        </div>

                        <label htmlFor="lastName">Last Name:</label>
                        <div>
                            <input
                                className={styles["email"]}
                                type="text"
                                id="lastName"
                                name="lastName"
                                placeholder="Enter your last name..."
                                required
                            />
                        </div>

                        <label htmlFor="email">Email:</label>
                        <div>
                            <input
                                className={styles["email"]}
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Enter your email..."
                                required
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
                                required
                            />
                        </div>

                        <label htmlFor="confirm-password">Confirm Password:</label>
                        <div className={styles["password-container"]}>
                            <input
                                className={styles["password"]}
                                type="password"
                                id="confirm-password"
                                name="confirm-password"
                                placeholder="Confirm your password..."
                                required
                            />
                        </div>
                        <p>
                            Already registered? <a href="/">Log in</a>
                        </p>
                        <input className={styles["btn-register"]} type="submit" value={"Register"} />
                    </article>
                </form>
            </section>
        </>
    );
}

export default Register;