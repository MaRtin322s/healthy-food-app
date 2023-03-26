import React from "react";
import styles from "./styles/spinner.module.css";

const Spinner = React.memo(() => {
    return (
        <div className={styles["loader"]}>Loading...</div>
    );
});

export default Spinner;