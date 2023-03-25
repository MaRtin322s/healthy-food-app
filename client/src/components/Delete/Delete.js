import styles from "./styles/delete.module.css";

const Delete = ({ closeHandler, title, type }) => {
    return (
        <>  
            <div className={styles["backdrop"]}></div>
            <div id={styles["delete-modal"]} class={styles["modal-container"]}>
                <h2>Delete {title}</h2>
                <p>Are you sure you want to delete this {type}?</p>
                <button id={styles["delete-confirm"]}>Yes, delete it</button>
                <button id={styles["delete-cancel"]} onClick={() => closeHandler()}>Cancel</button>
            </div>
        </>
    );
}

export default Delete;