import { useCallback, useState } from "react";
import styles from "./styles/editProfile.module.css";
import * as service from "../../services/userServices";
import { useNavigate } from "react-router-dom";

const EditProfile = ({
    closeEditModal,
    firstName,
    lastName,
    email,
    imageUrl,
    _id,
    submitHandler
}) => {
    const navigate = useNavigate();
    const [values, setValues] = useState({
        firstName: firstName,
        lastName: lastName,
        email: email,
        imageUrl: imageUrl
    });

    const changeHandler = useCallback((ev) => {
        setValues(state => ({
            ...state,
            [ev.target.name]: ev.target.value
        }));
    }, []);

    return (
        <>
            <div className={styles["backdrop"]} onClick={() => closeEditModal()}></div>
            <div id={styles["delete-modal"]} className={styles["modal-container"]}>
                <form onSubmit={(ev) => submitHandler(ev, values, _id)}>
                    <h2>Edit profile:</h2>
                    <label htmlFor="firstName">First Name:</label>
                    <div>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={values.firstName}
                            onChange={(ev) => changeHandler(ev)}
                        />
                    </div>
                    <label htmlFor="lastName">Last Name:</label>
                    <div>
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={values.lastName}
                            onChange={(ev) => changeHandler(ev)}
                        />
                    </div>
                    <label htmlFor="email">Email:</label>
                    <div>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={values.email}
                            onChange={(ev) => changeHandler(ev)}
                        />
                    </div>
                    <label htmlFor="imageUrl">ImageUrl:</label>
                    <div>
                        <input
                            type="text"
                            id="imageUrl"
                            name="imageUrl"
                            value={values.imageUrl}
                            onChange={(ev) => changeHandler(ev)}
                        />
                    </div>
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
                </form>
            </div>
        </>
    );
}

export default EditProfile;