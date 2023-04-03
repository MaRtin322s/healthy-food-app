import styles from "./styles/editProfile.module.css";

const EditProfile = ({ 

}) => {
    return (
        <>  
            <div className={styles["backdrop"]}></div>
            <div id={styles["delete-modal"]} className={styles["modal-container"]}>
                <h2>Delete</h2>
                <p>Are you sure you want to delete this?</p>
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
}

export default EditProfile;