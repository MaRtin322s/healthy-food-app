import styles from "./styles/error.module.css";
import resp from './styles/error.responsive.module.css';

const Error = ({ message }) => {
    return (
        <div id={`${styles["notification-modal"]} ${resp["notification-modal"]}`}>
            <div className={`${styles["modal-content"]} ${resp["modal-content"]}`}>
                <h2>Notification</h2>
                <p>{message}</p>
            </div>
        </div>
    );
};

export default Error;