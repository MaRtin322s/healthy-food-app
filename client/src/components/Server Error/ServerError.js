import { memo } from "react";
import { Link } from "react-router-dom";

import styles from "./styles/notFound.module.css";
import oops from "./images/oops.png";
import background from "./images/backgr.jpg";

const ServerError = memo(() => {
    return (
        <>
            <img className={styles["background-img"]} src={background} alt="backg" />
            <img className={styles["error-img"]} src={oops} alt="oops" />
            <h1 className={styles["error-heading"]}>500 Internal Server Error</h1>
            <p className={styles["error-info"]}>
                An unexpected error occurred while processing your request. We apologize for
                any inconvenience this may have caused. In the meantime, you can try refreshing 
                the page or coming back later.
                Thank you for your patience.
            </p>
            <div className={styles["link-container"]}>
                <Link className={styles["error-link"]} to="/">GO TO HOMEPAGE</Link>
            </div>
        </>
    );
});

export default ServerError;