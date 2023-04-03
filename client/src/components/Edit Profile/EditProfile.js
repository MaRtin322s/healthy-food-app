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
                    <div>
                        <label htmlFor="firstName">First Name:</label>
                        <input type="text" id="firstName" />
                    </div>
                    <div>
                        <label htmlFor="lastName">Last Name:</label>
                        <input type="text" id="lastName" />
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input type="text" id="email" />
                    </div>
                    <div>
                        <label htmlFor="imageUrl">ImageUrl:</label>
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