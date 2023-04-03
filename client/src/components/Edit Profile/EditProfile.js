import styles from "./styles/editProfile.module.css";

const EditProfile = ({
    closeEditModal
}) => {
    return (
        <>
            <div className={styles["backdrop"]} onClick={() => closeEditModal()}></div>
            <div id={styles["delete-modal"]} className={styles["modal-container"]}>
                <form>
                    <h2>Edit profile:</h2>
                    <label htmlFor="firstName">First Name:</label>
                    <div>
                        <input type="text" id="firstName" />
                    </div>
                    <label htmlFor="lastName">Last Name:</label>
                    <div>
                        <input type="text" id="lastName" />
                    </div>
                    <label htmlFor="email">Email:</label>
                    <div>
                        <input type="text" id="email" />
                    </div>
                    <label htmlFor="imageUrl">ImageUrl:</label>
                    <div>
                        <input type="text" id="imageUrl" />
                    </div>
                </form>
                <button
                    id={styles["delete-confirm"]}
                >
                    Edit profile
                </button>

                <button
                    id={styles["delete-cancel"]}
                    onClick={() => closeEditModal()}
                >
                    Cancel
                </button>
            </div>
        </>
    );
}

export default EditProfile;