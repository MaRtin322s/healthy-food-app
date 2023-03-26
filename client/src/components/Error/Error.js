import React from 'react';
import styles from "./styles/error.module.css";

const Error = React.memo(({ message }) => {
    return (
        <div id={styles["notification-modal"]}>
            <div className={styles["modal-content"]}>
                <h2>Notification</h2>
                <p>{message}</p>
            </div>
        </div>
    );
});

export default Error;