import styles from "./styles/delete.module.css";

const Delete = ({ closeHandler }) => {
    return (
        <>  
            <div className={styles["backdrop"]}></div>
            <div id={styles["delete-modal"]} class={styles["modal-container"]}>
                <h2>Delete Recipe</h2>
                <p>Are you sure you want to delete this recipe?</p>
                <button id={styles["delete-confirm"]}>Yes, delete it</button>
                <button id={styles["delete-cancel"]} onClick={() => closeHandler()}>Cancel</button>
            </div>
        </>
    );
}

export default Delete;