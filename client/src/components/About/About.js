import styles from "../Profile/styles/profile.module.css";

export const About = () => {
    return (
        <>
            <div className={styles["backdrop"]}></div>
            <div id={styles["delete-modal"]} className={styles["modal-container"]}>
                <h2>Delete account</h2>
                <p>Are you sure you want to delete this account?</p>
                <button
                    id={styles["delete-confirm"]}
                >
                    Yes, delete it
                </button>

                <button
                    id={styles["delete-cancel"]}
                >
                    Cancel
                </button>
            </div>
        </>
    );
};