import styles from "./styles/error.module.css";

const Error = () => {
    return (
        <div id={styles["notification-modal"]}>
            <div className={styles["modal-content"]}>
                <h2>Notification Title</h2>
                <p>Notification message goes here</p>
            </div>
        </div>
    );
}

export default Error;